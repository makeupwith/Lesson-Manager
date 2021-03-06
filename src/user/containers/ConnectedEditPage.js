import { connect } from 'react-redux'

import { requestPutMe } from 'app/user/actions'

import UserEditPage from 'app/user/pages/UserEditPage'

const mapStateToProps = state => ({
  me : state.userReducer.me
})
const mapDispatchToProps = dispatch => ({
  requestPutMe : (name, email, password) => dispatch(requestPutMe(name, email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserEditPage)
