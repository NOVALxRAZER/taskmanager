/* eslint-disable prettier/prettier */
import { HashLink } from "react-router-hash-link";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

const pricingPlans = [
  {
    key: 1,
    name: "SiberGuard Basic",
    price: "2000",
    assets: "Up to 25 Cloud Assets",
    features: [
      "Annually contract",
      "Orca Cloud Security License",
      "8/5 Customer Support",
      "8/5 Cloud Security Platform Managed Services",
      "Online Training Cloud Security Platform",
    ],
  },
  {
    key: 2,
    name: "SiberGuard Advanced",
    price: "3500",
    assets: "Up to 50 Cloud Assets",
    features: [
      "Annually contract",
      "Orca Cloud Security License",
      "8/5 Customer Support",
      "8/5 Cloud Security Platform Managed Services",
      "Online Training Cloud Security Platform",
    ],
  },
  {
    key: 3,
    name: "SiberGuard Pro",
    price: "5200",
    assets: "Up to 80 Cloud Assets",
    features: [
      "Annually contract",
      "Orca Cloud Security License",
      "8/5 Customer Support",
      "8/5 Cloud Security Platform Managed Services",
      "Online Training Cloud Security Platform",
    ],
  },
  {
    key: 4,
    name: "SiberGuard Premium",
    price: "6000",
    assets: "Up to 100 Cloud Assets",
    features: [
      "Annually contract",
      "Orca Cloud Security License",
      "24/7 Customer Support",
      "24/7 Cloud Security Platform Managed Services",
      "Online/Offline Training Cloud Security Platform",
      "Monthly Cadence Call Support",
    ],
  },
  {
    key: 5,
    name: "SiberGuard Ultimate",
    price: "8000",
    assets: "Up to 150 Cloud Assets",
    features: [
      "Annually contract",
      "Orca Cloud Security License",
      "24/7 Customer Support",
      "24/7 Cloud Security Platform Managed Services",
      "Online/Offline Training Cloud Security Platform",
      "Monthly Cadence Call Support",
    ],
  },
];

function Pricing() {
  return (
    <MKBox component="section" py={12} sx={{ backgroundColor: "#252b33", borderRadius: '10px', marginTop: '2rem' }}>
      <Container>
        <MKTypography variant="h2" color="white" align="center" mb={4}>
          Siberwander Product & Pricing
        </MKTypography>

        {/* Scrollable container */}
        <MKBox
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 3,
            padding: "16px",
            scrollbarWidth: "thin",
            scrollbarColor: "#606060 #292929",
          }}
        >
          {/* Map over pricingPlans to create each card */}
          {pricingPlans.map((plan, index) => (
            <ScrollAnimation
              animateIn="fadeInRight"
              animateOnce={true}
              delay={index * 200}
              offset={50}
              key={index}
            >
              <MKBox
                sx={{
                  backgroundColor: "#1f2631",
                  color: "#fff",
                  borderRadius: "8px",
                  width: "280px",
                  padding: "20px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                  flexShrink: 0,
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
                  },
                }}
              >
                <MKTypography
                  variant="h5"
                  fontWeight="bold"
                  mb={2}
                  sx={{
                    color: "#6bc6ff",
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  {plan.name}
                </MKTypography>

                {/* Price with small dollar sign */}
                <MKBox sx={{ display: "flex", alignItems: "flex-end" }}>
                  <MKTypography
                    variant="h4"
                    sx={{
                      fontSize: "28px",
                      color: "#00BFFF",
                      marginBottom: "10px",
                    }}
                  >
                    $
                  </MKTypography>
                  <MKTypography
                    variant="h2"
                    sx={{
                      fontSize: "40px",
                      color: "#00BFFF",
                      fontWeight: "bold",
                      marginLeft: "5px",
                    }}
                  >
                    {plan.price}
                  </MKTypography>
                  <MKTypography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      color: "#fff",
                      marginLeft: "5px",
                    }}
                  >
                    /month
                  </MKTypography>
                </MKBox>

                <MKTypography variant="body2" color="white" mb={2} sx={{ fontSize: "14px" }}>
                  {plan.assets}
                </MKTypography>

                <MKBox component="ul" sx={{ padding: 0, listStyleType: "none", marginBottom: "20px" }}>
                  {plan.features.map((feature, index) => (
                    <MKBox
                      component="li"
                      key={index}
                      sx={{
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                      }}
                    >
                      <MKBox
                        sx={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "#00BFFF",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      />
                      <span style={{ color: 'white' }}>{feature}</span>
                    </MKBox>
                  ))}
                </MKBox>

                <HashLink
                  to={`/#demo-form?package=${plan.key}`}
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      padding: "10px",
                      fontWeight: "bold",
                      backgroundColor: "#00BFFF",
                      color: "#000",
                      "&:hover": {
                        backgroundColor: "#007bb5",
                      },
                    }}
                  >
                    Book Now!
                  </Button>
                </HashLink>
              </MKBox>
            </ScrollAnimation>
          ))}
        </MKBox>
      </Container>
    </MKBox>
  );
}

export default Pricing;
