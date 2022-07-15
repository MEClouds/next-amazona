import { IconButton, InputBase } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "../utils/styles";
import SearchIcon from "@material-ui/icons/Search";
const amazonScraper = require("amazon-buddy");
const AZsearch = () => {
  const [keyword, setKeyword] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
    console.log(e.target.value);
    await getStaticProps(keyword);
  };
  const queryChangeHandler = (e) => {
    setKeyword(e.target.value);
  };
  const classes = useStyles();
  return (
    <div className={classes.searchSection}>
      <form onSubmit={submitHandler} className={classes.searchForm}>
        <InputBase
          name="query"
          className={classes.searchInput}
          placeholder="ابحث عن منتج"
          onChange={queryChangeHandler}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="بحث"
        >
          <SearchIcon />
        </IconButton>
      </form>
    </div>
  );
};
export const getStaticProps = async (keyword) => {
  const AZproducts = await amazonScraper.products({
    category: "warehouse-deals",
    keyword: "deal",
    number: 50,
    country: "AE",
    currency: "AED",
    host: "www.amazon.ae",
    language: "arabic",
  });
  const categories_AE = await amazonScraper.categories({ country: "AE" });
  console.log(categories_AE["warehouse-deals"]);
  console.log(keyword);
  const Pdata = AZproducts.result;
  // await db.connect();
  // const featuredProductsDocs = await Product.find(
  //   { isFeatured: true },
  //   "-reviews"
  // )
  //
  //   .limit(3);

  return {
    props: {
      Pdata,
    },
  };
};

export default AZsearch;
