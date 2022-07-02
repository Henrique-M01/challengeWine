import Image from 'next/image';
import BigPrice from '../../styles/BigPrice';
import DiscountTag from '../../styles/Discount';
import Member from '../../styles/Member';
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
    const priceSplit = priceMember.toFixed(2).toString().split('.');
  return (
    <CardStyled>
      <Image src={image} alt='Imagem do produto' width={180} height={210}/>
      <h1>{ name }</h1>
      <div>
        <PriceFullTag>{ `R$${price.toFixed(2)}` }</PriceFullTag>
        <DiscountTag>{ `${discount}% OFF` }</DiscountTag>
      </div>
      <div>
        <Member>SÓCIO WINE </Member>
        <BigPrice>
          <span>R$ </span>
          { `${priceSplit[0]},` }
          <span>{ `${priceSplit[1]}` }</span>
        </BigPrice>
      </div>
      <div>
        <PriceNonMember>
          { `NÃO SÓCIO R$ ${priceNonMember
            .toFixed(2).toString().replace('.', ',')}` }
        </PriceNonMember>
      </div>
    </CardStyled>
  )
}