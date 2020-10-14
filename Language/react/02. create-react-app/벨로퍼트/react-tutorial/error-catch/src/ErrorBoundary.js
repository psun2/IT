import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    console.log('에러가 발생했습니다.');
    console.log({
      error,
      info,
    });
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) return <h1>에러 발생!</h1>;
    return this.props.children;
  }
}

/*
 <ErrorBoundary>
    <User />
 </ErrorBoundary>
*/
// ErrorBoundary 컴포넌트로 User 컴포넌트를 감싸는 이유는
// 에러 발생 예외처리를 ErrorBoundary 컴포넌트에서 진행중이고
// ErrorBoundary 안쪽에 있는 컴포넌트가 모두 랜더가 되어야
// /ErrorBoundary 로 인해 ErrorBoundary 컴포넌트도 랜더가 종료 됩니다.
