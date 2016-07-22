import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CardGroup = ({cardCorver, cardTitle, cardCreator, docDate, cardContent}) => {
  return (
    <div className='card hoverable document-cards'>
      <div className='card-image waves-effect waves-block waves-light'>
        <img className='activator' src={cardCorver}/>
      </div>
      <div className='card-content custom-doc-card'>
        <i className='material-icons activator right '>more_vert</i>
        <span className='card-title activator truncate custom-blue-text '>{cardTitle}</span>
        <p>
          <span>Created by: {cardCreator} | </span>
          <span className='grey-text'>{docDate}</span>
        </p>
      </div>
      <div className='card-action action-card-custom'>
        <i className='material-icons delete-color modal-trigger custom-icon'>delete</i>
        <i className='material-icons custom-blue-text modal-trigger custom-icon'>edit</i>
      </div>
      <div className='card-reveal'>
        <span className='card-title grey-text text-darken-4'>{cardTitle}
          <i className='material-icons right'>close</i>
        </span>
        <p>{cardContent}</p>
      </div>
      <div id='modal1' className='modal'>
        <div className='modal-content'>
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className='modal-footer'>
          <Link to='#!' className=' modal-action modal-close waves-effect waves-green btn-flat'>Agree</Link>
        </div>
      </div>
    </div>
  );
}

CardGroup.propTypes = {
  cardCorver: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  cardCreator: PropTypes.number.isRequired,
  docdate: PropTypes.string,
  cardContent: PropTypes.string.isRequired
}

export default CardGroup;