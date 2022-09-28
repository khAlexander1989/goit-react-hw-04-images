import PropTypes from 'prop-types';

import { FeedbackBtn } from 'components/FeedbackBtn';
import {
  BtnGroup,
  BtnGroupItem,
  FeedbackLabel,
} from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  function forwardFeedback(feedbackType) {
    onLeaveFeedback(feedbackType);
  }

  return (
    <BtnGroup>
      {options.map(option => (
        <BtnGroupItem key={option}>
          <FeedbackBtn type={option} onForwardFeedback={forwardFeedback} />
          <FeedbackLabel>{option}</FeedbackLabel>
        </BtnGroupItem>
      ))}
    </BtnGroup>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
  onLeaveFeedback: PropTypes.func.isRequired,
};
