import PropTypes from 'prop-types';

import { getIconByType } from 'utils';
import { Btn } from './FeedbackBtn.styled';

export function FeedbackBtn({ type, onForwardFeedback }) {
  const BtnIcon = getIconByType(type);

  function onFeedbackBtnClick() {
    onForwardFeedback(type);
  }

  return (
    <Btn type={type} onClick={onFeedbackBtnClick}>
      <BtnIcon size="100%" />
    </Btn>
  );
}

FeedbackBtn.propTypes = {
  type: PropTypes.oneOf(['good', 'neutral', 'bad']),
  onForwardFeedback: PropTypes.func.isRequired,
};
