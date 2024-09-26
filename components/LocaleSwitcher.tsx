"use client";
import { useChangeLocale, useCurrentLocale } from "@/locale/client";
import { Button } from "./button";

export const LocaleSwitcher = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <Button
      className={`flex bg-indigo-600 hover:bg-indigo-500 transition items-center text-xs rounded-full border-primary w-fit py-[10px] px-3 gap-3 hover:scale-105`}
    >
      <span
        onClick={() => changeLocale("en")}
        className={`rounded-full flex flex-col items-center gap-[2px] ${
          locale === "en" ? "text-primary font-bold" : "opacity-50"
        }`}
      >
        <span>🇬🇧 EN</span>
      </span>
      <hr className="border-r border-border/10 py-[6px] " />
      <button
        onClick={() => changeLocale("fr")}
        className={`rounded-full flex flex-col items-center gap-[2px] ${
          locale === "fr" ? "text-primary font-bold" : "opacity-50"
        }`}
      >
        <span className="">🇫🇷 FR</span>
      </button>
    </Button>
  );
};
