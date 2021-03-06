import React from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import OntologyTabLayout from "./OntologyTabLayout"
import OntologyLoader from "./OntologyLoader"
import GraphQLErrorPage from "common/components/errors/GraphQLErrorPage"
import Layout from "app/layout/Layout"
import { useGeneQuery, GoAnnotation } from "dicty-graphql-schema"

type Params = {
  gene: string
}

/**
 * Container component that issues a GraphQL query to get gene data for the
 * GO annotations page.
 */

const OntologyContainer = () => {
  const { gene } = useParams<Params>()
  const { loading, error, data } = useGeneQuery({
    variables: {
      gene,
    },
    fetchPolicy: "cache-and-network",
  })

  if (loading) return <OntologyLoader gene={gene} />

  if (error) return <GraphQLErrorPage error={error} />

  const geneName = data?.gene?.name as string
  const goas = data?.gene?.goas as GoAnnotation[]

  return (
    <Layout gene={geneName}>
      <Helmet>
        <title>GO Annotations for {geneName} - dictyBase</title>
        <meta
          name="description"
          content={`Gene Ontology Annotations for ${geneName} at dictyBase`}
        />
      </Helmet>
      <Typography component="div">
        <OntologyTabLayout data={goas} />
      </Typography>
    </Layout>
  )
}

export default OntologyContainer
