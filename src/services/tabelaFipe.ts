import { api } from './api'

export async function getBrands({ vehicle }: { vehicle: string }) {
  const response = await api.get(`/${vehicle}/marcas`)

  return response.data
}

export async function getModelsVehicle({
  vehicle,
  brandCode,
}: {
  vehicle: string
  brandCode: string | number
}) {
  const response = await api.get(`/${vehicle}/marcas/${brandCode}/modelos`)
  return response.data
}

export async function getYearVehicle({
  vehicle,
  brandCode,
  modelsCode,
}: {
  vehicle: string
  brandCode: string | number
  modelsCode: string | number
}) {
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
}: {
  vehicle: string
  brandCode: string | number
  modelsCode: string | number
  yearCode: string
}) {
  const response = await api.get(
    `/${vehicle}/marcas/${brandCode}/modelos/${modelsCode}/anos/${yearCode}`
  )
  return response.data
}
