import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

  const body = await req.json()

  const filePath = path.join(
    process.cwd(),
    "app/data/content.json"
  )

  const file = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  )

  const newTask = {
    id: Date.now(),
    title: body.title,
    platform: body.platform,
    status: "Idea"
  }

  file.upcomingContent.push(newTask)

  fs.writeFileSync(
    filePath,
    JSON.stringify(file, null, 2)
  )

  return NextResponse.json(file)

}