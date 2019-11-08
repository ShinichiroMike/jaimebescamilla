import styled from 'styled-components'

export const LandingContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  /* margin-top: -26px; */
`

export const PositionLayout = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: opacity 1s linear;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* opacity: ${props => props.visible}; */
  color: white;
  position: absolute;
  align-self: center;
`

export const PlayerContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  & > div {
    width: 100% !important;
    height: 100% !important;
    top: 0;
    bottom: 0;
    & > div {
      width: 100% !important;
      height: 100% !important;
      top: 0;
      bottom: 0;
    }
  }
  & iframe {
    z-index: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    ${({ blur }) => blur && 'filter: blur(10px) grayscale(30%);'}
    transition: filter 1s linear;
  }
`

export const MenuContainer = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  display: flex;
  flex-direction: row;
  background: blue;
  top: 0;
  color: white;
`

export const Overlay = styled.div`
  transition: opacity 1s linear 0s;
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  opacity: ${props => props.visible};
`
