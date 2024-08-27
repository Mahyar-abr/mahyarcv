export { Layout }

import React from 'react'
import PropTypes from 'prop-types'
import { childrenPropType } from './PropTypeValues'
import logoUrl from './logo.png'
import { PageContextProvider } from './usePageContext'
import './css/index.css'
import './Layout.css'

Layout.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
}
function Layout({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Header />
        <Frame>
          {/* <Sidebar>
            <Logo />
            <Link href="/">Welcome</Link>
            <Link href="/about">About</Link>
            <Link href="/star-wars">Data Fetching</Link>
          </Sidebar> */}
          <Content>{children}</Content>
        </Frame>
        <Footer />
      </PageContextProvider>
    </React.StrictMode>
  )
}

Frame.propTypes = {
  children: childrenPropType
}
function Frame({ children }) {
  return (
    <div className="max-w-10xl mx-auto flex">
      {children}
    </div>
  )
}

Sidebar.propTypes = {
  children: childrenPropType
}
function Sidebar({ children }) {
  return (
    <div className="p-5 flex-shrink-0 flex flex-col leading-7 border-r-2 border-gray-200">
      {children}
    </div>
  )
}

Content.propTypes = {
  children: childrenPropType
}
function Content({ children }) {
  return (
    <div id="page-container">
      <div
        id="page-content"
        style={{
          padding: 20,
          paddingBottom: 50,
          minHeight: '100vh'
        }}
      >
        {children}
      </div>
    </div>
  )
}

function Header() {
  return (
  <header className="bg-blue-600 text-white p-4">
    <div className="max-w-5xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src={logoUrl} height={40} width={40} alt="logo" className="h-10 w-10" />
        <nav className="space-x-4">
          <span className="text-white">Home</span>
        </nav>
      </div>
      <a 
      href="https://t.me/Mahyarrba" 
      className="bg-white text-blue-600 px-4 py-2 rounded-full shadow-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 transition transform hover:-translate-y-1 hover:scale-105"
      >
      Contact
      </a>
    </div>
  </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-12">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <p>&copy; 2024 Made By Mahyar</p>
      </div>
    </footer>
  )
}