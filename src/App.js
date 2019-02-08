import React, { Component } from "react";
import { isSearched } from "./utils/isSearched";

const searchList = [
  { searchedElement: "Something" },
  { searchedElement: "Table" },
  { searchedElement: "Title" },
  { searchedElement: "NewSmthing" },
  { searchedElement: "Something" },
  { searchedElement: "Country" },
  { searchedElement: "Year" },
  { searchedElement: "Month" },
  { searchedElement: "Date" },
  { searchedElement: "Armenia" },
  { searchedElement: "Football" },
  { searchedElement: "Basketball" },
  { searchedElement: "Sport" },
  { searchedElement: "Yerevan" },
  { searchedElement: "Barcelona" },
  { searchedElement: "Russia" },
  { searchedElement: "Pskov" },
  { searchedElement: "Burkina Faso" },
  { searchedElement: "Switzerland" }
];

class App extends Component {
  state = {
    searchTerm: "",
    isFocused: false
  };

  onEdit = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };
  onFocus = event => this.setState({ isFocused: true });
  onBlur = event => this.setState({ isFocused: false });

  render() {
    const { isFocused, searchTerm } = this.state;
    return (
      <div className="background ui container">
        <h1 style={{ textAlign: "center" }}>Search Smth</h1>
        <form>
          <input
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onTouchMove={this.onTouchMove}
            type="text"
            value={this.state.searchTerm}
            onChange={event => this.onEdit(event)}
            placeholder="Search something..."
            className="inputStylings  search-bar ui segment"
          />
        </form>
        <div>{searchList.length} search terms is available.</div>
        {searchTerm &&
          isFocused &&
          searchList.filter(isSearched(searchTerm)).map((item, ind) => (
            <div key={ind}>
              <div className="ui inverted segment">
                <div className="ui inverted relaxed divided list">
                  <div className="item">
                    <div className="content">
                      <div class="header">{item.searchedElement}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
