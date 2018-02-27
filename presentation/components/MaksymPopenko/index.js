import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'spectacle';


class MaksymPopenko extends Component {

  renderMe() {
    const styles = {
      'margin': '10px auto',
      'width': '130px',
      'height': '130px',
      'borderRadius': '50%'
    };
    return (
      <div style={{ display: 'inline-block', width: '400px' }}>
        <img src={this.props.photo} style={styles} />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderMe()}
        <div>
          <Link textColor="white" href="http://github.com/popenkomaksim" style={{ fontSize: '1em' }} target="__blank">
            Maksym Popenko
          </Link>
        </div>
      </div>
    );
  }

}

MaksymPopenko.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default MaksymPopenko;
