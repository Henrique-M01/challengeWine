import styled from 'styled-components';

const CatalogContainer = styled.div`
  background-color: #F5F5F5;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 100px;
  padding-right: 150px;

  @media screen and (max-width: 1060px) {
    padding-right: 90px;
  }
`;

export default CatalogContainer;
