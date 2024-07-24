import { useEffect, useState } from "react";

import lpImage from "assets/png/imagelp1.png";
import lpImage2 from "assets/png/imagelp2.png";
import lpImage3 from "assets/png/imagelp3.png";

const images = [
  lpImage, lpImage2, lpImage3
];

export default function Carousel() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextImage = () => {
    setActiveIdx((prevIdx) => (prevIdx + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img
        src={images[activeIdx]}
        alt="Carousel"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
