import { Link } from 'react-router-dom'
import '../css/Header.css'
import logo from '../../../logo.png'

const Header = ({ variant = 'home' }) => {
  const getLogo = () => {
    return (
      <img src={logo} alt="PhilosoFeed Logo" style={{ width: '2.5rem', height: '2.5rem', objectFit: 'contain' }} />
    )
  }

  const getTitle = () => {
    if (variant === 'create-debate') return "Philosopher's Arena"
    if (variant === 'chat') return "Philosopher Chat"
    if (variant === 'debate') return "Philosopher Chat"
    return "PhilosoFeed"
  }

  const getNavLinks = () => {
    if (variant === 'create-debate') {
      return (
        <>
          <Link to="/" className="headerNavLink">Home</Link>
          <Link to="/chat" className="headerNavLink">Chat</Link>
        </>
      )
    }
    if (variant === 'chat') {
      return (
        <>
          <Link to="/" className="headerNavLink">New Chat</Link>
          <Link to="/" className="headerNavLink">History</Link>
          <Link to="/" className="headerNavLink">Settings</Link>
        </>
      )
    }
    if (variant === 'debate') {
      return (
        <>
          <Link to="/" className="headerNavLink">New Chat</Link>
          <Link to="/" className="headerNavLink">History</Link>
          <Link to="/" className="headerNavLink">Settings</Link>
        </>
      )
    }
    // Home variant
    return (
      <>
        <Link to="/" className="headerNavLink">Home</Link>
        <Link to="/chat" className="headerNavLink">Chat</Link>
        <Link to="/create-debate" className="headerNavLink">Debate</Link>
      </>
    )
  }

  const getHeaderButton = () => {
    if (variant === 'create-debate') {
      return (
        <button className="headerButton headerButtonSquared headerButtonDark">
          <div className="headerButtonIcon" data-icon="Bell" data-size="20px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
            </svg>
          </div>
        </button>
      )
    }
    if (variant === 'chat') {
      return (
        <button className="headerButton headerButtonRounded headerButtonMedium">
          <div className="headerButtonIcon" data-icon="Gear" data-size="20px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
            </svg>
          </div>
        </button>
      )
    }
    return null
  }

  const getBorderColor = () => {
    if (variant === 'create-debate' || variant === 'home') return 'headerBorderDark'
    return 'headerBorderLight'
  }

  return (
    <header className={`headerContainer ${getBorderColor()}`}>
      {variant === 'home' ? (
        <>
          <div className="headerLeftSectionHome">
            <div className="headerLeftSection">
              <div className="headerLogoContainer">
                {getLogo()}
              </div>
              <h2 className="headerTitle">{getTitle()}</h2>
            </div>
            <div className="headerNavLinks">
              {getNavLinks()}
            </div>
          </div>
          <div className="headerRightSection">
            {getHeaderButton()}
          </div>
        </>
      ) : (
        <>
          <div className="headerLeftSection">
            <div className="headerLogoContainer">
              {getLogo()}
            </div>
            <h2 className="headerTitle">{getTitle()}</h2>
          </div>
          <div className="headerRightSection">
            <div className="headerNavLinks">
              {getNavLinks()}
            </div>
            {getHeaderButton()}
          </div>
        </>
      )}
    </header>
  )
}

export default Header
