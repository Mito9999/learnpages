import type {
  NextApiRequest as NextReq,
  NextApiResponse as NextRes,
} from "next";
import { createPage } from "@utils/index";

export default async function handler(req: NextReq, res: NextRes) {
  try {
    const notionRes: any = await createPage({
      title: "Sent from Postman",
      uid: "create-page",
      image:
        "https://mms.businesswire.com/media/20210128005321/en/761650/22/postman-logo-vert-2018.jpg",
      tags: ["Productivity", "Test"],
      cost: 17,
      hours: 71,
    });

    res.json(notionRes);
  } catch {
    res.status(500).json({});
  }
}
