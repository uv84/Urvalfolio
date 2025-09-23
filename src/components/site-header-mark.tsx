"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";


export function SiteHeaderMark() {
  const pathname = usePathname();
  return pathname === "/" ? <ChanhDaiMarkMotion /> : <></>;
}

function ChanhDaiMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <motion.div
    className=""
      
      initial={{
        opacity: 0,
        transform: "translateY(8px)",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(8px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center">
        <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-800 via-black to-gray-900 dark:from-gray-200 dark:via-white dark:to-gray-300 bg-clip-text text-transparent">
          UV
        </span>
        <div className="ml-1 h-6 w-0.5 bg-gradient-to-b from-gray-800 to-black dark:from-gray-200 dark:to-white rounded-full"></div>
      </div>
    </motion.div>
  );
}

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};
