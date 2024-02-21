import React, { useState, memo } from "react";
import { Box, Button, LinearProgress, Typography, styled } from "@mui/material";

const StyledLinearProgress = styled(LinearProgress)`
  border-radius: 5px;
  margin: 20px 0;
`;

const Counter = () => {
  // // local state
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [bgColor, setBgColor] = useState("#f0f0f0");

  const increment = () => {
    setCount(count + 1);
    setProgress(progress + 1);
    setBgColor(
      `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    );
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setProgress(progress - 1);
      setBgColor(
        `rgb(${Math.random() * 255},${Math.random() * 255},${
          Math.random() * 255
        })`
      );
    } else if (count === 0) {
      setBgColor("#f0f0f0");
    }
  };

  const reset = () => {
    setCount(0);
    setProgress(0);
    setBgColor("#f0f0f0");
  };

  return (
    <Box
      sx={{
        border: "1px solid gray",
        py: { xs: 1, sm: 2 },
        px: { xs: 1, sm: 2.5 },
        borderRadius: "10px",
        height: "100%",
      }}
    >
      <Typography variant="h6" mb={1}>
        Counter with bg changer
      </Typography>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: bgColor,
          height: "85%",
          transition: "all 0.5s",
          pt: { xs: "20px", md: 0 },
          pb: { xs: "100px", md: 0 },
        }}
      >
        <Typography variant="h6">Count: {count}</Typography>
        <StyledLinearProgress variant="determinate" value={progress} />
        <Box
          sx={{
            display: "flex",
            columnGap: "10px",
            justifyContent: "center",
            mt: "10px",
          }}
        >
          <Button variant="contained" color="primary" onClick={increment}>
            Increment
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={reset}
            disabled={count === 0}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={decrement}
            disabled={count === 0}
          >
            Decrement
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(Counter);
