
import React from 'react'
import Layout from "@/components/layout/layout"
import OverviewTab from "@/components/tabs/overview"
import ReportsTab from "@/components/tabs/reports";

function App() {
  const [pathname, setPathname] = React.useState("Overview");

  return (
    <Layout onPathnameChange={setPathname}>
      {pathname === "Overview" ? <OverviewTab /> : <ReportsTab />}
    </Layout>
  )
}

export default App
