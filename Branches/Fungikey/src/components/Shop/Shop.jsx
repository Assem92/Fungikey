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
  TextField,
} from "@mui/material";
import CustomNavbar from "../utilities/NavBar/CustomNavbar";
import { ArrowForward } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";
import { Rating } from "@mui/material";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => setError("Error fetching products"));
  }, []);

  const handleBuyNowClick = (url, productId) => {
    window.location.href = url;
    fetch(`/api/products/${productId}/views`, { method: "PUT" })
      .then((response) => response.json())
      .then((data) => {
        const updatedProducts = [...products];
        const index = updatedProducts.findIndex((p) => p.id === productId);
        updatedProducts[index] = data;
        setProducts(updatedProducts);
      })
      .catch((error) => console.error("Error updating views:", error));
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
    setSearchQuery(query);
  };

  return (
    <div>
      <CustomNavbar title="Shop" link="/" />
      <Container>
        <TextField
          variant="outlined"
          margin="normal"
          label="Rechercher un produit"
          value={searchQuery}
          onChange={handleSearch}
          fullWidth
        />
        <Grid container spacing={2}>
          {filteredProducts.map((product) => (
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
                  €{product.price}
                </Typography>
                <Rating
                  name="product-rating"
                  value={product.rating}
                  precision={0.5}
                  readOnly
                />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Chip
                    label={
                      <Typography variant="body2">
                        {product.views} <Visibility />
                      </Typography>
                    }
                    color="default"
                    sx={{ mt: 1, mr: "auto" }}
                  />
                  <Tooltip title="Visiter le siteweb">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        handleBuyNowClick(product.link, product.id)
                      }
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
