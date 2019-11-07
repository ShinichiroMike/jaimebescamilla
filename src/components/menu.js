import React from 'react'
import { StaticQuery, Link } from 'gatsby'
import { MenuStyled } from './styles/menu'

const Menu = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        let {
          wpgraphql: {
            menus: {
              nodes: [
                {
                  menuItems: { edges }
                }
              ]
            }
          }
        } = data

        return (
          <MenuStyled>
            <ul>
              {edges.map(menuItem => {
                let {
                  node: { label }
                } = menuItem
                return (
                  <li>
                    <Link to={`/${label.toLowerCase()}/`}>{label}</Link>
                  </li>
                )
              })}
            </ul>
          </MenuStyled>
        )
      }}
    />
  )
}

export default Menu

export const query = graphql`
  query {
    wpgraphql {
      menus(where: { slug: "menu" }) {
        nodes {
          id
          menuItems {
            edges {
              node {
                label
              }
            }
          }
          name
          slug
        }
      }
    }
  }
`
