import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const campaigns = await prisma.campaigns.findMany();
      const total = await prisma.campaigns.count();

      res.setHeader('X-Total-Count', total);
      res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');

      res.status(200).json(campaigns);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  } else if (req.method === 'POST') {
    const { name, desc, zip, zsize } = req.body;
    const campaign = await prisma.campaigns.create({ data: { name : name, desc : desc, zip : zip, zsize : Number(zsize) } });
    res.status(201).json(campaign);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
