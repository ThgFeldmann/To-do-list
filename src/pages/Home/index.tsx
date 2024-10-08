import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/Barra-lateral'
import ListaDeTarefas from '../../containers/Lista-de-tarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
