"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Legend,
  Bar
} from "recharts";

interface Props {
  data: { date: string; weight: number }[];
}

export default function FitnessChart({ data }: Props) {
  return (

    <div className="bg-neutral-900 p-6 rounded-xl h-[400px]">

      <h2 className="text-xl font-semibold mb-4">
        Fitness Overview
      </h2>

      <ResponsiveContainer width="100%" height="90%">

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" stroke="#444" />

          <XAxis dataKey="date" stroke="#aaa" />

          <YAxis stroke="#aaa" />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="weight"
            name="Weight (kg)"
            fill="#8884d8"
          />

          <Bar
            dataKey="caloriesConsumed"
            name="Calories Consumed"
            fill="#82ca9d"
          />

          <Bar
            dataKey="caloriesBurned"
            name="Calories Burned"
            fill="#ff7300"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}