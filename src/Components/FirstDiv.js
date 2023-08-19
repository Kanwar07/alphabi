import "./FirstDiv.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Stack } from "@mui/material";

function FirstDiv() {
  return (
    <>
      <div>
        <Stack className="main" direction="column">
          <div className="heading">REINVENT WHAT YOUR BUSINESS COULD BE</div>
          <div className="heading1">
            Let there be change
            <span className="icon">
              <KeyboardArrowRightIcon fontSize="large" />
            </span>
          </div>
        </Stack>
      </div>
    </>
  );
}

export default FirstDiv;
