interface Match {
  opponent: string
  date: string

  bowling: {
    overs: number
    runs: number
    wickets: number
  }

  batting: {
    runs: number
    balls: number
  }

  fielding: {
    catches: number
    runOuts: number
  }
}

export default function MatchHistoryTable({ matches }: { matches: Match[] }) {

  return (
    <div className="bg-neutral-900 rounded-2xl p-6 overflow-x-auto">

      <table className="w-full text-left text-sm">

        <thead className="text-neutral-400">
          <tr>
            <th className="pb-3">Opponent</th>
            <th>Date</th>
            <th>Bowling</th>
            <th>Batting</th>
            <th>Fielding</th>
          </tr>
        </thead>

        <tbody>

          {matches.map((match, index) => (

            <tr
              key={index}
              className="border-t border-neutral-800"
            >

              <td className="py-3">{match.opponent}</td>

              <td>{match.date}</td>

              <td>
                {match.bowling.overs}-{match.bowling.runs}-{match.bowling.wickets}
              </td>

              <td>
                {match.batting.runs} ({match.batting.balls})
              </td>

              <td>
                {match.fielding.catches}c / {match.fielding.runOuts}ro
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}