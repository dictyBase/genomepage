import Grid from "@material-ui/core/Grid"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

/**
 * Loader is the default loading skeleton component.
 */
const Loader = () => (
  <Grid
    container
    justifyContent="center"
    data-testid="skeleton-loader"
    role="loader">
    <Grid item xs={12}>
      <Skeleton count={10} />
      <br />
      <br />
      <Skeleton count={10} />
      <br />
      <br />
      <Skeleton count={10} />
      <br />
      <br />
      <Skeleton count={10} />
    </Grid>
  </Grid>
)

export default Loader
