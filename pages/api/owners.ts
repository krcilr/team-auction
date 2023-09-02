import { NextApiRequest, NextApiResponse } from 'next'
import { getOwners } from '../../utils/supabase-client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { data, error } = await getOwners();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
