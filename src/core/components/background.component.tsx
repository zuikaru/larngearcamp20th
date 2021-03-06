import React from "react"
import { makeStyles } from "@material-ui/core"

interface BackgroundProps {
  type: "bg1" | "bg2" | "bg3" | "bg4" | "bg5" | "bg6"
}

const useStyles = makeStyles(theme => ({
  bg: {
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "fixed",
    filter: "blur(0px) brightness(0.25)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    zIndex: -2
  },
  bg1: { backgroundImage: `url(${require("../../assets/images/background/bg1.jpg")})` },
  bg2: { backgroundImage: `url(${require("../../assets/images/background/bg2.jpg")})` },
  bg3: { backgroundImage: `url(${require("../../assets/images/background/bg3.jpg")})` },
  bg4: { backgroundImage: `url(${require("../../assets/images/background/bg4.jpg")})` },
  bg5: { backgroundImage: `url(${require("../../assets/images/background/bg5.jpg")})` },
  bg6: { backgroundImage: `url(${require("../../assets/images/background/bg6.jpg")})` }
}))

const BackgroundComponent: React.FC<BackgroundProps> = ({ type }) => {
  const classes = useStyles(type)
  return <div className={`${classes.bg} ${classes[type]}`}></div>
}

export default BackgroundComponent
