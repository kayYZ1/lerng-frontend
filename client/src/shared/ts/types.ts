import { QuestionType } from 'shared/enum';

export type UserSignUp = {
  email: string;
  password: string;
  username: string;
};

export type UserSignIn = {
  email: string;
  password: string;
};

export type RouteChild = {
  children: JSX.Element;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  created: Date;
};

export type Topic = {
  id: string;
  title: string;
  description: string;
};

export type Progress = {
  id: string;
  title: string;
  progress: number;
  quizScore: number;
};

export type Content = {
  id: string;
  title: string;
  description: string;
  paragraph500: string;
  paragraph750: string;
  paragraph300: string;
  imageUrl?: string;
  videoUrl?: string;
};

export type Question = {
  id: string;
  question: string;
  type: QuestionType;
  answer: string;
};

export type UpdateUser = {
  username: string;
  email: string;
};

export type UserData = {
  id: string;
  email: string;
  username: string;
  avatar: string;
  role: string;
};

export type IsInstructor = {
  instructor: boolean;
};
