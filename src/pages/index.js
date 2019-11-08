import React, { useEffect, useState, useContext } from 'react'
// import ReactPlayer from 'react-player'

import { StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Menu from '../components/menu'

import { PlayerContext } from '../components/wrapperComponent'

import {
  Overlay,
  LandingContainer,
  PlayerContainer,
  PositionLayout,
  MenuContainer,
  TitleContainer
} from './styles/landing'

const VIDEO_URL =
  'https://player.vimeo.com/video/329647873?title=0&byline=0&portrait=0&transparent=0&autoplay=1&loop=1'
const OVERLAYTIME = 5000

const LandingPage = () => {
  const player = useContext(PlayerContext)
  const [visible, setVisible] = useState(0)
  const [blur, setBlur] = useState(false)

  const overlayTimeout = () => {
    setTimeout(() => {
      setVisible(1)
      setBlur(true)
    }, OVERLAYTIME)
  }
  const onSetVisible = () => {
    // TODO: no affect to the menu
    setVisible(0)
    setBlur(false)
  }

  useEffect(() => {
    player.toggleVisible(false)
    player.setPlayingToContext(false)
    overlayTimeout()
  }, [])

  const content = ({
    wpgraphql: {
      mediaItems: {
        nodes: [{ sourceUrl }]
      }
    }
  }) => {
    console.log(sourceUrl)
    return (
      <LandingContainer>
        <Layout>
          <SEO title='Jaime Bermudez Escamilla' />

          <PositionLayout>
            <PlayerContainer blur={blur}>
              <iframe
                src={VIDEO_URL}
                frameborder='0'
                // webkitallowfullscreen=''
                // mozallowfullscreen=''
                // allowfullscreen=''
                allow='autoplay'
                data-ready='true'
              />
              {/* <ReactPlayer
              volume={0}
              controls
              onStart={overlayTimeout}
              url={VIDEO_URL}
              playing
              loop
            /> */}
            </PlayerContainer>

            <Overlay onClick={onSetVisible} visible={visible}>
              <MenuContainer>
                <Menu />
              </MenuContainer>

              <TitleContainer>
                <img
                  src={sourceUrl}
                  style={{
                    minWidth: '650px',
                    width: '50%',
                    maxWidth: '800px'
                  }}
                />
                {/* <h2>Wueee</h2>
                <h2>Composer & Sound Designer</h2> */}
              </TitleContainer>
            </Overlay>
          </PositionLayout>
        </Layout>
      </LandingContainer>
    )
  }

  return <StaticQuery query={query} render={data => content(data)} />
}

export default LandingPage

export const query = graphql`
  query {
    wpgraphql {
      mediaItems(where: { title: "landingOverlay" }) {
        nodes {
          title
          slug
          sourceUrl
        }
      }
    }
  }
`
