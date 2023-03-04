import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

export default function Forum() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  function addPost(post) {
    fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => setPosts([...posts, data]))
      .catch((error) => console.error(error));
  }

  return (
    <Container>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Forum Fungikey
      </Typography>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item xs={12} md={6} lg={4} key={post.id}>
            <Paper
              sx={{
                borderRadius: "8px",
                border: "1px solid #ccc",
                margin: "8px",
                padding: "16px",
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="h5" component="h2" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {post.content.text}
              </Typography>
              {post.content.image && (
                <img src={post.content.image} alt="Post" />
              )}
              <Typography variant="body2" gutterBottom>
                Author: {post.author}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Timestamp: {post.timestamp}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Visibility: {post.visibility}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Tag: {post.tag || "none"}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <AddPostForm onAddPost={addPost} />
    </Container>
  );
}

function AddPostForm({ onAddPost }) {
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
                <MenuItem value="private">Friends</MenuItem>
                <MenuItem value="private">Network</MenuItem>
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
