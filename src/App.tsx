import ListaDeTarefas from './containers/Lista-de-tarefas'
import BarraLateral from './containers/Barra-lateral'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
