/* eslint-disable react/prop-types */
// props 
// propTypes 
// defaultProps

import PropTypes from 'prop-types'


function Student (props) {
    return(
        <div  className="student">
            <div>Name : {props.name}</div>
            <div>Age : {props.age}</div>
            <div>Married : {props.isMarried ? 'Yes' : 'No'}</div>
        </div>
    );
}

Student.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isMarried : PropTypes.bool,
}


Student.defaultProps = {
   name :'Guest',
   age : 0,
   isMarried : false
}

export default Student