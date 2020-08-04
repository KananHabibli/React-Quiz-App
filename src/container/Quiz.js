import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import PreQuizForm from '../components/PreQuizForm'
import Question from '../components/Question'
import Result from '../components/Result'
import Navbar from '../components/Navbar'

class Quiz extends Component {
  render() {
    let renderItem = null
    if(this.props.formActive)          renderItem =  <PreQuizForm />
    else if(this.props.questionActive) renderItem =  <Question />
    else if(this.props.resultActive)   renderItem =  <Result />
    
    return (
      <Fragment>
        <Navbar />
        {renderItem}
      </Fragment>
    )
  }
}


function mapStateToProps(state) {
  return{
    formActive: state.formActive,
    questionActive: state.questionActive,
    resultActive: state.resultActive
  }
}

export default connect(mapStateToProps)(Quiz);
