import './App.css'
import PropTypes from 'prop-types';


//const FirstApp = 'First App'

const FirstApp = ( { title, sum  }) => {
  return(
    <>
    <h1> {title} </h1>
    <span> {sum} </span>
    </>
  )
}

FirstApp.PropTypes = { 
    title: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'no hay titulo',
    sum: 300
}

export default FirstApp