type IRecommended = {
  name: string;
  desc: string;
};

type INews = {
  image: string;
  createdAt: string;
  desc: string;
  tags: string[];
};

export type { IRecommended, INews };
