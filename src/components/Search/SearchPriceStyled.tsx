import styled from 'styled-components';

const SearchPriceStyled = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 242px;
  margin-left: 70px;
  top: 183px;

  label {
    height: 42px;
    left: 13.49%;
    right: 25.47%;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-content: center;
    color: #1D1D1B;

    input {
      background: #EAEAEA;
      margin-right: 10px;
    }
  }
`;

export default SearchPriceStyled;