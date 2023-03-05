import React, { useState, useEffect } from "react";
import AddPostForm from "./AddPostForm";
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
import { ThumbUp, ThumbDown } from "@mui/icons-material";

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
  //
  function updateLikes(postId, likes) {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes } : post
    );
    setPosts(updatedPosts);
  }
  //
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
