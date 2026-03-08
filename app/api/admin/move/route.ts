import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

const workflow = ["Idea", "Execution", "Editing", "Scheduled"]

export async function POST(req: Request) {

  const { id } = await req.json()

  const filePath = path.join(
    process.cwd(),
    "app/data/content.json"
  )

  const file = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  )

  const task = file.upcomingContent.find((t: any) => t.id === id)

  const index = workflow.indexOf(task.status)

  if (index < workflow.length - 1) {
    task.status = workflow[index + 1]
  }
  else{
    file.upcomingContent = file.upcomingContent.filter((t: any) => t.id !== id)
    // Move to latest uploads
    file.latestUploads.push(task);
    file.latestUploads = file.latestUploads.slice(-5); // Keep only last 5 uploads
  }

  fs.writeFileSync(
    filePath,
    JSON.stringify(file, null, 2)
  )

  return NextResponse.json(file)

}