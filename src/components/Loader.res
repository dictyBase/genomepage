@react.component
let make = () => {
  open Mui
  <div role="loader">
    <Box>
    <SkeletonWithCount count=10 />
    <br />
    <br />
    <SkeletonWithCount count=10 />
    <br />
    <br />
    <SkeletonWithCount count=10 />
    <br />
    <br />
    <SkeletonWithCount count=5 />
  </Box>
  </div>
}