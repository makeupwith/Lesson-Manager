import { connect } from 'react-redux'

import { requestAllUsers } from 'app/user/actions'

import SearchPage from 'app/user/pages/SearchPage'

const mapStateToProps = state => ({
  users : state.userReducer.users
})
const mapDispatchToProps = dispatch => ({
  requestAllUsers : word => dispatch(requestAllUsers(word))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
