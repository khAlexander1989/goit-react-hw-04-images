import PropTypes from 'prop-types';

import { ErrMsg, ErrCode, ErrContainer } from './ErrorMessage.styled';

export function ErrorMessage({ code, msg }) {
  return (
    <ErrContainer m="auto">
      {code && <ErrCode>{code}</ErrCode>}
      <ErrMsg>{msg}</ErrMsg>
    </ErrContainer>
  );
}

ErrorMessage.propTypes = {
  code: PropTypes.string,
  msg: PropTypes.string,
};
