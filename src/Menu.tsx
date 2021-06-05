import { url } from 'inspector';
import React from 'react';

class Menu extends React.Component<{title: string, url: string, desc: Array<any>}> {
  render() {
    return (
      <div className="menu">
        <h1 style={{fontWeight: 100, fontSize: "1.7rem", marginBottom: "1vh"}}>{this.props.title}</h1>
        <p style={{lineHeight: "145%", marginBottom: "1vh"}}>{this.props.desc}</p>

        <a href={this.props.url} target="_blank">방문하기</a>
      </div>
    )
  }
}

export default Menu;
