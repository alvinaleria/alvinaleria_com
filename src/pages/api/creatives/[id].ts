import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id);
  
  if (req.method === 'GET') {
    const campaign = await prisma.creatives.findUnique({ where: { id } });
    res.status(200).json(campaign);
  } else if (req.method === 'PUT') {
    const { id, name, width, height, file, backup, campaignId } = req.body;
    const updated = await prisma.creatives.update({
      where: { id: Number(id) },
      data: { name : name, width : Number(width), height : Number(height), preview: "temp", file : file, backup : backup, campaignId : campaignId  },
    });
    res.status(200).json(updated);
  } else if (req.method === 'DELETE') {
    await prisma.creatives.delete({ where: { id: Number(id) } });
    res.status(200).json({ id }); 
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
