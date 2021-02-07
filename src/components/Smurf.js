import React from "react";

class Smurf extends React.Component {
  render() {
    const { smurf } = this.props;
    return (
      <div data-testid="smurf" className="smurfCard">
        <header>
          <h3 className="card-title">{smurf.name}</h3>
          <p>
            {smurf.nickname} &#8226; {smurf.position}
          </p>
        </header>
        <p>{smurf.description}</p>
      </div>
    );
  }
}

export default Smurf;
