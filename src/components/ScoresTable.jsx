import React from 'react'



function ScoresTable({scores}) {
  return (
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
  )
}

export default ScoresTable
