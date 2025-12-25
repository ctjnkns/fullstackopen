import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Display = () => {
  return (
    <h1>give feedback</h1>
  )
}

const StatisticsLine = (props) => {
  return (
    <>
    <tbody>
    <tr>
    <td> {props.text} </td>
    <td> {props.stat} </td>
    </tr>
    </tbody>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <>
      <h1>statistics</h1>
      <table>
      <StatisticsLine text='good' stat={good} />
      <StatisticsLine text='neutral' stat={neutral} />
      <StatisticsLine text='bad' stat={bad} />
      <StatisticsLine text='all' stat={good + bad + neutral} />
      <StatisticsLine text='average' stat={(good - bad) / (good + bad + neutral)} />
      <StatisticsLine text='positive' stat={((good ) / (good + bad + neutral) * 100) + '%'} />
      </table>
      </>
    )
  }
  return (
    <>
    <h1>statistics</h1>
    <p>No feedback given</p>
    </>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <>
      <Display />
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App