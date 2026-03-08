import contentData from "../data/content.json";

export default function LatestContentWidget() {
  const latest = contentData.latestUploads.slice(-2);

  if (!latest.length) {
    return (
      <div className="bg-neutral-900 p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">Latest Content</h2>
        <p className="text-neutral-400">No published content yet</p>
      </div>
    );
  }

  return (
    <div  className="bg-neutral-900 p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Latest Content</h2>
      {latest.map((lates) => (
        <div key={lates.id} className="space-y-2 my-5">
          

          <p className="text-lg font-medium">{lates.title}</p>

          <p className="text-sm text-neutral-400 mb-4">{lates.platform}</p>

          <a href={lates.link} target="_blank" className="text-blue-400">
            Watch →
          </a>
          <hr className="border-neutral-600 my-5" />
        </div>
      ))}
    </div>
  );
}
