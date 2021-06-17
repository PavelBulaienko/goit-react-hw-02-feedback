import propTypes from 'prop-types'

const Notification = ({ message }) => <p>{message}</p>

Notification.propTypes = {
    message: propTypes.string,
}

export default Notification
