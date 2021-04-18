import { React, Component } from 'react';

export default class Forms extends React.Component {
    constructor(props) {
      super(props);
      this.state = { feedback: '', name: 'Name', email: 'arissa140100@yahoo.com.sg', serviceId: 'service_13zd6ah', templateId: "template_1j21nnd"};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <form className="test-mailing">
          <h1>Let's see if it works</h1>
          <div>
            <textarea
              id="test-mailing"
              name="test-mailing"
              onChange={this.handleChange}
              placeholder="Post some lorem ipsum here"
              required
              value={this.state.feedback}
              style={{width: '100%', height: '150px'}}
            />
          </div>
          <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
        </form>
      )
    }
  
    handleChange(event) {
      this.setState({feedback: event.target.value})
    }
  
    handleSubmit(event) {
        const templateId = 'template_1j21nnd';

	    this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email, tenant_name: "Bob", message: "TESTING", sender_email:"arissa140100@gmail.com"})
    }

    sendFeedback (templateId, variables) {
        window.emailjs.send(
          this.state.serviceId, templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }
  }