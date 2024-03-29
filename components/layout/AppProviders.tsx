import React from "react"
import { ApolloProvider } from "@apollo/client"
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles"
import useCreateApolloClient from "common/hooks/useCreateApolloClient"
import CircularProgress from "@material-ui/core/CircularProgress"

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#004080",
      light: "#476ab0",
      dark: "#001b53",
      contrastText: "#fff",
    },
    secondary: {
      main: "#008080",
      light: "#4cb0af",
      dark: "#005354",
    },
    error: {
      main: "#b2102f",
      light: "#ea4f58",
      dark: "#7b0008",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: "2.00em",
    },
    h2: {
      fontSize: "1.50em",
    },
    h3: {
      fontSize: "1.17em",
    },
    h4: {
      fontSize: "1.00em",
    },
    h5: {
      fontSize: "0.83em",
    },
    h6: {
      fontSize: "0.67em",
    },
  },
  overrides: {
    MuiTab: {
      root: {
        textTransform: "none",
      },
    },
    MuiTabs: {
      root: {
        backgroundColor: "#cce6ff",
        color: "#000",
      },
      indicator: {
        backgroundColor: "#858780",
      },
    },
    MuiCssBaseline: {
      "@global": {
        a: {
          textDecoration: "none",
          color: "#004080",
          "&:hover": {
            color: "#001b53",
          },
        },
      },
    },
  },
})

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const { client, cacheInitializing } = useCreateApolloClient()

  if (cacheInitializing) {
    return <CircularProgress />
  }

  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ApolloProvider>
  )
}

export default AppProviders
