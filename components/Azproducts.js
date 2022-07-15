import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";
import React from "react";
import NextLink from "next/link";

const Azproducts = ({ product }) => {
  return (
    <Card style={{ margin: "5px 0" }}>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item md={4} xs={3}>
          <CardMedia
            component="img"
            image={product.thumbnail}
            alt="Live from space album cover"
          />
        </Grid>
        <Grid item md={12} xs={8}>
          <CardContent sx={{ flex: "0 1 auto" }}>
            <NextLink href={product.url} passHref>
              <Link color="secondery">
                <Typography component="div" variant="small">
                  {product.title}
                </Typography>
              </Link>
            </NextLink>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {product.price.current_price}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};
export default Azproducts;
