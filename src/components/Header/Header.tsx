import Image from 'next/image';
import LogosContainer from '../../styles/LogosContainer';
import HeaderStyled from './HeaderStyled';

export default function Header() {
  return (
    <HeaderStyled>
      <Image src="/images/black.png" alt="Logo-pesquisa" width={95} height={30}/>
      <nav>
        <span>Clube</span>
        <span>Loja</span>
        <span>Produtores</span>
        <span>Ofertas</span>
        <span>Eventos</span>
      </nav>
      <LogosContainer>
        <Image src="/images/Busca.png" alt="Logo-pesquisa" width={60} height={60}/>
        <Image src="/images/conta.png" alt="Logo-pesquisa" width={60} height={60}/>
        <Image src="/images/Carrinho.png" alt="Logo-pesquisa" width={60} height={60}/>
      </LogosContainer>
    </HeaderStyled>
  )
}