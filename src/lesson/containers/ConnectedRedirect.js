import { connect } from 'react-redux'

import RedirectPage from 'app/lesson/pages/RedirectPage'

const mapStateToProps = state => ({
  message : state.lessonsReducer.message
})

export default connect(mapStateToProps, {})(RedirectPage)
