// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, resetGame} = props

  let image
  let wonStatus
  let scoreMsg = ''

  const resetTheGame = () => {
    resetGame()
  }

  if (score === 12) {
    image = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    wonStatus = 'Won'
    scoreMsg = 'Best'
  } else {
    image = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    wonStatus = 'Lose'
  }

  return (
    <div className="card-con">
      <img src={image} className="card-img" alt="win or lose" />
      <div className="card-txt-con">
        <h1 className="won-status">You {wonStatus}</h1>
        <p className="score-msg">{scoreMsg} Score</p>
        <p className="final-score">{score}/12</p>
        <button className="play-again-btn" type="button" onClick={resetTheGame}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
