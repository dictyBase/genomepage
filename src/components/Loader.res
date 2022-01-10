@react.component
let make = () => {
  open Mui
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
}