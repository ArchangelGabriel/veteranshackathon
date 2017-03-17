import React from 'react';

class List extends Component {

  render() {
    const { props } = this;

    return (
      <div className="list-item">
        <div className="list-item-left">
          <img className="img" src={props.item.imgUrl} />
        </div>
        <div className="list-item-right">
          <div className="title">
            <span className="bold">{props.item.name}</span>
          </div>
          <div className="subtitle">
            <Icon icon="place" size="1.3em" />{props.item.address}
          </div>
          <div className="description">
            {props.expandedId !== props.item.id ? (
              <div>
                <div className="list-item-label">{props.item.label}</div>
                <a className="list-item-more" href="javascript:void(0);" onClick={this.props.expandedIdChange.bind(this, props.item.id)}>(more)</a>
              </div>
            ) : (
              <div>
                <div className="list-item-label">{props.item.label}</div>
                <br />
                {props.item.description}
                <a className="list-item-less" href="javascript:void(0);" onClick={this.props.expandedIdChange.bind(this, false)}>(less)</a>
              </div>
            )}
          </div>
          <div className="actions">
            <div>
              <Icon icon="photosphere" size="1em" /> <a className="no-deco" href="javascript: Snaplar.locateStore({props.item.id});">view ar</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
