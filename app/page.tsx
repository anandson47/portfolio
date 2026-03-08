import Link from "next/link";
import ContentPipelineWidget from "./components/ContentPipelineWidget";
import CricketWidget from "./components/CricketWidget";
import DashboardCard from "./components/DashboardCard";
import HealthRings from "./components/HealthRings";
import LatestContentWidget from "./components/LatestWidget";
import { getProjects } from "./lib/data";

export default function Home() {
  const projects = getProjects();
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-5xl font-bold">Hi, I&apos;m Anand Vijay</h1>
        <p className="text-neutral-400 mt-4">Developer | Cricketer | Creator</p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-neutral-900 p-6 rounded-2xl space-y-5">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Projects</h2>

            <Link href="/projects" className="text-sm text-blue-400">
              View All →
            </Link>
          </div>
          <ul>
            {projects.slice(0, 4).map((project) => (
              <li key={project.title} className="my-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-neutral-400 mt-1">{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <CricketWidget />
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <ContentPipelineWidget/>
        <LatestContentWidget />
      </section>

      <section className="grid md:grid-cols-4 gap-6">
        <DashboardCard
          title="Projects"
          description="Mini web apps I've built"
          link="/projects"
        />

        <DashboardCard
          title="Fitness"
          description="Weight loss & training"
          link="/fitness"
        />

        <DashboardCard
          title="Cricket"
          description="Performance dashboard"
          link="/cricket"
        />

        <DashboardCard
          title="Content"
          description="Instagram & reels"
          link="/content"
        />
      </section>
    </div>
  );
}
