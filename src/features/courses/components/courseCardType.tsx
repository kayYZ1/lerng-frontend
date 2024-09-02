import { Course, UserData } from 'shared/ts/types';

import InstructorCard from './cards/instructorCard';
import EnrolledCard from './cards/enrolledCard';
import CourseCard from './cards/courseCard';

interface ICourseEnrolled {
  isEnrolled: boolean;
  item: Course;
  user: UserData;
}

export default function CourseCardType({ isEnrolled, item, user }: ICourseEnrolled) {
  if (user.role === 'instructor') {
    return <InstructorCard {...item} />
  }
  else if (isEnrolled) {
    return <EnrolledCard {...item} />
  }
  else {
    return <CourseCard {...item} />
  }
}