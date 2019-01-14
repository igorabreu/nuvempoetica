import React from 'react'
import Footer from '../Footer'
import HeaderHome from '../HeaderHome'
import MenuBar from '../MenuBar'
import PoemsComponent from '../PoemsComponent'
import './style.css'

const Poems = () => (
  <div className="PoemsPage">
    <HeaderHome />
    <MenuBar selected={'poems'} />
    <PoemsComponent />
    <Footer />
  </div>
)

export default Poems
