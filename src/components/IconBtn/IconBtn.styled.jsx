import styled from 'styled-components';

export const Btn = styled.button`
  padding: ${p => p.theme.space[1]};
  border: none;
  border: ${p => p.theme.borders.default};
  border-radius: ${p => p.theme.radii.normal};

  background-color: transparent;
  opacity: ${p => (p.disabled ? 0.4 : 1)};

  width: 25px;
  height: 25px;

  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

  :hover,
  :focus {
    outline: none;
  }
`;
