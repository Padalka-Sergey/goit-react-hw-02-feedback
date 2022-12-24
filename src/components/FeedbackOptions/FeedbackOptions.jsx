import { FeedbackBtnBox, Btn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const keys = Object.keys(options);
  return (
    <FeedbackBtnBox>
      {keys.map(key => (
        <Btn type="button" key={key} id={key} onClick={onLeaveFeedback}>
          {/* {key.slice(0, 1).toUpperCase()}
          {key.slice(1)} */}
          {key}
        </Btn>
      ))}
    </FeedbackBtnBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
