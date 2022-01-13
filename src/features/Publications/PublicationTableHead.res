let make = (~head: string, ~headRow: string) => {
  open Mui

  <TableHead className={head}>
    <TableRow className={headRow}>
      <TableCell>{React.string("Reference")}</TableCell>
      <TableCell>{React.string("Other Genes Mentioned")}</TableCell>
    </TableRow>
  </TableHead>
}