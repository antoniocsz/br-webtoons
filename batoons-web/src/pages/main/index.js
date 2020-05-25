import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import api from "../../services/api";

class Main extends Component {
  state = {
    notices: [],
    page: 1,
    noticeInfo: {},
  };

  componentDidMount() {
    this.loadNotices();
  }

  loadNotices = async (page = 1) => {
    const {
      data: { docs, ...noticeInfo },
    } = await api.get(`/notices?page=${page}`);

    this.setState({ notices: docs, noticeInfo, page });
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadNotices(pageNumber);
  };

  nextPage = () => {
    const { page, noticeInfo } = this.state;

    if (page === noticeInfo.pages) return;

    const pageNumber = page + 1;

    this.loadNotices(pageNumber);
  };

  render() {
    const { notices, page, noticeInfo } = this.state;

    if (notices.length === 0) return <h1>Carregando...</h1>;

    return (
      <div className="notice-list">
        <article>
          <Link to={`/new`}>+ Adicionar</Link>
        </article>

        <article>
          {notices.map((notice) => (
            <article key={notice._id}>
              <h1>{notice.title}</h1>
              <p>{notice.description}</p>
              <Link to={`/notices/${notice._id}`}>Acessar</Link>
            </article>
          ))}
          <div className="actions">
            <button disabled={page === 1} onClick={this.prevPage}>
              Anterior
            </button>
            <button
              disabled={page === noticeInfo.pages}
              onClick={this.nextPage}
            >
              Próxima
            </button>
          </div>
        </article>
      </div>
    );
  }
}

export default Main;
