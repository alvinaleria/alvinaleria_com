import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { formidable } from 'formidable';
import fs from 'fs';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false, // Required for formidable
  },
};

const parseForm = (req: NextApiRequest): Promise<{ fields: any; files: any }> => {
  const form = formidable({ uploadDir: './public/projects', keepExtensions: true, multiples: false });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const creative = await prisma.creatives.findMany();
      const total = await prisma.creatives.count();
      res.setHeader('X-Total-Count', total);
      res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');

      res.status(200).json(creative);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  } else if (req.method === 'POST') {
    const { fields, files } = await parseForm(req);

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    const backup = Array.isArray(files.backup) ? files.backup[0] : files.backup;

    const creative = await prisma.creatives.create({
      data: {
        name: Array.isArray(fields.name) ? fields.name[0] : fields.name,
        width: parseInt(Array.isArray(fields.width) ? fields.width[0] : fields.width),
        height: parseInt(Array.isArray(fields.height) ? fields.height[0] : fields.height),
        file: `/uploads/${file?.originalFilename ?? ''}`,
        backup: `/uploads/${backup?.originalFilename ?? ''}`,
        campaignId: parseInt(Array.isArray(fields.campaignId) ? fields.campaignId[0] : fields.campaignId)
        }
    });
    
    res.status(201).json(creative);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
