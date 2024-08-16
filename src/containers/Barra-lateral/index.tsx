import FiltroCard from '../../components/Filtro-card'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard ativo={false} />
        <FiltroCard ativo={false} />
        <FiltroCard ativo={false} />
        <FiltroCard ativo={false} />
        <FiltroCard ativo={false} />
        <FiltroCard ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
