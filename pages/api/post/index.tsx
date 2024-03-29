import prisma from '../../../lib/prisma';
import { authOptions } from '../../api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content } = req.body;

  const session = await getServerSession(req, res, authOptions);
  if (session) {
    console.log(session);
  } else {
    res.status(401);
    res.end();
    return;
  }
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}
