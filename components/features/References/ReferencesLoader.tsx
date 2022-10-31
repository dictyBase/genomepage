import Box from "@material-ui/core/Box"
import Skeleton from "@material-ui/lab/Skeleton"

const ReferencesLoader = () => {
  return (
    <Box mt="10px" data-testid="skeleton-loader">
      {[...Array(10)].map((item, key) => (
        <Skeleton animation="wave" key={key} />
      ))}
    </Box>
  )
}

export default ReferencesLoader
