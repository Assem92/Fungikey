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
  Avatar,
  Tooltip,
  Icon,
  Box,
  Chip,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import PublicIcon from "@mui/icons-material/Public";
import SensorsIcon from "@mui/icons-material/Sensors";
import GroupIcon from "@mui/icons-material/Group";
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
      <AddPostForm onAddPost={addPost} />
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
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Avatar
                    alt={post.author}
                    src={post.authorAvatar}
                    sx={{ width: "64px", height: "64px" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {post.author}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{ color: "grey", fontStyle: "italic" }}
                  >
                    {new Date(post.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                    {new Date(post.timestamp).toLocaleDateString([], {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={{ textAlign: "right" }}>
                  <Tooltip title={post.visibility}>
                    <span>
                      {post.visibility === "public" && (
                        <PublicIcon
                          style={{ color: "grey", fontSize: "18px" }}
                        />
                      )}
                      {post.visibility === "private" && (
                        <LockIcon style={{ color: "grey", fontSize: "18px" }} />
                      )}
                      {post.visibility === "friends" && (
                        <GroupIcon
                          style={{ color: "grey", fontSize: "18px" }}
                        />
                      )}
                      {post.visibility === "network" && (
                        <SensorsIcon
                          style={{ color: "grey", fontSize: "18px" }}
                        />
                      )}
                    </span>
                  </Tooltip>
                </Grid>
              </Grid>

              <Typography variant="h5" component="h2" gutterBottom>
                {post.title}
              </Typography>

              <Typography variant="body1" gutterBottom>
                {post.content.text}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {Array.isArray(post.tag) &&
                  post.tag.map((tag, index) => (
                    <Chip
                      key={index}
                      label={`#${tag}`}
                      color="primary"
                      sx={{ marginLeft: 1, fontWeight: "bold" }}
                    />
                  ))}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
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
