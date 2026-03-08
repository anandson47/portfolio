import { getContentPipeline } from "../lib/data";

export default function UpcomingContent() {
  const upcomingContent = getContentPipeline();

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {upcomingContent.map((item, index) => (
        <div key={index} className="bg-neutral-900 p-6 rounded-2xl space-y-2">
          <p className="text-lg font-semibold">{item.title}</p>

          <p className="text-sm text-neutral-400">Platform: {item.platform}</p>

          <span className="text-xs bg-neutral-800 px-3 py-1 rounded-full">
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
}
