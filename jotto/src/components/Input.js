import React from 'react';

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');
  const handleSubmit = e => {
    e.preventDefault();
    setCurrentGuess('');
  };
  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={e => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={handleSubmit}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Input;
