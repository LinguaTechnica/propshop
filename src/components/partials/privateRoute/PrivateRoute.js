import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// import { isLoggedIn } from '../../../services/authService'

// TODO: do willMount token verification in the passed-in components?
const PrivateRoute = ({ component: Component, isAuthorized}) => {
  return (
      <Route render={(props) => isAuthorized() ? <Component {...props} /> : <Redirect to={{pathname: '/login'}}/>} />
  )
};

// class PrivateRoute extends React.Component {
//
//   // make verification request
//   // render a loading gif
//   // redirect to login or render component
//   state = {
//     loggedIn: null,
//     tokenVerified: false
//   }
//
//   componentWillMount() {
//     isLoggedIn()
//       .then(
//         () => {
//           this.setState({
//             loggedIn: true,
//             tokenVerified: true
//           })
//         },
//         () => {
//           console.log('caught rejected promise')
//           this.setState({
//             loggedIn: false,
//             tokenVerified: true
//           })
//         }
//       )
//   }
//
//   render() {
//     const { component: Component, ...rest } = this.props
//     let toRender = <img src="loader.gif" alt="loading gif" />
//     if (this.state.tokenVerified) {
//       toRender = this.state.loggedIn ? (
//         <Component {...rest} />
//       ) : (
//         <Redirect to={{ pathname: '/login' }} />
//       )
//         // <Route
//         //   {...rest}
//         //   render={props => {
//         //     console.log('rendering from renderprops')
//         //       return this.state.loggedIn ? (
//         //         <Component {...props} />
//         //       ) : (
//         //         <Redirect to={{ pathname: '/login', state: { referrer: props.location } }} />
//         //       )
//         //     }
//         //   }
//         // />
//     }
//     return toRender
//   }
// }

export default PrivateRoute;
