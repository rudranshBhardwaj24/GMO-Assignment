import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/Users");
  // };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const name = data.get("name");
    const phoneNumber = data.get("phoneNumber");

    if (name && email && phoneNumber) {
      console.log({
        name,
        email,
        phoneNumber,
      });
      navigate("/Users");
    } else {
      alert("Please fill all fields before continuing.");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "200px",
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            label="Name"
            type="text"
            autoComplete="name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phoneNumber"
            label="Phone Number"
            type="tel"
            autoComplete="tel"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save and continue
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
