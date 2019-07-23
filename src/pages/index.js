import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Modal from "react-modal"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { withStyles } from "@material-ui/core/styles"
// import ImageCarousel from "../components/imageCarousel/carousel"
import Waypoint from "react-waypoint"
import Scroll from "../components/Scroll"
import Layout from "../components/layout/layout"
import Header from "../components/header/header.1"
import SubNav from "../components/navigation/sub__nav"
import GoogleMap from "../components/googleMaps/map"
import Food from "../components/menus/food/food.1"
import Contact from "../components/contact/contact"
import Reservation from "../components/reservation/reservation"
import GiftCards from "../components/giftCards/giftCards"
import { MdClose } from "react-icons/md"

Modal.setAppElement("#___gatsby")

const drawStyles = {
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickySubNav: false,
      stickyMobileNav: false,
      modalIsOpen: false,
      giftCardModalIsOpen: false,
      showAllTimes: false,
      showMaps: false,
      dynamicClassNameList: "",
      left: false,
      enableWaypoint: false,
    }

    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.toggleTimesVisibility = this.toggleTimesVisibility.bind(this)
    this.toggleAllDetailsExceptLocation = this.toggleAllDetailsExceptLocation.bind(
      this
    )
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      this.setState({ enableWaypoint: true })
    }
  }

  _handleMobileNavWaypointEnter = () => {
    this.setState(() => ({ stickyMobileNav: false }))
  }

  _handleMobileNavWaypointLeave = () => {
    this.setState(() => ({ stickyMobileNav: true }))
  }

  _handleSubNavWaypointEnter = () => {
    this.setState(() => ({ stickySubNav: false }))
  }

  _handleSubNavWaypointLeave = () => {
    this.setState(() => ({ stickySubNav: true }))
  }

  _handleShowModal = () => {
    console.log("Setting state of isOpen")
    this.setState({
      modalIsOpen: true,
    })
  }

  _handleShowGiftCardModal = () => {
    this.setState({
      giftCardModalIsOpen: true,
    })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({ modalIsOpen: false, giftCardModalIsOpen: false })
  }

  toggleDrawer = (side, open) => () => {
    console.log("opening drawer")
    this.setState({
      [side]: open,
    })
  }

  toggleTimesVisibility() {
    this.setState({ showAllTimes: !this.state.showAllTimes })
  }

  toggleAllDetailsExceptLocation() {
    this.setState({ showMaps: !this.state.showMaps })

    // console.log(this.state.showMaps)
    if (this.state.showMaps) {
      this.setState({ dynamicClassNameList: "" })
    } else {
      this.setState({
        dynamicClassNameList: "map-visible",
      })
    }
  }

  render() {
    // is scrolling feature

    // modal styling
    // transition styling found in ../styles/global.css
    const style = {
      content: {
        position: "relative",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        border: "0",
        borderRadius: "4px",
        background: "rgba(45,45,45,0.75)",
      },

      overlay: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        zIndex: 20000,
      },
    }

    // open times
    const openTimes = [
      { label: "now", time: "11am - 11pm" },
      { label: "mon-sat", time: "2pm - 11pm" },
      { label: "sun", time: "11am -10:30pm" },
    ]

    const dynamicClassNames = [this.state.dynamicClassNameList]
    // drawer set up
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <List>
          <Scroll type="class" element="food__sub-nav">
            <ListItem button key="menu" style={{ textAlign: "center" }}>
              <ListItemText primary="Menu" />
            </ListItem>
          </Scroll>

          <ListItem button key="gift" style={{ textAlign: "center" }}>
            <ListItemText
              primary="Gift Cards"
              onClick={this._handleShowGiftCardModal.bind(this)}
            />
          </ListItem>

          <Scroll type="id" element="contact">
            <ListItem button key="contact" style={{ textAlign: "center" }}>
              <ListItemText primary="Contact" />
            </ListItem>
          </Scroll>
          <Scroll type="id" element="reservations-scollTo-point">
            <ListItem button key="reservations" style={{ textAlign: "center" }}>
              <ListItemText primary="Reservations" />
            </ListItem>
          </Scroll>
          <Scroll type="id" element="groups">
            <ListItem button key="groups" style={{ textAlign: "center" }}>
              <ListItemText primary="Groups" />
            </ListItem>
          </Scroll>
          <Scroll type="id" element="private-events-scollTo-point">
            <ListItem
              button
              key="private_events"
              style={{ textAlign: "center" }}
            >
              <ListItemText primary="Private Events" />
            </ListItem>
          </Scroll>
        </List>
        <Divider />
        <List>
          <ListItem style={{ flexFlow: "column" }}>
            <div className="phone_number">PH: (02) 9130 1566</div>
            <br />
            {/* eslint-disable jsx-a11y/anchor-has-content */}
            <a
              href="tel:0291301566"
              id="callnowbutton"
              title="call now"
              aria-label="call us button"
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          {[
            "106 Curlewis St, Bondi Beach NSW 2026",
            "Dinner tuesday - Sunday",
            "Breakfast - Firday to Sunday",
          ].map((text, index) => (
            <ListItem
              key={text}
              style={{ flexFlow: "column", textAlign: "center" }}
            >
              {text}
            </ListItem>
          ))}
        </List>
      </div>
    )
    return (
      <Layout>
        <Helmet title="Brown Sugar - v2" />
        <Header
          modalState={this._handleShowModal.bind(this)}
          giftCardModalState={this._handleShowGiftCardModal.bind(this)}
          sticky={this.state.stickySubNav}
          sideDrawerState={this.toggleDrawer}
        />

        <Modal
          closeTimeoutMS={300}
          style={style}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <div
            className="modal__toolbar"
            ref={toolbar => (this.toolbar = toolbar)}
          >
            <div ref={close => (this.close = close)} onClick={this.closeModal}>
              <MdClose className="modal__close" />
            </div>
          </div>
          <h2 style={{ color: "white" }}>
            Make a booking with our booking partner
          </h2>
          <br />
          <Reservation />
        </Modal>

        <Modal
          closeTimeoutMS={300}
          style={style}
          isOpen={this.state.giftCardModalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <div
            className="modal__toolbar"
            ref={toolbar => (this.toolbar = toolbar)}
          >
            <div ref={close => (this.close = close)} onClick={this.closeModal}>
              <MdClose className="modal__close" />
            </div>
          </div>

          <GiftCards />
        </Modal>

        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>

        <SubNav
          sticky={this.state.stickySubNav}
          modalState={this._handleShowModal.bind(this)}
          giftCardModalState={this._handleShowGiftCardModal.bind(this)}
          sideDrawerState={this.toggleDrawer}
        />

        {this.state.enableWaypoint && (
          <Waypoint
            scrollableAncestor={null}
            onEnter={this._handleSubNavWaypointEnter}
            onLeave={this._handleSubNavWaypointLeave}
          />
        )}

        <section id="overview" className="venue-details">
          <div className="page_section container">
            <div className="page_section-wrapper">
              <div className={"page_section-inner " + dynamicClassNames}>
                <div className="section__details">
                  {/* open hours */}

                  <div className="section__details-column">
                    <div className="section__details-column_title">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 45.6 45.6"
                      >
                        <g>
                          <path
                            fill="currentColor"
                            d="M22.8,45.6C10.2,45.6,0,35.4,0,22.8S10.2,0,22.8,0s22.8,10.2,22.8,22.8S35.4,45.6,22.8,45.6z M22.8,3C11.9,3,3,11.9,3,22.8   s8.9,19.8,19.8,19.8s19.8-8.9,19.8-19.8S33.7,3,22.8,3z"
                          />
                          <polygon
                            stroke="currentColor"
                            points="22.8,24.1 22.8,12.6 19.8,12.6 19.8,25.5 19.8,25.5 19.8,25.5 28.4,33 30.2,30.7  "
                          />
                        </g>
                      </svg>
                      <h4>
                        <span>OPEN HOURS</span>
                      </h4>
                    </div>
                    <div className="section__details-column-inner">
                      <div className="section__details-times">
                        <p className="section_details-times-row">
                          <strong>Today : </strong>
                          <span>11:30 am - 12:00 am</span>
                        </p>
                        {this.state.showAllTimes && (
                          <div className="more-times">
                            {openTimes.map(function(d, index) {
                              console.log(d)
                              return (
                                <div>
                                  <li
                                    style={{ listStyleType: "none" }}
                                    key={index}
                                  >
                                    <strong>{d.label}</strong> : {d.time}
                                  </li>
                                </div>
                              )
                            })}
                          </div>
                        )}
                        {!this.state.showAllTimes && (
                          <div
                            className="cta--down"
                            onClick={this.toggleTimesVisibility}
                          >
                            <span className="button-link cta-text">
                              Show more
                            </span>
                          </div>
                        )}
                        {this.state.showAllTimes && (
                          <div
                            className="cta--down"
                            onClick={this.toggleTimesVisibility}
                          >
                            <span className="button-link cta-text">
                              Show less
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="section__details-column section__details-column--location">
                    <div className="section__details-column_title">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 15 18"
                      >
                        <path
                          fill="currentColor"
                          d="M7.4,18.4l-5.2-6.5c-1.1-1.2-1.7-2.9-1.7-4.5c0-3.8,3.1-6.9,6.9-6.9c3.8,0,6.9,3.1,6.9,6.9  c0,1.7-0.6,3.3-1.7,4.5L7.4,18.4z M7.4,1.5c-3.2,0-5.9,2.6-5.9,5.9c0,1.4,0.5,2.8,1.5,3.9l4.4,5.5l4.4-5.5c1-1.1,1.5-2.5,1.5-3.9  C13.3,4.1,10.6,1.5,7.4,1.5z M7.4,10.2c-1.5,0-2.8-1.3-2.8-2.8c0-1.5,1.3-2.8,2.8-2.8c1.5,0,2.8,1.3,2.8,2.8  C10.2,8.9,8.9,10.2,7.4,10.2z M7.4,5.6c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8C9.2,6.4,8.4,5.6,7.4,5.6z"
                        />
                      </svg>
                      <h4>
                        <span>LOCATION</span>
                      </h4>
                    </div>
                    <div className="section__details-column-inner">
                      <p>106 Curlewis St, Bondi Beach NSW 2026</p>
                      {!this.state.showMaps && (
                        <div
                          onClick={this.toggleAllDetailsExceptLocation}
                          className="cta--down"
                        >
                          <span className="button-link cta-text ">
                            Map &amp; directions
                          </span>
                        </div>
                      )}
                      {this.state.showMaps && (
                        <div
                          className="cta cta--small cta--down  sub__nav-button"
                          onClick={this.toggleAllDetailsExceptLocation}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 7.6"
                            version="1.1"
                            className="injected-svg cta-icon"
                          >
                            <path
                              fill="currentColor"
                              d="M0,3.8l4.2,3.8V0L0,3.8z M16,3.2H4.2v1.2H16V3.2z"
                            />
                          </svg>
                          <button>
                            {" "}
                            <span className="cta">Back to overview</span>{" "}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="section__details-column section__details-location">
                    <div className="section__details-info">
                      <div className="section__details-info-inner">
                        <h4>
                          <span>Getting There</span>
                        </h4>
                        <div className="section__details-info-inner-content">
                          Located on the corner of Bondi Rd. and Denham St.,
                          there is plenty of street parking on Denham St. near
                          the main entrance of The Bottle Shop.
                          <br />
                          <br />
                          <span>By Car By Public Transport</span>
                          <br />
                          The closest station is Bondi Junction. Take the train
                          from Martin Place station to Bondi Junction. From the
                          station proceed to Stand A where you can then catch
                          the 380 bus to Bondi Rd. at Castle St.
                        </div>
                      </div>
                    </div>

                    <div className="section__details-map">
                      <GoogleMap />
                    </div>
                  </div>
                  {/* contact us  */}

                  <div className="section__details-column">
                    <div className="section__details-column_title">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 38.6 38.6"
                      >
                        <path
                          fill="currentColor"
                          d="M30.6,2.4V0h-3v2.4H11V0H8v2.4H0v13.1v23.2h26.4v0l12.2-12.2l0,0h0v-11V2.4H30.6z M26.4,34.3v-7.9h7.9L26.4,34.3z   M35.6,23.4H23.4v12.2H3V15.5h32.5V23.4z M35.6,12.4H3v-7H8v2.4h3V5.4h16.5v2.4h3V5.4h5V12.4z"
                        />
                      </svg>
                      <h4>
                        <span>CONTACT US</span>
                      </h4>
                    </div>
                    <div className="section__details-column-inner ">
                      <p>Bookings &amp; Enquiries</p>
                      <a
                        href="tel:+61 2 91301566"
                        style={{ marginTop: "20px" }}
                        className="cta--down"
                      >
                        +61 2 91301566
                      </a>
                    </div>
                  </div>
                  {/* )} */}

                  {/* walk-ins message */}
                  <div className="section__details-column">
                    <div className="section__details-column_title">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 55.3 43.7"
                        fill="#fff"
                      >
                        <g>
                          <rect y="40.7" width="55.3" height="3" />
                          <path d="M54.6,34.8c0-14.4-11.3-26.3-25.5-27.1V3h5.6V0H20.5v3h5.6v4.6C11.8,8.3,0.3,20.2,0.3,34.8v1.5h54.4V34.8z M3.3,33.3   c0.8-12.6,11.3-22.7,24.1-22.7s23.4,10,24.1,22.7H3.3z" />
                        </g>
                      </svg>
                      <h4>
                        <span>WALK-INS WELCOME</span>
                      </h4>
                    </div>
                    <div className="section__details-column-inner">
                      Please note that we take reservations and we also leave
                      space for walk in tables each day. These tables may be
                      limited especially in wet weather, but we will always do
                      our best to find you a spot.Book &nbsp;
                      <div
                        title="open reservation calendar"
                        tabIndex="0"
                        onClick={this._handleShowModal}
                        className="cta"
                      >
                        online
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="message" className="message">
          <div className="page_section container">
            <div className="section__details">
              <h3
                style={{
                  width: "80%",
                  textAlign: "center",
                  letterSpacing: ".09333em",
                }}
              >
                Our philosophy is simple: we endeavour to bring a small slice of
                the Mediterranean to Bondi Beach with creative, ethical and
                seasonal menu offerings.
              </h3>
            </div>
          </div>
        </section>

        {/* <ImageCarousel /> */}

        <section className="page_section container">
          <div className="page__section-border" />
        </section>

        <section id="about_us" className="page_section container">
          <div className="page_section container">
            <div className="section__details">
              <div>
                <h1>About Us</h1>
              </div>

              <div className="section__details-info-inner-content">
                A relaxed, contemporary neighborhood bistro run by dedicated
                industry professionals committed to delivering a memorable
                dinning (and wining) experience. Brother and sister duo Neil
                &amp; Lianne Gottheiner have created a unique Bondi institution
                with a vibrant, welcoming ambience catering for diners of all
                persuasions.
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="parallax-1" />
        </section>
        <section className="page_section container">
          <Food />
          <div className="page__section-border" />
        </section>

        <section className="parallax-2" />

        <section id="contact" className="page_section container">
          <div className="page_section container">
            <div className="section__details align-top">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <h1>Contact Us</h1>

                <div style={{ marginRight: "10px" }}>
                  <a
                    href="facebook.com"
                    alt="company facebook page"
                    title="company facebook page"
                  >
                    <svg
                      height="50px"
                      version="1.1"
                      viewBox="0 0 50 50"
                      width="50px"
                    >
                      <title />
                      <defs />
                      <g
                        fill="none"
                        fillRule="evenodd"
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                      >
                        <g fill="#000000" id="Facebook">
                          <path
                            d="M25,50 C38.8071194,50 50,38.8071194 50,25 C50,11.1928806 38.8071194,0 25,0 C11.1928806,0 0,11.1928806 0,25 C0,38.8071194 11.1928806,50 25,50 Z M25,47 C37.1502651,47 47,37.1502651 47,25 C47,12.8497349 37.1502651,3 25,3 C12.8497349,3 3,12.8497349 3,25 C3,37.1502651 12.8497349,47 25,47 Z M26.8145197,36 L26.8145197,24.998712 L30.0687449,24.998712 L30.5,21.2076072 L26.8145197,21.2076072 L26.8200486,19.3101227 C26.8200486,18.3213442 26.9207209,17.7915341 28.4425538,17.7915341 L30.4769629,17.7915341 L30.4769629,14 L27.2222769,14 C23.3128757,14 21.9368678,15.8390937 21.9368678,18.9318709 L21.9368678,21.2080366 L19.5,21.2080366 L19.5,24.9991413 L21.9368678,24.9991413 L21.9368678,36 L26.8145197,36 Z M26.8145197,36"
                            id="Oval-1"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="instagram.com"
                    alt="company instagram page"
                    title="company instagram page"
                  >
                    <svg
                      height="50px"
                      version="1.1"
                      viewBox="0 0 50 50"
                      width="50px"
                    >
                      <title />
                      <defs />
                      <g
                        fill="none"
                        fillRule="evenodd"
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                      >
                        <g fill="#000000" id="Intsagram">
                          <path
                            d="M25,0 C11.1928806,0 0,11.1928806 0,25 C0,38.8071194 11.1928806,50 25,50 C38.8071194,50 50,38.8071194 50,25 C50,11.1928806 38.8071194,0 25,0 Z M25,3 C12.8497349,3 3,12.8497349 3,25 C3,37.1502651 12.8497349,47 25,47 C37.1502651,47 47,37.1502651 47,25 C47,12.8497349 37.1502651,3 25,3 Z M35.9513128,34.5096659 C35.9701595,34.4075385 35.9839804,34.3037693 36,34.2013135 L36,15.7986865 C35.9846086,15.6978726 35.9714159,15.5967304 35.9525693,15.496245 C35.7600194,14.4654483 34.9467868,13.6655054 33.9482288,13.5226585 C33.9067662,13.517076 33.8662459,13.5075528 33.8254116,13.5 L16.1745884,13.5 C16.0681049,13.5200314 15.9609932,13.5351371 15.8560802,13.5600942 C14.8813947,13.7922616 14.1601965,14.6128926 14.0213595,15.6453312 C14.0157055,15.6883495 14.0072245,15.7310394 14,15.7740577 L14,34.2269275 C14.0201031,34.3438321 14.0361227,34.4617219 14.0612516,34.5779697 C14.2767315,35.5742861 15.0902783,36.3466448 16.0580534,36.4766848 C16.1048559,36.4825957 16.1519725,36.4921188 16.198775,36.5 L33.801225,36.5 C33.9155613,36.4796402 34.0302117,36.4628926 34.1432916,36.4372787 C35.0416482,36.2379497 35.775725,35.454426 35.9513128,34.5096659 Z M16.380331,33.0989292 C16.380331,33.5885494 16.7858479,34.0095374 17.254187,34.0095374 C22.4169106,34.0098658 27.5793201,34.0098658 32.7420437,34.0095374 C33.2147803,34.0095374 33.6180985,33.5892062 33.6180985,33.0959737 C33.6184126,29.6962164 33.6180985,26.2967875 33.6180985,22.8973587 L33.6180985,22.8267561 L31.5179543,22.8267561 C31.8144748,23.81749 31.9055669,24.8252998 31.7893459,25.8524843 C31.6724968,26.8799971 31.3558732,27.8362507 30.8401034,28.7192747 C30.3240195,29.6032838 29.6549637,30.3355797 28.8357629,30.9184609 C26.7123745,32.4303398 23.9167892,32.5633352 21.6636731,31.2412621 C20.5247077,30.5736579 19.6304345,29.6426899 19.0069247,28.4431039 C18.0768429,26.653084 17.9282685,24.7744003 18.4738788,22.8251142 C17.7771813,22.825771 17.0833107,22.825771 16.3800168,22.825771 L16.3800168,22.8878355 C16.3800168,26.2915334 16.3797027,29.6952313 16.380331,33.0989292 Z M24.897757,29.6581239 C27.3886549,29.7139492 29.403361,27.6333095 29.4558175,25.1027841 C29.5095304,22.4931182 27.4960808,20.3376071 25.0001571,20.339249 C22.5601451,20.3376071 20.5765359,22.3900057 20.5422979,24.9293975 C20.5071175,27.5370931 22.5039192,29.604269 24.897757,29.6581239 Z M33.6177844,18.481582 C33.6180985,17.7555254 33.6180985,17.0291405 33.6177844,16.303084 C33.6177844,15.7822673 33.2235754,15.3678469 32.7260241,15.3675186 C32.03341,15.3671902 31.3407958,15.3668618 30.6478676,15.3675186 C30.1515727,15.3681753 29.7561073,15.7835808 29.7557932,16.3043975 C29.7554791,17.0242147 29.7535944,17.744032 29.7583061,18.4641776 C29.7589343,18.5715591 29.7784092,18.6832096 29.8110767,18.7850086 C29.9354645,19.1682324 30.2712489,19.4033552 30.6824198,19.4053255 C31.0166336,19.4059823 31.3508474,19.4049971 31.6853753,19.4049971 C32.0472308,19.4007282 32.4103428,19.4079526 32.7725125,19.3987579 C33.2383386,19.3866077 33.6177844,18.9692319 33.6177844,18.481582 Z M33.6177844,18.481582"
                            id="Oval-1"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                className="section__details-info-inner-content"
              >
                <Contact />
              </div>
            </div>
          </div>
          <div className="page__section-border" />
        </section>
        <div id="reservations-scollTo-point" />

        <section id="reservations" className="page_section container">
          <div className="page_section container">
            <div className="section__details">
              <div>
                <h1>Reservations</h1>
              </div>

              <div className="section__details-info-inner-content">
                For bookings of 10 or more guests we offer a special customized
                set menu, with a selection of up to four options for entree,
                main and/or dessert of your choice to cater for all of your
                dietary requirements. A perfect way to celebrate birthdays,
                anniversaries, Christmas parties and more, we’re happy to cater
                for every event.
              </div>
            </div>
          </div>
          <div className="page__section-border" />
        </section>
        <div
          id="private-events-scollTo-point"
          style={{ height: "84px", marginTop: "84px 0" }}
        />
        <section id="private_events" className="page_section container">
          <div className="page_section container">
            <div className="section__details">
              <div>
                <h1>Private Events</h1>
              </div>
              <div className="section__details-info-inner-content">
                <p>
                  Our venue is available for hire for exclusive use both inside
                  and outside of our normal trading hours. Prices and times are
                  flexible, so please don’t hesitate to call or email our team.
                  We can cater for up to 45 guests inside and 16 outside and are
                  more than happy to personalise a food and beverage package to
                  your requirements.
                </p>

                <Scroll type="id" element="contact">
                  <button
                    title="jump to contact us form"
                    alt="jump to contact us form"
                    tabIndex="0"
                    className="button-link cta-text"
                  >
                    email us
                  </button>
                </Scroll>
              </div>
            </div>
          </div>
          <div className="page__section-border" />
        </section>

        <section id="groups" className="page_section container">
          <div className="page_section container">
            <div className="section__details">
              <div>
                <h1>Group Bookings</h1>
              </div>
              <div className="section__details-info-inner-content">
                <p>
                  For bookings of 10 or more guests we offer a special
                  customized set menu, with a selection of up to four options
                  for entree, main and/or dessert of your choice to cater for
                  all of your dietary requirements. A perfect way to celebrate
                  birthdays, anniversaries, Christmas parties and more, we’re
                  happy to cater for every event.
                </p>
                <p>
                  Please click&nbsp;
                  <a
                    href="http://brownsugarbondi.com.au/wp-content/uploads/2019/03/group-reservations-mar-2019.pdf"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  &nbsp;for all group booking details.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(drawStyles)(Index)
