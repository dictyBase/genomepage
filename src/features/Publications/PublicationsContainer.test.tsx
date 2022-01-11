import { ApolloError } from "@apollo/client"
import { render, screen } from "@testing-library/react"
import { useGeneQuery } from "dicty-graphql-schema"
import mockGene from "mocks/mockGene"
import PublicationsContainer from "features/Publications/PublicationsContainer"

const gene = "sadA"
const pathname = `gene/${gene}/references`

jest.mock("react-router-dom", () => {
  const useParams = () => ({ gene })
  return {
    useParams,
    useLocation: () => ({ pathname }),
  }
})

jest.mock("dicty-graphql-schema", () => {
  const useGeneQuery = jest.fn()
  return { useGeneQuery }
})

describe("features/Publications/PublicationsContainer", () => {
  beforeEach(() => jest.clearAllMocks())

  it("should render loading", () => {
    ;(useGeneQuery as jest.Mock).mockReturnValue({
      loading: true,
      error: undefined,
      data: undefined,
    })
    render(<PublicationsContainer />)

    // Renders skeleton loading
    expect(screen.getByTestId("skeleton-loader")).toBeInTheDocument()
  })

  it("should render apollo error", () => {
    ;(useGeneQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: new ApolloError({}),
      data: undefined,
    })
    render(<PublicationsContainer />)
  })

  it("should render data", () => {
    ;(useGeneQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: undefined,
      data: mockGene,
    })
    render(<PublicationsContainer />)

    // Renders skeleton loading
    expect(screen.getByText("Reference")).toBeInTheDocument()
    expect(screen.getByText(/Other Genes Mentioned/)).toBeInTheDocument()
    expect(screen.getByText("ctxA")).toBeInTheDocument()
  })
})
