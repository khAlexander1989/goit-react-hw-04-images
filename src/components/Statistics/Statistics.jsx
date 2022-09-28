import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { StatField, StatFieldName, StatFieldValue } from './Statistics.styled';

export function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <Box as="ul" pt={3}>
      <StatField>
        <StatFieldName>Good:Good:</StatFieldName>{' '}
        <StatFieldValue>{good}</StatFieldValue>
      </StatField>
      <StatField>
        <StatFieldName>Neutral:</StatFieldName>{' '}
        <StatFieldValue>{neutral}</StatFieldValue>
      </StatField>
      <StatField>
        <StatFieldName>Bad:</StatFieldName>{' '}
        <StatFieldValue>{bad}</StatFieldValue>
      </StatField>
      <StatField>
        <StatFieldName>Total:</StatFieldName>{' '}
        <StatFieldValue>{total}</StatFieldValue>
      </StatField>
      <StatField>
        <StatFieldName>Positive feedback:</StatFieldName>{' '}
        <StatFieldValue>{positivePercentage}%</StatFieldValue>
      </StatField>
    </Box>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
