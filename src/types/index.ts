interface AllPublicationReference {
  id: string
  title: string
  journal: string
  pub_date?: any | null | undefined
  pages?: string | null | undefined
  pub_type: string
  source: string
  issue?: string | null | undefined
  related_genes: { id: string; name: string }[]
  authors: {
    last_name: string
    rank?: string | null | undefined
  }[]
}

export type { AllPublicationReference }
