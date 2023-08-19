import { Button, Card, CardContent, Typography } from "@mui/material";
import "./Card.css";
import research from "../Components/logo/research.jpg";

function BasicCard() {
  return (
    <Card className="card" variant="outlined" sx={{ width: 320 }}>
      <div>
        <div>
          <Typography className="card1">RESEARCH REPORT</Typography>
          <Typography className="card1">
            State of Cybersecurity Resilience 2023
          </Typography>
        </div>
        <CardContent orientation="horizontal">
          <div>
            <img className="image2" src={research} alt="Research" />
          </div>
          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            Explore
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}

export default BasicCard;
