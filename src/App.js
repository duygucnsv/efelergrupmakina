import React from 'react'
import MenuBar from './components/common/MenuBar'
import TopBar from './components/common/TopBar'
import Banner from './components/home/Banner'
import BannerContact from './components/home/BannerContact'
import Spacer from './components/common/Spacer'
import Footer from './components/common/Footer'

import CustomerServices from './components/services/CustomerServices'
import Vehicles from './components/services/Vehicles'


const App = () => {
  return (
    <div>
      <TopBar />
      <MenuBar />
      <Banner/>
      <BannerContact/>
      <Spacer />
      <CustomerServices />
      <Spacer/>
      <Vehicles/>
      <Spacer/>
      <Footer />
    </div>
  )
}

export default App