import React from "react"
// import Flickity from "react-flickity-component"
// import "../../styles/flickity.css"
class imageCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCarousel: false,
    }
  }
  componentDidMount() {
    if (typeof window !== "undefined") {
      this.setState({ showCarousel: true })
    }
  }

  render() {
    const flickityOptions = {
      initialIndex: 3,
      pageDots: false,
      setGallerySize: false,
    }

    return (
      <div className="image-carousel">
        {/* {this.state.showCarousel && (
          <Flickity options={flickityOptions}>
            <img src="https://s3-ap-southeast-2.amazonaws.com/production.assets.merivale.com.au/wp-content/uploads/2018/11/22161742/Tottis-restaurant-Sydney-AB5I3905.jpg" />
            <img src="https://s3-ap-southeast-2.amazonaws.com/production.assets.merivale.com.au/wp-content/uploads/2018/11/22161748/Tottis-restaurant-Sydney-AB5I4332.jpg" />
            <img src="https://s3-ap-southeast-2.amazonaws.com/production.assets.merivale.com.au/wp-content/uploads/2018/11/22161746/Tottis-restaurant-Sydney-AB5I4132.jpg" />
            <img src="https://s3-ap-southeast-2.amazonaws.com/production.assets.merivale.com.au/wp-content/uploads/2018/11/22161747/Tottis-restaurant-Sydney-AB5I4156.jpg" />
            <img src="https://s3-ap-southeast-2.amazonaws.com/production.assets.merivale.com.au/wp-content/uploads/2018/11/22161744/Tottis-restaurant-Sydney-AB5I4023.jpg" />
            <img src="https://s3-ap-southeast-2.amazonaws.com/production.assets.merivale.com.au/wp-content/uploads/2018/11/22161741/Tottis-restaurant-Sydney-AB5I3783.jpg" />
          </Flickity>
        )} */}
      </div>
    )
  }
}
export default imageCarousel
