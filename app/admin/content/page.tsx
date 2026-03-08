"use client";

import { useState } from "react";
import contentData from "../../data/content.json";
import { TaskCard } from "@/app/components/TaskCard";

const statuses = ["Idea", "Execution", "Editing", "Scheduled"];

export default function ContentAdmin() {
  const [tasks, setTasks] = useState(contentData.upcomingContent || []);

  const [latestUploads, setLatestUploads] = useState(contentData.latestUploads || [])

  const [form, setForm] = useState({
    title: "",
    platform: "Instagram",
  });

  async function addTask(e: any) {
    e.preventDefault();

    const res = await fetch("/api/admin/content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    setTasks(data.upcomingContent);

    setForm({
      title: "",
      platform: "Instagram",
    });
  }


  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Content Workflow</h1>

      {/* Add Task */}

      <form
        onSubmit={addTask}
        className="bg-neutral-900 p-6 rounded-xl flex gap-4"
      >
        <input
          placeholder="Content idea"
          value={form.title}
          className="p-2 bg-neutral-800 rounded flex-1"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <select
          value={form.platform}
          className="p-2 bg-neutral-800 rounded"
          onChange={(e) => setForm({ ...form, platform: e.target.value })}
        >
          <option>Instagram</option>
          <option>Gaming</option>
          <option>WorkStream</option>
        </select>

        <button className="bg-blue-500 px-4 rounded">Add</button>
      </form>

      {/* Workflow Board */}

      <div className="grid md:grid-cols-4 gap-6">
        {statuses.map((status) => (
          <div key={status} className="bg-neutral-900 p-4 rounded-xl">
            <h2 className="font-semibold mb-4">{status}</h2>

            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  tasks={tasks}
                  setTasks={setTasks}
                  setLatestUploads={setLatestUploads}
                />
              ))}
          </div>
        ))}
      </div>

      <div className="bg-neutral-900 p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Completed Content</h2>

        <table className="w-full text-left">
          <thead className="text-neutral-400">
            <tr>
              <th>Title</th>
              <th>Platform</th>
              <th>Link</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {contentData.latestUploads
              .map((task) => (
                <CompletedRow
                  key={task.id}
                  task={task}
                  tasks={latestUploads}
                  setTasks={setLatestUploads}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CompletedRow({ task, tasks, setTasks }: any) {

  const [link, setLink] = useState(task.link || "")

  async function saveLink() {

    const res = await fetch("/api/admin/content/link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: task.id,
        link
      })
    })

    const data = await res.json()

    setTasks(data.latestUploads)

  }

  return (

    <tr className="border-t border-neutral-800">

      <td className="py-3">
        {task.title}
      </td>

      <td>
        {task.platform}
      </td>

      <td className="w-[300px]">

        <input
          value={link}
          placeholder="Paste content link"
          className="p-1 bg-neutral-800 rounded w-60"
          onChange={(e) => setLink(e.target.value)}
        />

      </td>

      <td>

        <button
          onClick={saveLink}
          className="text-blue-400 text-sm px-2 py-1 border border-blue-400 rounded"
        >
          Save
        </button>

      </td>

    </tr>

  )

}
