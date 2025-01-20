/* eslint-disable prettier/prettier */
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

// Import your image here
import cloudSecurityImage from "assets/images/cyber5.png";
import { CloudOutlined, SecurityOutlined, SettingsOutlined, StorageOutlined } from "@mui/icons-material";

function Information() {
  return (
    <Box
      component="section"
      py={6}
      my={6}
      sx={{
        background: "linear-gradient(135deg, #0e2d61, #20427a)", color: "#fff",
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} lg={6}>
            <ScrollAnimation animateIn="fadeInLeft" animateOnce offset={0}>
              {/* <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "gold", mb: 4 }}
            >
              Why Choose Siberwander
            </Typography> */}

              {/* Box Section 1 */}
              <Box
                sx={{
                  background: "linear-gradient(135deg, #083359, #93cafa)",
                  borderRadius: 2,
                  p: 3,
                  mb: 3,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* Icon for Instant Agentless Deployment */}
                <CloudOutlined sx={{ color: "gold", fontSize: 40, mr: 2 }} />
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ color: "gold" }}>
                    Instant Agentless Deployment
                  </Typography>
                  <Typography variant="body1">
                    Onboard instantly across your cloud environment without installing agents.
                  </Typography>
                </Box>
              </Box>

              {/* Box Section 2 */}
              <Box
                sx={{
                  background: "linear-gradient(135deg, #083359, #93cafa)",
                  borderRadius: 2,
                  p: 3,
                  mb: 3,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* Icon for Comprehensive Coverage */}
                <SecurityOutlined sx={{ color: "gold", fontSize: 40, mr: 2 }} />
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ color: "gold" }}>
                    Comprehensive Coverage
                  </Typography>
                  <Typography variant="body1">
                    Monitor security of 100% your cloud assets, from virtual machines to serverless functions.
                  </Typography>
                </Box>
              </Box>

              {/* Box Section 3 */}
              <Box
                sx={{
                  background: "linear-gradient(135deg, #083359, #93cafa)",
                  borderRadius: 2,
                  p: 3,
                  mb: 3,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* Icon for Robust Cloud Security */}
                <StorageOutlined sx={{ color: "gold", fontSize: 40, mr: 2 }} />
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ color: "gold" }}>
                    Robust Cloud Security
                  </Typography>
                  <Typography variant="body1">
                    Multi-cloud security tools in one platform: Cloud Security Posture Management, Cloud Workload Protection, Malware Scanning, Sensitive Data Scanning, Vulnerability Management, Shift Left Security, API Security, Container Security, Cloud Data Security, Cloud Detection and Response, Kubernetes Security Posture Management, Cloud Compliance and Governance.
                  </Typography>
                </Box>
              </Box>

              {/* Box Section 4 */}
              <Box
                sx={{
                  background: "linear-gradient(135deg, #083359, #93cafa)",
                  borderRadius: 2,
                  p: 3,
                  mb: 3,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* Icon for Managed Cloud Security Services */}
                <SettingsOutlined sx={{ color: "gold", fontSize: 40, mr: 2 }} />
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ color: "gold" }}>
                    Managed Cloud Security Services
                  </Typography>
                  <Typography variant="body1">
                    Offering 24/7 managed cloud security services, including monitoring, incident response, and compliance management.
                  </Typography>
                </Box>
              </Box>
            </ScrollAnimation>
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} lg={6}>
            <ScrollAnimation animateIn="fadeInRight" animateOnce offset={0}>
              <CardContent sx={{ p: 0 }}>
                <Box sx={{ position: "relative" }}>
                  <img
                    src={cloudSecurityImage}
                    alt="Cloud Security"
                    style={{
                      width: "100%",
                      display: "block",
                      borderRadius: '5%'
                    }}
                  />
                </Box>
              </CardContent>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Information;
