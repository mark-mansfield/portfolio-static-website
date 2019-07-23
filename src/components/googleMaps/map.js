import React, { Component } from "react"
import GoogleMapReact from "google-map-react"

//? check snazzymaps for some styles
const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      backgroundColor: "green",
      width: "20px",
      height: "20px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      marginTop: "3px",
      transform: "translate(-50%, -50%)",
    }}
  />
)
const mapOptions = {
  styles: [
    {
      stylers: [
        { saturation: -100 },
        { gamma: 0.8 },
        { lightness: 4 },
        { visibility: "on" },
      ],
    },
  ],
}

export class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: -33.887887,
      lng: 151.273167,
    },
    zoom: 14,
  }

  render() {
    return (
      <div className="gMap" style={{ width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDBwyEdFm3ow9XbiEIGV5A1q03dbZczBu0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={mapOptions}
        >
          <AnyReactComponent lat={-33.887887} lng={151.273167} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default MapContainer
