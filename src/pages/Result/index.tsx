import { Title, Price, MainContent, Description } from "./style"
import { useAppContext } from "../../storage/contextApi"

function Result() {
  const { car } = useAppContext()

  return (
    <>
      <MainContent>
        <Title>
          Tabela Fipe: Preço {car?.Marca} {car?.AnoModelo}
        </Title>
        <Price>
          {car?.Valor}
        </Price>
        <Description>
          Este é o preço de compra do veiculo
        </Description>
      </MainContent>
    </>
  )
}

export default Result
