import '../style/App.css'
import { Component } from 'react'
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import ExtraStats from './ExtraStats'
import Section from './Section'
import Notification from './Notification'

class App extends Component {
    state = { good: 0, neutral: 0, bad: 0 }

    onLeaveFeedback = (e) => {
        const prevState = this.state
        if (e.target.name === 'good') {
            this.setState({ good: prevState.good + 1 })
        } else if (e.target.name === 'neutral') {
            this.setState({ neutral: prevState.neutral + 1 })
        } else {
            this.setState({ bad: prevState.bad + 1 })
        }
    }
    countTotalFeedback = () => {
        return {
            total: this.state.good + this.state.neutral + this.state.bad,
        }
    }
    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state
        const total = good + neutral + bad
        return {
            procent: Math.floor((good * 100) / total) + '%',
        }
    }
    isFeedbackClear = () => {
        const { good, neutral, bad } = this.state
        return good + neutral + bad === 0 ? true : false
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
                <Section title="Please leave feedback" />
                <FeedbackOptions
                    options={this.state}
                    onLeaveFeedback={this.onLeaveFeedback}
                />
                {this.isFeedbackClear() ? (
                    <Notification message="No feedback given" />
                ) : (
                    <>
                        <Section title="Statistics" />
                        <Statistics
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
                )}
            </>
        )
    }
}

export default App
