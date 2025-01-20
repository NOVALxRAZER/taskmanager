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
// import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

// About Us page sections
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import footerRoutes from "footer.routes";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import bgImage from "assets/images/bg-about-us.jpg";
import team1 from "assets/images/team-5.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";

function Author() {
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
              About Siberwander
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              We&apos;re constantly trying to express ourselves and actualize our dreams. If you
              have the opportunity to play this game
            </MKTypography>
            {/* <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              create account
            </MKButton> */}
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="/linkedin.com">
                <i className="fab fa-linkedin" />
              </MKTypography>
            </MKBox>
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
        {/* About Us Section */}
        <MKBox component="section" py={12}>
          <Container>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} lg={6}>
                <Grid container justifyContent="flex-start">
                  <Grid item xs={12} md={6}>
                    <MKBox mb={5}>
                      <DefaultInfoCard
                        icon="public"
                        title="Fully integrated"
                        description="We get insulted by others, lose trust for those We get back freezes"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={5}>
                      <DefaultInfoCard
                        icon="payments"
                        title="Payments functionality"
                        description="We get insulted by others, lose trust for those We get back freezes"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={{ xs: 5, md: 0 }}>
                      <DefaultInfoCard
                        icon="apps"
                        title="Prebuilt components"
                        description="We get insulted by others, lose trust for those We get back freezes"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKBox mb={{ xs: 5, md: 0 }}>
                      <DefaultInfoCard
                        icon="3p"
                        title="Improved platform"
                        description="We get insulted by others, lose trust for those We get back freezes"
                      />
                    </MKBox>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
                <CenteredBlogCard
                  image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  title="Get insights on Search"
                  description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
                  action={{
                    type: "internal",
                    route: "/company",
                    color: "info",
                    label: "find out more",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>
        <MKBox
          component="section"
          variant="gradient"
          bgColor="dark"
          position="relative"
          py={6}
          px={{ xs: 2, lg: 0 }}
          mx={-2}
        >
          <Container>
            <Grid container>
              <Grid item xs={12} md={8} sx={{ mb: 6 }}>
                <MKTypography variant="h3" color="white">
                  The Executive Team
                </MKTypography>
                <MKTypography variant="body2" color="white" opacity={0.8}>
                  There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
                  at. That&apos;s my skill.
                </MKTypography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={team1}
                    name="Emma Roberts"
                    position={{ color: "info", label: "UI Designer" }}
                    description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={team2}
                    name="William Pearce"
                    position={{ color: "info", label: "Boss" }}
                    description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={team3}
                    name="Ivana Flow"
                    position={{ color: "info", label: "Athlete" }}
                    description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={team4}
                    name="Marquez Garcia"
                    position={{ color: "info", label: "JS Developer" }}
                    description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
        <Featuring />
        <Newsletter />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Author;