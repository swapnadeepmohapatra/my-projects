import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "./data.json";

export default class Work extends Component {
  render() {
    return (
      <div className="work section" id="Work">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">My Projets</h2>
          </div>
          <ul className="work-list">
            {data.map((item, index) => {
              return (
                <li className="item" key={index}>
                  <div className="inner">
                    {/* <a href={item.link} target="_blank"> */}
                    <Link
                      to={`/project/${item.id}`}
                      //   onClick={() => {
                      //     // console.log(item);
                      //     this.props.history.push("/as");
                      //   }}
                    >
                      <img src={item.image} />
                      <span className="name">{item.name}</span>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
