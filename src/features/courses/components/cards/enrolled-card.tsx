import { Fragment } from 'react/jsx-runtime';
import { Link } from 'react-router-dom';

import AspectRatio from '@mui/joy/AspectRatio';

import { Course } from 'shared/ts/types';

import style from '../../courses.module.css';

export default function EnrolledCard({ item }: { item: Course }) {
  return (
    <Fragment>
      <AspectRatio ratio="2">
        <Link
          to={`/dashboard/courses/course/${item.id}`}
          className={style.link}
        >
          <img src={item.imageUrl} loading="lazy" alt={`${item.title}`} />
        </Link>
      </AspectRatio>
    </Fragment>
  );
}
