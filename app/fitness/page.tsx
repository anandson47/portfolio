import FitnessChart from "../components/FitnessChart";
import FitnessStatCard from "../components/FitnessStatCard";
import { getWeightHistory } from "../lib/data";

export default function Fitness() {
  const weightData = getWeightHistory();

  const currentWeight = weightData.length>0?weightData[weightData.length - 1].weight: 98;
  const targetWeight = 80;
  const progress = currentWeight - targetWeight;

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold">Fitness</h1>
        <p className="text-neutral-400 mt-2">
          Tracking progress toward peak performance
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <FitnessStatCard title="Current Weight" value={`${currentWeight} kg`} />

        <FitnessStatCard title="Target" value={`${targetWeight} kg`} />

        <FitnessStatCard
          title="Remaining"
          value={`${progress} kg`}
          subtitle="to reach goal"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Weight Trend</h2>
        <FitnessChart data={weightData} />
      </div>
    </div>
  );
}
