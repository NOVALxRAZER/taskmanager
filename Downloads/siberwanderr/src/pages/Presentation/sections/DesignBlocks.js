/* eslint-disable prettier/prettier */
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import SecurityIcon from "@mui/icons-material/Security";
import BugReportIcon from "@mui/icons-material/BugReport";
import LockIcon from "@mui/icons-material/Lock";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

// Styled Components
const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 2),
  textAlign: "center",
}));

const RiskItem = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  minHeight: '15vw',
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const RiskIcon = styled(Box)(({ theme }) => ({
  color: "#1E88E5",
  fontSize: "3rem",
  marginBottom: theme.spacing(2),
}));

function DesignBlocks() {
  const risks = [
    {
      title: "Malware",
      description: "Signature-based detection, Heuristic-based detection",
      icon: <BugReportIcon />,
    },
    {
      title: "Vulnerabilities",
      description:
        "Operating Systems, Applications, and Libraries (e.g., vulnerable Tomcat Server)",
      icon: <SecurityIcon />,
    },
    {
      title: "Insecure Configurations",
      description:
        "Web Server using weak cipher set, S3 bucket open to the internet",
      icon: <LockIcon />,
    },
    {
      title: "Authentication Risk",
      description: "Weak and leaked passwords, Over-permissioned roles",
      icon: <VpnKeyIcon />,
    },
    {
      title: "Sensitive Data at Risk",
      description:
        "Customer data not properly secured (e.g., e-mail addresses, users lists, credit card data)",
      icon: <DataUsageIcon />,
    },
    {
      title: "Lateral Movement Risk",
      description: "Insecure keys, Improper Segmentation",
      icon: <SwapHorizIcon />,
    },
  ];

  return (
    <Section>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Risk Covered by Siberwander
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={6}>
          Siberwander helps you mitigate Risks on Cloud
        </Typography>
        <Grid container spacing={4}>
          {risks.map((risk, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                delay={index * 200}
                offset={50}
              >
                <RiskItem>
                  <RiskIcon>{risk.icon}</RiskIcon>
                  <Typography variant="h6" fontWeight="bold" mb={2}>
                    {risk.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {risk.description}
                  </Typography>
                </RiskItem>
              </ScrollAnimation>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default DesignBlocks;
