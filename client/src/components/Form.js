// Import statements
import React from 'react';

// Stateless Component that generates a Form
const Form = (props) => {

  // Destructuring props
  const { cancel, errors, submit, submitButtonText, elements, } = props;

  // Function that submit the form
  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  // Function that cancel and redirect user to main page
  function handleCancel(event) {
    event.preventDefault();
    cancel();
  }

  return (
    <>
        <ErrorsDisplay errors={errors} />
        <form onSubmit={handleSubmit}>
            {elements()}
            <button className="button" type="submit">{submitButtonText}</button>
            <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
        </form>
    </>
  );
};

// Stateless Component that render each error from the API response
export function ErrorsDisplay({ errors }) {
  let errorsDisplay = null;

  if (errors.length) {
    errorsDisplay = (
      <div>
        <div className="validation-errors">
          <h3>Validation Errors</h3>
          <ul>
            {errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
        </div>
      </div>
    );
  }

  return errorsDisplay;
};

export default Form;
