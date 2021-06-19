import type {
  NextApiRequest as NextReq,
  NextApiResponse as NextRes,
} from "next";
import { listPages } from "../../utils";

type Data = {
  title: string;
  uid: string;
  image: string;
  tags: string[];
  cost: number;
  hours: number;
  dateCreated: string;
  dateEdited: string;
};

export default async function handler(req: NextReq, res: NextRes<Data[]>) {
  try {
    const notionRes: any = await listPages();
    const allResults = notionRes.results.map((result: any) => {
      const {
        Title: title,
        uid: uID,
        "Cover Image": image,
        Tags: tags,
        Cost: cost,
        Hours: hours,
        "Created on": createdOn,
        "Edited on": editedOn,
      } = result.properties;

      const formattedResult = {
        title: title.title[0].text.content || "",
        uid: uID.rich_text[0].plain_text || "",
        image: image.url || "",
        tags: tags.multi_select.map((tag: any) => tag.name) || [],
        cost: cost.number || 0,
        hours: hours.number || 0,
        dateCreated: createdOn.created_time || "",
        dateEdited: editedOn.last_edited_time || "",
      };

      return formattedResult;
    });

    res.json(allResults);
  } catch {
    res.status(500).json([]);
  }
}
