import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { TimelineDisplay, TimelineProps } from "../../core/components/timeline.component"
import { SafeArea } from "../../core/components/safeArea.component"

const useStyle = makeStyles(theme => ({
  title: {
    marginBottom: "50px",
    fontWeight: 400,
    fontSize: "4rem",
    fontFamily: "Raleway"
  },
  endCard: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    width: "max-content",
    margin: "auto",
    padding: "24px 36px 24px 36px",
    textAlign: "center"
  }
}))

const HomeTimeline: React.FC<TimelineProps & React.HTMLAttributes<HTMLDivElement>> = props => {
  const classes = useStyle()
  return (
    <SafeArea {...props}>
      <Typography variant="h2" align="center" className={classes.title}>
        TIMELINE
      </Typography>
      <TimelineDisplay includeFinalLine={true} label={props.label} />
      <div className={classes.endCard}>
        <Typography variant="h6" className="kanit">
          ค่ายลานเกียร์ครั้งที่ 20
        </Typography>
        <Typography variant="subtitle1" className="kanit">
          8 - 11 มกราคม 2564
        </Typography>
      </div>
    </SafeArea>
  )
}

export default HomeTimeline
