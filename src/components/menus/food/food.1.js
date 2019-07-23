import React from "react"
import Breakfast from "./breakfast"
import Brunch from "./brunch"
import Lunch from "./lunch"
import Dinner from "./dinner"
class Food extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      breakfast: true,
      brunch: false,
      lunch: false,
      dinner: false,
      scrollingUp: false,
    }
    this.clearComponents = this.clearComponents.bind(this)
    this.toggleComponent = this.toggleComponent.bind(this)
  }

  showModal() {
    this.modalState()
  }

  clearComponents(ref) {
    console.log(ref)
    this.setState({
      breakfast: false,
      brunch: false,
      lunch: false,
      dinner: false,
    })
    this.toggleComponent(ref)
  }

  toggleComponent(ref) {
    if (ref === "breakfast") {
      this.setState({ breakfast: !this.state.breakfast })
    }
    if (ref === "brunch") {
      this.setState({ brunch: !this.state.brunch })
    }
    if (ref === "lunch") {
      this.setState({ lunch: !this.state.lunch })
    }

    if (ref === "dinner") {
      this.setState({ dinner: !this.state.dinner })
    }
  }

  render() {
    const { breakfast } = this.state
    const { brunch } = this.state
    const { lunch } = this.state
    const { dinner } = this.state
    return (
      <div className="food__sub-nav  container">
        <div className="page_section container" role="menu">
          <div className="section__details">
            {/* food menu nav */}
            <div style={{ display: "flex", flexFlow: "column" }}>
              <h1>Our Menus</h1>
              <sub>Try &amp; discover</sub>
              <br />

              <div id="food-menu">
                <ul
                  className="menu__nav-bar menu__nav-bar-tabs"
                  role="tablist"
                  aria-controls="menuInfo"
                >
                  <li>
                    <button
                      role="menuitem"
                      onClick={() => this.clearComponents("breakfast")}
                      className={
                        breakfast
                          ? "simple-button-sml highlight "
                          : "simple-button-sml"
                      }
                      disabled={breakfast}
                    >
                      Breakfast
                    </button>
                  </li>
                  <li>
                    <button
                      role="menuitem"
                      onClick={() => this.clearComponents("brunch")}
                      className={
                        brunch
                          ? "simple-button-sml highlight "
                          : "simple-button-sml"
                      }
                      disabled={brunch}
                    >
                      Brunch
                    </button>
                  </li>
                  <li>
                    <button
                      role="menuitem"
                      onClick={() => this.clearComponents("lunch")}
                      className={
                        lunch
                          ? "highlight simple-button-sml"
                          : "simple-button-sml"
                      }
                      disabled={lunch}
                    >
                      Lunch
                    </button>
                  </li>
                  <li>
                    <button
                      role="menuitem"
                      onClick={() => this.clearComponents("dinner")}
                      className={
                        dinner
                          ? "highlight simple-button-sml"
                          : "simple-button-sml"
                      }
                      disabled={dinner}
                    >
                      Dinner
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {this.state.breakfast && <Breakfast />}
          {this.state.brunch && <Brunch />}
          {this.state.lunch && <Lunch />}
          {this.state.dinner && <Dinner />}
        </div>
      </div>
    )
  }
}

export default Food
