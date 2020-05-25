import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

class Notice extends Component {
  state = {
    notice: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const { data } = await api.get(`/notices/${id}`);

    this.setState({ notice: data });
  }

  render() {
    const { notice } = this.state;
    return (
      <div>
        <Link to={`/`}>{"<< Voltar"}</Link>

        <div className="notice-view">
          <h1>{notice.title}</h1>
          <p>{notice.description}</p>
        </div>
      </div>
    );
  }
}

export default Notice;
