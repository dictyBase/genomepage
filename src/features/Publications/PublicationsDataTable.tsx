import { Paper, Table, TableBody, TableContainer } from "@material-ui/core"
import useStyles from "common/styles/dataTableStyles"
import PublicationRow from "features/Publications/PublicationRow"
import { make as PublicationTableHead } from "features/Publications/PublicationTableHead.bs"
import { AllPublicationReference } from "types"

interface Props {
  data: AllPublicationReference[]
}

const PublicationsDataTable = ({ data }: Props) => {
  const classes = useStyles()

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table aria-label="publications-table" className={classes.dataTable}>
        <PublicationTableHead />

        <TableBody>
          {data.map((publication, i) => (
            <PublicationRow publication={publication} key={i} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PublicationsDataTable
