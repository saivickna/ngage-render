import Inferno from 'inferno';
import Component from 'inferno-component';

import { submitAudQuestion } from '../actions/audquestions';
import { setQAModal } from '../actions/qa';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';

class Ask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQAModal = this.handleQAModal.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newAudQ = {
      content: this.state.value
    }
    this.props.submitAudQuestion(newAudQ)
  }

  handleQAModal(e) {
    e.preventDefault();
    var toggle = e.target.value;
    if (toggle === enable) {
      this.props.setQAModal(true);
    } else {
      this.props.setQAModal(false);
    }
  }

  render() {
    let ask;

    if (!this.props.user || this.props.user.type === 0) {
      ask = (
        <form className="modal-form" onSubmit={this.handleSubmit}>
          <h3>Have a question for the presenter?</h3>
          <div className="modal-form-group">
            <input type="text"
              placeholder="Ask a question..."
              value={this.state.value}
              onInput={this.handleInput} />
              <button type="submit">Submit</button>
          </div>
        </form>
      )
    } else if (this.props.user.type === 1) {
      ask = (
        <div className="modal-qa">
          <h3>Allow participants to ask questions?</h3>
          <button value="enable" type="text" onClick={this.handleQAModal}>Enable</button>
          <button value="disable" type="text" onClick={this.handleQAModal}>Disable</button>
        </div>
      )
    }

    return ask;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    session: state.session,
    qaModal: state.qaModal
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators( { submitAudQuestion, setQAModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Ask);
