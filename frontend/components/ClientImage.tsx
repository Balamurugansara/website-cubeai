"use client";
import React, { useState } from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export default function ClientImage({ src, fallback = "/assets/blogs/agent.jpg", alt, ...props }: Props) {
  const initial = typeof src === "string" ? src : undefined;
  const [current, setCurrent] = useState<string | undefined>(initial);

  return (
    <img
      src={current}
      alt={alt}
      onError={() => setCurrent(fallback)}
      {...props}
    />
  );
}
