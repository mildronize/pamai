import React from 'react'

type AppProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: AppProps) => {
  return (
    <div>
      <div className="container">
        <main className="main">{children}</main>

        <footer className="footer">
          <a href="/" >
            Back to home
          </a>

          <br />
          <br />
          <br />
          <br />
          <br />

          {/* <a href="#">
            Thada Wangthammang
          </a> */}
        </footer>
      </div>
    </div>
  )
}

export default Layout
