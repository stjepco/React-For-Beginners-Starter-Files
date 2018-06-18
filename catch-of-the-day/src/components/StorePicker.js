import React from "react";

class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault();
    console.log("Radi");
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h1>Pick a store</h1>
        <input type="text" placeholder="Store Name" />
        <button type="submit">Visit store ></button>
      </form>
    );
  }
}

export default StorePicker;
