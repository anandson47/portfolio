"use client";
import { getWeightHistory } from "../lib/data";
import RingLegend from "./RingLegend";

interface RingProps {
  progress: number;
  radius: number;
  stroke: number;
  color: string;
}

function Ring({ progress, radius, stroke, color }: RingProps) {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <circle
      stroke={color}
      fill="transparent"
      strokeWidth={stroke}
      strokeDasharray={`${circumference} ${circumference}`}
      style={{
        strokeDashoffset,
        transition: "stroke-dashoffset 0.5s ease",
      }}
      strokeLinecap="round"
      r={normalizedRadius}
      cx="100"
      cy="100"
    />
  );
}

export default function HealthRings() {
  const weightData = getWeightHistory();

  // Your real metrics
  const currentWeight =  weightData.length>0?weightData[weightData.length - 1].weight: 98;
  const targetWeight = 80;
  const startingWeight = 98;

  const weightProgress =
    ((startingWeight - currentWeight) / (startingWeight - targetWeight)) * 100;

  const targetCalorieIntake = 1500;
  const targetCaloriesBurned = 500;
  const caloriesConsumed = weightData[weightData.length - 1]?.caloriesConsumed || 0;
  const caloriesBurned = weightData[weightData.length - 1]?.caloriesBurned || 0;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg width="200" height="200">
        {/* Background rings */}

        <circle
          stroke="#222"
          fill="transparent"
          strokeWidth="16"
          r="80"
          cx="100"
          cy="100"
        />

        <circle
          stroke="#222"
          fill="transparent"
          strokeWidth="16"
          r="60"
          cx="100"
          cy="100"
        />

        <circle
          stroke="#222"
          fill="transparent"
          strokeWidth="16"
          r="40"
          cx="100"
          cy="100"
        />

        {/* Progress Rings */}

        <Ring
          progress={weightProgress}
          radius={100}
          stroke={16}
          color="#ff3b30"
        />

        <Ring
          progress={(caloriesConsumed / targetCalorieIntake) * 100}
          radius={80}
          stroke={16}
          color="#30d158"
        />

        <Ring
          progress={(caloriesBurned / targetCaloriesBurned) * 100}
          radius={60}
          stroke={16}
          color="#0a84ff"
        />
      </svg>
      <RingLegend />

      <div className="text-center mt-4">
        <p className="text-3xl font-bold">{currentWeight}kg</p>
        <p className="text-neutral-400 text-sm">Target {targetWeight}kg</p>
      </div>
    </div>
  );
}
