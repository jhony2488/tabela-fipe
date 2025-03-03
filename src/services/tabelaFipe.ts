import { api } from './api'
import {
  searchParamsTableFipeModelsProps,
  searchParamsTableFipeResultProps,
  searchParamsTableFipeYearProps,
} from '../interfaces/resultCar'

export async function getBrands({ vehicle }: { vehicle: string }) {
  const response = await api.get(`/${vehicle}/marcas`)

  return response.data
}

export async function getModelsVehicle({
  vehicle,
  brandCode,
}: searchParamsTableFipeModelsProps) {
  const response = await api.get(`/${vehicle}/marcas/${brandCode}/modelos`)
  return response.data
}

export async function getYearVehicle({
  vehicle,
  brandCode,
  modelsCode,
}: searchParamsTableFipeYearProps) {
  const response = await api.get(
    `/${vehicle}/marcas/${brandCode}/modelos/${modelsCode}/anos`
  )
  return response.data
}

export async function getDataTableFipe({
  vehicle,
  brandCode,
  modelsCode,
  yearCode,
}: searchParamsTableFipeResultProps) {
  const response = await api.get(
    `/${vehicle}/marcas/${brandCode}/modelos/${modelsCode}/anos/${yearCode}`
  )
  return response.data
}
