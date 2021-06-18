import type {
  NextApiRequest as NextReq,
  NextApiResponse as NextRes,
} from "next";

type Data = {
  title: string;
  uid: string;
  image: string;
  tags: string[];
  cost: number;
  hours: number;
  dateCreated: number;
  dateEdited: number;
};

export default function handler(req: NextReq, res: NextRes<Data>) {
  // Fetch UIDs from Notion
  const { uid } = req.query;
  console.log(uid);

  res.status(200).json({
    title: "Learn VSCode Shortcuts",
    uid: "vscode",
    image: "https://code.visualstudio.com/opengraphimg/opengraph-home.png",
    tags: ["Productivity", "VSCode", "Coding"],
    cost: 0,
    hours: 2,
    dateCreated: 1623967980000,
    dateEdited: 1623969240000,
  });
}
