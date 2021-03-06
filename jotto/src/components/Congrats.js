import React from 'react';

const Congrats = props => {
  return (
    <>
      {props.success && (
        <div data-test="component-congrats" className="alert alert-success">
          <span data-test="congrats-message">
            Congratulations! You guessed the word
          </span>
        </div>
      )}
    </>
  );
};

export default Congrats;
