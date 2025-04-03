import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GlobeIcon from "@/components/shared/icons/globe";
import ChevronIcon from "@/components/shared/icons/chevronDown";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_navbar.initiatives";

function _navbar(props) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [bgColor, setBgColor] = useState(props?.bgColor ?? "transparent");
  const [color, setColor] = useState(props?.color ?? "primary");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("white");
        setColor("primary");
      } else {
        setBgColor(props?.bgColor ?? "transparent");

        if (props?.logo) setLogo(props?.logo);
        if (props?.color) setColor(props?.color);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        component="nav"
        display={isMobile ? "none" : "flex"}
        alignItems="center"
        height="8vh"
        position="fixed"
        width="100%"
        zIndex={10}
        bgcolor={bgColor}
        boxShadow={
          bgColor === "white" ? "0px 4px 12px rgba(0, 0, 0, 0.1)" : "none"
        }
        transition="background-color 0.3s ease"
      >
        <Container>
          <Grid container alignItems="center">
            <Grid size={{ md: 6 }}>
              <Box display="flex" alignItems="center" gap="40px">
                <Link href="/">
                  <Box
                    component="img"
                    height="45px"
                    width="140px"
                    src={
                      bgColor === "white"
                        ? "/images/TJF-Secondary-Blue-logo.png"
                        : "/images/TJF-White-logo.png"
                    }
                    alt="logo"
                  ></Box>
                </Link>

                {React.Children.toArray(
                  [
                    { name: "Topic", link: "/topic" },
                    { name: "Research", link: "/research" },
                    { name: "Initiatives", link: "/initiatives" },
                  ].map((item) => (
                    <Link href={item.link}>
                      <Typography
                        color={bgColor === "white" ? "primary" : "#fff"}
                        variant="h6"
                      >
                        {item.name}
                      </Typography>
                    </Link>
                  ))
                )}
              </Box>
            </Grid>
            <Grid size={{ md: 6 }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                gap="40px"
              >
                {React.Children.toArray(
                  [
                    {
                      name: "About Us",
                      link: "/about-us",
                      child: [{ name: "Our Approach", link: "/our-aproach" }],
                    },
                    { name: "Updates", link: "/updates" },
                    { name: "Career", link: "/career" },
                    {
                      name: "Contact Us",
                      link: "/contact-us",
                      bgColor: "success",
                    },
                  ].map((item) => (
                    <Box display="flex" alignItems="center" gap="5px">
                      <Link href={item.link}>
                        {item.bgColor ? (
                          <Button
                            variant="contained"
                            color={item.bgColor}
                            sx={{ width: "100px", height: "33px", padding: 0 }}
                          >
                            {item.name}
                          </Button>
                        ) : (
                          <Typography
                            color={bgColor === "white" ? "primary" : "#fff"}
                            variant="h6"
                          >
                            {item.name}
                          </Typography>
                        )}
                      </Link>

                      {item.child && (
                        <IconButton
                          id="basic-button"
                          aria-controls={open ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          <ChevronIcon
                            color={bgColor === "white" ? "#233E83" : "#fff"}
                          />
                        </IconButton>
                      )}
                    </Box>
                  ))
                )}
                <IconButton>
                  <Box display="flex" alignItems="center" gap={1.2}>
                    <GlobeIcon
                      color={bgColor === "white" ? "#233E83" : "#fff"}
                    />
                    <ChevronIcon
                      color={bgColor === "white" ? "#233E83" : "#fff"}
                    />
                  </Box>
                </IconButton>
              </Box>
            </Grid>
          </Grid>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "#0000004D",
                color: "#fff",
                boxShadow: "none",
                padding: 0,
              },
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                router.push("/our-approach");
              }}
            >
              <Typography variant="h6">Our Approach</Typography>
            </MenuItem>
          </Menu>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _navbar;
