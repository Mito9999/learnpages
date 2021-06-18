import type {
  NextApiRequest as NextReq,
  NextApiResponse as NextRes,
} from "next";

type Data = {
  uids: string[];
};

export default function handler(req: NextReq, res: NextRes<Data>) {
  // Fetch UIDs from Notion
  res.status(200).json({ uids: ["vscode", "cars"] });
}
