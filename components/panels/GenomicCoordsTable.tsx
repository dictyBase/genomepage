import React from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { GenomicCoordinates } from "dicty-graphql-schema"
import { makeStyles } from "@material-ui/core/styles"
import OtherError from "components/errors/OtherError"

type TableDisplayProps = {
  /** Array of Genomic Coordinates for a particular gene */
  data: GenomicCoordinates[] | null | undefined
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginTop: 30,
    overflowX: "hidden",
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5,
  },
})

/**
 * Table Display component that display product info data
 */
const TableDisplay = ({ data }: TableDisplayProps) => {
  const classes = useStyles()
  if (!data) return <OtherError />

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table aria-label="simple table" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell} align="left">
              Exon
            </TableCell>
            <TableCell className={classes.tableCell} align="left">
              Local Coords.
            </TableCell>
            <TableCell className={classes.tableCell} align="left">
              Chrom. Coords.
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.exon}>
              <TableCell className={classes.tableCell} align="left">
                {item.exon}
              </TableCell>
              <TableCell className={classes.tableCell} align="left">
                {item.local_coords}
              </TableCell>
              <TableCell className={classes.tableCell} align="left">
                {item.chrom_coords}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableDisplay
