export type BaseSchema = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Player extends BaseSchema {
  board_member: boolean;
  image: any;
  name: string;
  slug: string;
}

export type SlugParams = {
  params: {
    slug: string;
  };
};
