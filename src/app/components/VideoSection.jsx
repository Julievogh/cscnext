"use client";
import React, { useRef, useEffect } from "react";

const VideoSection = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay error:", error);
      });
    }
  }, []);

  return (
    <section>
      <video ref={videoRef} controls loop muted>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoSection;
