import { GoAnnotation } from "dicty-graphql-schema"

interface IMockOntologyData {
  goas: GoAnnotation[]
}

// Using sadA Gene Data for the moment
const mockOntologyPiaA: IMockOntologyData = {
  goas: [
    {
      id: "UniProtKB:Q8I7T3!138448351",
      type: "cellular_component",
      date: "20211010",
      evidence_code: "IEA",
      go_term: { name:"membrane", link:""},
      qualifier: "located_in",
      publication: "GO_REF:0000043",
      assigned_by: "UniProt",
      with: [
        { id: "KW-0472", db: "UniProtKB-KW", name: "", __typename: "With" },
      ],
      extensions: [],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138461046",
      type: "cellular_component",
      date: "20211010",
      evidence_code: "IEA",
      go_term: { name:"integral component of membrane", link:""},
      qualifier: "located_in",
      publication: "GO_REF:0000043",
      assigned_by: "UniProt",
      with: [
        { id: "KW-0812", db: "UniProtKB-KW", name: "", __typename: "With" },
      ],
      extensions: [],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138487100",
      type: "biological_process",
      date: "20211010",
      evidence_code: "IEA",
      go_term: { name:"cell adhesion", link:""},
      qualifier: "involved_in",
      publication: "GO_REF:0000043",
      assigned_by: "UniProt",
      with: [
        { id: "KW-0130", db: "UniProtKB-KW", name: "", __typename: "With" },
      ],
      extensions: [],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138489398",
      type: "biological_process",
      date: "20211010",
      evidence_code: "IEA",
      go_term: { name:"phagocytosis", link:""},
      qualifier: "involved_in",
      publication: "GO_REF:0000043",
      assigned_by: "UniProt",
      with: [
        { id: "KW-0581", db: "UniProtKB-KW", name: "", __typename: "With" },
      ],
      extensions: [],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138495260",
      type: "cellular_component",
      date: "20211010",
      evidence_code: "IEA",
      go_term: { name:"plasma membrane", link:""},
      qualifier: "located_in",
      publication: "GO_REF:0000043",
      assigned_by: "UniProt",
      with: [
        { id: "KW-1003", db: "UniProtKB-KW", name: "", __typename: "With" },
      ],
      extensions: [],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138504342",
      type: "molecular_function",
      date: "20181129",
      evidence_code: "IPI",
      go_term: { name:"protein binding", link:""},
      qualifier: "enables",
      publication: "PMID:21441344",
      assigned_by: "dictyBase",
      with: [
        { id: "Q54HG2", db: "UniProtKB", name: "ctxA", __typename: "With" },
      ],
      extensions: [],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138504343",
      type: "biological_process",
      date: "20051219",
      evidence_code: "IMP",
      go_term: { name:"cell morphogenesis", link:""},
      qualifier: "acts_upstream_of_or_within",
      publication: "PMID:12499361",
      assigned_by: "dictyBase",
      with: [],
      extensions: [],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138504344",
      type: "biological_process",
      date: "20120522",
      evidence_code: "IMP",
      go_term: { name:"mitotic cytokinesis", link:""},
      qualifier: "acts_upstream_of_or_within",
      publication: "PMID:12499361",
      assigned_by: "dictyBase",
      with: [],
      extensions: [],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138504345",
      type: "cellular_component",
      date: "20181129",
      evidence_code: "IDA",
      go_term: { name:"actin cytoskeleton", link:""},
      qualifier: "colocalizes_with",
      publication: "PMID:21441344",
      assigned_by: "dictyBase",
      with: [],
      extensions: [],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138504346",
      type: "biological_process",
      date: "20120926",
      evidence_code: "IMP",
      go_term: { name:"protein localization to cell surface", link:""},
      qualifier: "acts_upstream_of_or_within",
      publication: "PMID:22219373",
      assigned_by: "dictyBase",
      with: [],
      extensions: [
        {
          id: "Q54KF7",
          db: "UniProtKB",
          relation: "has_input",
          name: "sibA",
          __typename: "Extension",
        },
      ],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138504347",
      type: "biological_process",
      date: "20110914",
      evidence_code: "IMP",
      go_term: { name:"cell-substrate adhesion", link:""},
      qualifier: "acts_upstream_of_or_within",
      publication: "PMID:21441344",
      assigned_by: "dictyBase",
      with: [],
      extensions: [],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138504348",
      type: "biological_process",
      date: "20050922",
      evidence_code: "IMP",
      go_term: { name:"cell-substrate adhesion", link:""},
      qualifier: "acts_upstream_of_or_within",
      publication: "PMID:12499361",
      assigned_by: "dictyBase",
      with: [],
      extensions: [],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138504349",
      type: "biological_process",
      date: "20030723",
      evidence_code: "IMP",
      go_term: { name:"actin filament organization", link:""},
      qualifier: "acts_upstream_of_or_within",
      publication: "PMID:12499361",
      assigned_by: "dictyBase",
      with: [],
      extensions: [],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138504350",
      type: "biological_process",
      date: "20120926",
      evidence_code: "IMP",
      go_term: { name:"phagocytosis", link:""},
      qualifier: "acts_upstream_of_or_within",
      publication: "PMID:22219373",
      assigned_by: "dictyBase",
      with: [],
      extensions: [],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138504351",
      type: "biological_process",
      date: "20030723",
      evidence_code: "IMP",
      go_term: { name:"phagocytosis", link:""},
      qualifier: "acts_upstream_of_or_within",
      publication: "PMID:12499361",
      assigned_by: "dictyBase",
      with: [],
      extensions: [],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138504352",
      type: "cellular_component",
      date: "20181129",
      evidence_code: "IDA",
      go_term: { name:"plasma membrane", link:""},
      qualifier: "part_of",
      publication: "PMID:21441344",
      assigned_by: "dictyBase",
      with: [],
      extensions: [],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138504353",
      type: "cellular_component",
      date: "20181129",
      evidence_code: "IDA",
      go_term: { name:"cell cortex", link:""},
      qualifier: "colocalizes_with",
      publication: "PMID:12499361",
      assigned_by: "dictyBase",
      with: [],
      extensions: [],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138504354",
      type: "biological_process",
      date: "20120926",
      evidence_code: "IMP",
      go_term: { name:"protein stabilization", link:""},
      qualifier: "acts_upstream_of_or_within",
      publication: "PMID:22219373",
      assigned_by: "dictyBase",
      with: [],
      extensions: [
        {
          id: "Q54KF7",
          db: "UniProtKB",
          relation: "has_input",
          name: "sibA",
          __typename: "Extension",
        },
      ],
      __typename: "GOAnnotation",
    },
    {
      id: "UniProtKB:Q8I7T3!138513747",
      type: "cellular_component",
      date: "20211009",
      evidence_code: "IEA",
      go_term: { name:"plasma membrane", link:""},
      qualifier: "located_in",
      publication: "GO_REF:0000044",
      assigned_by: "UniProt",
      with: [
        {
          id: "SL-0039",
          db: "UniProtKB-SubCell",
          name: "",
          __typename: "With",
        },
      ],
      extensions: [],
      __typename: "GOAnnotation",
    },
  ],
}

export default mockOntologyPiaA
