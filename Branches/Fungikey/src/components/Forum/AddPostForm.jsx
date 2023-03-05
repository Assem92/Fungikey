import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

export default function AddPostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [tag, setTag] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const post = {
      title,
      content: { text },
      author: author || "not defined",
      visibility: visibility || "not defined",
      tag: tag || "not defined",
    };
    onAddPost(post);
    setTitle("");
    setText("");
    setAuthor("");
    setVisibility("public");
    setTag("");
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Add a new post
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Visibility</InputLabel>
              <Select
                value={visibility}
                onChange={(event) => setVisibility(event.target.value)}
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="private">Private</MenuItem>
                <MenuItem value="friends">Friends</MenuItem>
                <MenuItem value="network">Network</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Text"
              value={text}
              multiline
              minRows={4}
              onChange={(event) => setText(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Tag"
              value={tag}
              onChange={(event) => setTag(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Add Post
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
