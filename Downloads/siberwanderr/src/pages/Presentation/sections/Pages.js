/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import data from "pages/Presentation/sections/data/pagesData";
import bgImage from "assets/images/cyber5.jpg";
import orcaImage from "assets/images/orca2.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

function Pages() {
  const renderData = data.map(({ id, name, description, route }, index) => (
    <Grid item xs={12} key={id} sx={{ borderBottom: "1px solid #333" }}>
      <MKBox
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          backgroundColor: "transparent",
          color: "#fff",
        }}
      >
        {/* Index Number */}
        <MKTypography variant="h5" fontWeight="bold" sx={{ minWidth: "40px" }}>
          {String(index + 1).padStart(2, '0')}
        </MKTypography>

        {/* Title and Description */}
        <MKBox sx={{ flex: 1, mx: 2 }}>
          <MKTypography variant="h6" fontWeight="bold" color="white">
            {name}
          </MKTypography>
          <MKTypography variant="body2" color="white">
            {description}
          </MKTypography>
        </MKBox>

        {/* Arrow Icon */}
        <Link to={route} target="_blank" style={{ textDecoration: 'none', color: '#fff' }}>
          <ArrowForwardIcon sx={{ fontSize: "24px" }} />
        </Link>
      </MKBox>
    </Grid>
  ));

  return (
    <MKBox
      component="section"
      py={6}
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: '10px',
        color: "#fff",
      }}
    >
      <Container>
        {/* Title Section */}
        <ScrollAnimation animateIn="fadeIn" animateOnce offset={0}>
          <MKBox
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            px={3}
            py={2}
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              color: "#fff",
              borderRadius: "8px",
            }}
          >
            <MKTypography variant="h4" fontWeight="bold" color="inherit" gutterBottom>
              Siberwander Cloud Security Platform
            </MKTypography>
            <MKTypography variant="body1" color="inherit">
              Powered by{" "}
              <img
                src={orcaImage}
                alt="Orca Security"
                style={{
                  height: "60px",
                  verticalAlign: "middle",
                }}
              />
            </MKTypography>
          </MKBox>

          {/* Scrollable List Container */}
          <MKBox
            sx={{
              maxHeight: "600px",
              overflowY: "auto",
              padding: "16px",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              borderRadius: "0 0 8px 8px",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                },
              },
            }}
          >
            <Grid container>{renderData}</Grid>
          </MKBox>
        </ScrollAnimation>
      </Container>
    </MKBox>
  );
}

export default Pages;
