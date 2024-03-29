import Grid from "@material-ui/core/Grid"
import { Skeleton } from "@mui/material"

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
      {[...Array(10)].map((item, key) => (
        <Skeleton key={key} animation="wave" />
      ))}
      <br />
      <br />
      {[...Array(10)].map((item, key) => (
        <Skeleton key={key} animation="wave" />
      ))}
      <br />
      <br />
      {[...Array(10)].map((item, key) => (
        <Skeleton key={key} animation="wave" />
      ))}
      <br />
      <br />
      {[...Array(5)].map((item, key) => (
        <Skeleton key={key} animation="wave" />
      ))}
    </Grid>
  </Grid>
)

export default Loader
