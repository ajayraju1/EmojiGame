// - Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

// Write your code here.

class EmojiGame extends Component {
  state = {
    showGamePage: true,
    score: 0,
    topScore: 0,
    emojiArray: [],
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onUpdateScore = id => {
    const {emojiArray} = this.state

    if (emojiArray.includes(id)) {
      this.setState({showGamePage: false})
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        emojiArray: [...emojiArray, id],
      }))

      const {score} = this.state
      if (score === 11) {
        this.setState({showGamePage: false})
      }
    }
  }

  resetTheGame = () => {
    const {score, topScore} = this.state
    this.setState({showGamePage: true, emojiArray: [], score: 0})
    if (score > topScore) {
      this.setState({topScore: score})
    }
  }

  render() {
    const {showGamePage, score, topScore} = this.state

    let card

    if (showGamePage) {
      card = (
        <ul className="game-con">
          {this.shuffledEmojisList().map(eachObject => (
            <EmojiCard
              key={eachObject.id}
              cardDetails={eachObject}
              updateScore={this.onUpdateScore}
            />
          ))}
        </ul>
      )
    } else {
      card = (
        <div className="win-Lose-con">
          <WinOrLoseCard score={score} resetGame={this.resetTheGame} />
        </div>
      )
    }

    return (
      <div className="emoji-game-bg">
        <NavBar showNav={showGamePage} score={score} topScore={topScore} />
        <div className="emoji-game-body-con">{card}</div>
      </div>
    )
  }
}

export default EmojiGame
