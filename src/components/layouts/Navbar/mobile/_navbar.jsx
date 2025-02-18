import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GlobeIcon from "@/components/shared/icons/globe";
import ChevronIcon from "@/components/shared/icons/chevronDown";
import { useRouter } from "next/navigation";

function _navbar(props) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [bgColor, setBgColor] = useState(props?.bgColor ?? "transparent");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setBgColor(props?.bgColor ?? "white");
      } else {
        setBgColor(props?.bgColor ?? "transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="nav"
      display="flex"
      alignItems="center"
      height="60px"
      position="fixed"
      width="100%"
      zIndex={10}
      bgcolor={bgColor}
      boxShadow={
        bgColor === "white" && !props?.disableElevation
          ? "0px 4px 12px rgba(0, 0, 0, 0.1)"
          : "none"
      }
      transition="background-color 0.3s ease"
      borderBottom="1px solid #979797"
    >
      <Container>
        <Box display="flex" justifyContent="space-between">
          <Link href="/">
            <img
              src="/images/TJF-Secondary-Blue-logo.png"
              alt="logo"
              height="35px"
            />
          </Link>

          <Box display="flex" alignItems="center" gap={1}>
            <IconButton>
              <Box display="flex" alignItems="center" gap={1.2}>
                <GlobeIcon color="#000000" />
                <ChevronIcon color="#000000" />
              </Box>
            </IconButton>

            <IconButton>
              <img src="/icons/menu.svg" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default _navbar;
