import React from "react"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const SanityPage = ({ data }) => (
  <Layout>
    <SEO title="Youtube" />
    <h1>UiBs videoer registrert i Sanity / {data.allSanityMovie.totalCount}</h1>
    
    <div style={{ display: `flex`, flexDirection: `column`}}>
      {data.allSanityMovie.nodes.map((node, index) => (
        <div style={{ paddingBottom: `1em`, width: `100%`, display: `flex`, alignItems: `flex-start`}} key={index}>
          <div style={{ paddingLeft: `1em`}}>
            <h2>{node.title} / {node.identifier}</h2>
            <BlockContent blocks={node._rawOverview} />
            {node.crewMembers.map((member, index) => (
              <p key={index}>{member.person.name} / {member.job}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export default SanityPage

export const data = graphql`
{
  allSanityMovie {
    nodes {
      title
      _rawOverview
      rightsholder {
        ... on SanityPerson {
          id
          name
        }
        ... on SanityOrganization {
          id
          name
        }
      }
      identifier
      id
      duration
      crewMembers {
        job
        person {
          name
        }
      }
      created
      client {
        ... on SanityPerson {
          id
          name
        }
        ... on SanityOrganization {
          id
          name
        }
      }
    }
    totalCount
  }
}`
