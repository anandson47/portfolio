import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

  const body = await req.json()

  const filePath = path.join(
    process.cwd(),
    "app/data/projects.json"
  )

  const file = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  )

  file.projects.push({
    title: body.title,
    description: body.description,
    link: body.link
  })

  fs.writeFileSync(
    filePath,
    JSON.stringify(file, null, 2)
  )

  return NextResponse.json(file)

}