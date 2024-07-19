import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import prisma from '../../lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Assurez-vous que cette clé est sécurisée

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, preference } = req.body;

    try {
      // Hachage du mot de passe
      const hashedPassword = await argon2.hash(password);

      // Création de l'utilisateur
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          preference, // Assurez-vous que `preference` est un champ valide dans le modèle
        },
      });

      // Génération du token JWT
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.status(201).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
