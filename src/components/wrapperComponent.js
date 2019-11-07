import React, { useState, useContext, createContext } from 'react'
import ReactPlayer from 'react-player'

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
      value={{ song, visible, playing, setSongToContext, toggleVisible, setPlayingToContext }}
    >
      {children}
      {path === '/landing/' ? null : <Player />}
    </PlayerContext.Provider>
  )
}

const Player = () => {
  const player = useContext(PlayerContext)
  return (
    <div>
      <div
        style={{
          display: player.visible ? 'flex' : 'none',
          height: player.visible ? '160px' : 0
        }}
      >
        <ReactPlayer url={player.song} playing={player.playing} controls />
      </div>
    </div>
  )
}

export default Wrapper
