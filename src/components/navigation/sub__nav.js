import React from "react"
import Hamburger from "./hamburgerButton"
import Scroll from "../Scroll"

class StickyNav extends React.Component {
  showModal() {
    this.props.modalState()
  }

  render() {
    return (
      <div id="sub__nav" className={this.props.sticky ? "alt" : "hidden"}>
        <div className="sub__nav-top-bar">
          <div className="sub__nav-left-part">
            <Hamburger
              className="sub__nav-hamburger-button  hamburger-button simple-button space-evenly"
              sideDrawerState={this.props.sideDrawerState}
            />
            <div className="sub__nav-branding">
              <div className="sub__nav-branding-message">
                <span className="smaller-text">EAT DRINK , ENJOY</span>
              </div>
            </div>
          </div>
          <div className="sub__nav-mid-part">
            <div className="menus-option">
              <Scroll type="class" element="food__sub-nav">
                <button className="simple-button">
                  <small>MENU</small>
                </button>
              </Scroll>
            </div>
            <div className="reservations-option">
              <Scroll type="id" element="reservations">
                <button className="simple-button">
                  <small>RESERVATIONS</small>
                </button>
              </Scroll>
            </div>
            <div className="groups-option">
              <Scroll type="id" element="groups">
                <button className="simple-button">
                  <small>GROUPS</small>
                </button>
              </Scroll>
            </div>
            <div className="contact-option">
              <Scroll type="id" element="contact">
                <button className="simple-button">
                  <small>CONTACT</small>
                </button>
              </Scroll>
            </div>
          </div>
          <div className="sub__nav-right-part">
            <div className="sub__nav-utilities-wrapper">
              <div className="sub__nav-utilities">
                <div className="sub__nav-utilities-cell--gift-card">
                  <button
                    className="button gift-card-button"
                    onClick={this.props.giftCardModalState.bind(this)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 15"
                      className="header-utilities-trigger-icon"
                    >
                      <path
                        fill="currentColor"
                        d="M14.2,3.2h-1.7c0.1-0.2,0.1-0.5,0.1-0.8c0-1.3-1.1-2.4-2.4-2.4c-0.8,0-1.5,0.4-2,1.1L7.9,1.6  L7.5,1.1C7.1,0.4,6.4,0,5.5,0C4.2,0,3.2,1.1,3.2,2.4c0,0.3,0.1,0.5,0.1,0.8H1.6C0.7,3.2,0,3.9,0,4.7l0,8.7C0,14.3,0.7,15,1.6,15  h12.6c0.9,0,1.6-0.7,1.6-1.6V4.7C15.8,3.9,15.1,3.2,14.2,3.2z M10.3,1.6c0.4,0,0.8,0.4,0.8,0.8s-0.4,0.8-0.8,0.8S9.5,2.8,9.5,2.4  S9.8,1.6,10.3,1.6z M5.5,1.6c0.4,0,0.8,0.4,0.8,0.8S6,3.2,5.5,3.2c-0.4,0-0.8-0.4-0.8-0.8S5.1,1.6,5.5,1.6z M14.2,13.4H1.6v-1.6  h12.6V13.4z M14.2,9.5H1.6V4.7h4L3.9,7l1.3,0.9l1.9-2.6l0.8-1.1l0.8,1.1l1.9,2.6L11.8,7l-1.6-2.2h4V9.5z"
                      />
                    </svg>
                    <span> GIFT CARDS</span>
                  </button>
                </div>
                <div className="sub__nav-utilities-cell--book">
                  <button
                    className="button-inverted"
                    onClick={this.showModal.bind(this)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 15.6"
                      className="header-utilities-trigger-icon header-book-icon"
                    >
                      <path
                        fill="currentColor"
                        d="M4.7,7H3.1v1.6h1.6V7z M7.8,7H6.2v1.6h1.6V7z M10.9,7H9.3v1.6h1.6V7z M12.4,1.6h-0.8V0h-1.6v1.6H3.9V0H2.3v1.6  H1.6C0.7,1.6,0,2.3,0,3.1L0,14c0,0.9,0.7,1.6,1.6,1.6h10.9c0.9,0,1.6-0.7,1.6-1.6V3.1C14,2.3,13.3,1.6,12.4,1.6z M12.4,14H1.6V5.4  h10.9V14z"
                      />
                    </svg>
                    <span>BOOK NOW</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page_cta page_cta--sticky page_cta--dark_scheme">
          <button
            className="button-inverted booking-option"
            onClick={this.showModal.bind(this)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 15.6"
              className="header-utilities-trigger-icon header-book-icon"
            >
              <path
                fill="currentColor"
                d="M4.7,7H3.1v1.6h1.6V7z M7.8,7H6.2v1.6h1.6V7z M10.9,7H9.3v1.6h1.6V7z M12.4,1.6h-0.8V0h-1.6v1.6H3.9V0H2.3v1.6  H1.6C0.7,1.6,0,2.3,0,3.1L0,14c0,0.9,0.7,1.6,1.6,1.6h10.9c0.9,0,1.6-0.7,1.6-1.6V3.1C14,2.3,13.3,1.6,12.4,1.6z M12.4,14H1.6V5.4  h10.9V14z"
              />
            </svg>
            BOOK NOW
          </button>
        </div>
      </div>
    )
  }
}

export default StickyNav
