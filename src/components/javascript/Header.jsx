import { Link } from 'react-router-dom'
import '../css/Header.css'
import logo from '../../../logo.png'

const Header = () => {
  const getLogo = () => (
    <img src={logo} alt="PhilosoFeed Logo" style={{ width: '2.5rem', height: '2.5rem', objectFit: 'contain' }} />
  )

  const getTitle = () => "PhilosoFeed"

  const getNavLinks = () => (
    <>
      <Link to="/" className="headerNavLink">Home</Link>
      <Link to="/chat" className="headerNavLink">Chat</Link>
      <Link to="/debate" className="headerNavLink">Debate</Link>
    </>
  )

  return (
    <header className="headerContainer headerBorderDark">
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
      {/* Right section removed for simplicity */}
    </header>
  )
}

export default Header
