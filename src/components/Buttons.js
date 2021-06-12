import '../style/Button.css'

const Buttons = ({ onGoodClick, onNeutralClick, onBadClick }) => (
    <>
        <h2>Please leave feedback</h2>
        <button className="buttonReview" type="button" onClick={onGoodClick}>
            Good
        </button>
        <button className="buttonReview" type="button" onClick={onNeutralClick}>
            Neutral
        </button>
        <button className="buttonReview" type="button" onClick={onBadClick}>
            Bad
        </button>
    </>
)

export default Buttons
