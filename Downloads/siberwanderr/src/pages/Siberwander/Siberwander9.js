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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

// Routes
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/cyber8.jpg";
import { HashLink } from "react-router-hash-link";
import MKButton from "components/MKButton";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Siberwander1() {
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
    ];

    const faqs = [
        {
            question: "What is CIEM?",
            answer: `Cloud Infrastructure Entitlements Management (CIEM) is a type of cloud security solution 
            designed to manage access rights and permissions for cloud resource entities. 
            CIEM solutions are necessary for implementing the principle of least privilege (PoLP).`,
        },
        {
            question: "Why is CIEM important?",
            answer: "CIEM tools help ensure security and compliance by limiting excessive permissions and preventing misuse.",
        },
        {
            question: "How does CIEM work?",
            answer: "CIEM works by analyzing permissions, configurations, and access policies to minimize risk.",
        },
        {
            question: "What types of risks does CIEM identify?",
            answer: "CIEM identifies risks like excessive permissions, misconfigurations, and unauthorized access.",
        },
        {
            question: "How does Orca’s CIEM dashboard provide value?",
            answer: "Orca’s CIEM dashboard provides real-time insights into risks and compliance metrics for cloud environments.",
        },
    ];

    return (
        <>
            <DefaultNavbar
                sticky
            />
            <MKBox
                minHeight="75vh"
                width="100%"
                sx={{
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Container>
                    <Grid
                        container
                        item
                        xs={12}
                        lg={8}
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        sx={{ mx: "auto", textAlign: "center" }}
                    >
                        <MKTypography
                            variant="h1"
                            color="white"
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        >
                            Siberwander CNAPP
                        </MKTypography>
                        <MKTypography variant="body1" color="white" opacity={0.9} mt={1} mb={3}>
                            Siberwander is dedicated to partnering with leading technology vendors, solution
                            providers, and industry experts in Indonesia to drive the adoption of cloud native
                            technologies with no compromise on security, compliance, and enterprise scalability.
                        </MKTypography>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={2}
                            sx={{
                                flexDirection: { xs: "column", sm: "row" },
                            }}
                        >
                            <Grid item>
                                <HashLink
                                    to="/#demo-form"
                                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                >
                                    <MKButton variant="contained" color="info" size="small" sx={{ width: "125px" }}>
                                        Book a Demo
                                    </MKButton>
                                </HashLink>
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
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <MKBox component="section" py={6} sx={{ overflow: "hidden" }}>
                    <Container>
                        <ScrollAnimation animateIn="fadeIn" animateOnce offset={0}>
                            <MKTypography variant="h3" align="center" fontWeight="bold" gutterBottom>
                                Standalone CIEM Solutions Lack Wider Cloud Context
                            </MKTypography>
                            <Grid
                                container
                                item
                                xs={12}
                                lg={8}
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                                sx={{ mx: "auto", textAlign: "center" }}
                            >
                                <MKTypography
                                    variant="body1"
                                    color="text"
                                    align="center"
                                    mt={1}
                                    mb={3}
                                    sx={{
                                        maxWidth: "800px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    Cloud identities present risks to organizations as they are a central component of every environment
                                    and cloud native application. Monitoring the effective management and auditing of cloud identities and
                                    permissions across multi-cloud environments requires comprehensive visibility and automation, which is lacking
                                    in point CIEM tools. Without the visibility into unmanaged identities, such as SSH keys, passwords, or account roles,
                                    security teams struggle to achieve comprehensive cloud security at scale.
                                </MKTypography>
                            </Grid>
                        </ScrollAnimation>
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
                        <br />
                        <br />
                        <br />
                        <ScrollAnimation animateIn="fadeInLeft" animateOnce offset={0}>
                            <Grid container spacing={3} alignItems="center" sx={{ mt: 6 }}>
                                {/* Left Side: Text Content */}
                                <Grid item xs={12} md={6}>
                                    <MKTypography variant="h4" fontWeight="bold" gutterBottom>
                                        Centralized multi-cloud discovery and compliance
                                    </MKTypography>
                                    <MKTypography variant="body1" color="text">
                                        Orca’s agentless platform allows you to track cloud assets, roles, and entitlements across multiple
                                        cloud platforms, and ensure compliance with regulatory standards and CIS benchmarks.
                                    </MKTypography>
                                    <MKBox component="ul" sx={{ pl: 2, mt: 2 }}>
                                        <MKTypography component="li" variant="body1" color="text">
                                            Get granular, contextual visibility into all identities, configurations, access policies,
                                            entitlements, permissions, and activities in your cloud.
                                        </MKTypography>
                                        <MKTypography component="li" variant="body1" color="text">
                                            View network access and publicly exposed resources in all of your cloud estate.
                                        </MKTypography>
                                        <MKTypography component="li" variant="body1" color="text">
                                            Leverage over 1,300 controls across 20+ categories, including authentication, data protection,
                                            logging and monitoring, IAM misconfigurations, and system integrity.
                                        </MKTypography>
                                    </MKBox>
                                </Grid>

                                {/* Right Side: Image */}
                                <Grid item xs={12} md={6}>
                                    <MKBox
                                        component="img"
                                        src={bgImage}
                                        alt="Centralized multi-cloud discovery and compliance"
                                        sx={{
                                            width: "100%",
                                            borderRadius: "8px",
                                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </ScrollAnimation>
                        <br />
                        <br />
                        <br />
                        <ScrollAnimation animateIn="fadeInRight" animateOnce offset={0}>
                            <Grid container spacing={3} alignItems="center" sx={{ mt: 6 }}>
                                {/* Right Side: Image */}
                                <Grid item xs={12} md={6}>
                                    <MKBox
                                        component="img"
                                        src={bgImage}
                                        alt="Centralized multi-cloud discovery and compliance"
                                        sx={{
                                            width: "100%",
                                            borderRadius: "8px",
                                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                                        }}
                                    />
                                </Grid>
                                {/* Left Side: Text Content */}
                                <Grid item xs={12} md={6}>
                                    <MKTypography variant="h4" fontWeight="bold" gutterBottom>
                                        Centralized multi-cloud discovery and compliance
                                    </MKTypography>
                                    <MKTypography variant="body1" color="text">
                                        Orca’s agentless platform allows you to track cloud assets, roles, and entitlements across multiple
                                        cloud platforms, and ensure compliance with regulatory standards and CIS benchmarks.
                                    </MKTypography>
                                    <MKBox component="ul" sx={{ pl: 2, mt: 2 }}>
                                        <MKTypography component="li" variant="body1" color="text">
                                            Get granular, contextual visibility into all identities, configurations, access policies,
                                            entitlements, permissions, and activities in your cloud.
                                        </MKTypography>
                                        <MKTypography component="li" variant="body1" color="text">
                                            View network access and publicly exposed resources in all of your cloud estate.
                                        </MKTypography>
                                        <MKTypography component="li" variant="body1" color="text">
                                            Leverage over 1,300 controls across 20+ categories, including authentication, data protection,
                                            logging and monitoring, IAM misconfigurations, and system integrity.
                                        </MKTypography>
                                    </MKBox>
                                </Grid>
                            </Grid>
                        </ScrollAnimation>
                        <br />
                        <br />
                        <br />
                        <ScrollAnimation animateIn="fadeInLeft" animateOnce offset={0}>
                            <Grid container spacing={3} alignItems="center" sx={{ mt: 6 }}>
                                {/* Left Side: Text Content */}
                                <Grid item xs={12} md={6}>
                                    <MKTypography variant="h4" fontWeight="bold" gutterBottom>
                                        Centralized multi-cloud discovery and compliance
                                    </MKTypography>
                                    <MKTypography variant="body1" color="text">
                                        Orca’s agentless platform allows you to track cloud assets, roles, and entitlements across multiple
                                        cloud platforms, and ensure compliance with regulatory standards and CIS benchmarks.
                                    </MKTypography>
                                    <MKBox component="ul" sx={{ pl: 2, mt: 2 }}>
                                        <MKTypography component="li" variant="body1" color="text">
                                            Get granular, contextual visibility into all identities, configurations, access policies,
                                            entitlements, permissions, and activities in your cloud.
                                        </MKTypography>
                                        <MKTypography component="li" variant="body1" color="text">
                                            View network access and publicly exposed resources in all of your cloud estate.
                                        </MKTypography>
                                        <MKTypography component="li" variant="body1" color="text">
                                            Leverage over 1,300 controls across 20+ categories, including authentication, data protection,
                                            logging and monitoring, IAM misconfigurations, and system integrity.
                                        </MKTypography>
                                    </MKBox>
                                </Grid>

                                {/* Right Side: Image */}
                                <Grid item xs={12} md={6}>
                                    <MKBox
                                        component="img"
                                        src={bgImage}
                                        alt="Centralized multi-cloud discovery and compliance"
                                        sx={{
                                            width: "100%",
                                            borderRadius: "8px",
                                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </ScrollAnimation>
                        <br />
                        <br />
                        <br />
                        <ScrollAnimation animateIn="fadeInRight" animateOnce offset={0}>
                            <Grid container spacing={3} alignItems="center" sx={{ mt: 6 }}>
                                {/* Right Side: Image */}
                                <Grid item xs={12} md={6}>
                                    <MKBox
                                        component="img"
                                        src={bgImage}
                                        alt="Centralized multi-cloud discovery and compliance"
                                        sx={{
                                            width: "100%",
                                            borderRadius: "8px",
                                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                                        }}
                                    />
                                </Grid>
                                {/* Left Side: Text Content */}
                                <Grid item xs={12} md={6}>
                                    <MKTypography variant="h4" fontWeight="bold" gutterBottom>
                                        Centralized multi-cloud discovery and compliance
                                    </MKTypography>
                                    <MKTypography variant="body1" color="text">
                                        Orca’s agentless platform allows you to track cloud assets, roles, and entitlements across multiple
                                        cloud platforms, and ensure compliance with regulatory standards and CIS benchmarks.
                                    </MKTypography>
                                    <MKBox component="ul" sx={{ pl: 2, mt: 2 }}>
                                        <MKTypography component="li" variant="body1" color="text">
                                            Get granular, contextual visibility into all identities, configurations, access policies,
                                            entitlements, permissions, and activities in your cloud.
                                        </MKTypography>
                                        <MKTypography component="li" variant="body1" color="text">
                                            View network access and publicly exposed resources in all of your cloud estate.
                                        </MKTypography>
                                        <MKTypography component="li" variant="body1" color="text">
                                            Leverage over 1,300 controls across 20+ categories, including authentication, data protection,
                                            logging and monitoring, IAM misconfigurations, and system integrity.
                                        </MKTypography>
                                    </MKBox>
                                </Grid>
                            </Grid>
                        </ScrollAnimation>
                        <br />
                        <br />
                        <br />
                        <ScrollAnimation animateIn="fadeIn" animateOnce offset={0}>
                            <Grid container direction="column" spacing={4} sx={{ mt: 8 }}>
                                {/* FAQ Header */}
                                <Grid item>
                                    <MKTypography variant="h4" fontWeight="bold" align="center" gutterBottom>
                                        Frequently Asked Questions
                                    </MKTypography>
                                </Grid>

                                {/* FAQ Accordion */}
                                <Grid item>
                                    {faqs.map((faq, index) => (
                                        <Accordion key={index}>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
                                                <MKTypography variant="h6" sx={{ fontWeight: 500 }}>
                                                    {`${index + 1}. ${faq.question}`}
                                                </MKTypography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <MKTypography variant="body2" color="text.secondary">
                                                    {faq.answer}
                                                </MKTypography>
                                            </AccordionDetails>
                                        </Accordion>
                                    ))}
                                </Grid>
                            </Grid>
                        </ScrollAnimation>
                    </Container>
                </MKBox>
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default Siberwander1;
