import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import Menu from '../components/menu'
import SEO from '../components/seo'

const FilmPage = ({
  data: {
    wpgraphql: {
      films: { nodes: films }
    }
  }
}) => {
  return (
    <Layout>
      <SEO title='Films' />
      <Menu />
      <h1>Jim's films</h1>
      {films.map(film => {
        let {
          title,
          film: { director }
        } = film
        return (
          <>
            <h1>{title}</h1>
            <h3>{director}</h3>
          </>
        )
      })}
    </Layout>
  )
}

export default FilmPage

export const query = graphql`
  query {
    wpgraphql {
      films {
        nodes {
          title
          film {
            director
            fieldGroupName
            job
            year
          }
        }
      }
    }
  }
`
