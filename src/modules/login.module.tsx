import React from "react"
import { Link } from "react-router-dom"
import { TextField, Typography, Button, Container, Paper, Checkbox, FormControlLabel, Box } from "@material-ui/core"
import { useForm } from "react-hook-form"
import AuthService from "../core/services/auth.service"
import { makeStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
import { LogoComponent } from "../core/components/logo.component"
import { FacebookButtonComponent } from "../core/components/facebookButton.component"
import { GoogleButtonComponent } from "../core/components/googleButton.component"
import { CardComponent } from "../core/components/card.component"
import { yupResolver } from "@hookform/resolvers"
import LoginSchema from "../schemas/login.schema"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& > *": {
      marginBottom: theme.spacing(2)
    }
  },
  clearMargin: {
    margin: 0
  },
  checkbox: {
    "& > *": {
      color: grey[500]
    }
  },
  divider: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: grey[500],
    margin: theme.spacing(2, 0, 4, 0),
    "&:before, &:after": {
      flex: 1,
      content: "''",
      borderBottom: "2px solid #e0e0e0"
    },
    "&:before": {
      marginRight: "1em"
    },
    "&:after": {
      marginLeft: "1em"
    }
  },
  rightAlign: {
    marginLeft: "auto"
  }
}))

const LoginModule = () => {
  const history = useHistory()
  const classes = useStyles()
  const { register, handleSubmit, setValue, getValues, setError, errors } = useForm({
    resolver: yupResolver(LoginSchema)
  })

  const onSubmit = async () => {
    const values = getValues(["email", "password"])
    const result = await AuthService.login(values)
    if (result.status !== 200) {
      setError("validate", {
        type: "validate",
        message: result.data.message
      })
    } else {
      history.push("/profile")
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.name, event.target.value)
  }

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.name, event.target.checked)
  }

  return (
    <>
      <LogoComponent />
      <CardComponent maxWidth="sm">
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <TextField
            id="email"
            name="email"
            label="อีเมล"
            variant="outlined"
            type="email"
            onChange={handleChange}
            ref={register}
            size="small"
            error={Boolean(errors?.email)}
            helperText={errors?.email?.message}
          />
          <TextField
            id="password"
            name="password"
            label="รหัสผ่าน"
            variant="outlined"
            type="password"
            onChange={handleChange}
            ref={register}
            size="small"
            error={Boolean(errors?.email)}
            helperText={errors?.email?.message}
          />
          <FormControlLabel
            control={<Checkbox name="remember" color="primary" onChange={handleCheckBoxChange} />}
            label="จำฉันไว้ในระบบ"
            className={classes.checkbox}
          />
          <Button type="submit" variant="contained" color="primary" className={classes.clearMargin}>
            เข้าสู่ระบบ
          </Button>
          {errors.validate && (
            <Typography color="error" variant="body2" className={classes.clearMargin}>
              อีเมลหรือรหัสผ่านไม่ถูกต้อง
            </Typography>
          )}
        </form>

        <div className={classes.divider}>OR</div>

        <FacebookButtonComponent type="submit" variant="contained" color="primary">
          เข้าสู่ระบบด้วยบัญชี Facebook
        </FacebookButtonComponent>
        <GoogleButtonComponent type="submit" variant="contained" color="primary">
          เข้าสู่ระบบด้วยบัญชี Google
        </GoogleButtonComponent>
      </CardComponent>

      <Box mt={4}>
        <Container maxWidth="sm">
          <Paper elevation={0}>
            <Box display="flex" alignItems="center" py={2} px={5}>
              <div> ยังไม่มีบัญชีลานเกียร์?</div>
              <Link className={classes.rightAlign} to="/register">
                ลงทะเบียน
              </Link>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  )
}

export { LoginModule }
