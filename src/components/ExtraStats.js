const ExtraStats = ({
    countTotalFeedback,
    countPositiveFeedbackPercentage,
}) => (
    <>
        <p>Total: {countTotalFeedback().total}</p>
        <p>Positive: {countPositiveFeedbackPercentage().procent}</p>
    </>
)
export default ExtraStats
