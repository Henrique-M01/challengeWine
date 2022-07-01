import Image from 'next/image';
import CardStyled from './ProductCardStyled';

interface IProductCard {
  name: string,
  image: string,
  price: number,
  discount: number,
  priceMember: number,
  priceNonMember: number,
}

export default function ProductCard({
  name, image, price, discount, priceMember, priceNonMember }: IProductCard) {
  return (
    <CardStyled>
      <Image src={image} alt='Imagem do produto' width={200} height={180}/>
      <h1>{ name }</h1>
      <div>
        <span>{ `R$${price}` }</span>
        <span>{ `${discount}% OFF` }</span>
      </div>
      <div>
        <span>SÓCIO WINE</span>
        <span>{ `R$${priceMember}` }</span>
      </div>
      <div>
        <span>NÃO SÓCIO</span>
        <span>{ `R$${priceNonMember}` }</span>
      </div>
    </CardStyled>
  )
}