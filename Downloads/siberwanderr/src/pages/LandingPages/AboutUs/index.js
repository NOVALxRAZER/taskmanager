/* eslint-disable prettier/prettier */
/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
// import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import footerRoutes from "footer.routes";
import { Link as ScrollLink } from "react-scroll"

// Images
import bgImage from "assets/images/cyber8.jpg";
import { Button } from "@mui/material";

function AboutUs() {
  return (
    <>
      <DefaultNavbar
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Siberwander Partner
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.9} mt={1} mb={3}>
              Siberwander is dedicated to partnering with leading technology vendors, solution
              providers, and industry experts in Indonesia to drive the adoption of cloud native
              technologies with no compromise on security, compliance, and enterprise scalability.
            </MKTypography>
            <Grid
              container
              justifyContent="center"
              spacing={2}
              sx={{
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Grid item>
                <ScrollLink to="partner-form">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "white",
                      color: "white",
                    }}
                  >
                    <span style={{ color: "white" }}>Become a Partner</span>
                  </Button>
                </ScrollLink>
              </Grid>
              <Grid item>
                <a href="/sign-in">
                  <button
                    style={{
                      backgroundColor: "#FFF",
                      color: "#3e83fa",
                      border: "1px solid #ccc",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      fontSize: "15px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#FFF";
                      e.target.style.color = "#3e83fa";
                      e.target.style.border = "1px solid #3e83fa";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#FFF";
                      e.target.style.color = "#3e83fa";
                      e.target.style.border = "1px solid #ccc";
                    }}
                  >
                    Log into Partner Portal
                  </button>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Team />
        {/* <Featuring />
        <Newsletter /> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
