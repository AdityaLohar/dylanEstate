/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const About = () => {
  const initialDescription = `Spread over 510 sqft. this home is an ideal place to live in. Access to bus station & medical stores is very easy & convenient from this house. If you are a frequent traveller, then you'll be happy to note that train station is less than 10 minutes from this house. With PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch your favourite movies running & never worry about missing a show because of traffic. Never miss out on lifestyle as Rassaz Mall`;

  const [expanded, setExpanded] = useState(false);
  const [description, setDescription] = useState(initialDescription);

  const handleShowMore = () => {
    setExpanded(true);
  };

  const handleShowLess = () => {
    setExpanded(false);
  };

  return (
    <div className='p-4 bg-white rounded shadow-md'>
      <h2 className='text-xl md:text-2xl p-4 font-bold mb-4'>About Miraroad</h2>
      <p className='mb-4 p-4 py-5 rounded shadow-sm'>{expanded ? description : `${description.slice(0, 200)}...`}</p>
      {!expanded && (
        <button onClick={handleShowMore} className="show-more-btn underline font-semibold p-4 py-5 ">
          Show more
        </button>
      )}
      {expanded && (
        <button onClick={handleShowLess} className="show-more-btn underline font-semibold p-4 py-5 ">
          Show less
        </button>
      )}
    </div>
  );
};

export default About;
