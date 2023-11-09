import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../lib/db';
import withHandler from '../../../../lib/withHandler';
import { withApiSession } from '../../../../lib/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;
  const tweet = await db.tweet.findUnique({
    where: {
      id: +id!,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  const isLiked = Boolean(
    await db.like.findFirst({
      where: {
        tweetId: tweet?.id,
        userId: user?.id,
      },
    })
  );
  res.json({ status: 'success', tweet, isLiked });
}

export default withApiSession(
  withHandler({
    methods: ['GET'],
    handler,
  })
);
