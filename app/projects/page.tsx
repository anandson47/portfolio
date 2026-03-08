"use client";

import { getProjects } from "../lib/data";

export default function Projects() {
  const projects = getProjects();
  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            onClick={() => (window.location.href = project.link)}
            className="p-6 bg-neutral-900 rounded-xl"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-neutral-400 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
