/* eslint-disable prettier/prettier */
// @mui icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoSiber from "assets/images/Picture1.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Siberwander",
    image: logoSiber,
    route: "/",
  },
  content: (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0" }}>
      {/* Left Section */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <img src={logoSiber} alt="Siberwander Logo" style={{ width: "150px", marginBottom: "10px" }} />
        <MKTypography variant="body2" fontWeight="regular">
          Centennial Tower, 38’th floor, Unit H <br />
          Jl. Gatot Subroto, kavling 24-25, <br />
          Jakarta Selatan, 12930, Indonesia
        </MKTypography>
        <MKTypography variant="body2" fontWeight="regular" style={{ marginTop: "10px" }}>
          &copy; {date} Siberwander, All rights reserved.
        </MKTypography>
      </div>

      {/* Right Section */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
        <MKTypography variant="h6" fontWeight="medium" style={{ marginBottom: "10px" }}>
          Follow Us
        </MKTypography>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={{ fontSize: "40px", color: "#0A66C2" }} />
        </a>
      </div>
    </div>
  ),
};
