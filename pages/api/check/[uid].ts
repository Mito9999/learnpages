import type {
  NextApiRequest as NextReq,
  NextApiResponse as NextRes,
} from "next";
import { getPage } from "@utils/index";

export default async function handler(req: NextReq, res: NextRes) {
  try {
    const { uid }: any = req.query;
    const notionRes: any = await getPage(uid);

    res.json({ isTaken: notionRes.results.length > 0 });
  } catch {
    res.status(500).json({ isTaken: true });
  }
}
