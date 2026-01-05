import { useState, useRef, useEffect } from "react";
import { MapPin } from "lucide-react";

interface LazyMapProps {
  src: string;
  title: string;
  className?: string;
}

const LazyMap = ({ src, title, className = "" }: LazyMapProps) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px",
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Placeholder */}
      <div
        className={`absolute inset-0 bg-card flex flex-col items-center justify-center transition-opacity duration-500 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="animate-pulse flex flex-col items-center gap-3">
          <MapPin className="size-10 text-primary" />
          <span className="text-muted-foreground text-sm">Loading map...</span>
        </div>
      </div>

      {/* Actual iframe - only render when in view */}
      {isInView && (
        <iframe
          src={src}
          className={`grayscale-map w-full h-full min-h-[300px] transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

export default LazyMap;
