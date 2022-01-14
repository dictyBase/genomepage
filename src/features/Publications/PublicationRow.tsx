import { TableCell, TableRow } from "@material-ui/core"
import useStyles from "common/styles/dataTableStyles"
import { AllPublicationReference } from "types"
import PublicationCellGenes from "./PublicationCellGenes"
import PublicationCellReferences from "./PublicationCellReference"

interface PublicationRowProps {
  publication: AllPublicationReference
}

const PublicationRow = ({ publication }: PublicationRowProps) => {
  const classes = useStyles()

  return (
    <TableRow className={classes.evenColorCell}>
      <TableCell>
        <PublicationCellReferences
          title={publication.title}
          journal={publication.journal}
          pages={publication.pages}
          authors={publication.authors}
        />
      </TableCell>

      <TableCell>
        <PublicationCellGenes genes={publication.related_genes} />
      </TableCell>
    </TableRow>
  )
}

export default PublicationRow
