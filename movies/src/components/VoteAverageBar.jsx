/* eslint-disable react/prop-types */
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import { useCountUp } from "use-count-up";

export default function VoteAverageBar({ score }) {
  const { value: value2 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: score * 10,
  });

  return (
    <CircularProgress
      size="lg"
      determinate
      value={value2}
      sx={{
        "--CircularProgress-trackColor": "#242424",
        "--CircularProgress-progressColor": "rgb(12, 189, 189);",
      }}
    >
      <Typography
        sx={{
          color: "white",
        }}
      >
        {value2}%
      </Typography>
    </CircularProgress>
  );
}
