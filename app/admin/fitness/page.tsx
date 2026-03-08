"use client"

import { useState } from "react"
import fitnessData from "../../data/fitness.json"
import FitnessChart from "@/app/components/FitnessChart"
import HealthRings from "@/app/components/HealthRings"

export default function FitnessAdmin() {

  const today = new Date().toISOString().split("T")[0]

  const [logs, setLogs] = useState(fitnessData.weightData)

  const [form, setForm] = useState({
    date: today,
    caloriesConsumed: "",
    caloriesBurned: "",
    weight: ""
  })

  async function handleSubmit(e: any) {

    e.preventDefault()

    const res = await fetch("/api/admin/fitness", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    }).then(res => res.json()).then(data => {
        setLogs(data.weightData)
        setForm({
              date: today,
              caloriesConsumed: "",
              caloriesBurned: "",
              weight: ""
        })
    })


  }

  return (

    <div className="space-y-10">

      <h1 className="text-3xl font-bold">
        Fitness Tracker
      </h1>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-neutral-900 p-6 rounded-xl grid md:grid-cols-2 gap-4"
      >

        <h2 className="col-span-full text-xl font-semibold">
          Add Daily Fitness Log
        </h2>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-neutral-400">
            Date
          </label>

          <input
            value={form.date}
            readOnly
            className="p-2 bg-neutral-800 rounded"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-neutral-400">
            Calories Consumed (Kcal)
          </label>

          <input
            type="number"
            value={form.caloriesConsumed}
            className="p-2 bg-neutral-800 rounded"
            onChange={(e) =>
              setForm({
                ...form,
                caloriesConsumed: e.target.value
              })
            }
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-neutral-400">
            Calories Burned (Kcal)
          </label>

          <input
            type="number"
            value={form.caloriesBurned}
            className="p-2 bg-neutral-800 rounded"
            onChange={(e) =>
              setForm({
                ...form,
                caloriesBurned: e.target.value
              })
            }
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-neutral-400">
            Weight (kg)
          </label>

          <input
            type="number"
            step="0.1"
            value={form.weight}
            className="p-2 bg-neutral-800 rounded"
            onChange={(e) =>
              setForm({
                ...form,
                weight: e.target.value
              })
            }
          />
        </div>

        <button className="bg-blue-500 py-2 rounded col-span-full">
          Add Fitness Log
        </button>

      </form>


      <div className="bg-neutral-900 p-6 rounded-xl">
        <HealthRings />
      </div>



      {/* Table */}
      <div className="bg-neutral-900 p-6 rounded-xl">
        <FitnessChart data={logs} />
      </div>

      <div className="bg-neutral-900 p-6 rounded-xl">

        <h2 className="text-xl font-semibold mb-4">
          Fitness Logs
        </h2>

        <table className="w-full text-left">

          <thead className="text-neutral-400">

            <tr>
              <th>Date</th>
              <th>Calories Consumed</th>
              <th>Calories Burned</th>
              <th>Weight</th>
            </tr>

          </thead>

          <tbody>

            {logs.slice(-5).map((log: any, index: number) => (

              <tr
                key={index}
                className="border-t border-neutral-800"
              >

                <td className="py-3">{log.date}</td>
                <td>{log.caloriesConsumed}</td>
                <td>{log.caloriesBurned}</td>
                <td>{log.weight} kg</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  )

}