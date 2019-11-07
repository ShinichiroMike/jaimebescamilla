import React, { useContext } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PlayerContext } from '../components/wrapperComponent'
import Menu from '../components/menu'

const MultimediaPage = ({
  data: {
    wpgraphql: {
      songs: { nodes }
    }
  }
}) => {
  const player = useContext(PlayerContext)
  // console.log(player)
  return (
    <Layout>
      <Menu />
      <SEO title='Multimedia' />
      <h1>Jim's Songs & Ost's</h1>
      {nodes.map(song => {
        let {
          song: {
            name,
            artist,
            songfile: { mediaItemUrl }
          }
        } = song
        return (
          <div>
            <h1>{name}</h1>
            <h2>{artist}</h2>
            <button
              onClick={() => {
                player.setSongToContext(mediaItemUrl)
                player.toggleVisible(true)
                player.setPlayingToContext(true)
              }}
            >
              {mediaItemUrl}
            </button>
            <audio controls>
              <source src={mediaItemUrl} type='audio/ogg' />
            </audio>
          </div>
        )
      })}
      <Link to='/page-2/'>Go to page 2</Link>
    </Layout>
  )
}

export default MultimediaPage

export const query = graphql`
  query {
    wpgraphql {
      songs {
        nodes {
          song {
            name
            artist
            songfile {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`
