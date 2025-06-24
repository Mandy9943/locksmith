import { AnimatePresence, motion, Variants } from "framer-motion";
import { Clock } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ImageSlideshowProps {
  countdown: { minutes: number; seconds: number };
  fadeIn: Variants;
  Star: React.ElementType;
}

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
];

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
  countdown,
  fadeIn,
  Star,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="relative"
    >
      <div className="relative rounded-xl overflow-hidden shadow-2xl border-8 border-white aspect-[4/3] max-h-[600px]">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt="Professional locksmith service in Birmingham"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
          <div className="flex items-center gap-3 text-white">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-sm font-medium">Rated 5.0 by 30+ customers</p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white rounded-lg shadow-xl p-2 sm:p-4 border border-slate-100 w-[200px]  sm:w-auto sm:max-w-xs">
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
            <Clock className="h-4 w-4 sm:h-6 sm:w-6" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-slate-600">
              Average response time
            </p>
            <p className="text-xs sm:text-base font-bold text-slate-900">
              20-30 minutes
            </p>
          </div>
        </div>
        <div className="bg-blue-50 rounded p-2 text-center">
          <p className="text-[10px] sm:text-sm text-blue-700">
            Next available locksmith in:
          </p>
          <div className="flex justify-center gap-1 mt-1">
            <div className="bg-blue-600 text-white rounded px-2 py-1 text-xs sm:text-sm font-mono">
              {String(countdown.minutes).padStart(2, "0")}
            </div>
            <span className="text-blue-700 font-bold">:</span>
            <div className="bg-blue-600 text-white rounded px-2 py-1 text-xs sm:text-sm font-mono">
              {String(countdown.seconds).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageSlideshow;
