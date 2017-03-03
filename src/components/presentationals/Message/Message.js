import React, { PropTypes } from 'react';

const Message = (props) => {
  const { openModal } = props;

  return (
    <div>
      <h1 className="page-title">The Ultimate Boilerplate</h1>
      <div className="row">
        <div className="column small-centered small-11 medium-6 large-5">
          <div className="container">
            <button className="button" onClick={() => openModal('MODAL', {})}>
              Click me to open Modal using Redux state
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

Message.propTypes = {
  openModal: PropTypes.func
};
