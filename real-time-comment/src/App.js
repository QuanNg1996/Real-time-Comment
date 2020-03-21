import React, { Component } from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import CommentListComponent from "./components/CommentListComponent";
import CommentFormComponent from "./components/CommentFormComponent";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };

    this.addCommentHandler = this.addCommentHandler.bind(this);
  }

  addCommentHandler = (comment) => {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  render() {
    const loadingSpin = this.state.loading ? "App-logo Spin" : "App-logo";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={loadingSpin} alt="logo" />
          <h1 className="App-title">
            Comment Section
            <span className="px-2" role="img" aria-label="Chat">
              💬
            </span>
          </h1>
        </header>

        <div className="row">
          <div className="col-4 pt-3 border-right">
            <h6>Say something here!</h6>
            <CommentFormComponent addCommentHandler={this.addCommentHandler}/>
          </div>
          <div className="col-8 pt-3 bg-white">
            <CommentListComponent
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
