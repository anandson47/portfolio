import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

  const body = await req.json()

  const filePath = path.join(
    process.cwd(),
    "app/data/fitness.json"
  )

  const file = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  )

  file.weightData.push({
    date: body.date,
    caloriesConsumed: Number(body.caloriesConsumed),
    caloriesBurned: Number(body.caloriesBurned),
    weight: Number(body.weight)
  })

  fs.writeFileSync(
    filePath,
    JSON.stringify(file, null, 2)
  )

  return NextResponse.json(file)

}