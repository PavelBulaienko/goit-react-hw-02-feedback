import propTypes from 'prop-types'

const Section = ({ title }) => <h2>{title}</h2>

Section.propTypes = {
    title: propTypes.string,
}

export default Section
