import { render, screen } from "@testing-library/react"
import { make as Loader } from "components/Loader.bs"

describe("components/Loader", () => {
  it("should render Loader", () => {
    render(<Loader />)
    expect(screen.getByRole("loader")).toBeInTheDocument()
  })
})
