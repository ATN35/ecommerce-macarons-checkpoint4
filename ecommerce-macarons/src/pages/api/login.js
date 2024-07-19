import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import prisma from '../../lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email et mot de passe sont requis." });
    }

    try {
      // Rechercher l'utilisateur
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé." });
      }

      // Vérifier le mot de passe
      const valid = await argon2.verify(user.password, password);
      if (!valid) {
        return res.status(401).json({ error: "Mot de passe incorrect." });
      }

      // Générer un token JWT
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: "1h",
      });

      res.status(200).json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erreur lors de la connexion." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Méthode ${req.method} non autorisée.`);
  }
}
