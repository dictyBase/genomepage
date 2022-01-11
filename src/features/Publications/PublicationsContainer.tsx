import { useParams } from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import GraphQLErrorPage from "components/errors/GraphQLErrorPage"
import Layout from "components/layout/Layout"
import { useGeneQuery } from "dicty-graphql-schema"
import PublicationsLoader from "./PublicationsLoader"
import PublicationsDataTable from "./PublicationsDataTable"

const PublicationsContainer = () => {
  const gene = useParams().gene as string
  const { loading, error, data } = useGeneQuery({
    variables: {
      gene,
    },
  })

  return (
    <Layout
      gene={gene}
      title={`References for ${gene}`}
      description={`Gene references for ${gene}`}>
      <Typography component="div">
        {loading && <PublicationsLoader />}
        {error && <GraphQLErrorPage error={error} />}
        {data && <PublicationsDataTable data={data} />}
      </Typography>
    </Layout>
  )
}

export default PublicationsContainer
