import { useState, useEffect } from 'react';

import Typography from '@mui/joy/Typography';

export default function ShowCapsLock() {
  const [isCapsLock, setIsCapsLock] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setIsCapsLock(event.getModifierState('CapsLock'));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCapsLock]);

  return (
    isCapsLock && (
      <Typography color="danger" startDecorator="🚨">
        Caps Lock is on!
      </Typography>
    )
  );
}
