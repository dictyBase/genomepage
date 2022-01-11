import { Navigate, useParams } from "react-router"

const LegacyReferences = () => {
  const gene = useParams().gene as string
  return <Navigate to={`/${gene}/publications`} />
}

export default LegacyReferences
