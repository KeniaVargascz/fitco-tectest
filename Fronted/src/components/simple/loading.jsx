import { Box, CircularProgress } from "@mui/material";

const LoadingComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%", 
      }}
    >
      <CircularProgress size={50} />
    </Box>
  );
};

export default LoadingComponent;
