import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div>
      {prev ? <button onClick={handlePrevious}>{'<'}</button> : null}
      {next ? <button onClick={handleNext}>{'>'}</button> : null}
    </div>
  );
};

export default Pagination;
