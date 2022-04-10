import React from "react";
import web3 from "./web3";
import lottery from "./lottery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { manager: "" };
    this.state = { user: "" };
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const user = await web3.eth.getAccounts();
    this.setState({ manager });
    this.setState({ user });
  }

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>Wallet connected {this.state.user}</p>
        <p>This contract is managed by {this.state.manager}</p>
      </div>
    );
  }
}
export default App;