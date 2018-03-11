import React from 'react';
import linkCleaner from '../util/aws_link_cleaner';
import conversion from '../util/time_conversion';

class TrackItemCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      timestamp: 20,
      user_id: this.props.currentUser.id,
      track_id: this.props.trackId
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
    const comment = Object.assign({}, this.state);
    this.props.createComment({comment});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    console.log(this.state);

    return (
      <div>

      <div className = "comment-div">

        <div className = "grey-comment-container">

          <form className="comment-form" onSubmit={this.handleSubmit}>
            <label>
              <input
                placeholder ="Write a comment"
                type="text"
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
