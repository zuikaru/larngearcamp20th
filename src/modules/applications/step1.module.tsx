import React from "react"
import { CardComponent } from "../../core/components/card.component"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import { DocComponent } from "../../core/components/doc.component"

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(4)
  },
  divider: {
    marginBottom: theme.spacing(2)
  },
  bold: {
    fontWeight: 500
  },
  nextLink: {
    marginTop: theme.spacing(2)
  },
  button: {
    color: "white",
    background: theme.palette.success.main,
    "&:hover": {
      background: theme.palette.success.dark
    }
  },
  download: {
    width: "fit-content",
    marginLeft: theme.spacing(2)
  },
  downloadText: {
    color: theme.palette.primary.main,
    "&:after": {
      backgroundColor: theme.palette.primary.main
    }
  }
}))

const ApplicationStepOneModule = () => {
  const classes = useStyles()

  return (
    <CardComponent maxWidth="lg" className={classes.card}>
      <DocComponent />
      {/* <Box mt={2}>
        <Typography variant="body1" color="error" className={classes.bold}>
          หมายเหตุ
        </Typography>
        <Typography variant="body2" color="error">
          น้อง ๆ สามารถกดตัวเลขที่แถบด้านบนเพื่อกลับไปแก้ไขสิ่งที่น้องกรอกไปแล้วได้
        </Typography>
      </Box> */}
      <Link className={`no-underline ${classes.nextLink}`} to="/application/step/2">
        <Button variant="contained" className={classes.button} fullWidth>
          ไปขั้นตอนถัดไป
        </Button>
      </Link>
    </CardComponent>
  )
}

export default ApplicationStepOneModule
