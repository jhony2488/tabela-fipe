/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Title, Description, MainContent, ContainerButton } from "./style"
import { useAppContext } from "../../storage/contextApi"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CardForm from "../../components/CardForm";
import Button from "../../components/Button"

import { FormControl, InputLabel } from "@mui/material";

import { getBrands, getModelsVehicle, getYearVehicle, getDataTableFipe } from "../../services/tabelaFipe"

interface PropsListOptions { codigo: string; nome: string }

function Home() {

  const { setCar } = useAppContext()

  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState("")
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [yearVehicle, setYearVehicle] = useState("")

  const [isDisabled, setIsDisabled] = useState(true);

  const [models, setModels] = useState<PropsListOptions[]>([])
  const [brands, setBrands] = useState<PropsListOptions[]>([])
  const [yearsVehicle, setYearsVehicle] = useState<PropsListOptions[]>([])

  const handleChange = (event: SelectChangeEvent, name: string) => {
    if (name === "vehicle") {
      setVehicle(event.target.value as string);
      setBrand("");
      setModel("");
      setYearVehicle("");
    }
    else if (name === "brand") {
      setBrand(event.target.value as string);
      setModel("");
      setYearVehicle("");
    }
    else if (name === "model") {
      setModel(event.target.value as string);
      setYearVehicle("");
    }
    else if (name === "year") {
      setYearVehicle(event.target.value as string);
    }
  };

  const handleGetBrands = async () => {
    const response = await getBrands({ vehicle })

    setBrands(response)
  };

  const handleGetModels = async () => {
    const response = await getModelsVehicle({ vehicle, brandCode: brand })

    setModels(response.modelos)
  };

  const handleGetYears = async () => {
    const response = await getYearVehicle({ vehicle, brandCode: brand, modelsCode: model })

    setYearsVehicle(response)
  };

  const handleSubmitGetCar = async () => {
    const response = await getDataTableFipe({ vehicle, brandCode: brand, modelsCode: model, yearCode: yearVehicle })

    setCar(response)

    navigate("/result")
  };

  useEffect(() => {
    if (vehicle != "" && vehicle) {
      setBrands([])
      handleGetBrands()
    }
  }, [vehicle])

  useEffect(() => {
    if (brand != "" && brand) {
      setModels([])
      handleGetModels()
    }
  }, [brand])

  useEffect(() => {
    if (model != "" && model) {
      setYearsVehicle([])
      handleGetYears()
    }
    console.log(model)
  }, [model])

  useEffect(() => {
    if (yearVehicle != "" && yearVehicle) {
      setIsDisabled(false)
    }
    else {
      setIsDisabled(true)
    }
  }, [yearVehicle])


  return (
    <>
      <MainContent>
        <Title>
          Tabela Fipe
        </Title>
        <Description>
          Consulte o valor de um veículo de forma gratuita
        </Description>

        <section>
          <CardForm>
            <FormControl fullWidth style={{ marginBottom: 20 }}>
              <InputLabel id="demo-simple-select-helper-label">Veículo</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={vehicle}
                label="Veiculo"
                onChange={(item) => handleChange(item, "vehicle")}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"carros"}>Carros</MenuItem>
                <MenuItem value={"motos"}>Motos</MenuItem>
                <MenuItem value={"caminhoes"}>Caminhões</MenuItem>
              </Select>
            </FormControl>


            {vehicle && vehicle != "" &&

              <FormControl fullWidth style={{ marginBottom: 20 }}>
                <InputLabel id="demo-simple-select-helper-label">Marca</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select-helper"
                  value={brand}
                  label="Marca"
                  onChange={(item) => handleChange(item, "brand")}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {
                    brands?.map((brand) => {
                      return <MenuItem value={brand.codigo}>{brand.nome}</MenuItem>
                    })
                  }
                </Select>
              </FormControl>
            }



            {brand && brand != "" && <FormControl fullWidth style={{ marginBottom: 20 }}>
              <InputLabel id="demo-simple-select-helper-label">Modelo</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={model}
                label="Modelo"
                onChange={(item) => handleChange(item, "model")}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {
                  models?.map((model) => {
                    return <MenuItem value={model.codigo}>{model.nome}</MenuItem>
                  })
                }
              </Select>
            </FormControl>}

            {model && model != "" && <FormControl fullWidth style={{ marginBottom: 20 }}>
              <InputLabel id="demo-simple-select-helper-label">Ano</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={yearVehicle}
                label="Ano"
                onChange={(item) => handleChange(item, "year")}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {
                  yearsVehicle?.map((year) => {
                    return <MenuItem value={year.codigo}>{year.nome}</MenuItem>
                  })
                }
              </Select>
            </FormControl>}
            <ContainerButton>
              <Button isDisabled={isDisabled} onClick={() => handleSubmitGetCar()} style={{ width: 250 }}>
                Consultar Preço
              </Button>
            </ContainerButton>
          </CardForm>
        </section>
      </MainContent>
    </>
  )
}

export default Home
