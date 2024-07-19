import { getSession } from 'next-auth/react'; 
import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const session = await getSession({ req });
    if (!session) {
      return res.status(401).json({ error: 'Non autorisé' });
    }

    try {
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const cartItems = await prisma.cart.findMany({
        where: { userId: user.id },
        include: { product: true },
      });

      res.status(200).json(cartItems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Une erreur est survenue' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
