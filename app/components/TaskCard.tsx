export function TaskCard({ task, tasks, setTasks , setLatestUploads}: any) {

  async function moveTask() {

    const res = await fetch("/api/admin/move", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: task.id })
    })

    const data = await res.json()

    setTasks(data.upcomingContent)

    setLatestUploads(data.latestUploads)

  }

  return (

    <div className="bg-neutral-800 p-3 rounded mb-3">

      <p className="font-medium">
        {task.title}
      </p>

      <p className="text-xs text-neutral-400">
        {task.platform}
      </p>

      <button
        onClick={moveTask}
        className="text-xs text-blue-400 mt-2"
      >
        Move →
      </button>

    </div>

  )

}