import React from 'react';

function ErrorBoundary(props) {
    const OopsText = () => (
      <h2>Oops, something went wrong... We are doing our best to fix the issue</h2>
    );

    // const isEverythingOk = SomeFunction();
    let isEverythingOk = true;

    return <>{isEverythingOk ? props.children : <OopsText />}</>
}

export default ErrorBoundary;