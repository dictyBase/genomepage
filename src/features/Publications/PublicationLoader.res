@react.component
let make = () => {
  open Mui
  <div role="loader">
    <br />
    <Box>
      <SkeletonWithCount count={10} />
    </Box>
  </div>
}