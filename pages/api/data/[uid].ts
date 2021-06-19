import type {
  NextApiRequest as NextReq,
  NextApiResponse as NextRes,
} from "next";
import { getPage } from "../../../utils";

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

export default async function handler(req: NextReq, res: NextRes<Data>) {
  try {
    const { uid }: any = req.query;
    const notionRes: any = await getPage(uid);

    const {
      Title: title,
      uid: uID,
      "Cover Image": image,
      Tags: tags,
      Cost: cost,
      Hours: hours,
      "Created on": createdOn,
      "Edited on": editedOn,
    } = notionRes.results[0].properties;

    res.json({
      title: title.title[0].text.content,
      uid: uID.rich_text[0].plain_text,
      image: image.url,
      tags: tags.multi_select.map((tag: any) => tag.name),
      cost: cost.number,
      hours: hours.number,
      dateCreated: createdOn.created_time,
      dateEdited: editedOn.last_edited_time,
    });
  } catch {
    res.status(500).json({
      title: "",
      uid: "",
      image: "",
      tags: [],
      cost: 0,
      hours: 0,
      dateCreated: "",
      dateEdited: "",
    });
  }
}
