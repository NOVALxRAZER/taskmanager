/* eslint-disable prettier/prettier */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/cyber7.jpg";
import appleLogo from "assets/images/aws.png";
import facebookLogo from "assets/images/gcp.png";
import nasaLogo from "assets/images/azure.png";
import vodafoneLogo from "assets/images/alibaba.png";
import digitalOceanLogo from "assets/images/oracle.png";
import { Divider } from "@mui/material";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Siberwander
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Secure Indonesia Public Cloud Estate
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Powered by Orca Security.
            </MKTypography>
            <Divider sx={{ my: 6 }} />
            <Grid container spacing={3} justifyContent="center" alignItems="center">
              <Grid item xs={2}>
                <MKBox
                  component="img"
                  src={appleLogo}
                  alt="Apple"
                  sx={{
                    width: "100%",
                    maxWidth: "150px",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <MKBox
                  component="img"
                  src={facebookLogo}
                  alt="Facebook"
                  sx={{
                    width: "90%",
                    maxWidth: "150px",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <MKBox
                  component="img"
                  src={nasaLogo}
                  alt="Nasa"
                  sx={{
                    width: "100%",
                    maxWidth: "150px",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <MKBox
                  component="img"
                  src={vodafoneLogo}
                  alt="Vodafone"
                  sx={{
                    width: "100%",
                    maxWidth: "150px",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <MKBox
                  component="img"
                  src={digitalOceanLogo}
                  alt="DigitalOcean"
                  sx={{
                    width: "100%",
                    maxWidth: "150px",
                    height: "auto",
                  }}
                />
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
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <DesignBlocks />
        <Pages />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Download />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
