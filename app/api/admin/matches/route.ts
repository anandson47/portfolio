import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

  const body = await req.json()

  const filePath = path.join(
    process.cwd(),
    "app/data/cricket.json"
  )

  const file = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  )

  file.matchHistory.push({
    opponent: body.opponent,
    date: body.date,
    bowling: {
      overs: body.overs,
      runs: body.runs,
      wickets: body.wickets
    },
    "batting": {
        "runs": body.batRuns,
        "balls": body.batBalls
      },
      "fielding": {
        "catches": body.catches,
        "runOuts": body.runOuts
      }
  })

  file.matchHistory.sort(
    (a: any, b: any) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  /* Keep only last 5 */

  file.matchHistory = file.matchHistory.slice(0, 5)

  fs.writeFileSync(
    filePath,
    JSON.stringify(file, null, 2)
  )

  return NextResponse.json(file)
}