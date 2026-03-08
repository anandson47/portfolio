import { getContentPlatforms } from "../lib/data";

export default function ContentPlatforms() {
  const platforms = getContentPlatforms();

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {platforms.map((platform, index) => (
        <a
          key={index}
          href={platform.url}
          target="_blank"
          className="bg-neutral-900 p-6 rounded-2xl hover:bg-neutral-800 transition"
        >
          <h3 className="text-lg font-semibold">{platform.name}</h3>

          <p className="text-sm text-neutral-400 mt-2">
            {platform.description}
          </p>
        </a>
      ))}
    </div>
  );
}
