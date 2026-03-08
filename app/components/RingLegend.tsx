export default function RingLegend() {
  const items = [
    { color: "#ff3b30", label: "Weight Progress (98kg → 80kg)" },
    { color: "#30d158", label: "Calorie Intake (Target: 1500)" },
    { color: "#0a84ff", label: "Calories Burned (Target: 500)" },
  ];

  return (
    <div className="mt-6 flex flex-col gap-3 items-start">

      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: item.color }}
          />

          <span className="text-sm text-neutral-300">
            {item.label}
          </span>

        </div>
      ))}

    </div>
  );
}