"use client";
import AiringTodayShow from "../components/tvShow/AiringTodayShow";

export default function Page() {
  return (
    <div className="h-[150vh] overflow-auto overflow-x-hidden mx-0 pt-8 flex flex-wrap justify-around pl-2">
      <AiringTodayShow />
    </div>
  );
}
