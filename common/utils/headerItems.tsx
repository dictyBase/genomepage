import React from "react"
import { HeaderLink } from "dicty-components-header-footer"
import Link from "next/link"
import AddIcon from "@material-ui/icons/Add"
import FileDownloadIcon from "@material-ui/icons/GetApp"
import InfoIcon from "@material-ui/icons/Info"
import { SvgIconProps } from "@material-ui/core/SvgIcon"
import LogoutIcon from "@mui/icons-material/Logout"
import LoginIcon from "@mui/icons-material/Login"

type LinkIconProps = {
  link: LinkProps
}

type LinkProps = {
  isRouter?: boolean
  text: string
  icon: React.ReactElement<SvgIconProps>
  url: string
}

const LinkIcon = ({ link }: LinkIconProps) => (
  <div style={{ textAlign: "center" }}>
    {link.icon}
    <br />
    {link.text}
  </div>
)

const HeaderLinks = ({ items }: { items: LinkProps[] }) => {
  return (
    <React.Fragment>
      {items.map((link: LinkProps, i: number) =>
        link.isRouter ? (
          <div key={i} style={{ padding: "15px" }}>
            <Link href={link.url} passHref>
              <a>
                <LinkIcon link={link} />
              </a>
            </Link>
          </div>
        ) : (
          <HeaderLink key={i} href={link.url}>
            <LinkIcon key={i} link={link} />
          </HeaderLink>
        ),
      )}
    </React.Fragment>
  )
}

const headerItems = [
  {
    url: "/community/citation",
    icon: <AddIcon fontSize="large" />,
    text: "Cite Us",
  },
  {
    url: "/downloads",
    icon: <FileDownloadIcon fontSize="large" />,
    text: "Downloads",
  },
  {
    url: "/about",
    icon: <InfoIcon fontSize="large" />,
    text: "About dictyBase",
  },
  {
    url: "/login",
    icon: <LoginIcon fontSize="large" />,
    text: "Login",
    isRouter: true,
  },
]

const loggedHeaderItems = [
  {
    url: "/community/citation",
    icon: <AddIcon fontSize="large" />,
    text: "Cite Us",
  },
  {
    url: "/downloads",
    icon: <FileDownloadIcon fontSize="large" />,
    text: "Downloads",
  },
  {
    url: "/about",
    icon: <InfoIcon fontSize="large" />,
    text: "About dictyBase",
  },
  {
    url: "/logout",
    icon: <LogoutIcon fontSize="large" />,
    text: "Logout",
    isRouter: true,
  },
]

export { headerItems, loggedHeaderItems, HeaderLinks }
