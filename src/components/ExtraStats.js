import propTypes from 'prop-types'

const ExtraStats = ({
    countTotalFeedback,
    countPositiveFeedbackPercentage,
}) => (
    <>
        <p>Total: {countTotalFeedback().total}</p>
        <p>Positive: {countPositiveFeedbackPercentage().procent}</p>
    </>
)

propTypes.propTypes = {
    countTotalFeedback: propTypes.func,
}

export default ExtraStats
