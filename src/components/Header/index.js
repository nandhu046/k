import Popup from 'reactjs-popup'
import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import {BsInfoCircleFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

class Header extends Component {
  moveToHome = () => {
    const {history} = this.props
    history.push('/')
  }

  render() {
    return (
      <>
        <nav className="nav-bar">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
              alt="website logo"
              className="web-logo"
            />
          </Link>
          <Popup
            trigger={
              /* eslint-disable-next-line */
              <button className="ham-icon" data-testid="hamburgerIconButton">
                <GiHamburgerMenu className="menu-icon" />
              </button>
            }
            modal
          >
            {close => (
              <>
                {/* eslint-disable-next-line */}
                <button className="close-btn" data-testid="closeButton">
                  <IoMdClose
                    className="trigger-button"
                    onClick={() => close()}
                  />
                </button>
                <ul className="pop-container">
                  <Link to="/" className="link">
                    <li className="option-container">
                    <button
                      data-testid="closeButton"
                      onClick={() => close()}
                      className="close-modal"
                    >
                      <AiFillHome className="option" />
                      <p>Home</p>
                    </button>
                    </li>
                  </Link>
                  <Link to="/about" className="link">
                    <li className="option-container">
                    <button
                      data-testid="closeButton"
                      onClick={() => close()}
                      className="close-modal"
                    >
                      <BsInfoCircleFill className="option" />
                      <p>About</p>
                    </button>
                    </li>
                  </Link>
                </ul>
              </>
            )}
          </Popup>
        </nav>
        <hr className="line" />
      </>
    )
  }
}

export default withRouter(Header)
