import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Tooltip,
  Chip,
  Button,
} from "@mui/material";
import CustomNavbar from "../utilities/NavBar/CustomNavbar";
import { ArrowForward } from "@mui/icons-material";

export default function Shop() {
  const [products, setProducts] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => setError("Error fetching products"));
  }, []);

  const handleBuyNowClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <CustomNavbar title="Shop" link="/" />
      <Container>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} md={6} lg={4} key={product.id}>
              <Paper
                sx={{
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  margin: "8px",
                  padding: "16px",
                  backgroundColor: "#fff",
                }}
              >
                <Avatar
                  alt={product.name}
                  src={product.image}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
                <Typography variant="h6" component="h2" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {product.description}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  ${product.price}
                </Typography>
                <Chip
                  label={`${product.rating} stars`}
                  color="primary"
                  sx={{ marginTop: 1 }}
                />
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Tooltip title="Visiter le siteweb">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleBuyNowClick(product.link)}
                      endIcon={<ArrowForward />}
                    >
                      Acheter
                    </Button>
                  </Tooltip>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
