import { getLatestUploads } from "../lib/data";

export default function LatestUploads() {
  const latestUploads = getLatestUploads();

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {latestUploads.map((video, index) => (
        <a
          key={index}
          href={video.link}
          target="_blank"
          className="bg-neutral-900 p-6 rounded-2xl hover:bg-neutral-800 transition"
        >
          <p className="text-lg font-semibold">{video.title}</p>

          <p className="text-sm text-neutral-400 mt-2">Watch →</p>
        </a>
      ))}
    </div>
  );
}
