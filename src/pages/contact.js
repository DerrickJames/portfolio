import React, { Component } from "react"
import Layout from "../components/Layout/layout"

class ContactPage extends Component {
  render() {
    let contactData = this.props.data.allContactJson.nodes[0]
    return (
      <Layout page={"contact"}>
        <h1 className="title">{contactData.title}</h1>
        <div className="text">
          Let's build something together!
        </div>
        <div className="contact-grid-container">
          <div className="contact-grid-item">
            <img
              src={contactData.email_icon}
              alt="Email"
              className="contact-icon"
            ></img>
          </div>
          <div className="contact-grid-item">
            <img
              src={contactData.phone_icon}
              alt="Phone"
              className="contact-icon"
            ></img>
          </div>
          <div className="contact-grid-item">
            <img
              src={contactData.twitter_icon}
              alt="Twitter"
              className="contact-icon"
            ></img>
          </div>
          <div className="contact-grid-item">dmushangi@gmail.com</div>
          <div className="contact-grid-item">+254 xxx xxx xx2</div>
          <div className="contact-grid-item">@DerrickGems</div>
        </div>
      </Layout>
    )
  }
}
export default ContactPage

export const query = graphql`
  query {
    allContactJson {
      nodes {
        id
        title
        description
        text
        email
        phone
        twitter
        email_icon
        phone_icon
        twitter_icon
      }
    }
  }
`
