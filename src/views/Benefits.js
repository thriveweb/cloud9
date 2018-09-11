import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import BackgroundImage from '../components/BackgroundImage'
import Content from '../components/Content'
// import ServicePodSection from '../components/ServicePodSection'
// import AboutSection from '../components/AboutSection'
import Buttons from '../components/Buttons'

import './Benefits.css'

export default ({ page, services }) => (
  <main className='Benefits' data-aos='fade-up'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>

    <PageHeader title={page.title} bannerImage={page.bannerImage} />

    <section className='section section--1-content'>
      <div className='container'>
        <ul>
          {page.content.map((item, index) => (
            <li>
              {item.title && <h2 className='taCenter'>{item.title}</h2>}
              <div className='benefit-flex'>
                <Content source={item.listText} />
                <img src={item.listImage} alt={page.title} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </main>
)
