import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../lib/db';
import withHandler from '../../../lib/withHandler';
import { withApiSession } from '../../../lib/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const tweets = await db.tweet.findMany({
      include: {
        user: true,
        _count: {
          select: {
            likes: true,
          },
        },
      },
    });
    res.json({
      status: 'success',
      tweets,
    });
  }
  if (req.method === 'POST') {
    const {
      body: { message },
      session: { user },
    } = req;
    const tweet = await db.tweet.create({
      data: {
        message,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({
      status: 'success',
      tweet,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ['GET', 'POST'],
    handler,
  })
);
