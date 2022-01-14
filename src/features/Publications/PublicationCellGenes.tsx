import { Chip } from "@material-ui/core"
import { AllPublicationReference } from "types"

interface PublicationCellGenesProps {
  genes: AllPublicationReference["related_genes"]
}

const PublicationCellGenes = ({ genes }: PublicationCellGenesProps) => {
  return (
    <>
      {genes.map((gene, i) => (
        <Chip
          label={gene.name}
          size="small"
          style={{ margin: "0px 5px 5px 0px" }}
          variant="outlined"
          key={i}
        />
      ))}
    </>
  )
}

export default PublicationCellGenes
