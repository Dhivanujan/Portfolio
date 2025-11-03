import { useState, useEffect } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  // Generate stars once
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  // Spawn a single meteor
  const spawnMeteor = () => {
    const meteor = {
      id: Date.now(), // unique id
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 20,
      animationDuration: Math.random() * 3 + 3,
    };
    setMeteors((prev) => [...prev, meteor]);

    // Remove meteor after its animation ends
    setTimeout(() => {
      setMeteors((prev) => prev.filter((m) => m.id !== meteor.id));
    }, meteor.animationDuration * 1000);
  };

  useEffect(() => {
    generateStars();

    // Continuously spawn meteors at random intervals
    const interval = setInterval(() => {
      spawnMeteor();
    }, 1500); // adjust interval for density

    // Re-generate stars on resize
    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            top: star.y + "%",
            left: star.x + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 100 + "px",
            height: meteor.size * 2 + "px",
            top: meteor.y + "%",
            left: meteor.x + "%",
            "--meteor-duration": meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
