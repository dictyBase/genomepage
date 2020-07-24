import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import PageHeader from "common/components/PageHeader"

/**
 * Loading screen for Summary page
 */

const SummaryLoader = () => (
  <div>
    <PageHeader />
    <AppBar position="static">
      <Tabs value={0}>
        <Tab label="Gene Summary" />
        <Tab label="Gene Ontology" />
      </Tabs>
    </AppBar>
    <SkeletonTheme color="#d1d1d1">
      <Skeleton count={10} />
      {/* <br />
      <br />
      <Skeleton count={10} /> */}
    </SkeletonTheme>
  </div>
)

export default SummaryLoader
