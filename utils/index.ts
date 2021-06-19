// Misc.
export const serverUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://learnpages.vercel.app";

// Notion
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const TABLE_PROPERTIES = {
  title: "title",
  uid: "nfiW",
  image: "G@\\C",
  tags: "y~tD",
  cost: "|[C{",
  hours: "Qj}y",
  dateCreated: "PzzX",
  dateEdited: "ZdqD",
};

export const getPage = async (pageUID: string) => {
  const { NOTION_DATABASE_ID } = process.env;
  if (!NOTION_DATABASE_ID) return {};

  const res = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    filter: {
      property: TABLE_PROPERTIES.uid,
      text: {
        equals: pageUID.toLowerCase(),
      },
    },
  });

  console.log(res);
  return res;
};
