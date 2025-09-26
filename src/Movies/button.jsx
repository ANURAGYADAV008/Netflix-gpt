import { Play, Info } from "lucide-react";

export default function Buttons() {
  return (
    <div className="flex flex-row gap-3">
      {/* Play Button */}
      <button className="flex items-center gap-2 px-8 py-3 rounded-md bg-white text-black text-lg font-semibold shadow-md hover:bg-gray-300 transition">
        <Play className="w-3 h-3" />
        Play
      </button>

      {/* More Info Button */}
      <button className="flex items-center gap-2 px-6 py-3 rounded-md bg-gray-700/80 text-white text-lg font-semibold shadow-md hover:bg-gray-600 transition">
        <Info className="w-3 h-3" />
        More Info
      </button>
    </div>
  );
}

