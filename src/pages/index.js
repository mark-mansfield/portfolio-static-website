import React from "react"
import LazyLoad from "react-lazyload"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Modal from "react-modal"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { withStyles } from "@material-ui/core/styles"
import ImageGrid from "../components/ImageGrid/imageGrid"
import Waypoint from "react-waypoint"
import Scroll from "../components/Scroll"
import Layout from "../components/layout/layout"
import Header from "../components/header/header.1"
import Footer from "../components/footer/footer"
import SubNav from "../components/navigation/sub__nav"
import GoogleMap from "../components/googleMaps/map"
import Food from "../components/menus/food/food.1"
import Contact from "../components/contact/contact"
import Reservation from "../components/reservation/reservation"
import Newsletter from "../components/newsLetter/newsletter"
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
  backgroundColor: "black",
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickySubNav: false,
      stickyMobileNav: false,
      modalIsOpen: false,
      giftCardModalIsOpen: false,
      newsletterModalIsOpen: false,
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

  _handleShowNewsletterModal = () => {
    console.log("Setting state of isOpen")
    this.setState({
      newsletterModalIsOpen: true,
    })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      giftCardModalIsOpen: false,
      newsletterModalIsOpen: false,
    })
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
      ul: {
        margin: "auto",
      },
      li: {
        margin: "20px auto",
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
      <div
        style={{
          textAlign: "center",
          width: "220px",
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul>
          <li style={style.li}>
            <a href="#food">Food</a>
          </li>
          <li style={style.li}>
            <a href="#contact">Contact</a>
          </li>
          <li style={style.li}>
            <a href="#contact">Reservations</a>
          </li>
          <li style={style.li}>
            <a href="#contact">Groups</a>
          </li>
          <li style={style.li}>
            <a href="#contact">Private Events</a>
          </li>
        </ul>
        <ul>
          <li style={style.li}>
            <div className="phone_number">PH: (02) 9130 1566</div>
            <br />
            {/* eslint-disable jsx-a11y/anchor-has-content */}
            <a
              href="tel:0291301566"
              id="callnowbutton"
              title="call now"
              aria-label="call us button"
              style={{ margin: "auto" }}
            />
          </li>

          <li style={style.li}>
            106 Curlewis St, Bondi Beach NSW 2026
            <br />
            Dinner tuesday - Sunday
            <br />
            Breakfast - Friday to Sunday
          </li>
        </ul>
      </div>
    )
    return (
      <Layout>
        <Helmet title="Restaurant website">
          <html lang="en" />
        </Helmet>
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
        <Modal
          closeTimeoutMS={300}
          style={style}
          isOpen={this.state.newsletterModalIsOpen}
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

          <Newsletter />
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
                        id="Layer_2"
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
                        id="Layer_3"
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
        <section id="about_us" style={{ height: "400px" }}>
          <div className="page_section container">
            <div className="section__details">
              <div
                style={{
                  width: "80%",
                }}
              >
                <h1>About Us</h1>A relaxed, contemporary neighborhood bistro run
                by dedicated industry professionals committed to delivering a
                memorable dinning (and wining) experience. Brother and sister
                duo Neil &amp; Lianne Gottheiner have created a unique Bondi
                institution with a vibrant, welcoming ambience catering for
                diners of all persuasions.
              </div>
            </div>
          </div>
        </section>
        <section>
          <LazyLoad height={300} resize={true}>
            <div className="parallax-1 parallax-height-lge">
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: "100vw",
                  backgroundColor: "rgba(0,0,0,0.8)",
                  height: "100%",
                }}
              >
                <div className="subscription">
                  <h1 className="subscription__heading">Subscribe</h1>
                  <div
                    className="subscription__content"
                    style={{
                      color: "white",
                    }}
                  >
                    <div className="subscription__message">
                      Subscribe to receive be eligible for out loyalty program
                    </div>

                    <button
                      onClick={this._handleShowNewsletterModal}
                      className="form-button-accent"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </LazyLoad>
        </section>
        <LazyLoad height={800} resize={true}>
          <ImageGrid />
        </LazyLoad>
        <section>
          <LazyLoad height={300} resize={true}>
            <div className="parallax-1 parallax-height-lge"></div>
          </LazyLoad>
        </section>

        <section className="message" style={{ height: "300px" }}>
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
        <section
          className="food food-scroll-to-point"
          id="food-scroll-to-point"
        >
          <section className="page_section container">
            <a name="food"></a>
            <Food />
          </section>
        </section>

        <LazyLoad height={200}>
          <section className="parallax-2" />
        </LazyLoad>

        <section className="page_section container">
          <div className="page_section container">
            <div className="section__details align-top">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              ></div>
              <div
                id="contact"
                style={{ width: "100%" }}
                className="section__details-info-inner-content"
              >
                <a name="contact"></a>
                <h1 style={{ marginTop: "100px" }}>Contact Us</h1>
                <LazyLoad height={200}>
                  <Contact />
                </LazyLoad>
              </div>
            </div>
          </div>

          <div className="page__section-border" />
        </section>
        <div id="reservations-scollTo-point" />
        <section className="page_section container reservations">
          <div className="page_section container">
            <div className="section__details">
              <div
                style={{
                  display: "flex",
                  flexFlow: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <h1>Reservations</h1>
                </div>

                <div className="section__details-info-inner-content">
                  For bookings of 10 or more guests we offer a special
                  customized set menu, with a selection of up to four options
                  for entree, main and/or dessert of your choice to cater for
                  all of your dietary requirements. A perfect way to celebrate
                  birthdays, anniversaries, Christmas parties and more, we’re
                  happy to cater for every event.
                  <br />
                  <br />
                  <div
                    style={{
                      display: "flex",
                      flexFlow: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <h2>PH: (02) 9130 1566</h2>
                    <br />
                    <br />
                    {/* eslint-disable jsx-a11y/anchor-has-content */}
                    <a
                      href="tel:0291301566"
                      id="callnowbutton"
                      title="call now"
                      aria-label="call us button"
                    />
                  </div>
                </div>
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
                <div
                  style={{
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <h2>PH: (02) 9130 1566</h2>
                  <br />
                  <br />
                  {/* eslint-disable jsx-a11y/anchor-has-content */}
                  <a
                    href="tel:0291301566"
                    id="callnowbutton"
                    title="call now"
                    aria-label="call us button"
                  />
                  <br />
                  <br />
                  <Scroll type="id" element="contact">
                    <button
                      id="show-email-button-1"
                      aria-label="show email form"
                      className="form-button-accent"
                    >
                      Email
                    </button>
                  </Scroll>
                </div>
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
                  For bookings of <strong>10 or more guests</strong> we offer a
                  special customized set menu, with a selection of up to four
                  options for entree, main and/or dessert of your choice to
                  cater for all of your dietary requirements. A perfect way to
                  celebrate birthdays, anniversaries, Christmas parties and
                  more, we’re happy to cater for every event.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <h2>Check out the options</h2>
                  <a
                    href="http://brownsugarbondi.com.au/wp-content/uploads/2019/03/group-reservations-mar-2019.pdf"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  <br />
                  <br />
                  <h2>PH: (02) 9130 1566</h2>
                  <br />
                  <br />
                  {/* eslint-disable jsx-a11y/anchor-has-content */}
                  <a
                    href="tel:0291301566"
                    id="callnowbutton"
                    title="call now"
                    aria-label="call us button"
                  />
                  <br />
                  <br />
                  <Scroll type="id" element="contact">
                    <button
                      id="show-email-button-1"
                      aria-label="show email form"
                      className="form-button-accent"
                    >
                      Email
                    </button>
                  </Scroll>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="footer">
          <div>
            <Footer modalState={this._handleShowNewsletterModal.bind(this)} />
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
