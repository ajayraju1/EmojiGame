// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {cardDetails, updateScore} = props
  const {id, emojiName, emojiUrl} = cardDetails

  const onClickUpdateScore = () => {
    updateScore(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-btn" onClick={onClickUpdateScore}>
        <img src={emojiUrl} className="emoji-img" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
