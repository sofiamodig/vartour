import { client } from "../pages";

export const getOngoingContent = async () => {
  const content = await client.fetch(
    `*[_type == "ongoing" && _id == "decd853d-fed5-45eb-9606-ced53cdb56b3"][0]`
  );
  return content;
};
