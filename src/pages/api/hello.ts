// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	name: string;
};

// /api/helloで呼ばれた時のzz挙動を実装する
export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	// ステータス200で{"name":"John Doe"}を返す
	res.status(200).json({ name: 'John Doe' });
}
