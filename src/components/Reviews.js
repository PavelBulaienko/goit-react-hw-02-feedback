import { Component } from 'react'
import Buttons from './Buttons'
import Stat from './Stats'
import ExtraStats from './ExtraStats'

class Reviews extends Component {
    state = { good: 0, neutral: 0, bad: 0 }

    onGoodClick = () => {
        const prevState = this.state
        this.setState({ good: prevState.good + 1 })
    }
    onNeutralClick = () => {
        const prevState = this.state
        this.setState({ neutral: prevState.neutral + 1 })
    }
    onBadClick = () => {
        const prevState = this.state
        this.setState({ bad: prevState.bad + 1 })
    }
    countTotalFeedback = () => {
        return {
            total: this.state.good + this.state.neutral + this.state.bad,
        }
    }
    countPositiveFeedbackPercentage = () => {
        const { state } = this
        const { good, neutral, bad } = state
        const total = good + neutral + bad
        if (total !== 0) {
            return {
                procent: Math.floor((good * 100) / total) + '%',
            }
        } else {
            return {
                procent: 'no reviews',
            }
        }
    }

    componentDidUpdate() {
        // если не нужно записывать данные в localStorage закоментируйте эту функцию
        localStorage.setItem('options', JSON.stringify(this.state))
    }
    componentDidMount() {
        // если не нужно записывать данные в localStorage закоментируйте эту функцию
        this.setState(JSON.parse(localStorage.getItem('options')))
    }

    render() {
        return (
            <>
                <Buttons
                    onGoodClick={this.onGoodClick}
                    onNeutralClick={this.onNeutralClick}
                    onBadClick={this.onBadClick}
                />
                <Stat
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                />
                <ExtraStats
                    countTotalFeedback={this.countTotalFeedback}
                    countPositiveFeedbackPercentage={
                        this.countPositiveFeedbackPercentage
                    }
                />
            </>
        )
    }
}

export default Reviews
