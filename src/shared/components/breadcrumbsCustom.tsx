import { useLocation, Link } from "react-router-dom"

import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Typography from "@mui/joy/Typography";

import ChevronRightOutlined from "@mui/icons-material/ChevronRightOutlined";
import HomeRounded from "@mui/icons-material/HomeRounded";

export default function BreadcrumbsCustom() {
  const location = useLocation();

  const path = location.pathname;
  const pathElements = path.split("/");
  pathElements.shift();

  if (pathElements[pathElements.length - 1].includes("-")) pathElements.pop();

  return (
    <Breadcrumbs
      size="sm"
      aria-label="breadcrumbs"
      separator={<ChevronRightOutlined />}
      sx={{ pl: 0, pt: 3 }}
    >
      <HomeRounded />
      {
        pathElements.map((element: string, index: number) => (
          <Link to="#" style={{
            textDecoration: "none",
            color: "inherit",
            textTransform: "capitalize"
          }}
            key={index}>
            {
              element === pathElements[pathElements.length - 1] ?
                <Typography sx={{ color: "rgb(67, 147, 228)" }}>{element}</Typography>
                :
                element
            }
          </Link>
        ))
      }
    </Breadcrumbs>
  )
}