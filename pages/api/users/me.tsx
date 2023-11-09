import { NextApiRequest, NextApiResponse } from 'next';
import { withApiSession } from '../../../lib/withSession';
import db from '../../../lib/db';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  console.log(req.session.user);
  const profile = await db.user.findUnique({
    where: { id: req.session.user?.id },
  });
  console.log(profile);
  res.status(200).end();
}

export default withApiSession(handler);
