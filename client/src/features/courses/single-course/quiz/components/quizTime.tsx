import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import { useNavigate } from 'react-router-dom';

export default function QuizTime() {
  const navigate = useNavigate()
  const [progress, setProgress] = React.useState(100);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 0 ? 100 : prevProgress - 1));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (progress === 0) navigate(-1)

  return (
    <LinearProgress determinate value={progress} />
  );
}