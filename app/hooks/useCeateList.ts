import { useMutation } from '@tanstack/react-query'
// import { FormUpdatePrHeadLine } from 'src/types'
import * as services from '../services'

const useCeateList = () => {
  const data = useMutation(async (payload: any) => {
    return await services.createList(payload)
  })
  return data
}

export default useCeateList
