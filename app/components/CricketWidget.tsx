import Link from "next/link";
import { getCareerStats, getMatchHistory } from "../lib/data";

export default function CricketWidget() {
  const matchHistory = getMatchHistory();
  const careerStats = getCareerStats();
  const lastMatch = matchHistory[0];

  return (
    <div className="bg-neutral-900 rounded-2xl p-6 space-y-6">
      {/* Header */}

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Cricket</h2>

        <Link href="/cricket" className="text-sm text-blue-400">
          View All →
        </Link>
      </div>

      {/* Career Stats */}

      <div className="flex justify-between items-center">
        <span className="text-neutral-400 text-sm">Matches</span>

        <span className="text-lg font-semibold">{careerStats.matches}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-neutral-400 text-sm">Wickets</span>

        <span className="text-lg font-semibold">
          {careerStats.bowling.wickets}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-neutral-400 text-sm">Runs</span>

        <span className="text-lg font-semibold">
          {careerStats.batting.runs}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-neutral-400 text-sm">Catches</span>

        <span className="text-lg font-semibold">
          {careerStats.fielding.catches}
        </span>
      </div>

      {/* Last Match */}

      <div className="border-t border-neutral-800 pt-4">
        <p className="text-sm text-neutral-400">Last Match</p>

        <div className="mt-2 text-sm">
          <p className="font-medium">vs {lastMatch.opponent}</p>

          <p className="text-neutral-400">
            {lastMatch.bowling.overs}-{lastMatch.bowling.runs}-
            {lastMatch.bowling.wickets}
            {" | "}
            {lastMatch.batting.runs} ({lastMatch.batting.balls})
          </p>
        </div>
      </div>
    </div>
  );
}
