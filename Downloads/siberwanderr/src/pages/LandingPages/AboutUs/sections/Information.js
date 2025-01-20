/* eslint-disable prettier/prettier */
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Import Material UI icons
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BuildIcon from '@mui/icons-material/Build';
import RedeemIcon from '@mui/icons-material/Redeem';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

// Data for partner info (including Material-UI icons)
const partnerInfo = [
  {
    icon: <TrendingUpIcon fontSize="large" />,
    title: "High Growth Market",
    description: "The rapid growth of cloud adoption and cybersecurity needs in Indonesia.",
    number: 1
  },
  {
    icon: <SecurityIcon fontSize="large" />,
    title: "Best In-class Security Solutions",
    description: "Powered by leading cloud security tools Orca Security.",
    number: 2
  },
  {
    icon: <MonetizationOnIcon fontSize="large" />,
    title: "Recurring Revenue Opportunities",
    description: "Our partner program generates steady income through subscriptions and renewals.",
    number: 3
  },
  {
    icon: <BuildIcon fontSize="large" />,
    title: "Partner Exclusive Tools & Support",
    description: "Full access to product training, sales workshop, marketing resources, technical, and sales support.",
    number: 4
  },
  {
    icon: <RedeemIcon fontSize="large" />,
    title: "Attractive Bonus Scheme",
    description: "Provide additional bonus schemes for new customer onboarding and annual performance achievement.",
    number: 5
  },
];

function WhyPartner() {
  return (
    <MKBox component="section" py={6} sx={{ overflow: "hidden" }}>
      <Container>
        <MKTypography variant="h3" align="center" fontWeight="bold" gutterBottom>
          Why Partner with Siberwander
        </MKTypography>
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          {partnerInfo.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                delay={index * 200}
                offset={50}
              >
                <MKBox
                  sx={{
                    borderRadius: "8px",
                    padding: "24px",
                    backgroundColor: "#ffffff",
                    textAlign: "center",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "400px",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {/* Icon */}
                  <MKBox sx={{ mb: 2 }}>
                    {item.icon}
                  </MKBox>

                  {/* Title */}
                  <MKTypography variant="h6" fontWeight="bold" color="dark" gutterBottom>
                    {item.title}
                  </MKTypography>

                  {/* Description */}
                  <MKTypography variant="body2" color="dark" sx={{ mb: 2 }}>
                    {item.description}
                  </MKTypography>

                  {/* Number (Bottom of the banner) */}
                  <MKTypography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      color: "dark",
                      padding: "4px 8px",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      lineHeight: "30px",
                      display: "inline-block",
                      marginTop: "10px",
                    }}
                  >
                    {item.number}
                  </MKTypography>
                </MKBox>
              </ScrollAnimation>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default WhyPartner;


