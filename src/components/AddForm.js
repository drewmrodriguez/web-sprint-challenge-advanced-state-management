import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newSmurf: {
        name: "",
        position: "",
        nickname: "",
        description: "",
        id: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      newSmurf: {
        name: "",
        position: "",
        nickname: "",
        description: "",
      },
    });
  };

  handleChange = (e) => {
    this.setState({
      newSmurf: { ...this.state.newSmurf, [e.target.name]: e.target.value },
    });
  };

  render() {
    return (
      <section>
        <h2>Add Smurf</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="name"
              id="name"
              value={this.state.newSmurf.name}
            />
            <label htmlFor="position">Position:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="position"
              id="position"
              value={this.state.newSmurf.position}
            />
            <label htmlFor="nickname">Nickname:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="nickname"
              id="nickname"
              value={this.state.newSmurf.nickname}
            />
            <label htmlFor="description">Description:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="description"
              id="description"
              value={this.state.newSmurf.description}
            />
          </div>
          {this.props.error === "" ? null : (
            <div
              data-testid="errorAlert"
              className="alert alert-danger"
              role="alert"
            >
              Error:{this.props.error}
            </div>
          )}
          <button
            onClick={() => {
              this.props.addSmurf(this.state.newSmurf);
            }}
          >
            Submit Smurf
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfsReducer.smurfs,
    error: state.smurfsReducer.error,
  };
};

export default connect(mapStateToProps, { addSmurf: actions.addSmurf })(
  AddForm
);