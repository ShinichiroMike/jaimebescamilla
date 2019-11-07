import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Menu from '../components/menu'

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

const LandingPage = () => {
  const [visible, setVisible] = useState(0)

  const ovelayTimeout = () => {
    setTimeout(() => {
      setVisible(1)
    }, 1000)
  }
  const onSetVisible = () => {
    setVisible(0)
  }

  return (
    <LandingContainer>
      <Layout>
        <SEO title='Landing' />

        <PositionLayout>
          <PlayerContainer>
          {/* <iframe id="landing-video" class="wp-block-video full-screen dark" src="https://player.vimeo.com/video/329647873?title=0&byline=0&portrait=0&transparent=0&autoplay=1&loop=1" frameborder="0" title="Funny Cat Videos For Kids" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""  allow="autoplay" data-ready="true"></iframe> */}
            <ReactPlayer
              volume={0}
              controls
              onStart={ovelayTimeout}
              url={VIDEO_URL}
              playing
              loop
            />
          </PlayerContainer>

          <Overlay onClick={onSetVisible} visible={visible}>
            <MenuContainer>
              <Menu />
            </MenuContainer>

            <TitleContainer>
              <h2>Wueee</h2>
              <h2>Composer & Sound Designer</h2>
            </TitleContainer>
          </Overlay>
        </PositionLayout>
      </Layout>
    </LandingContainer>
  )
}

export default LandingPage
