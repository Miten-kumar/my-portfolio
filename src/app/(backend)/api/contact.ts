// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import Contact from '../../../../models/Contact';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const contact = new Contact(req.body);
      await contact.save();
      res.status(200).json({ message: 'Contact submitted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while saving the contact.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
