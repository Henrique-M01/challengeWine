import styled from 'styled-components';

const SearchContainer = styled.div`
  background-color: #F5F5F5;
  padding-left: 40px;

  h4 {
    width: 256px;
    height: 24px;
    margin-left: 75px;
    margin-top: 50px;
    margin-bottom: 30px;
    font-family: 'Neo Sans Std';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }

  @media screen and (max-width: 1060px) {
    padding-left: 0px;
    width: 240px;

    h4 {
      margin-left: 30px;
    }
  }
`;

export default SearchContainer;