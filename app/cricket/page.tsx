import MatchHistoryTable from "../components/MatchHistoryTable";
import { getCareerStats, getMatchHistory } from "../lib/data";

export default function Cricket() {
  const careerStats = getCareerStats();
  const matchHistory = getMatchHistory();

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold">Cricket</h1>

      <div>
        <p className="text-neutral-400 text-sm">Total Matches Played</p>

        <p className="text-5xl font-bold mt-2">{careerStats.matches}</p>
      </div>

      {/* Bowling */}

      <div>
        <h2 className="text-2xl font-semibold mb-4">Bowling</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Stat title="Wickets" value={careerStats.bowling.wickets} />
          <Stat title="Economy" value={careerStats.bowling.economy} />
          <Stat title="Best" value={careerStats.bowling.best} />
        </div>
      </div>

      {/* Batting */}

      <div>
        <h2 className="text-2xl font-semibold mb-4">Batting</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <Stat title="Runs" value={careerStats.batting.runs} />
          <Stat title="Average" value={careerStats.batting.average} />
          <Stat title="Strike Rate" value={careerStats.batting.strikeRate} />
          <Stat title="Highest" value={careerStats.batting.highest} />
        </div>
      </div>

      {/* Fielding */}

      <div>
        <h2 className="text-2xl font-semibold mb-4">Fielding</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Stat title="Catches" value={careerStats.fielding.catches} />
          <Stat title="Run Outs" value={careerStats.fielding.runOuts} />
        </div>
      </div>
      <h2 className="text-2xl font-semibold">Match History</h2>
      <MatchHistoryTable matches={matchHistory} />
    </div>
  );
}

function Stat({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="bg-neutral-900 p-6 rounded-xl">
      <p className="text-neutral-400 text-sm">{title}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
