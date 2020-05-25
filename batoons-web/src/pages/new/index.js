import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";

class NoticeNew extends Component {
  state = {
    title: "",
    description: "",
    redirect: false,
  };

  // Send for backend
  handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description } = this.state;

    if (title.length > 0 && description.length > 0) {
      const response = await api.post("/notices", { title, description });

      console.log(response.status);

      if (response.status === 200) {
        this.setState({ title: "", description: "", redirect: true });
      }
    }
  };

  // Change state of page
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { title, description, redirect } = this.state;

    if (redirect === true) return <Redirect to="/" />;

    return (
      <div>
        <Link to={`/`}>{"<< Voltar"}</Link>
        <form className="notice-edit" onSubmit={this.handleSubmit}>
          <div className="notice-preview">
            <h1>Titulo: {title}</h1>
            <p>Descrição: {description}</p>
          </div>

          <div className="notice-edit-container">
            <div className="form-group">
              <label>Titulo:</label>
              <input name="title" value={title} onChange={this.handleChange} />
            </div>

            <div className="form-group">
              <label>Descrição:</label>
              <textarea
                name="description"
                value={description}
                onChange={this.handleChange}
                rows={5}
              />
            </div>
            <button
              onClick={this.handleSubmit}
              disabled={title.length === 0 && description.length === 0}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NoticeNew;
