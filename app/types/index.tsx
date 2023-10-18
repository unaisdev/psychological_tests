export type Category = {
  id: number;
  name: string;
  desc: string;
  color: string;
};

export type AnswerScale = {
  'Totalmente de acuerdo'?: number;
  'Bastante de acuerdo'?: number;
  'Ni de acuerdo ni en desacuerdo'?: number;
  'Poco de acuerdo'?: number;
  'Nada de acuerdo'?: number;
  'Sí, siempre'?: number;
  'Con frecuencia, sí'?: number;
  'Rara vez, no'?: number;
  'Nunca lo hago'?: number;
  'Todos los días'?: number;
  'A menudo'?: number;
  'A veces, sí'?: number;
  'Muy rara vez'?: number;
  'En ningún momento'?: number;
};

export const answerScaleValues = {
  'Totalmente de acuerdo': 1,
  'Bastante de acuerdo': 2,
  'Ni de acuerdo ni en desacuerdo': 3,
  'Poco de acuerdo': 4,
  'Nada de acuerdo': 5,
  'Sí, siempre': 6,
  'Con frecuencia, sí': 7,
  'Rara vez, no': 8,
  'Nunca lo hago': 9,
  'Todos los días': 10,
  'A menudo': 11,
  'A veces, sí': 12,
  'Muy rara vez': 13,
  'En ningún momento': 14,
};

export type Test = {
  id: number;
  title: string;
  category: string;
  desc: string;
  litle_desc: string;
  questions: string[];
  answers: AnswerScale;
  results: Record<string, string>;
};

export type DataAPI = {
  categories: Category[];
  tests: Test[];
};
