"use client";
import React from "react";
import { motion } from "framer-motion";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="space-y-10">
      {data.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 border rounded-lg shadow"
        >
          <h3 className="text-xl font-bold">{item.title}</h3>
          <div className="mt-2">{item.content}</div>
        </motion.div>
      ))}
    </div>
  );
};