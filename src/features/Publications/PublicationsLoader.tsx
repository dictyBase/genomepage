import { Box, Skeleton } from "@mui/material"

const PublicationsLoader = () => {
  return (
    <Box mt="10px" data-testid="skeleton-loader">
      {[...Array(10)].map((i) => (
        <Skeleton animation="wave" key={i} />
      ))}
    </Box>
  )
}

export default PublicationsLoader
