import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignUp() {
    const navigate = useNavigate()
  const genres = [
    { label: "Fantasy", value: "Fantasy" },
    { label: "Novel", value: "Novel" },
    { label: "History", value: "History" },
    { label: "Romance novel", value: "Romance novel" },
    { label: "Science fiction", value: "Science fiction" },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const result = await fetch("http://localhost:3001/api/v1/books/addbook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
       
      title: data.get("title"),
      author: data.get("author"),
      genre: data.get("genre"),
      supply: data.get("supply"),
      })
    })

    if(result.ok){
        alert("success adding");
        navigate("/home")
        
    }
 
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AutoStoriesIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add new Book
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Book Title"
                  name="title"
                  autoComplete="title"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="author"
                  label="Author Name"
                  type="author"
                  id="author"
                  autoComplete="author"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  select
                  id="genre"
                  name="genre"
                  label="genre"
                  defaultValue="Novel"
                  helperText="Please select your currency"
                >
                  {genres.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  required
                  id="supply"
                  label="supply"
                  name="supply"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Book
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
