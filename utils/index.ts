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

type CreatePageData = {
  title: string;
  uid: string;
  image: string;
  tags: string[];
  cost: number;
  hours: number;
};

export const createPage = async ({
  title,
  uid,
  image,
  tags,
  cost,
  hours,
}: CreatePageData) => {
  if (!NOTION_DATABASE_ID) return {};

  const res = await notion.pages.create({
    parent: { database_id: NOTION_DATABASE_ID },
    // @ts-ignore
    properties: {
      [TABLE_PROPERTIES.title]: {
        title: [{ type: "text", text: { content: title } }],
      },
      [TABLE_PROPERTIES.uid]: {
        rich_text: [{ type: "text", text: { content: uid } }],
      },
      [TABLE_PROPERTIES.image]: { url: image },
      [TABLE_PROPERTIES.tags]: {
        multi_select: tags.map((tag) => ({
          name: tag,
        })),
      },
      [TABLE_PROPERTIES.cost]: {
        number: cost,
      },
      [TABLE_PROPERTIES.hours]: {
        number: hours,
      },
    },
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

export const allLengthsGreaterThanZero = (strings: string[]) => {
  return strings.every((text) => text.length > 0);
};
