import { TableBody } from "@material-ui/core"
import { AllPublicationReference } from "types"
import PublicationRow from "./PublicationRow"

interface Props {
  publications: AllPublicationReference[]
}

const PublicationTableBody = ({ publications }: Props) => {
  return (
    <TableBody>
      {publications.map((publication, i) => (
        <PublicationRow publication={publication} key={i} />
      ))}
    </TableBody>
  )
}

export default PublicationTableBody
