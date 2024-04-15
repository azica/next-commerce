"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ReactNode } from "react";

import Spinner from '../ui/Spinner';

const LoadingTransition = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading ? (
        <Spinner />
      ) : (
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingTransition;
