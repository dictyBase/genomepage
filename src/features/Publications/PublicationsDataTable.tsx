import { Paper, Table, TableContainer } from "@material-ui/core"
import useStyles from "common/styles/dataTableStyles"
import { make as PublicationTableHead } from "features/Publications/PublicationTableHead.bs"
import { AllPublicationReference } from "types"
import PublicationTableBody from "./PublicationTableBody"

interface Props {
  data: AllPublicationReference[]
}

const PublicationsDataTable = ({ data }: Props) => {
  const classes = useStyles()

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table aria-label="publications-table" className={classes.dataTable}>
        <PublicationTableHead />

        <PublicationTableBody publications={data} />
      </Table>
    </TableContainer>
  )
}

export default PublicationsDataTable
