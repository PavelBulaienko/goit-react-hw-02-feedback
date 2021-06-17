import '../style/Button.css'
import shortid from 'shortid'
import propTypes from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <>
        {Object.keys(options).map((option) => (
            <button
                key={shortid.generate()}
                name={option}
                className="buttonReview"
                type="button"
                onClick={onLeaveFeedback}
            >
                {option}
            </button>
        ))}
    </>
)

FeedbackOptions.propTypes = {
    options: propTypes.object,
    onLeaveFeedback: propTypes.func,
}

export default FeedbackOptions
