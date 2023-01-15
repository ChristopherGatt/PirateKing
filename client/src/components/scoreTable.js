import React from 'react'

function ScoreTable() {
  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Score</td>
          </tr>
        </thead>
        <tbody>
          <tr className="table-body">
            <td>Futureee</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ScoreTable
