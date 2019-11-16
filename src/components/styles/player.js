import styled from 'styled-components'

export const PlayerContainer = styled.div`
  width: 200px;
  height: ${({ visible }) => (visible ? '300px' : 0)};
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: absolute;
  bottom: 0;
  right: 0;
  & > div {
    height: auto !important;
    & > audio {
      background-color: #565656;
      outline: none;
      display: flex;
    }
    & > audio::-webkit-media-controls-panel {
      background-color: #565656;
      border: none;
      border-radius: 0;
    }
    & > audio::-webkit-media-controls-timeline-container {
      background-color: blue;
      border-radius: 0;
    }
    & > audio::-webkit-media-controls-current-time-display {
      background-color: blue;
      border-radius: 0;
    }
    & > audio::-webkit-media-controls-timeline {
      background-color: blue;
      border-radius: 0;
    }
  }
`
