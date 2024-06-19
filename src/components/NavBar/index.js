// Write your code here.
import './index.css'

const NavBar = props => {
  const {showNav, score, topScore} = props

  return (
    <div className="navbar-bg-con">
      <div className="nav-logo-heading-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="nav-logo"
          alt="emoji logo"
        />

        <h1 className="nav-heading">Emoji Game</h1>
      </div>

      {showNav && (
        <div className="nav-logo-heading-con">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
