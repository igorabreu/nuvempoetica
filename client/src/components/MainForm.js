import React from 'react'
import Helmet from 'react-helmet'
import Form from './Form'
import Header from './Header'
import MainLabel from './MainLabel'
import Footer from './Footer'
import './MainForm.css'

const MainForm = () => (
  <div>
    <Helmet
      title="Nuvem Poética"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="pt-br" />
    </Helmet>
    <div className="MainForm">
      <Header />
      <MainLabel />
      <Form />
      <Footer />
    </div>
  </div>
)

export default MainForm
