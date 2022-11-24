import React, { Component } from "react";

export default class FavoritesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
    };
  }

  componentDidMount() {
    let random_list = [
      { id: 1, name: "Warsaw", zipcode: "72112" },
      { id: 2, name: "Gdansk", zipcode: "72137412" },
    ];
    localStorage.setItem("cityList", JSON.stringify(random_list));
    this.setState({ cityList: JSON.parse(localStorage.getItem("cityList")) });
  }
  render() {
    return (
      <div>
        <ul className="list-group" style={{}}>
          {this.state.cityList ? this.state.cityList.map((city) => (
              <li className="list-group-item" key={city.id}>
                {city.id}: {city.name}, {city.zipcode}
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={() => console.log("usunieto")}
                  style={{ display: "inline", float: "right" }}
                >
                  X
                </button>
              </li>
          )) : <p style={{color: 'red', fontSize: '24px'}}>Sorry but list is empty</p>}
        </ul>
      </div>
    );
  }
}