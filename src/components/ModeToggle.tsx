"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant={"ghost"}
      size="icon"
      className="hover:bg-inherit"
      onClick={() => {
        if (theme === "light") setTheme("dark");
        else setTheme("light");
      }}
    >
      <Sun className="h-full w-full rotate-0 scale-125 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-full w-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-125" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
