import React from "react"

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: "is-loading",
      left: false,
    }
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: "" })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children } = this.props
    return (
      <div className={`body ${this.state.loading}`}>
        <div id="wrapper">{children}</div>
      </div>
    )
  }
}

export default Template
