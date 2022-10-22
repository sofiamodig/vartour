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
