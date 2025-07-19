"use client";

import { motion } from "framer-motion";

export function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)] bg-grid-pattern"
      />
    </div>
  );
}
