/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/material";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

function DemoForm() {
  const location = useLocation();
  const [selectedPackage, setSelectedPackage] = useState("");

  useEffect(() => {
    const { hash, search } = location;

    if (hash === "#demo-form") {
      const demoForm = document.getElementById("demo-form");
      if (demoForm) {
        demoForm.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      const queryParams = queryString.parse(search);
      if (queryParams.package) {
        setSelectedPackage(queryParams.package);
      }
    }
  }, [location]);

  return (
    <Box component="section" py={6} bgcolor="#f5f5f5" id="demo-form">
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side Content */}
          <Grid item xs={12} md={6}>
            <ScrollAnimation animateIn="fadeInLeft" animateOnce offset={0}>
              <Typography variant="h2" color="textPrimary" gutterBottom>
                The future of your business is in the cloud
              </Typography>
              <Typography variant="h5" color="textSecondary" sx={{ textAlign: "justify" }}>
                Let’s ensure it’s secure and your team is prepared. Contact us today to learn how Siberwander’s cloud security solutions can protect your digital assets.
              </Typography>
            </ScrollAnimation>
          </Grid>

          {/* Right Side Form */}
          <Grid item xs={12} md={6}>
            <ScrollAnimation animateIn="fadeInRight" animateOnce offset={0}>
              <Box bgcolor="white" p={4} borderRadius={2} boxShadow={3}>
                <Box textAlign="center" mb={4}>
                  <Typography variant="h5" color="textPrimary" gutterBottom>
                    Request Demo of
                  </Typography>
                  <Typography variant="h5" color="textPrimary">
                    Siberwander Orca Cloud Security Platform
                  </Typography>
                </Box>
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField label="First Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Last Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Mobile Phone" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Business Email" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Company/Org" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Job Title" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth required>
                        <Select
                          value={selectedPackage}
                          onChange={(e) => setSelectedPackage(e.target.value)}
                          displayEmpty
                          sx={{
                            height: 56,
                            cursor: "pointer",
                            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#c4c4c4" },
                            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#1976d2" },
                          }}
                        >
                          <MenuItem value="" disabled>
                            Select a Siberwander Package
                          </MenuItem>
                          {[
                            { key: "1", text: "SiberGuard Basic (up to 25 Cloud Assets) $2000/month" },
                            { key: "2", text: "SiberGuard Advanced (up to 50 Cloud Assets) $3500/month" },
                            { key: "3", text: "SiberGuard Pro (up to 80 Cloud Assets) $5200/month" },
                            { key: "4", text: "SiberGuard Premium (up to 100 Cloud Assets) $6000/month" },
                            { key: "5", text: "SiberGuard Ultimate (up to 150 Cloud Assets) $8000/month" },
                            { key: "6", text: "Above 150 Cloud Assets" },
                          ].map((item) => (
                            <MenuItem key={item.key} value={item.key}>
                              {item.text}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
                    </Grid>
                    <Grid item xs={12}>
                      <Box display="flex" alignItems="center">
                        <Checkbox />
                        <Typography variant="body2">
                          By checking this box, I consent to receive Insight marketing emails.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" fullWidth sx={{ backgroundColor: "#1976d2", color: "white" }}>
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DemoForm;
