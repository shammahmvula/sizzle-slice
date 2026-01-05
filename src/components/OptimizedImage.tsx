import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: "square" | "video" | "auto";
  objectFit?: "cover" | "contain";
}

const OptimizedImage = ({
  src,
  alt,
  className = "",
  priority = false,
  aspectRatio = "auto",
  objectFit = "cover",
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const aspectClass = {
    square: "aspect-square",
    video: "aspect-video",
    auto: "",
  }[aspectRatio];

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true); // Hide skeleton on error too
  };

  return (
    <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
      {/* Static placeholder - no animation */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted/50" />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-muted/30 flex items-center justify-center">
          <span className="text-muted-foreground text-xs">Image unavailable</span>
        </div>
      )}

      {/* Image - always render, let browser handle loading */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full transition-opacity duration-300 ${
          isLoaded && !hasError ? "opacity-100" : "opacity-0"
        } object-${objectFit}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "low"}
      />
    </div>
  );
};

export default OptimizedImage;
