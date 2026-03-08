import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

  const { id, link } = await req.json()

  const filePath = path.join(
    process.cwd(),
    "app/data/content.json"
  )

  const file = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  )

  const task = file.latestUploads.find((t: any) => t.id === id)

  if (task) {
    task.link = link
  }

  fs.writeFileSync(
    filePath,
    JSON.stringify(file, null, 2)
  )

  return NextResponse.json(file)

}