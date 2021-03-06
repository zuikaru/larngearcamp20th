import React, { createContext, useContext, useCallback, useMemo } from "react"
import useSWR, { responseInterface } from "swr"
import { useAuthContext } from "./auth.provider"
import { ApplicationDTO, UpdateApplicationDTO } from "../models/dto/application.dto"
import { FieldValues, UseFormOptions, UseFormMethods, useForm, UnpackNestedValue, DeepPartial } from "react-hook-form"
import ApplicationServiceAPI from "../services/application.service"

interface ApplicationStateContextValue {
  application: ApplicationDTO
  updateApplication: (application: UpdateApplicationDTO) => Promise<void>
  finalizeApplication: () => Promise<void>
  mutateApplication: responseInterface<ApplicationDTO, Error>["mutate"]
}

const ApplicationStateContext = createContext({} as ApplicationStateContextValue)

export const useApplicationStateContext = () => useContext(ApplicationStateContext)

export function useApplicationForm<TFieldValues extends FieldValues = FieldValues, TContext extends object = object>(
  mapApplicationToModel: (application: ApplicationDTO) => UnpackNestedValue<DeepPartial<TFieldValues>>,
  options?: UseFormOptions<TFieldValues, TContext>
): UseFormMethods<TFieldValues> {
  const { application } = useApplicationStateContext()

  const defaultValues = useMemo(() => {
    return mapApplicationToModel(application)
  }, [application, mapApplicationToModel])

  return useForm({ ...options, defaultValues })
}

export const ApplicationStateProvider: React.FC<{ children: (render: boolean, is404: boolean) => React.ReactElement }> = ({ children }) => {
  const { userId } = useAuthContext()
  const { data: application, mutate: mutateApplication, error } = useSWR(
    userId ? `application (${userId})` : null,
    ApplicationServiceAPI.getApplicationAPI,
    { revalidateOnFocus: false }
  )
  const is404 = error?.response?.status === 404
  // console.log("application", application)

  const updateApplication = useCallback(
    async (application: UpdateApplicationDTO) => {
      //console.log("application inner ", application)
      await mutateApplication(await ApplicationServiceAPI.updateApplicationAPI(application), false)
    },
    [mutateApplication]
  )
  const finalizeApplication = useCallback(async () => {
    await mutateApplication(async application => {
      const result = await ApplicationServiceAPI.finalizeApplicationAPI()
      return { ...application, ...result.application }
    }, false)
  }, [mutateApplication])

  return (
    <ApplicationStateContext.Provider value={{ application: application as any, updateApplication, finalizeApplication, mutateApplication }}>
      {children(!!application, is404)}
    </ApplicationStateContext.Provider>
  )
}
