import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = evt => {
    const id = evt.target.getAttribute('id');

    this.setState(prevState => ({
      [id]: prevState[id] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round(
      good === 0 ? 0 : (good / this.countTotalFeedback()) * 100
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      state,
      handleClick,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const keysValues = Object.values(this.state);
    // console.log(keys);
    const count = keysValues.reduce((acc, num) => acc + num, 0);
    // console.log(count);
    const keysKeys = Object.keys(state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions keysKeys={keysKeys} onLeaveFeedback={handleClick} />
          {/* {good !== 0 || neutral !== 0 || bad !== 0 ? ( */}
          {count !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}
