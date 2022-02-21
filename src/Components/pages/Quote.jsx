import React from 'react';

function Quote() {
  return (
    <>
      <div className="quote" data-testid="ancestor">
        <blockquote data-testid="descendant">
          Mathematics is not about numbers, eqautions, computations or algorithms;
          it is about understanding. —William Paul Thurston
        </blockquote>
      </div>
    </>
  );
}

export default Quote;
