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
  TitleContainer,
  ImgOverlay
} from './styles/landing'

const VIDEO_URL =
  'https://player.vimeo.com/video/329647873?title=0&byline=0&portrait=0&transparent=0&autoplay=1&loop=1'
const OVERLAYTIME = 5000

const LandingPage = () => {
  const player = useContext(PlayerContext)
  const [visible, setVisible] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)

  const overlayTimeout = () => {
    setTimeout(() => {
      setVisible(true)
      setMenuVisible(true)
    }, OVERLAYTIME)
  }
  const onSetVisible = () => {
    setVisible(false)
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
            <PlayerContainer blur={visible}>
              <iframe
                src={VIDEO_URL}
                frameborder='0'
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

            <Overlay onClick={onSetVisible}>
              <MenuContainer visible={menuVisible}>
                <Menu />
              </MenuContainer>

              <TitleContainer visible={visible}>
                <ImgOverlay src={sourceUrl} />
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
