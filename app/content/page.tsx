import UpcomingContent from "../components/UpcomingContent"
import ContentPlatforms from "../components/ContentPlatforms"
import LatestUploads from "../components/LatestUploads"

export default function Content() {

  return (

    <div className="space-y-16">

      <div>
        <h1 className="text-4xl font-bold">
          Content
        </h1>

        <p className="text-neutral-400 mt-2">
          Creator dashboard and content roadmap
        </p>
      </div>

      {/* Upcoming Content */}

      <section className="space-y-6">

        <h2 className="text-2xl font-semibold">
          Upcoming Content
        </h2>

        <UpcomingContent />

      </section>

      {/* Platforms */}

      <section className="space-y-6">

        <h2 className="text-2xl font-semibold">
          Where to Find My Content
        </h2>

        <ContentPlatforms />

      </section>

      {/* Latest Uploads */}

      <section className="space-y-6">

        <h2 className="text-2xl font-semibold">
          Latest Uploads
        </h2>

        <LatestUploads />

      </section>

    </div>

  )

}