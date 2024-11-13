import { Course, UserData } from 'shared/ts/types';

import InstructorCard from './cards/instructor-card';
import EnrolledCard from './cards/enrolled-card';
import CourseCard from './cards/course-card';

interface ICourseEnrolled {
  isEnrolled: boolean;
  item: Course;
  user: UserData;
  instructorId: string;
}

export default function CardType({
  isEnrolled,
  item,
  user,
  instructorId,
}: ICourseEnrolled) {
  if (instructorId && instructorId === user.id) {
    return <InstructorCard {...item} />;
  } else if (isEnrolled) {
    return <EnrolledCard {...item} />;
  } else {
    return <CourseCard {...item} />;
  }
}
