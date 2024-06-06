"use client";

import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export function MonthProgress() {
  const [progress, setProgress] = useState(0);

  const getCurrentDayOfMonth = (): number => {
    const today = new Date();
    return today.getDate();
  };

  useEffect(() => {
    // Calculate the progress based on the current day of the month
    const today = new Date();
    const currentDay = getCurrentDayOfMonth();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const progressValue = (currentDay / daysInMonth) * 100;
    setProgress(progressValue);

    // Update progress every day
    const timer = setInterval(() => {
      const updatedDay = getCurrentDayOfMonth();
      const updatedProgressValue = (updatedDay / daysInMonth) * 100;
      setProgress(updatedProgressValue);
    }, 86400000); // Update once every 24 hours

    return () => clearInterval(timer);
  }, []);

  const day = getCurrentDayOfMonth();


  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-4 bg-white shadow rounded">
          <h1 className="text-2xl font-bold text-gray-800">Hoy es el día {day} del mes</h1>
        </div>
      </div>
      <Progress value={day} className="w-[60%] bg-red-500" />
    </>
  );
}
