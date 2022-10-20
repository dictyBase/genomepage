import Box from "@material-ui/core/Box"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

/**
 * Loading screen for Protein Information page
 */
const ProteinInfoLoader = () => (
  <Box data-testid="skeleton-loader">
    <Box mt="10px">
      <Skeleton count={5} />
      <br />
      <br />
      <Skeleton count={5} />
      <br />
      <br />
      <Skeleton count={5} />
    </Box>
  </Box>
)

export default ProteinInfoLoader
