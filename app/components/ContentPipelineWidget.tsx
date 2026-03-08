import Link from "next/link";
import { getContentPipeline } from "../lib/data";

export default function ContentPipelineWidget() {
  const upcomingContent = getContentPipeline();

  return (
    <div className="bg-neutral-900 p-6 rounded-2xl space-y-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Content Pipeline</h2>

        <Link href="/content" className="text-sm text-blue-400">
          View All →
        </Link>
      </div>

      <div className="space-y-4">
        {upcomingContent.slice(0,5).map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-neutral-800 pb-2"
          >
            <div>
              <p className="font-medium">{item.title}</p>

              <p className="text-xs text-neutral-400">{item.platform}</p>
            </div>

            <span className="text-xs bg-neutral-800 px-3 py-1 rounded-full">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
