/* eslint-disable react/prop-types */
import propType from 'prop-types'

function Welcome (props) {
    if (props.isLogin == true) {
        return (
            <h2>Welcome back {props.user} :)</h2>
        )
    }
    else {
        return (
            <h2>Please login to continue ...</h2>
        )
    }
}

Welcome.propType = {
    user  : propType.string,
    isLogin  : propType.bool
}

Welcome.defaultProps = {
    user : 'ram gopal',
    isLogin : false

}

export default Welcome 