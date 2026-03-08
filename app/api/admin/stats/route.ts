import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

  const stats = await req.json()

  const filePath = path.join(
    process.cwd(),
    "app/data/cricket.json"
  )

  const file = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  )

  file.careerStats = stats

  fs.writeFileSync(
    filePath,
    JSON.stringify(file, null, 2)
  )

  return NextResponse.json(file)

}