import { Typography, Grid } from "@material-ui/core"

const Or = () => {
  return (
    <Grid
      item
      xs={1}
      md={1}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Typography
        style={{
          fontSize: "16px",
        }}>
        OR
      </Typography>
    </Grid>
  )
}

export default Or
