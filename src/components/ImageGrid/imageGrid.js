import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import img1 from "../../images/sonja-langford-H5k8PoC1BBc-unsplash (1).jpg"
import img2 from "../../images/lobostudio-hamburg-wj961KyCaNk-unsplash (1).jpg"
import img3 from "../../images/kristen-kaethler-vaGL6AJkUb4-unsplash (1).jpg"
import img4 from "../../images/joseph-gonzalez-fdlZBWIP0aM-unsplash (1).jpg"
import img5 from "../../images/jannis-brandt-8manzosDSGM-unsplash (1).jpg"
import img6 from "../../images/brooke-lark-R18ecx07b3c-unsplash (1).jpg"
import img7 from "../../images/brooke-lark-oGCF9yywFCM-unsplash (1).jpg"
import img8 from "../../images/brooke-lark-oaz0raysASk-unsplash (1).jpg"
import img9 from "../../images/brooke-lark-hzlL6lWX54k-unsplash (1).jpg"
import img10 from "../../images/brooke-lark-HlNcigvUi4Q-unsplash (1).jpg"
import img11 from "../../images/brooke-lark-BepcnEnnoPs-unsplash (1).jpg"
import img12 from "../../images/brooke-lark-hzlL6lWX54k-unsplash (1).jpg"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect"
import "./imagegrid.css"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "black",
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
}))

const tileData = [
  {
    img: img1,
    title: "",
    cols: 2,
  },
  {
    img: img2,
    title: "",
    cols: 1,
  },
  {
    img: img3,
    title: "",
    cols: 1,
  },
  {
    img: img4,
    title: "",
    cols: 1,
  },
  {
    img: img5,
    title: "",
    cols: 1,
  },
  {
    img: img7,
    title: "",
    cols: 1,
  },
  {
    img: img8,
    title: "",
    cols: 1,
  },
  {
    img: img9,
    title: "",
    cols: 1,
  },
  {
    img: img10,
    title: "",
    cols: 1,
  },
  {
    img: img11,
    title: "",
    cols: 1,
  },

  {
    img:
      "https://s3-ap-southeast-2.amazonaws.com/production.assets.merivale.com.au/wp-content/uploads/2018/11/22161741/Tottis-restaurant-Sydney-AB5I3783.jpg",
    title: "",
    cols: 1,
  },
]

export default function imageGrid1() {
  const classes = useStyles()
  return (
    <div className="grid-height grid-width">
      <div className={classes.root}>
        <BrowserView>
          <GridList cellHeight={250} className={classes.gridList} cols={4}>
            {tileData.map(tile => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </BrowserView>
        <MobileView>
          <GridList cellHeight={150} className={classes.gridList} cols={3}>
            {tileData.map(tile => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </MobileView>
      </div>
    </div>
  )
}
