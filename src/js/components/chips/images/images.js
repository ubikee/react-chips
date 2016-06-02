import React from 'react';

export default class Image extends React.Component {

  render() {
    const { mode, src, style, ...props } = this.props;

    const modes = {
      fill: 'cover',
      fit: 'contain',
    };

    const size = modes[mode] || 'cover';

    const defaults = {
      backgroundColor: 'gray',
    };

    const important = {
      backgroundImage: `url("${src}")`,
      backgroundSize: size,
      backgroundPostion: 'center center',
      backgroundRepeat: 'no-repeat',
    };

    return <div className="image" {...props} style={{ ...defaults, ...style, ...important }} />;
  }
}
