export enum competitionId {
  VAR_TOUR = "e955edeb-eefc-4be9-8116-2e99680840f2",
  NITTY_GRITTY = "57a04cea-7e2e-492a-9b22-1a10a045d5f2",
  HOSTLOVET = "7e1741f3-8869-4059-bb17-5f714a6acefb",
  FORSOMMAR_OPEN = "ea0e31ce-032c-4187-8128-d8fc29df68f6",
  PER_AKE = "a3b73fa1-2c58-44d2-b673-01dbc6ee0bdb",
  GRUNDSPEL = "f0bfa974-84df-4ccd-ae48-a7d55b546e99",
}

export type SlugParams = {
  params: {
    slug: string;
  };
};

export type SanitySlug = {
  current: string;
};

export type SanityImage = {
  asset: {
    _ref: string;
  };
};

export type BaseSchema = {
  _createdAt: string;
  _id: string;
  _updatedAt: string;
};

export interface Player extends BaseSchema {
  board_member: boolean;
  image: SanityImage;
  name: string;
  slug: SanitySlug;
}
export interface Competition extends BaseSchema {
  name: string;
  slug: SanitySlug;
  image: SanityImage;
  description: any;
}

export type Winners = {
  competition: {
    _ref: string;
  };
  winner: {
    _ref: string;
  };
};

export interface Year extends BaseSchema {
  images: SanityImage[];
  location: string;
  slug: SanitySlug;
  winners: Winners[];
}

export interface GalleryType extends BaseSchema {
  gallery_name: string;
  images: SanityImage[];
}
