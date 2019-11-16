import React, { useState, useContext, createContext } from 'react'
import ReactPlayer from 'react-player'

import { PlayerContainer } from './styles/player'

export const PlayerContext = createContext({})

const Wrapper = ({ children }) => {
  const {
    props: { path }
  } = children
  const [song, setSong] = useState('')
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)

  function setSongToContext (song) {
    setSong(song)
  }
  function toggleVisible (visible) {
    setVisible(visible)
  }
  function setPlayingToContext (playing) {
    setPlaying(playing)
  }

  return (
    <PlayerContext.Provider
      value={{
        song,
        visible,
        playing,
        setSongToContext,
        toggleVisible,
        setPlayingToContext
      }}
    >
      {children}
      {path === '/landing/' ? null : <Player />}
    </PlayerContext.Provider>
  )
}

const Player = () => {
  const player = useContext(PlayerContext)
  return (
    <PlayerContainer visible={player.visible}>
      <ReactPlayer url={player.song} playing={player.playing} controls />
    </PlayerContainer>
  )
}

export default Wrapper
