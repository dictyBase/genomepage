import { Skeleton } from "@mui/material"
import Box from "@material-ui/core/Box"

/**
 * Loading screen for Summary page
 */
const SummaryLoader = () => (
  <Box mt={"10px"} data-testid="skeleton-loader">
    {[...Array(10)].map((item, key) => (
      <Skeleton key={key} animation="wave" />
    ))}
  </Box>
)

export default SummaryLoader
