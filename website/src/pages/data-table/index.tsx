import React from 'react'
import { DataTable } from 'pamai'
import MainLayout from '../../layouts/MainLayout'

type AppProps = { message?: string }

const SimpleText = ({ message }: AppProps) => {
  return (
    <MainLayout>

          <h1 className="title">DataTable Components</h1>

          <DataTable />

    </MainLayout>
  )
}

export default SimpleText