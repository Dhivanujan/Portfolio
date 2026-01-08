import { useState, useEffect } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  // Generate stars
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 5000
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
        // Randomize depth (perspective)
        const depth = Math.random() * 3 + 1; 
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random(),
        animationDuration: Math.random() * 4 + 2,
        // Depth simulation
        depth,
      });
    }
    setStars(newStars);
  };

  // Spawn a single meteor
  const spawnMeteor = () => {
    const meteor = {
      id: Date.now(),
      size: Math.random() * 2 + 1,
      x: Math.random() * 120 - 20, // Start slightly offscreen
      y: Math.random() * 50,
      animationDuration: Math.random() * 2 + 3,
    };
    setMeteors((prev) => [...prev, meteor]);

    setTimeout(() => {
      setMeteors((prev) => prev.filter((m) => m.id !== meteor.id));
    }, meteor.animationDuration * 1000);
  };

  useEffect(() => {
    generateStars();

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
        if (Math.random() > 0.6) spawnMeteor();
    }, 2000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-obsidian">
        {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-obsidian/90 z-[0] pointer-events-none"></div>

      {/* Floating Blobs for Color/Depth */}
        <div className="absolute -top-[20%] -left-[10%] w-[50vh] h-[50vh] bg-neon-purple/20 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-[40%] -right-[10%] w-[60vh] h-[60vh] bg-neon-blue/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[50vh] h-[50vh] bg-neon-pink/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse-slow"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity})`,
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor opacity-0 bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            top: `${meteor.y}%`,
            left: `${meteor.x}%`,
            width: `${meteor.size * 100}px`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        >
            <span className="absolute top-1/2 -translate-y-1/2 left-0 h-1 w-1 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"></span>
        </span>
      ))}
    </div>
  );
};
