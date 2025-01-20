/* eslint-disable prettier/prettier */
// react-router-dom components
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import footerContent from "../../../footer.routes"

function DefaultFooter({ content = { footerContent } }) {
  const { brand } = content;

  return (
    <MKBox component="footer" py={4} px={2} textAlign="center">
      <Container>
        <Grid container spacing={3} justifyContent="center">
          {/* Logo and Address Section */}
          <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
            <MKBox display="flex" flexDirection="column" alignItems={{ xs: "center", md: "flex-start" }}>
              <MKBox mb={2}>
                <MKBox
                  component="img"
                  src={brand.image}
                  alt={brand.name}
                  width="150px"
                  mb={1}
                />
              </MKBox>
              <MKTypography variant="body2" fontWeight="regular">
                Centennial Tower, 38’th floor, Unit H <br />
                Jl. Gatot Subroto, kavling 24-25, <br />
                Jakarta Selatan, 12930, Indonesia
              </MKTypography>
            </MKBox>
          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "right" }}>
            <MKBox display="flex" flexDirection="column" alignItems="center">
              <MKTypography variant="h6" fontWeight="medium" mb={2}>
                Follow Us
              </MKTypography>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
              >
                <MKBox
                  component="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#0A66C2"
                  width="40px"
                  height="40px"
                >
                  <path d="M22.23 0H1.77A1.75 1.75 0 0 0 0 1.77v20.46A1.75 1.75 0 0 0 1.77 24h20.46A1.75 1.75 0 0 0 24 22.23V1.77A1.75 1.75 0 0 0 22.23 0zM7.09 20.45H3.56V8.91h3.53v11.54zM5.32 7.42a2.05 2.05 0 1 1 2.05-2.05 2.05 2.05 0 0 1-2.05 2.05zm14.42 13h-3.53v-5.68c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.46-2.17 2.97v5.8h-3.53V8.91h3.39v1.58h.05a3.72 3.72 0 0 1 3.34-1.83c3.58 0 4.24 2.36 4.24 5.43v6.36z" />
                </MKBox>
              </a>
            </MKBox>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <MKBox mt={4}>
          <MKTypography variant="body2" fontWeight="regular">
            &copy; {new Date().getFullYear()} Siberwander, All rights reserved.
          </MKTypography>
        </MKBox>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.shape({
    brand: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.node.isRequired,
  }).isRequired,
};

export default DefaultFooter;
