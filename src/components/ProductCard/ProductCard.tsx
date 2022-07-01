import Image from 'next/image';
import DiscountTag from '../../styles/Discount';
import PriceFullTag from '../../styles/PriceFullTag';
import PriceNonMember from '../../styles/PriceNonMember';
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
      <Image src={image} alt='Imagem do produto' width={180} height={210}/>
      <h1>{ name }</h1>
      <div>
        <PriceFullTag>{ `R$${price}` }</PriceFullTag>
        <DiscountTag>{ `${discount}% OFF` }</DiscountTag>
      </div>
      <div>
        <span>{ `SÓCIO WINE R$${priceMember}` }</span>
      </div>
      <div>
        <PriceNonMember>{ `NÃO SÓCIO R$${priceNonMember}` }</PriceNonMember>
      </div>
    </CardStyled>
  )
}