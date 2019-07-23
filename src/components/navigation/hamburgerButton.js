import React from "react"

class hamburgerButton extends React.Component {
  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.sideDrawerState("left", true)}
      >
        <span className="header-menu-burger">
          <span className="header-menu-burger-bun header-menu-burger-bun--top" />
          <span className="header-menu-burger-meat" />
          <span className="header-menu-burger-bun header-menu-burger-bun--bottom" />
        </span>
        <div>
          <span className="smaller-text">MENU</span>
        </div>
      </button>
    )
  }
}

export default hamburgerButton
