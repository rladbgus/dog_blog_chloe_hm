export type DogListQuery = {
  breed_ids?: string;
  mime_types?: string;
  order?: string;
};

export type LikeQuery = {
  sub_id: string;
};

export type BookmarkQuery = {
  sub_id: string;
};
