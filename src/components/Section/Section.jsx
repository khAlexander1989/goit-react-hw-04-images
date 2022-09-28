import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { Title } from './Section.styled';

export function Section({ title, children }) {
  return (
    <Box pl={2} pt={2}>
      {title && <Title>{title}</Title>}
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
