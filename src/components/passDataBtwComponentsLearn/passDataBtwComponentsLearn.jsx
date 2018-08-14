import React from 'react';
import PropTypes from 'prop-types';
import style from './passDataBtwComponentsLearn.scss';

export default class PassDataBtwComponentsLearn extends React.Component {
  constructor(props) {
    super(props);

    const { color } = this.props;

    this.state = {
      h1Style: {
        color,
      },
    };
  }

  // todo: <JustText color={justTextColor} /> не обновляет автоматически пропсы у justText?
  // нужно обязательно обрабатывать это в componentWillReceiveProps?
  componentWillReceiveProps(data) {
    const { h1Style } = this.state;
    const { color } = data;

    if (color) {
      this.setState({
        h1Style: {
          ...h1Style,
          color,
        },
      });
    }
  }

  render() {
    const { h1Style } = this.state;

    return (
      <div className={style.justText}>
        <h1 style={h1Style}>
This text must change color
        </h1>
      </div>
    );
  }
}

PassDataBtwComponentsLearn.propTypes = {
  color: PropTypes.string,
};
