import { useEffect, useState } from "react";

import lpImage from "assets/svg/imagelp1.svg";
import lpImage2 from "assets/svg/imagelp2.svg";
import lpImage3 from "assets/svg/imagelp3.svg";

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
