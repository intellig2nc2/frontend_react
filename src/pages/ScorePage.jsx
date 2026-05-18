import React, {useState} from 'react'
import Form from '../components/score/Form';
import ScoresTable from '../components/score/ScoresTable';


const initialInfo = {
   이름: "", 
   국어: null,
   영어: null,
   수학: null,
   과학: null,
} 

const initialScores = [
  {이름: "John", 국어:90, 영어:90, 수학:80, 과학:90},
  {이름: "Petter", 국어:90, 영어:90, 수학:80, 과학:90},
  {이름: "susan", 국어:90, 영어:90, 수학:80, 과학:90},
  {이름: "sue", 국어:90, 영어:90, 수학:80, 과학:90},

]

function ScorePage() {
  const [info, setInfo] = useState(initialInfo);
  const [scores, setScores] = useState(initialScores);
  return (
    <>
        <ScoresTable scores={scores}/>
        <Form info={info} setInfo={setInfo} setScores={setScores}/>
    </>
  )
}

export default ScorePage
