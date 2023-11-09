import { NextApiRequest, NextApiResponse } from 'next';
import withHandler from '../../../lib/withHandler';
import db from '../../../lib/db';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email } = req.body;
  // user = await db.user.findUnique({
  //   where: {
  //     email,
  //   },
  // });
  // if (!user) {
  //   console.log('Did not find. Will create');
  //   user = await db.user.create({
  //     data: {
  //       name,
  //       email,
  //     },
  //   });
  // }
  // console.log(user);
  const user = await db.user.upsert({
    where: {
      email,
    },
    create: {
      name,
      email,
    },
    update: {},
  });
  console.log(user);
  return res.status(200).end();
}

export default withHandler('POST', handler);
