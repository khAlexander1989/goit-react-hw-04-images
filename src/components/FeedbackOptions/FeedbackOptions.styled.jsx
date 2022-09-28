import styled from 'styled-components';

import { getColorByType } from 'utils';

export const BtnGroup = styled.ul`
  display: flex;
`;
export const BtnGroupItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${p => p.theme.space[2]};

  :not(:first-child) {
    margin-left: ${p => p.theme.space[3]};
  }
`;

export const FeedbackLabel = styled.span`
  margin-top: ${p => p.theme.space[2]};

  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => getColorByType(p.children)};
`;
