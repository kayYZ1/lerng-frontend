import { useLocation, Link } from "react-router-dom"
import { Breadcrumbs } from "@mui/joy"
import { ChevronRightOutlined, HomeRounded } from "@mui/icons-material"

export default function BreadcrumbsCustom() {
  const location = useLocation();

  const path = location.pathname;
  const pathElements = path.split("/");
  pathElements.shift();

  if (pathElements[pathElements.length - 1].includes("-")) pathElements.pop();

  console.log(pathElements)


  return (
    <Breadcrumbs
      size="sm"
      aria-label="breadcrumbs"
      separator={<ChevronRightOutlined />}
      sx={{ pl: 0, pt: 3 }}
    >
      <HomeRounded />
      {
        pathElements.map((element: string) => (
          <Link to="#" style={{ textDecoration: "none", color: "inherit", textTransform: "capitalize" }}>{element}</Link>
        ))
      }
    </Breadcrumbs>
  )
}