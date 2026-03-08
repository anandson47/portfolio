"use client";

import { useState } from "react";
import cricketData from "../../data/cricket.json";

export default function MatchesAdmin() {
  const [matches, setMatches] = useState(cricketData.matchHistory);

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Manage Matches</h1>

      <AddMatchForm setMatches={setMatches} />

      <MatchTable matches={matches} setMatches={setMatches} />
    </div>
  );
}

function AddMatchForm({ setMatches }: any) {
  const [form, setForm] = useState({
    opponent: "",
    date: "",

    overs: "",
    runs: "",
    wickets: "",

    batRuns: "",
    batBalls: "",

    catches: "",
    runOuts: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch("/api/admin/matches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => res.json()).then((data) => setMatches(data.matchHistory));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-neutral-900 p-6 rounded-xl grid md:grid-cols-3 gap-4"
    >
      {/* Match Info */}

      <input
        placeholder="Opponent"
        className="p-2 bg-neutral-800 rounded"
        onChange={(e) => setForm({ ...form, opponent: e.target.value })}
      />

      <input
        placeholder="Date"
        type="date"
        className="p-2 bg-neutral-800 rounded"
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      {/* Bowling */}

      <input
        placeholder="Overs"
        className="p-2 bg-neutral-800 rounded"
        onChange={(e) => setForm({ ...form, overs: e.target.value })}
      />

      <input
        placeholder="Runs Conceded"
        className="p-2 bg-neutral-800 rounded"
        onChange={(e) => setForm({ ...form, runs: e.target.value })}
      />

      <input
        placeholder="Wickets"
        className="p-2 bg-neutral-800 rounded"
        onChange={(e) => setForm({ ...form, wickets: e.target.value })}
      />

      {/* Batting */}

      <input
        placeholder="Batting Runs"
        className="p-2 bg-neutral-800 rounded"
        onChange={(e) => setForm({ ...form, batRuns: e.target.value })}
      />

      <input
        placeholder="Balls Faced"
        className="p-2 bg-neutral-800 rounded"
        onChange={(e) => setForm({ ...form, batBalls: e.target.value })}
      />

      {/* Fielding */}

      <input
        placeholder="Catches"
        className="p-2 bg-neutral-800 rounded"
        onChange={(e) => setForm({ ...form, catches: e.target.value })}
      />

      <input
        placeholder="Run Outs"
        className="p-2 bg-neutral-800 rounded"
        onChange={(e) => setForm({ ...form, runOuts: e.target.value })}
      />

      <button className="bg-blue-500 py-2 rounded col-span-full">
        Add Match
      </button>
    </form>
  );
}

function MatchTable({ matches }: any) {
  return (
    <div className="bg-neutral-900 p-6 rounded-xl">
      <table className="w-full text-left">
        <thead className="text-neutral-400">
          <tr>
            <th>Opponent</th>
            <th>Date</th>
            <th>Bowling</th>
            <th>Batting</th>
            <th>Fielding (Catches/Run-Outs)</th>
          </tr>
        </thead>

        <tbody>
          {matches.map((match: any, index: number) => (
            <tr key={index} className="border-t border-neutral-800">
              <td className="py-3">{match.opponent}</td>

              <td>{match.date}</td>

              <td>
                {match.bowling.overs}-{match.bowling.runs}-
                {match.bowling.wickets}
              </td>

              <td>
                {match.batting.runs} ({match.batting.balls})
              </td>

              <td>
                {match.fielding.catches} / {match.fielding.runOuts}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
