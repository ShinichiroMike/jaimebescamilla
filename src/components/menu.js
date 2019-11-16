import React from 'react'
import { useStaticQuery, Link } from 'gatsby'
import { MenuStyled } from './styles/menu'

const Menu = () => {
  const {
    wpgraphql: {
      menus: {
        nodes: [
          {
            menuItems: { edges }
          }
        ]
      }
    }
  } = useStaticQuery(query)

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
}

export default Menu

const query = graphql`
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
