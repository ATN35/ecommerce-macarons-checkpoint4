import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const session = await getSession({ req });

    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { productId, quantity } = req.body;

    try {
      const user = await prisma.user.findUnique({ where: { email: session.user.email } });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const existingCartItem = await prisma.cart.findFirst({
        where: { userId: user.id, productId },
      });

      if (existingCartItem) {
        await prisma.cart.update({
          where: { id: existingCartItem.id },
          data: { quantity: existingCartItem.quantity + quantity },
        });
      } else {
        await prisma.cart.create({
          data: {
            userId: user.id,
            productId,
            quantity,
          },
        });
      }

      res.status(200).json({ message: 'Product added to cart' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
