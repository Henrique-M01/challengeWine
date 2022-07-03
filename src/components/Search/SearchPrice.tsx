import SearchPriceStyled from './SearchPriceStyled';

export default function SearchPrice() {
  return (
    <SearchPriceStyled>
      <label htmlFor='forty-price'>
        <input type='radio' id='forty-price' value='40'/>
        Até R$40
      </label>
      <label htmlFor='sixty-price'>
        <input type='radio' id='sixty-price' value='60'/>
        R$40 A R$60
      </label>
      <label htmlFor='one-hundred-price'>
        <input type='radio' id='one-hundred-price' value='100'/>
        R$60 A R$100
      </label>
      <label htmlFor='two-hundred-price'>
        <input type='radio' id='two-hundred-price' value='200'/>
        R$100 A R$200
      </label>
      <label htmlFor='five-hundred-price'>
        <input type='radio' id='five-hundred-price' value='500'/>
        R$200 A R$500
      </label>
      <label>
        <input type='radio' id='forty-price' value='500+'/>
        Acima de R$500
      </label>
    </SearchPriceStyled>
  )
}