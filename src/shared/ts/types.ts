import { QuestionType, Categories } from 'shared/enum';

export type UserSignUp = {
  email: string;
  password: string;
  username: string;
};

export type UserLandingPage = {
  id: string;
  imageUrl: string;
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
  categories: Categories[];
  imageUrl: string;
  created: Date;
};

export type EnrolledCourses = {
  id: string;
  course: Course;
};

export type Topic = {
  id: string;
  title: string;
  description: string;
};

export type Progress = {
  id: string;
  title: string;
  scorePercentage: number;
  quizScore: number;
};

export type Content = {
  id: string;
  title: string;
  description: string;
  paragraph150: string;
  paragraph300: string;
  videoUrl: string;
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

export type FeedbackTicket = {
  id: string;
  ticket_id: string;
  problem: string;
  status: string;
  details: string;
  created: Date;
  updated: Date;
  feedbackMessage: string | null;
  course: {
    title: string;
  };
};
