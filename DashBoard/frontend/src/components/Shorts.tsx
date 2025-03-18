import React, { useRef, useEffect } from "react";

const shortsData = [
  { title: "Investing in Gold", videoSrc: "/videos/short1.mp4", likes: "12K", views: "150K" },
  { title: "Invest in Real Estate", videoSrc: "/videos/short2.mp4", likes: "9.8K", views: "120K" },
  { title: "Best Stocks to Invest in 2025", videoSrc: "/videos/short3.mp4", likes: "20K", views: "180K" },
  { title: "All about Bonds?", videoSrc: "/videos/short4.mp4", likes: "15K", views: "130K" },
];

const Shorts: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => console.log("Autoplay prevented"));
            video.style.opacity = "1"; // Smooth fade-in
          } else {
            video.pause();
            video.style.opacity = "0.5"; // Fade-out effect
          }
        });
      },
      { threshold: 0.7 } // Play when 70% is visible
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    // Ensure the first video plays with sound
    const firstVideo = videoRefs.current[0];
    if (firstVideo) {
      firstVideo.muted = false; // Enable sound
      firstVideo.play().catch(() => console.log("Autoplay blocked"));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center h-80vh bg-gray-100 dark:bg-gray-900">
      <div
        ref={containerRef}
        className="w-[350px] h-[600px] overflow-y-auto snap-y snap-mandatory scrollbar-hide border rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-all duration-500 ease-in-out"
      >
        {shortsData.map((short, index) => (
          <div key={index} className="snap-center flex flex-col items-center p-3">
            {/* Video */}
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-full h-[500px] rounded-lg transition-opacity duration-500 ease-in-out"
              src={short.videoSrc}
              loop
              playsInline
              autoPlay
              controls
            />

            {/* Video Details */}
            <div className="w-full p-3 text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{short.title}</h3>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                <span>👍 {short.likes}</span>
                <span>👁️ {short.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shorts;
