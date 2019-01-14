import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../Footer'
import HeaderHome from '../HeaderHome'
import MenuBar from '../MenuBar'
import HomeContent from '../HomeContent'
import './style.css'

const Home = () => (
  <div>
    <Helmet
      title="Nuvem Poética"
      meta={[
        { name: 'description', content: 'Nuvem Poética' },
        { name: 'keywords', content: 'poesia, slam' },
      ]}
    >
      <html lang="pt-br" />
    </Helmet>
    <div className="Home">
      <HeaderHome />
      <MenuBar />
      <HomeContent />
      <Footer />
    </div>
  </div>
)

export default Home
