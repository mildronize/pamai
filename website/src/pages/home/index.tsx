import React from 'react'
import MainLayout from '../../layouts/MainLayout'

type AppProps = { message?: string }

const SimpleText = ({ message }: AppProps) => {
  return (
    <MainLayout>
      <h1 className="title">
        Welcome to <a href="#">Pamai</a>
      </h1>

      <p className="description">Pamai (ป่าไม้): Ant Design Components</p>

      <h2 style={{ marginTop: '48px' }}>Component Playground</h2>
      <div className="grid">
        <a href="/data-table" className="card">
          <h3>DataTable &rarr;</h3>
          <p>CRUD on Table</p>
        </a>
      </div>
      
    </MainLayout>
  )
}

export default SimpleText
