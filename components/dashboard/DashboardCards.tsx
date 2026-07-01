"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Target,
  Sparkles,
  LayoutTemplate,
} from "lucide-react";

import { useResume } from "../context/ResumeContext";
import { useTemplate } from "../context/TemplateContext";

export default function DashboardCards() {
  const { atsScore, jobMatchScore } = useResume();
  const { template } = useTemplate();

  const cards = [
    {
      title: "ATS Score",
      value: atsScore !== null ? `${atsScore}/100` : "--",
      icon: BrainCircuit,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Job Match",
      value: jobMatchScore !== null ? `${jobMatchScore}%` : "--",
      icon: Target,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "AI Resume",
      value: "Ready",
      icon: Sparkles,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 p-6">

      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.03,
              y: -4,
            }}
            className="rounded-2xl border bg-white p-6 shadow-md transition-all hover:shadow-xl"
          >
            <div className="flex items-center justify-between">

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${card.bg}`}
              >
                <Icon className={card.color} size={28} />
              </div>

              <h2 className="text-3xl font-bold">
                {card.value}
              </h2>
            </div>

            <p className="mt-5 text-gray-500">
              {card.title}
            </p>
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{
          scale: 1.03,
          y: -4,
        }}
        className="rounded-2xl border bg-white p-6 shadow-md transition-all hover:shadow-xl"
      >
        <div className="flex items-center justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50">
            <LayoutTemplate
              className="text-orange-600"
              size={28}
            />
          </div>

          <h2 className="text-xl font-bold capitalize">
            {template}
          </h2>

        </div>

        <p className="mt-5 text-gray-500">
          Current Template
        </p>
      </motion.div>

    </div>
  );
}