export interface resultCarProps {
  TipoVeiculo: number
  Valor: string
  Marca: string
  Modelo: string
  AnoModelo: number
  Combustivel: string
  CodigoFipe: string
  MesReferencia: string
  SiglaCombustivel: string
}

export interface searchParamsTableFipeResultProps {
  vehicle: string
  brandCode: string | number
  modelsCode: string | number
  yearCode: string
}

export interface searchParamsTableFipeYearProps {
  vehicle: string
  brandCode: string | number
  modelsCode: string | number
}

export interface searchParamsTableFipeModelsProps {
  vehicle: string
  brandCode: string | number
}