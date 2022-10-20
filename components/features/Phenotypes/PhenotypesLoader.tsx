import Box from "@material-ui/core/Box"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

/**
 * Loading screen for Phenotypes page
 */
const PhenotypesLoader = () => (
  <Box mt={"10px"} data-testid="skeleton-loader">
    <Skeleton count={10} />
  </Box>
)

export default PhenotypesLoader
