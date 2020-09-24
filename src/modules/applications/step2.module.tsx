import React, { useCallback } from "react"
import { CardComponent } from "../../core/components/card.component"
import { Divider, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { FormProvider } from "react-hook-form"
import { PersonalProfileComponent } from "../../core/components/personalInfo/profile.component"
import { PersonalContactComponent } from "../../core/components/personalInfo/contact.component"
import { PersonalEducationComponent } from "../../core/components/personalInfo/education.component"
import { PersonalHealthComponent } from "../../core/components/personalInfo/health.component"
import { PersonalEmergencyComponent } from "../../core/components/personalInfo/emergency.component"
import { yupResolver } from "@hookform/resolvers"
import ProfileSchema, { ProfileModel } from "../../schemas/profile.schema"
import ApplicationStepModule from "./stepLayout.module"
import { useGlobalContext } from "../../core/providers/global.provider"
import { useHistory } from "react-router-dom"
import { convertProfileSchemaToProfileDTO } from "../../utils/modify"
import { useApplicationForm, useApplicationStateContext } from "../../core/providers/applicationState.provider"

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(8)
  },
  divider: {
    marginBottom: theme.spacing(2)
  },
  question: {
    "&>*": {
      marginBottom: theme.spacing(3)
    },
    "&>*:not(:last-child)": {
      marginBottom: theme.spacing(6)
    }
  },
  bold: {
    fontWeight: 500
  }
}))

const ApplicationStepTwoModule: React.FC<{ step: string }> = ({ step }) => {
  const classes = useStyles()
  const { setLoading } = useGlobalContext()
  const history = useHistory()
  const { updateApplication } = useApplicationStateContext()
  const methods = useApplicationForm<ProfileModel>({
    reValidateMode: "onBlur",
    resolver: yupResolver(ProfileSchema)
  })
  const { handleSubmit } = methods

  const onSubmit = useCallback(
    async data => {
      setLoading(true)
      const values = convertProfileSchemaToProfileDTO(data)
      try {
        await updateApplication(values)
        history.push(`/application/step/${parseInt(step) + 1}`)
      } catch (error) {
        // show modal
      }
      setLoading(false)
    },
    [setLoading, history, step, updateApplication]
  )

  return (
    <ApplicationStepModule>
      {({ ButtonBar }) => (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardComponent maxWidth="lg" className={classes.card}>
              <Typography variant="h5" align="center" className={classes.bold}>
                ข้อมูลส่วนตัว
              </Typography>
              <Divider className={classes.divider} />
              <div className={classes.question}>
                <PersonalProfileComponent />
                <PersonalEducationComponent />
                <PersonalHealthComponent />
                <PersonalContactComponent />
                <PersonalEmergencyComponent />
              </div>
              <ButtonBar />
            </CardComponent>
          </form>
        </FormProvider>
      )}
    </ApplicationStepModule>
  )
}

export default ApplicationStepTwoModule
