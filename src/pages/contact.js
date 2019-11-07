import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import Menu from '../components/menu'
import SEO from '../components/seo'

const ContactPage = () => {
  return (
    <Layout>
      <SEO title='Contact' />
      <Menu />
      <form method='post' action='https://mailserver.shirowatla.now.sh/contact'>
        <label>
          Email
          <input type='email' name='from' id='from' />
        </label>
        <label>
          Subject
          <input type='text' name='subject' id='subject' />
        </label>
        <label>
          Message
          <textarea name='message' id='message' rows='5' />
        </label>
        <button type='submit'>Send</button>
        <input type='reset' value='Clear' />
      </form>
    </Layout>
  )
}

export default ContactPage
