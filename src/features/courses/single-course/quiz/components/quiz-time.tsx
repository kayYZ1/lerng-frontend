import { useState, useEffect } from 'react';
import LinearProgress from '@mui/joy/LinearProgress';

interface IQuizResult {
  setShowResult: (state: boolean) => void;
}

export default function QuizTime({ setShowResult }: IQuizResult) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 0 ? 100 : prevProgress - 1,
      );
    }, 1000);

    if (progress === 0) {
      setShowResult(true);
    }

    return () => {
      clearInterval(timer);
    };
  }, [progress, setShowResult]);

  return <LinearProgress determinate value={progress} />;
}
