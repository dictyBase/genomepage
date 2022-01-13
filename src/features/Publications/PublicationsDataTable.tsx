import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import useStyles from "common/styles/dataTableStyles"
import PublicationRow from "features/Publications/PublicationRow"
import { make as PublicationTableHead } from "features/Publications/PublicationTableHead.bs"

interface Props {
  data: {
    __typename?: "PublicationWithGene"
    id: string
    doi?: string | null | undefined
    title: string
    journal: string
    pub_date?: any | null | undefined
    volume?: string | null | undefined
    pages?: string | null | undefined
    pub_type: string
    source: string
    issue?: string | null | undefined
    related_genes: Array<{ __typename?: "Gene"; id: string; name: string }>
    authors: Array<{
      __typename?: "Author"
      last_name: string
      rank?: string | null | undefined
    }>
  }[]
}

const PublicationsDataTable = ({ data }: Props) => {
  const classes = useStyles()

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table aria-label="publications-table">
        <TableHead className={classes.head}>
          <TableRow className={classes.headRow}>
            <PublicationTableHead />
          </TableRow>
        </TableHead>

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
