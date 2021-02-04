import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 84px;
  box-shadow: 0px 4px 20px 0px rgba(139, 0, 255, 0.1);

  h1 {
    font-weight: 400;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  margin: 24px 0;
  max-width: 80vw;
  overflow: hidden;
  > img {
    max-width: 50vw;
    max-height: 50vw;
  }

  div#like {
    display: flex;
    justify-content: space-between;

    margin: 8px 0;
  }
`;
