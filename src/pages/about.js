import React, { Component } from "react"
import Layout from "../components/Layout/layout"

class AboutPage extends Component {
  render() {
    let aboutData = this.props.data.allAboutJson.nodes[0]
    let teamMembers = []
    let i = 0
    aboutData.team_members.forEach(item => {
      teamMembers.push(
        <div key={i} className="team-grid-container">
          <div className="team-grid-item-left">
            <img
              src={aboutData.name_icon}
              alt="Name"
              className="info-icon"
            ></img>
            {item.name}
            <br />
            <span>
              <img
                src={aboutData.title_icon}
                alt="Title"
                className="info-icon"
              ></img>
              {item.title}
            </span>
            <br />
            <span>
              <img
                src={aboutData.mail_icon}
                alt="Mail"
                className="info-icon"
              ></img>
              {item.email}
            </span>
            <br />
            <span>
              <img
                src={aboutData.twitter_icon}
                alt="Twitter"
                className="info-icon"
              ></img>
              {item.twitter}
            </span>
          </div>
          <div className="team-grid-item-right">
            <img src={item.image} alt="Team" className="team-icon"></img>
          </div>
        </div>
      )
      i++
    })

    return (
      <Layout page={"about"}>
        <div className="main">
          <h1 className="title">{aboutData.title}</h1>
          <div className="text">{aboutData.text}</div>


          <div style={{textAlign: "center", marginBottom: 10}}>
            <a href={aboutData.github_url} rel="noopener noreferrer" target="_blank">
              <img
                src={aboutData.github_icon}
                alt="Title"
                style={{width: 50, height: 50}}
                className="info-icon"
              ></img>
            </a>
          </div>

          <div>
              <h2 className="subtitle">
                <a href={aboutData.github_url} className="custom-link" rel="noopener noreferrer" target="_blank">
                   {aboutData.subtitle}
                </a>
            </h2>
          </div>
        </div>
      </Layout>
    )
  }
}
export default AboutPage

export const query = graphql`
  query {
    allAboutJson {
      nodes {
        id
        title
        description
        text
        subtitle
        name_icon
        github_icon
        github_url
        title_icon
        mail_icon
        twitter_icon
        team_members {
          name
          title
          email
          twitter
          image
        }
      }
    }
  }
`
