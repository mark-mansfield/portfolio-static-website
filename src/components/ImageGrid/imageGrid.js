import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
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
    img: "http://lorempixel.com/400/200/",
    title: "",
    cols: 2,
  },
  {
    img: "http://lorempixel.com/400/300/",
    title: "",
    cols: 1,
  },
  {
    img: "http://lorempixel.com/400/400/",
    title: "",
    cols: 1,
  },
  {
    img: "http://lorempixel.com/300/200/",
    title: "",
    cols: 1,
  },
  {
    img: "http://lorempixel.com/500/600/",
    title: "",
    cols: 1,
  },
  {
    img: "http://lorempixel.com/100/200/",
    title: "",
    cols: 1,
  },
  {
    img: "http://lorempixel.com/500/200/",
    title: "",
    cols: 1,
  },
  {
    img: "http://lorempixel.com/200/200/",
    title: "",
    cols: 1,
  },
  {
    img: "http://lorempixel.com/300/100/",
    title: "",
    cols: 1,
  },
  {
    img: "http://lorempixel.com/200/300/",
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
