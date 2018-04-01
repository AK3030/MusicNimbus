import React from 'react';
import linkCleaner from '../util/aws_link_cleaner';
import conversion from '../util/time_conversion';

class TrackItemCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      timestamp: this.props.pos,
      user_id: this.props.currentUser.id,
      track_id: this.props.trackId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.timestamp = this.props.pos;
    const comment = Object.assign({}, this.state);
    this.props.createComment({comment});
    this.setState({body: ""});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {

    return (
      <div>
        <div className = "comment-div">
          <div className = "grey-comment-container">
            <form className="comment-form" onSubmit={this.handleSubmit}>
              <label>
                <input
                  placeholder ="Write a comment"
                  type="text"
                  value={this.state.body}
                  onChange={this.update('body')}
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackItemCommentForm;
