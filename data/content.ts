import { client } from "../pages";

export const getOngoingContent = async () => {
  const content = await client.fetch(
    `*[_type == "content" && _id == "4b198228-b472-4004-984d-7cc67a82d68f"][0]`
  );
  return content;
};
