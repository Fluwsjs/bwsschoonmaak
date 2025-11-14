"use client";

import { motion, MotionProps } from "framer-motion";
import { useReducedMotion } from "@/components/AccessibilityOptimized";
import { useEffect, useState } from "react";

interface MotionWrapperProps extends MotionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  disableAnimation?: boolean;
}

export default function MotionWrapper({ 
  children, 
  fallback, 
  disableAnimation = false,
  ...motionProps 
}: MotionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // If not client-side yet, render fallback or children without motion
  if (!isClient) {
    return <>{fallback || children}</>;
  }

  // If reduced motion is preferred or animation is disabled, render without motion
  if (prefersReducedMotion || disableAnimation) {
    return <>{children}</>;
  }

  // Default motion props for better performance
  const defaultProps: MotionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    ...motionProps,
  };

  return <motion.div {...defaultProps}>{children}</motion.div>;
}

