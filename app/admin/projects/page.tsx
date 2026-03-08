"use client";

import { useState } from "react";
import projectsData from "../../data/projects.json";

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState(projectsData.projects);

  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetch("/api/admin/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    setProjects(data.projects);

    setForm({
      title: "",
      description: "",
      link: "",
    });
  }

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Manage Projects</h1>

      {/* Add Project Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-neutral-900 p-6 rounded-xl grid gap-4"
      >
        <h2 className="text-xl font-semibold">Add Project</h2>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-neutral-400">Project Name</label>

          <input
            value={form.title}
            className="p-2 bg-neutral-800 rounded"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-neutral-400">Description</label>

          <textarea
            value={form.description}
            className="p-2 bg-neutral-800 rounded"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-neutral-400">Project Link</label>

          <input
            value={form.link}
            className="p-2 bg-neutral-800 rounded"
            onChange={(e) => setForm({ ...form, link: e.target.value })}
          />
        </div>

        <button className="bg-blue-500 py-2 rounded">Add Project</button>
      </form>

      {/* Projects Table */}

      <div className="bg-neutral-900 p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Project List</h2>

        <table className="w-full text-left">
          <thead className="text-neutral-400">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Link</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project: any, index: number) => (
              <tr key={index} className="border-t border-neutral-800">
                <td className="py-3">{project.title}</td>

                <td>{project.description}</td>

                <td>
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-blue-400"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
