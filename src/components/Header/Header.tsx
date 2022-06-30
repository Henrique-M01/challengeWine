import HeaderStyled from './HeaderStyled';

export default function Header() {
  return (
    <HeaderStyled>
      <span>WINE</span>
      <nav>
        <span>Clube</span>
        <span>Loja</span>
        <span>Produtores</span>
        <span>Ofertas</span>
        <span>Eventos</span>
      </nav>
      <span>Icons de pesquisa e perfil</span>
    </HeaderStyled>
  )
}