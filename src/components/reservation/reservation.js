import React from "react"
import Select from "react-select"
import Calendar from "react-calendar"
import "./reservation.css"

// https://react-icons.netlify.com/#/
import { FaUserAlt } from "react-icons/fa"
import { FaRegClock } from "react-icons/fa"

const party_sizes = [
  { value: "1", label: "1 person" },
  { value: "2", label: "2 people" },
  { value: "3", label: "3 people" },
]

const service_periods = [
  { value: "Breakfast", label: "Breakfast" },
  { value: "Lunch", label: "Lunch" },
  { value: "Dinner", label: "Dinner" },
]

class Reservations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      party_size: null,
      service_periods: null,
      date: new Date(),
      date_selected: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (selectedOption, event) => {
    if (event.name === "party_size") {
      this.setState({ party_size: selectedOption.label })
    }
    if (event.name === "service_periods") {
      this.setState({ service_periods: selectedOption.label })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    setTimeout(() => {
      if (!this.state.party_size) {
        alert("please select a party size")
        return
      }
      if (!this.state.service_periods) {
        alert("please select a time")
        return
      }
      if (!this.state.date_selected) {
        alert("please select a date to book for")
        return
      } else {
        alert(JSON.stringify(this.state, null, 2))
      }
    }, 500)
  }

  onChange = newDate => {
    //  because the calendar was showing a full day behind selected date running on localhost
    this.setState({
      date: new Date(newDate + newDate.getTimezoneOffset()),
      date_selected: true,
    })
  }

  render() {
    const { selectedOption } = this.state
    const customStyles = {
      control: styles => ({
        ...styles,
        height: "50px",
        backgroundColor: "#444444",
        border: "1px solid rgb(56, 56, 56)",
        color: "white",
      }),
      singleValue: (styles, { data }) => ({ ...styles, color: "white" }),
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="reservation_widget">
            <div className="input_container">
              <div className="date_selected">
                {this.state.date_selected
                  ? this.state.date.getDate() +
                    " / " +
                    this.state.date.getMonth() +
                    " / " +
                    this.state.date.getFullYear()
                  : "no date selected"}
              </div>
            </div>
            <div className="input_container">
              <div className="icon">
                <FaUserAlt style={{ color: "white", fontSize: "3rem" }} />
              </div>
              <div className="select_cell">
                <Select
                  styles={customStyles}
                  defaultValue={party_sizes[0]}
                  id="party_size"
                  name="party_size"
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={party_sizes}
                />
              </div>
            </div>
            <div className="input_container">
              <div className="icon">
                <FaRegClock style={{ color: "white", fontSize: "3rem" }} />
              </div>
              <div className="select_cell" tabIndex="auto">
                <Select
                  styles={customStyles}
                  defaultValue={service_periods[0]}
                  id="service_periods"
                  name="service_periods"
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={service_periods}
                />
              </div>
            </div>
            <div className="input_container">
              <button
                className="form-button-accent"
                style={{ width: "95%", borderRadius: "5px" }}
                onClick={this.handleSubmit}
              >
                search
              </button>
            </div>
          </div>
          <Calendar
            isOpen={true}
            onClickDay={this.showDate}
            onChange={this.onChange}
            value={this.state.date}
          />
        </form>
      </div>
    )
  }
}

export default Reservations
