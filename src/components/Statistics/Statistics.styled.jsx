import styled from 'styled-components';

export const StatField = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: ${p => p.theme.fontSizes[3]};
  color: ${p => p.theme.colors.textDarkGrey};
`;

export const StatFieldName = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const StatFieldValue = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
