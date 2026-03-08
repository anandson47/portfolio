"use client";
import { useState } from "react";
import CricketWidget from "../components/CricketWidget";
import HealthRings from "../components/HealthRings";
import { getCricketData } from "../lib/data";

export default function AdminDashboard() {
  const cricketData = getCricketData();

  const [stats, setStats] = useState(cricketData.careerStats);

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch("/api/admin/stats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stats),
    });

    alert("Stats updated");
  }
  return (
    <div className="px-10">
      <h1 className="text-3xl mb-5 font-bold">Admin Dashboard</h1>

      <section className="grid md:grid-cols-2 gap-6">
        <section className="bg-neutral-900 rounded-2xl p-6 space-y-6">
          <p className="text-xl font-semibold">Weight Progress</p>
          <HealthRings />
        </section>
        <CricketWidget />
      </section>
      <section className="grid md:grid-cols-1 gap-6">
        <div className="space-y-10 mt-6">
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-900 p-6 rounded-xl grid md:grid-cols-3 gap-4"
          >
            <h2 className="col-span-full text-xl font-semibold">
              Update Career Stats
            </h2>

            <div className="flex flex-col gap-1 col-span-full">
              <label className="text-sm text-neutral-400">Total Matches</label>
              <input
                type="number"
                value={stats.matches}
                className="p-2 bg-neutral-800 rounded"
                onChange={(e) =>
                  setStats({ ...stats, matches: Number(e.target.value) })
                }
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-400">
                Bowling Wickets
              </label>
              <input
                type="number"
                value={stats.bowling.wickets}
                className="p-2 bg-neutral-800 rounded"
                onChange={(e) =>
                  setStats({
                    ...stats,
                    bowling: {
                      ...stats.bowling,
                      wickets: Number(e.target.value),
                    },
                  })
                }
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-400">Economy</label>
              <input
                type="number"
                step="0.1"
                value={stats.bowling.economy}
                className="p-2 bg-neutral-800 rounded"
                onChange={(e) =>
                  setStats({
                    ...stats,
                    bowling: {
                      ...stats.bowling,
                      economy: Number(e.target.value),
                    },
                  })
                }
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-400">Best Bowling Figure</label>
              <input
                value={stats.bowling.best}
                className="p-2 bg-neutral-800 rounded"
                onChange={(e) =>
                  setStats({
                    ...stats,
                    bowling: {
                      ...stats.bowling,
                      best: e.target.value,
                    },
                  })
                }
              />
            </div>



            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-400">Batting Runs</label>
              <input
                type="number"
                value={stats.batting.runs}
                className="p-2 bg-neutral-800 rounded"
                onChange={(e) =>
                  setStats({
                    ...stats,
                    batting: {
                      ...stats.batting,
                      runs: Number(e.target.value),
                    },
                  })
                }
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-400">Highest Score</label>
              <input
                type="number"
                value={stats.batting.highest}
                className="p-2 bg-neutral-800 rounded"
                onChange={(e) =>
                  setStats({
                    ...stats,
                    batting: {
                      ...stats.batting,
                      highest: Number(e.target.value),
                    },
                  })
                }
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-400">Strike Rate</label>

              <input
                type="number"
                step="0.1"
                value={stats.batting.strikeRate}
                className="p-2 bg-neutral-800 rounded"
                onChange={(e) =>
                  setStats({
                    ...stats,
                    batting: {
                      ...stats.batting,
                      strikeRate: Number(e.target.value),
                    },
                  })
                }
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-400">
                Batting Average
              </label>

              <input
                type="number"
                step="0.1"
                value={stats.batting.average}
                className="p-2 bg-neutral-800 rounded"
                onChange={(e) =>
                  setStats({
                    ...stats,
                    batting: {
                      ...stats.batting,
                      average: Number(e.target.value),
                    },
                  })
                }
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-400">Catches</label>
              <input
                type="number"
                value={stats.fielding.catches}
                className="p-2 bg-neutral-800 rounded"
                onChange={(e) =>
                  setStats({
                    ...stats,
                    fielding: {
                      ...stats.fielding,
                      catches: Number(e.target.value),
                    },
                  })
                }
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-400">Run Outs</label>
              <input
                type="number"
                value={stats.fielding.runOuts}
                className="p-2 bg-neutral-800 rounded"
                onChange={(e) =>
                  setStats({
                    ...stats,
                    fielding: {
                      ...stats.fielding,
                      runOuts: Number(e.target.value),
                    },
                  })
                }
              />
            </div>

            <button className="bg-blue-500 py-2 rounded col-span-full">
              Update Stats
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
