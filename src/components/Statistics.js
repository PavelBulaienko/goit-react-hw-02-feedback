import propTypes from 'prop-types'

const Statistics = ({ good, neutral, bad }) => (
    <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
    </div>
)

Statistics.propTypes = {
    good: propTypes.number,
    neutral: propTypes.number,
    bad: propTypes.number,
}

export default Statistics
