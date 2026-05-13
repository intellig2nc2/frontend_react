import React from 'react'

const scores = [
  {이름: "John", 국어:90, 영어:90, 수학:80, 과학:90},
  {이름: "Petter", 국어:90, 영어:90, 수학:80, 과학:90},
  {이름: "susan", 국어:90, 영어:90, 수학:80, 과학:90},
  {이름: "sue", 국어:90, 영어:90, 수학:80, 과학:90},
]

function ScoresTable() {
  return (
    <div>
      <table>
      <tr>
        {
          Object.keys(scores[0]).map(key=>(
            <th>{key}</th>
          ))
        }
        
      </tr>
      {scores.map(item=>(
        <tr>
          {
            Object.values(item).map(
              (value) => (<td>{value}</td>)
            )
          }
        </tr>
          )
        )
      }
      {/* {[0, 1, 2, 3].map(idx=>
        ( <tr>
        <td>{scores[idx].이름}</td>
        <td>{scores[idx].국어}</td>
        <td>{scores[idx].영어}</td>
        <td>{scores[idx].수학}</td>
        <td>{scores[idx].과학}</td>
      </tr>))} */}
      
    </table>
    </div>
  )
}

export default ScoresTable
