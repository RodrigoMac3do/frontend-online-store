import React from 'react';
import PropTypes from 'prop-types';

class Details extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>

      </div>
    );
  }
}

Details.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Details;
