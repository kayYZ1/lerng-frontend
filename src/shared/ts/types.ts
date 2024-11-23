import { Categories, QuestionType } from 'shared/enum';

export type Course = {
  id: string;
  title: string;
  description: string;
  categories: Categories[];
  imageUrl: string;
  created: Date;
};

export type EditCourse = {
  title: string;
  description: string;
  imageUrl: string;
  categories: Categories[];
  courseId?: string;
};

export type AddCourse = EditCourse;

export type TEnrolled = {
  id: string;
  course: Course;
};

export type Feedback = {
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

export type AddFeedback = {
  problem: string;
  details: string;
  courseId: string;
};

export type FeedbackStatus = {
  feedbackId: string;
  status: string;
  feedbackMessage: string;
};

export type Progress = {
  id: string;
  title: string;
  scorePercentage: string;
  quizScore: string;
};

export type Question = {
  id: string;
  question: string;
  type: QuestionType;
  answer: string;
};

export type Topic = {
  id: string;
  title: string;
  description: string;
};

export type AddTopic = {
  title: string;
  description: string;
  courseId: string;
};

export type Content = {
  id: string;
  title: string;
  description: string;
  paragraph150: string;
  paragraph300: string;
  videoUrl: string;
};

export type User = {
  id: string;
  email: string;
  username: string;
  avatar: string;
  role: string;
};
