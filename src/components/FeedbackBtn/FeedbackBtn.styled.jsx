import styled from 'styled-components';
import { getColorByType } from 'utils';

export const Btn = styled.button`
  width: 60px;
  height: 60px;
  padding: 0;
  background-color: transparent;
  border: none;

  border-radius: ${p => p.theme.radii.round};

  color: ${p => getColorByType(p.type)};

  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;

  :hover,
  :focus {
    transform: scale(1.2);
    outline: none;
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.5);
  }

  :active {
    filter: brightness(1.1);
  }
`;
