import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Img from 'gatsby-image'
import { StaticQuery } from 'gatsby'

import Menu from '../components/menu'

const GamesPage = () => {
  return (
    <Layout>
      <Menu />
      <SEO title='Games' />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>

      <StaticQuery
        query={QUERY}
        render={data => {
          let {
            wpgraphql: {
              games: { nodes }
            }
          } = data
          return (
            <div>
              <h1>Gamesitos</h1>
              {nodes.map((game, i) => {
                let {
                  title,
                  game: {
                    logo: {
                      imageFile: {
                        childImageSharp: { fluid }
                      }
                    }
                  }
                } = game
                return (
                  <div key={i}>
                    <h2>{title}</h2>
                    <Img fluid={fluid} />
                  </div>
                )
              })}
            </div>
          )
        }}
      />

      <Link to='/'>Go back to the homepage</Link>
    </Layout>
  )
}

export default GamesPage

const QUERY = graphql`
  query {
    wpgraphql {
      games {
        nodes {
          title
          game {
            company
            job
            link
            logo {
              id
              sourceUrl
              imageFile {
                childImageSharp {
                  id
                  fluid(maxWidth: 1600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
