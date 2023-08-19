import { Button, Stack } from "@mui/material";
import "./ThirdDiv.css";
import underwater from "../Components/logo/Underwater.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function ThirdDiv() {
  return (
    <>
      <div>
        <Stack direction="row" className="thirddiv">
          <div className="head1">
            <img className="image1" src={underwater} alt="Underwater" />
          </div>
          <div className="head2">
            <span className="h1">
              Machine learning dives deep to save our coral reefs
            </span>
            <br />
            <span className="h2">
              Coral reefs, like rainforests, are severely threatened by climate
              change and pollution. But a new cloud-based AI tool is
              revolutionizing marine conservation around the world.
            </span>
            <br />
            <Button className="h3">Read more</Button>
            <span>
              <KeyboardArrowDownIcon />
            </span>
          </div>
        </Stack>
      </div>
    </>
  );
}

export default ThirdDiv;
