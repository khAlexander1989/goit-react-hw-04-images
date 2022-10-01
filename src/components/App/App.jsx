import { Component } from 'react';

import { Box } from 'components/Box';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementStatFieldValueByName = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback(...feedbacks) {
    return feedbacks.reduce((accum, curr) => accum + curr, 0);
  }

  countPositiveFeedbackPercentage(positive, total) {
    return total ? Math.round((positive * 100) / total) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      total
    );

    return (
      <Box
        p={3}
        bg="bgSecondary"
        width="25%"
        borderRadius="normal"
        border="default"
        borderColor="borderWarm"
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.incrementStatFieldValueByName}
          />
        </Section>
        <Box borderTop="default" borderColor="borderWarm">
          <Section title="Statistics">
            {total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </Box>
      </Box>
    );
  }
}
