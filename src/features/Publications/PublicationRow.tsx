import { TableCell, TableRow } from "@material-ui/core"
import PublicationCellGenes from "./PublicationCellGenes"
import PublicationCellReferences from "./PublicationCellReference"

interface PublicationRowProps {
  publication: {
    __typename?: "PublicationWithGene"
    id: string
    doi?: string | null
    title: string
    journal: string
    pub_date?: any | null
    volume?: string | null
    pages?: string | null
    pub_type: string
    source: string
    issue?: string | null
    related_genes: Array<{ __typename?: "Gene"; id: string; name: string }>
    authors: Array<{
      __typename?: "Author"
      last_name: string
      rank?: string | null
    }>
  }
}

const PublicationRow = ({ publication }: PublicationRowProps) => {
  return (
    <TableRow>
      <TableCell>
        <PublicationCellReferences
          title={publication.title}
          journal={publication.journal}
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
