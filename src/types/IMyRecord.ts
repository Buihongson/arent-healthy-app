type IExercise = {
  name: string;
  kcal: string;
  time: string;
};

type IDiary = {
  content: string;
  createdAt: string;
};

type IRecordBadge = {
  name: string;
  desc: string;
  image: string;
  type: string;
};

export type { IExercise, IDiary, IRecordBadge };
