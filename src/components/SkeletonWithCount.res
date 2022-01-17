@react.component
let make = (~count: int) => {
  open MuiLab
  
  <div>
    {Belt.Array.makeBy(count, i => {
      <Skeleton key={Belt.Int.toString(i)} animation={Skeleton.Animation.wave} />
    }) -> React.array}
  </div>
}