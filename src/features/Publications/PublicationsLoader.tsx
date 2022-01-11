import { Box } from "@mui/material"
import { make as SkeletonWithCounter } from "components/SkeletonWithCount.bs"

const PublicationsLoader = () => {
  return (
    <Box mt="10px" data-testid="skeleton-loader">
      <SkeletonWithCounter count={10} />
    </Box>
  )
}

export default PublicationsLoader
