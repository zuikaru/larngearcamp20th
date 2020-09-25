import React from "react"
import { Typography, Button, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"

import landing1 from "../../assets/images/background/landing-1.svg"
import BackgroundOverlay from "../../core/components/backgroundOverlay.component"

const useStyle = makeStyles(theme => ({
  title: {
    padding: theme.spacing(0, 6),
    margin: "auto",
    fontFamily: "Raleway",
    fontWeight: 300,
    "&>.big": {
      fontSize: "1.4em"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem"
    }
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: 200,
    padding: theme.spacing(0, 6),
    margin: theme.spacing(1, "auto", 3, "auto")
  },
  button: {
    padding: theme.spacing(1, 6),
    "&>*": {
      fontSize: "1.1rem"
    }
  }
}))

const HomeTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  const classes = useStyle()
  return (
    <BackgroundOverlay src={landing1} aspectRatio={1519 / 832} contentPercentage={70} minHeightPx={800}>
      <Box display="flex" justifyContent="center" alignItems="center" height="80%">
        <Box textAlign="center" height="min-content">
          <Typography variant="h2" className={classes.title}>
            <span className="big">L</span>ARNGEAR CAMP 20th
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            ค้นหาความเป็นวิศวกรด้วยมือของคุณเอง
          </Typography>
          <Link to="/application" className="no-underline">
            <Button variant="contained" color="primary" className={classes.button}>
              Apply Now
            </Button>
          </Link>
        </Box>
      </Box>
    </BackgroundOverlay>
  )
}

export default HomeTitle