import React, { useState } from 'react'

const Statistics = props => {
  let total = (props.a + props.b + props.c)
  let avg = (props.a - props.c) / total
  let pos = (props.a) / total * 100
  
  if (total === 0) {
    return (
    <tbody>
      <tr>
        <td> No feedback given </td>
      </tr>
    </tbody>
    )
  } else {
    return(
      <tbody>
        <StatisticLine text='good' value={props.a} />
        <StatisticLine text='neutral' value={props.b} />
        <StatisticLine text='bad' value={props.c} />
        <StatisticLine text='all' value={total} />
        <StatisticLine text='average' value={avg}/>
        <StatisticLine text='positive' value={pos + '%'}/>
      </tbody>
      )
  }
}

const Button = ({onClick, text}) => {
  return(
  <button onClick={onClick}> {text} </button>
  )
}

const StatisticLine = props => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1> give feedback </h1>
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>
      <h1>statistics</h1>
      <table>
        <
        Statistics
        a={good}
        b={neutral}
        c={bad}
        />
      </table>
    </div>
  )
}

export default App
