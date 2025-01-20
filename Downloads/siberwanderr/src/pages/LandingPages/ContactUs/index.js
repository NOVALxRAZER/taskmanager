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
import Grid from "@mui/material/Grid";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import footerRoutes from "footer.routes";
import { Box, Button, Checkbox, Container, FormControl, MenuItem, Select, TextField, Typography } from "@mui/material";

// Image

function ContactUs() {
  return (
    <>
      <DefaultNavbar sticky />
      <Box component="section" py={6} bgcolor="#f5f5f5"
        sx={{
          minHeight: "90vh",
        }}
      >
        <Container sx={{ marginTop: "5vw" }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left Side Content */}
            <Grid item xs={12} md={6}>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce offset={0}>
                <Typography variant="h2" color="textPrimary" gutterBottom>
                  Get Started Today.
                </Typography>
                <Typography variant="h5" color="textSecondary" sx={{ textAlign: "justify" }}>
                  The future of your business is in the cloud—let’s ensure it’s secure and your team is
                  prepared.
                </Typography>
                <br />
                <Typography variant="h5" color="textSecondary" sx={{ textAlign: "justify" }}>
                  Contact us today to learn how Siberwander’s cloud security solutions, managed services,
                  and cybersecurity training can protect your digital assets, meet your compliance needs, and
                  support your business growth.
                </Typography>
              </ScrollAnimation>
            </Grid>

            {/* Right Side Form */}
            <Grid item xs={12} md={6}>
              <ScrollAnimation animateIn="fadeInRight" animateOnce offset={0}>
                <Box bgcolor="white" p={4} borderRadius={2} boxShadow={3}>
                  <Box textAlign="center" mb={4}>
                    <Typography variant="h5" color="textPrimary" gutterBottom>
                      Let’s Connect
                    </Typography>
                  </Box>
                  <form>
                    <Grid container spacing={2}>
                      {/* First Name and Last Name */}
                      <Grid item xs={12} sm={6}>
                        <TextField label="First Name" variant="outlined" fullWidth required />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField label="Last Name" variant="outlined" fullWidth required />
                      </Grid>

                      {/* Mobile Phone */}
                      <Grid item xs={12}>
                        <TextField label="Mobile Phone" variant="outlined" fullWidth required />
                      </Grid>

                      {/* Business Email */}
                      <Grid item xs={12}>
                        <TextField label="Business Email" variant="outlined" fullWidth required />
                      </Grid>

                      {/* Company/Org */}
                      <Grid item xs={12}>
                        <TextField label="Company/Org" variant="outlined" fullWidth required />
                      </Grid>

                      {/* Job Title */}
                      <Grid item xs={12}>
                        <TextField label="Job Title" variant="outlined" fullWidth required />
                      </Grid>

                      {/* Select Component */}
                      <Grid item xs={12}>
                        <FormControl fullWidth required>
                          <Select
                            labelId="package-select-label"
                            displayEmpty
                            defaultValue=""
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
                            <MenuItem value="basic">SiberGuard Basic (up to 25 Cloud Assets) $2000/month</MenuItem>
                            <MenuItem value="advanced">SiberGuard Advanced (up to 50 Cloud Assets) $3500/month</MenuItem>
                            <MenuItem value="pro">SiberGuard Pro (up to 80 Cloud Assets) $5200/month</MenuItem>
                            <MenuItem value="premium">SiberGuard Premium (up to 100 Cloud Assets) $6000/month</MenuItem>
                            <MenuItem value="ultimate">SiberGuard Ultimate (up to 150 Cloud Assets) $8000/month</MenuItem>
                            <MenuItem value="above150">Above 150 Cloud Assets</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>

                      {/* Message */}
                      <Grid item xs={12}>
                        <TextField
                          label="Message"
                          variant="outlined"
                          fullWidth
                          multiline
                          rows={4}
                        />
                      </Grid>

                      {/* Checkbox and Label */}
                      <Grid item xs={12}>
                        <Box display="flex" alignItems="center">
                          <Checkbox />
                          <Typography variant="body2">
                            By checking this box, I consent to receive Insight marketing emails. We respect your
                            privacy and will not share your personal information with any other company, person, or identity.
                          </Typography>
                        </Box>
                      </Grid>

                      {/* Submit Button */}
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            backgroundColor: "white",
                            color: "white",
                          }}
                        >
                          <span style={{ color: 'white' }}>Submit</span>
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
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
