import { commaSeparateWithAnd } from "common/utils/strings"

interface PublicationCellReferencesProps {
  title: string
  journal: string
  pages?: string | null
  authors: {
    last_name: string
    rank?: string | null
  }[]
}

const PublicationCellReferences = ({
  title,
  journal,
  pages,
  authors,
}: PublicationCellReferencesProps) => {
  return (
    <>
      <b>{commaSeparateWithAnd(authors.map((a) => a.last_name))}</b>
      &nbsp; '{title}' &nbsp;
      <i>{journal}</i>
      &nbsp;
      {pages}
    </>
  )
}

export default PublicationCellReferences
