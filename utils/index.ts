import { Client } from "@notionhq/client";

/*
    Notion 
*/

const { NOTION_DATABASE_ID, NOTION_API_KEY } = process.env;
const notion = new Client({ auth: NOTION_API_KEY });

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

  return res;
};

export const listPages = async () => {
  if (!NOTION_DATABASE_ID) return {};

  const res = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
  });

  return res;
};

/* 
    Misc. 
*/

export const isDev = process.env.NODE_ENV !== "production";
export const serverUrl = isDev
  ? "http://localhost:3000"
  : "https://learnpages.vercel.app";
