"use client";

import { createContext, useContext, useState } from "react";

export type TemplateType =
  | "modern"
  | "professional"
  | "minimal";

type TemplateContextType = {
  template: TemplateType;
  setTemplate: (template: TemplateType) => void;
};

const TemplateContext =
  createContext<TemplateContextType | null>(null);

export function TemplateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [template, setTemplate] =
    useState<TemplateType>("modern");

  return (
    <TemplateContext.Provider
      value={{ template, setTemplate }}
    >
      {children}
    </TemplateContext.Provider>
  );
}

export function useTemplate() {
  const context = useContext(TemplateContext);

  if (!context) {
    throw new Error(
      "useTemplate must be used inside TemplateProvider"
    );
  }

  return context;
}