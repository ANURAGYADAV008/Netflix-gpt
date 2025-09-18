import { Play, Info } from "lucide-react";

export default function Buttons() {
  return (
    <div className="flex flex-row gap-4">
      {/* Play Button */}
      <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white text-black font-semibold shadow-md hover:bg-gray-200 transition">
        <Play className="w-5 h-5" />
        Play
      </button>

      {/* More Info Button */}
      <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gray-800 text-white font-semibold shadow-md hover:bg-gray-700 transition">
        <Info className="w-5 h-5" />
        More Info
      </button>
    </div>
  );
}
