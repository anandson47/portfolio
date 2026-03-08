interface Props {
  title: string;
  value: string;
  subtitle?: string;
}

export default function FitnessStatCard({ title, value, subtitle }: Props) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between">
      <p className="text-sm text-neutral-400">{title}</p>
      <div className="mt-4">
        <p className="text-3xl font-semibold">{value}</p>
        {subtitle && (
          <p className="text-xs text-neutral-500 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}