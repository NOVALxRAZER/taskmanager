/* eslint-disable prettier/prettier */
import React from "react";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
import orcaImage from "assets/images/orca3.png";
import Testimonials from "pages/Presentation/sections/Testimonials";

const data = [
  {
    metric: "Virtual Machines",
    examples: "Linux or Windows hosts, e.g., Amazon EC2, Azure VMs, Google Compute Engine",
    count: "1 Workload per VM",
  },
  {
    metric: "Container Hosts",
    examples:
      "Container hosts, e.g., Amazon ECS or EKS, Azure Kubernetes Service, Google Kubernetes Engine",
    count: "1 Workload per Container Host",
  },
  {
    metric: "Serverless Functions",
    examples:
      "Serverless functions, e.g., AWS Lambda, Azure Functions, Google Cloud Functions",
    count: "1 Workload per 50 Functions",
  },
];

const extraData = [
  {
    metric: "Machine Images",
    examples:
      "Amazon Machine Images (AMIs), Azure machine images, Google machine images",
    count: "1 Workload per Machine Image",
  },
  {
    metric: "Container Images in Registry",
    examples:
      "Linux or Windows images in registries, e.g., ACR, ECR, GCR",
    count: "1 Workload per 10 Container Images",
  },
];

function CloudAssetsTable() {
  return (
    <>
      <Testimonials />
      <MKBox py={6}>
        <Container>
          <img
            src={orcaImage}
            alt="Orca"
            style={{
              display: "block",
              width: "150px",
              height: "auto",
              marginBottom: "1rem",
            }}
          />
          <TableContainer component={Paper} elevation={3}>
            <Table>
              {/* Table Header */}
              <TableHead
                sx={{
                  display: "table-header-group !important",
                  borderRadius: "0.75rem 0.75rem 0 0",
                }}
              >
                <TableRow>
                  {/* Metric Column */}
                  <TableCell
                    align="center"
                    sx={{
                      backgroundColor: "#282829",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Metric
                  </TableCell>

                  {/* Examples Column */}
                  <TableCell
                    align="center"
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Examples
                  </TableCell>

                  {/* Count Column */}
                  <TableCell
                    align="center"
                    sx={{
                      backgroundColor: "#ff75ba",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Count
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Data Rows */}
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{row.metric}</TableCell>
                    <TableCell align="center">{row.examples}</TableCell>
                    <TableCell align="center">{row.count}</TableCell>
                  </TableRow>
                ))}
                {/* Blue Section Row */}
                <TableRow>
                  <TableCell
                    colSpan={3}
                    align="center"
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    The following items will be counted according to optional customer configuration
                  </TableCell>
                </TableRow>
                {/* Additional Data Rows */}
                {extraData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{row.metric}</TableCell>
                    <TableCell align="center">{row.examples}</TableCell>
                    <TableCell align="center">{row.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </MKBox>
    </>
  );
}

export default CloudAssetsTable;
