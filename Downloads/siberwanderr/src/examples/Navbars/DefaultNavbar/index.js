/* eslint-disable prettier/prettier */
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import bgImage from "assets/images/Picture1.png";
import { Box, Menu, MenuItem, useMediaQuery } from "@mui/material";
import { HashLink } from 'react-router-hash-link';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function DefaultNavbar({ transparent, light, sticky, relative }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const solutionsMenuItems = [
    { label: "Cloud Native Application Protection Platform (CNAPP)", link: "/solutions/cloud-native-application-protection-platform" },
    { label: "Cloud Security Posture Management (CSPM)", link: "/solutions/cloud-security-posture-management" },
    { label: "Cloud Workload Protection Platform (CWPP)", link: "/solutions/cloud-workload-protection-platform" },
    { label: "Cloud Infrastructure Entitlement Management (CIEM)", link: "/solutions/cloud-infrastructure-entitlement-management" },
    { label: "Data Security Posture Management (DSPM)", link: "/solutions/data-security-posture-management" },
    { label: "Container and Kubernetes Security", link: "/solutions/container-and-kubernetes-security" },
    { label: "Multi Cloud Compliance", link: "/solutions/multi-cloud-compliance" },
    { label: "Vulnerability Management", link: "/solutions/vulnerability-management" },
    { label: "API Security", link: "/solutions/api-security" },
    { label: "Cloud Detection and Response", link: "/solutions/cloud-detection-and-response" },
    { label: "Shift Left Security", link: "/solutions/shift-left-security" },
    { label: "AI Security Posture Management", link: "/solutions/ai-security-posture-management" },
    { label: "AI Driven Cloud Security", link: "/solutions/ai-driven-cloud-security" },
    { label: "Agentless Sidescanning", link: "/solutions/agentless-sidescanning" },
  ];

  const columns = 3;
  const menuInColumns = [];
  for (let i = 0; i < solutionsMenuItems.length; i += Math.ceil(solutionsMenuItems.length / columns)) {
    menuInColumns.push(solutionsMenuItems.slice(i, i + Math.ceil(solutionsMenuItems.length / columns)));
  }

  return (
    <Container sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}>
      <MKBox
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        my={relative ? 0 : 2}
        mx={relative ? 0 : 3}
        width={relative ? "100%" : "calc(100% - 48px)"}
        borderRadius="xl"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        position={relative ? "relative" : "absolute"}
        left={0}
        zIndex={3}
        sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
          backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <MKBox display="flex" justifyContent="space-between" alignItems="center">
          {/* Brand Logo */}
          <MKBox component="a" href="/" display="flex" alignItems="center">
            <img
              src={bgImage}
              alt="Siberwander"
              style={{ height: '40px', width: 'auto' }}
            />
          </MKBox>

          {/* Menu for Mobile */}
          {isMobile ? (
            <>
              <IconButton
                onClick={() => setMenuOpen(!menuOpen)}
                sx={{ color: light ? "white" : "dark" }}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              {menuOpen && (
                <MKBox
                  position="absolute"
                  top="100%"
                  left={0}
                  width="100%"
                  zIndex={5}
                  py={2}
                  sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
                    backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.9)
                      ? "rgba(255, 255, 255, 0.9)"
                      : rgba(white.main, 0.9),
                    boxShadow: transparent ? "none" : "0 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    backdropFilter: transparent ? "none" : "saturate(200%) blur(30px)",
                    opacity: transparent ? 0.9 : 1,
                  })}
                >
                  <MKBox display="flex" flexDirection="column" alignItems="center" gap={2}>
                    {/* Links */}
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      component={Link}
                      to="/home"
                      color="dark"
                      onClick={() => setMenuOpen(false)}
                    >
                      Home
                    </MKTypography>
                    <Box>
                      {/* Solutions Button (following navbar style) */}
                      <MKTypography
                        variant="button"
                        fontWeight="regular"
                        color="dark"
                        onClick={handleClick} // Toggle the menu on click
                        sx={{
                          cursor: 'pointer',
                          padding: '8px 16px',
                        }}
                      >
                        Solutions
                      </MKTypography>

                      {/* Mobile Dropdown Menu */}
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        PaperProps={{
                          sx: {
                            width: '80%',  // Make the dropdown smaller for mobile
                            padding: '8px', // Reduce padding
                            borderRadius: '8px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            backgroundColor: 'rgba(100, 149, 237, 0.2)', // Light background
                          },
                        }}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        {/* Dropdown items */}
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                          }}
                        >
                          {menuInColumns.flat().map((item) => (
                            <MenuItem
                              key={item.label}
                              component={Link}
                              to={item.link}
                              onClick={handleClose}
                              sx={{
                                padding: '6px 12px',
                                fontSize: '0.875rem',
                                transition: 'background-color 0.2s ease',
                                '&:hover': { backgroundColor: 'rgba(0, 123, 255, 0.1)' },
                              }}
                            >
                              <MKTypography variant="body2" fontWeight="regular" color="dark">
                                {item.label}
                              </MKTypography>
                            </MenuItem>
                          ))}
                        </Box>
                      </Menu>
                    </Box>
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      component={Link}
                      to="/partner"
                      color="dark"
                      onClick={() => setMenuOpen(false)}
                    >
                      Partner
                    </MKTypography>
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      component={Link}
                      to="/company"
                      color="dark"
                      onClick={() => setMenuOpen(false)}
                    >
                      Company
                    </MKTypography>
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      component={Link}
                      to="/contact-us"
                      color="dark"
                      onClick={() => setMenuOpen(false)}
                    >
                      Contact Us
                    </MKTypography>

                    {/* CTA Button */}
                    <HashLink
                      to="/#demo-form"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <MKButton
                        variant="contained"
                        color="info"
                        size="small"
                        sx={{ width: "100%" }}
                      >
                        Book a Demo
                      </MKButton>
                    </HashLink>
                  </MKBox>
                </MKBox>
              )}
            </>
          ) : (
            <>
              <MKBox
                display="flex"
                alignItems="center"
                sx={{
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {/* Left Menu Items */}
                <MKBox
                  display="flex"
                  alignItems="center"
                  gap={3}
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <MKTypography
                    variant="button"
                    fontWeight="regular"
                    color={light ? "white" : "dark"}
                    component={Link}
                    to="/home"
                  >
                    Home
                  </MKTypography>
                  <MKTypography
                    variant="button"
                    fontWeight="regular"
                    color={light ? "white" : "dark"}
                    onClick={handleOpen}
                    sx={{ cursor: "pointer" }}
                  >
                    Solutions
                  </MKTypography>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                      sx: {
                        width: "800px",
                        padding: "16px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "rgba(100, 149, 237, 0.2)",
                      },
                    }}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    {/* Dropdown heading */}
                    <Box
                      sx={{
                        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                        paddingBottom: "8px",
                        marginBottom: "16px",
                      }}
                    >
                      <MKTypography
                        variant="h6"
                        fontWeight="bold"
                        color="dark"
                      >
                        Solutions
                      </MKTypography>
                    </Box>

                    {/* Scrollable content */}
                    <Box
                      display="grid"
                      gridTemplateColumns="repeat(3, 1fr)"
                      gap={2}
                      sx={{
                        maxHeight: "300px",
                        overflowY: "auto",
                        paddingRight: "8px",
                        scrollbarWidth: "thin",
                        "&::-webkit-scrollbar": {
                          width: "6px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                          background: "rgba(100, 149, 237, 0.5)",
                          borderRadius: "4px",
                        },
                      }}
                    >
                      {menuInColumns.map((column, index) => (
                        <Box key={index} display="flex" flexDirection="column" gap={1}>
                          {column.map((item) => (
                            <MenuItem
                              key={item.label}
                              component="a"
                              href={item.link}
                              onClick={handleClose}
                              sx={{
                                fontSize: "0.5rem",
                                padding: "8px 16px",
                                borderRadius: "4px",
                                transition: "background-color 0.2s ease",
                                "&:hover": { backgroundColor: "rgba(0, 123, 255, 0.1)" },
                              }}
                            >
                              <MKTypography
                                variant="subtitle2"
                                fontWeight="bold"
                                color="dark"
                              >
                                {item.label}
                              </MKTypography>
                            </MenuItem>
                          ))}
                        </Box>
                      ))}
                    </Box>
                  </Menu>
                  <MKTypography
                    variant="button"
                    fontWeight="regular"
                    color={light ? "white" : "dark"}
                    component={Link}
                    to="/partner"
                  >
                    Partner
                  </MKTypography>
                  <MKTypography
                    variant="button"
                    fontWeight="regular"
                    color={light ? "white" : "dark"}
                    component={Link}
                    to="/company"
                  >
                    Company
                  </MKTypography>
                  <MKTypography
                    variant="button"
                    fontWeight="regular"
                    color={light ? "white" : "dark"}
                    component={Link}
                    to="/contact-us"
                  >
                    Contact Us
                  </MKTypography>
                </MKBox>
              </MKBox>
              <MKBox
                display="flex"
                alignItems="center"
                gap={3}
                sx={{
                  justifyContent: "flex-end",
                }}
              >
                {/* CTA Button */}
                <HashLink
                  to="/#demo-form"
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  <MKButton variant="contained" color="info" size="small" sx={{ width: "125px" }}>
                    Book a Demo
                  </MKButton>
                </HashLink>
              </MKBox>
            </>
          )}
        </MKBox>
      </MKBox>
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  sticky: false,
  relative: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  sticky: PropTypes.bool,
  relative: PropTypes.bool,
};

export default DefaultNavbar;
