import React, { useCallback, useEffect, useState } from "react"
import Headliner from "../components/headliner";
import Layout from "../components/layout";
import WorkedOn from "../components/workedon";
import '../styles/main.scss';

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Headliner />
        <WorkedOn />
      </main>
    </Layout>
  )
}

export default IndexPage
