import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import PreQuizForm from "../components/PreQuizForm";
import Question from "../components/Question";
import Result from "../components/Result";
import Navbar from "../components/Navbar";

class Quiz extends Component {
  render() {
    let renderItem = null;
    let { formActive, questionActive, resultActive } = this.props;

    if (formActive) renderItem = <PreQuizForm />;
    else if (questionActive) renderItem = <Question />;
    else if (resultActive) renderItem = <Result />;

    return (
      <Fragment>
        <Navbar />
        {renderItem}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  let { formActive, questionActive, resultActive } = state;

  return {
    formActive,
    questionActive,
    resultActive,
  };
};

export default connect(mapStateToProps)(Quiz);
