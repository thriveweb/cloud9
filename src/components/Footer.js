import React from 'react'
import { Link } from 'react-router-dom'

import NavLink from './NavLink'

import './Footer.css'

export default ({ globalSettings, ...props }) => (
  <main>
    <div className='section social-links'>
      <div className='container skinny Flex justifyBetween center'>
        {globalSettings.socialMediaCard.facebookURL && (
          <Link target='_blank' to={globalSettings.socialMediaCard.facebookURL}>
            <img src='/images/facebook.svg' alt='facebook' />
          </Link>
        )}
        {globalSettings.socialMediaCard.linkedinURL && (
          <Link target='_blank' to={globalSettings.socialMediaCard.linkedinURL}>
            <img src='/images/linkedin.svg' alt='linkedin' />
          </Link>
        )}
        {globalSettings.socialMediaCard.instagramURL && (
          <Link
            target='_blank'
            to={globalSettings.socialMediaCard.instagramURL}
          >
            <img src='/images/instagram.svg' alt='instagram' />
          </Link>
        )}
      </div>
    </div>

    <footer className='Footer'>
      <div className='container mainFooter Flex justifyBetween center'>
        <Link to='/'>
          <img src='/images/logo.svg' alt='Spacial Studio' />
        </Link>
        <div className='Flex alignStart justifyBetween flexWrap halfs'>
          <div className='pods'>
            <h3>Contact</h3>
            {globalSettings.email && (
              <p>
                <a href={`mailto:${globalSettings.email}`}>
                  {globalSettings.email}
                </a>
              </p>
            )}
            {globalSettings.phone && (
              <p>
                <a className='tel' href={`tel:${globalSettings.phone}`}>
                  {globalSettings.phone}
                </a>
              </p>
            )}
            {globalSettings.officeAddress && (
              <p>{globalSettings.officeAddress}</p>
            )}
          </div>
          <div className='pods'>
            <h3>Info</h3>

            <NavLink to={`/locations/`} exact>
              Studio Locations
            </NavLink>
            <NavLink to={`/benefits/`} exact>
              Benefits
            </NavLink>
            <NavLink to={`/membership/`} exact>
              Membership
            </NavLink>
            <NavLink to={`/faq/`} exact>
              FAQ
            </NavLink>
          </div>
        </div>
      </div>
      <div className='container Flex alignCenter justifyBetween flexWrap Footer--Copyright'>
        <div className='Flex alignCenter justifyBetween flexWrap'>
          <small>© {new Date().getFullYear()} All rights reserved. </small>
          <small>
            <a href='https://thriveweb.com.au/'> Build on the Gold Coast</a>
          </small>
        </div>
        <div className='Flex alignCenter justifyBetween flexWrap'>
          {/* <NavLink to={`/disclaimer/`} exact>
						Disclaimer
          </NavLink> */}
        </div>
      </div>
    </footer>
    <div className='renderlinks'>
      <NavLink to={`/account/`} exact />
      <NavLink to={`/checkin/`} exact />
      <NavLink to={`/classes/`} exact />
      <NavLink to={`/instructor/`} exact />
      <NavLink to={`/pricing/`} exact />
      <NavLink to={`/register/`} exact />
      <NavLink to={`/schedule/`} exact />
    </div>
  </main>
)
