import type {
  NextApiRequest as NextReq,
  NextApiResponse as NextRes,
} from "next";
import { createPage, allLengthsGreaterThanZero, serverUrl } from "@utils/index";

export default async function handler(req: NextReq, res: NextRes) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed." });
    return;
  }

  try {
    const { title, uid, image, tags, cost, hours } = req.body;

    const uidCheckRes = await fetch(serverUrl + "/api/check/" + uid);
    const { isTaken } = await uidCheckRes.json();

    if (isTaken) {
      res.status(403).json({ message: "ID already in use." });
      return;
    }

    if (allLengthsGreaterThanZero([title, uid, image, ...tags])) {
      const notionRes: any = await createPage({
        title,
        uid,
        image,
        tags,
        cost,
        hours,
      });
      res.json(notionRes);
    } else {
      res.status(400).json({ message: "Please provide valid data" });
    }
  } catch {
    res.status(500).json({ message: "An unknown error has occured." });
  }
}
