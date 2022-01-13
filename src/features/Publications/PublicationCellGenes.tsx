import { Chip } from "@material-ui/core"

interface PublicationCellGenesProps {
  genes: { __typename?: "Gene"; id: string; name: string }[]
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
