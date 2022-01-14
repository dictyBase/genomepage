import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
    borderRadius: 0,
  },
  dataTable: {
    "& thead": {
      backgroundColor: "#e6f2ff",
      "& th": {
        fontWeight: "bold",
      },
    },
  },
  head: {
    backgroundColor: "#e6f2ff",
  },
  headRow: {
    "& > th": {
      fontWeight: "bold",
    },
  },
  oddColorCell: {
    "&:nth-child(odd)": {
      backgroundColor: "#f2f2f2",
    },
  },
  evenColorCell: {
    "&:nth-child(even)": {
      backgroundColor: "#f2f2f2",
    },
  },
})

export default useStyles
