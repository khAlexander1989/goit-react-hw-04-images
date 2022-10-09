import PropTypes from 'prop-types';
import { Btn } from './IconBtn.styled';

export function IconBtn({ children, onClick, ...otherProps }) {
  return (
    <Btn onClick={onClick} {...otherProps}>
      {children}
    </Btn>
  );
}

IconBtn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  'aria-label': PropTypes.string.isRequired,
};
