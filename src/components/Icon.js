import React, { Component } from 'react';


class Icon extends Component {

  _mergeStyles(...args) {
    return Object.assign({}, ...args);
  }

  renderGraphic() {
    switch (this.props.icon) {
      case 'sms':
        return (
          <g><path d="M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 18 4-4h14c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-11 9h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"></path></g>
        );
      case 'check':
        return (
          <g><path d="M9 16.17l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41z"></path></g>
        );
      case 'remove-red-eye':
        return (
          <g><path d="M12 4.5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
        );
      case 'tag-faces':
        return (
          <g><path d="M11.99 2c-5.52 0-9.99 4.48-9.99 10s4.47 10 9.99 10c5.53 0 10.01-4.48 10.01-10s-4.48-10-10.01-10zm.01 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5h-10.22c.8 2.04 2.78 3.5 5.11 3.5z"></path></g>
        );
      case 'lens':
        return (
          <g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path></g>
        );
      case 'phone':
        return (
          <g><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3.49c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></g>
        );
    }
  }

  render() {
    let styles = {
      fill: "currentcolor",
      verticalAlign: "middle",
      width: this.props.size, // CSS instead of the width attr to support non-pixel units
      height: this.props.size // Prevents scaling issue in IE
    };

    return (
      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
        style={this._mergeStyles(
          styles,
          this.props.style // This lets the parent pass custom styles
        )}>
          {this.renderGraphic()}
      </svg>
    );
  }

}

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired,
  size: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  style: React.PropTypes.object
};

Icon.defaultProps = {
  size: 24
};

export default Icon;
