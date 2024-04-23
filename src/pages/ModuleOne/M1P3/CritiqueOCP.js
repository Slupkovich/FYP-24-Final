import React from 'react';
import './Criqitue.css'; 

const critiquesData = [
  {
      id: 'customer-discovery',
      quote: 'Learning and adapting based on customer feedback is more beneficial than rigid planning',
      reference: 'Mintzberg, H., 1991. Learning 1, planning 0 reply to Igor Ansoff. Strategic management journal, 12(6), pp.463- 466.',
      imageUrl: '/ExecutionM1P3.png'
  },
  {
      quote: 'Human capital has the strongest effect on venture performance, while planning only has a minimal effect on performance',
      reference: 'Haber, S. and Reichel, A., 2007. The cumulative nature of the entrepreneurial process: The contribution of human capital, planning and environment resources to small venture performance. Journal of Business Venturing, 22(1), pp.119-145.'
  },
  {
      quote: 'Over-planning can create a false sense of certainty about the future',
      reference: 'Bhide, A. (2000), The Origin and Evolution of New Businesses, Oxford University Press, New York'
  },
  {
      quote: 'Reliance on predictions can lead to mistakes, as the future is unpredictable',
      reference: 'Bird, B. (1988), ‘Implementing entrepreneurial ideas: the case for intention’, Academy of Management Review, Vol 13, No 3, pp 442–453'
  },
  {
      id: 'value-equation',
      quote: 'Strict adherence to a plan can prevent necessary adjustments in response to changing conditions',
      reference: 'Mintzberg, H. (1994), ‘The fall and rise of strategic planning’, Harvard Business Review, January–February, pp 107–114',
      imageUrl: '/ValueEquationM1P3.png' // Referencing imported image
  }
];
      
// This React component renders a section containing critiques of a conventional process.
const CritiqueOCP = () => {
  return (
    // Main section for critiques, using a specific class for styling.
    <section className="critiques-sec">
      <div className="critiques">
        <h1 className="critiques__title">
          <span>Critiques of Conventional Process</span>
        </h1>
        <div className="critiques__container">
          {critiquesData.map((critique, index) => (
            // Individual box for each critique. Conditional class added if the critique has an image.
            <div key={index} className={`critiques__box ${critique.imageUrl ? 'critiques__box--with-image' : ''}`}>
              <p className="critiques__quote">{critique.quote}</p>
              {critique.imageUrl && (
                // Conditional rendering for an image with a dynamic URL taken from the environment variables.
                <div
                  className="critiques__image"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + critique.imageUrl})` }}
                />
              )}
              <p className="critiques__reference">{critique.reference}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CritiqueOCP;
