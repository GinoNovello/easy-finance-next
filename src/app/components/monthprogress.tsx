"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export function MonthProgress() {
  const [progress, setProgress] = useState(0);

  const getCurrentDayOfMonth = (): number => {
    const today = new Date();
    return today.getDate();
  };

  const getMonthLength = (): number => {
    const today = new Date();
    const daysInMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();

    return daysInMonth;
  };

  const handlerProgressValue = () => {
    const currentDay = getCurrentDayOfMonth();
    const monthLength = getMonthLength();

    const progressValue = (currentDay / monthLength) * 100;
    setProgress(progressValue);
  };
  useEffect(() => {
    handlerProgressValue();
  }, [handlerProgressValue]);

  const day = getCurrentDayOfMonth();

  return (
    <>
      <HoverCard>
        <HoverCardContent>
          Faltan {getMonthLength() - day} días para finalizar el mes
        </HoverCardContent>
        <HoverCardTrigger asChild>
          <Progress
            value={progress}
            className={`${progress > 50 ? "bg-red-300 w-[60%]" : "bg-green-200 w-[60%]"} `}
          />
        </HoverCardTrigger>
      </HoverCard>
    </>
  );
}
