import styled from 'styled-components';

export const ErrContainer = styled.div`
  width: 100%;
  height: 80vh;
  padding: ${p => p.theme.space[2]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
`;

export const ErrCode = styled.h1`
  font-size: ${p => p.theme.fontSizes[8]};
  color: orangered;
`;

export const ErrMsg = styled.p`
  font-size: ${p => p.theme.fontSizes[4]};
  font-weight: ${p => p.theme.fontWeights.bold};

  color: #0f0f0f;
`;
