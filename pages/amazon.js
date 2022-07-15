// import { Grid } from "@material-ui/core";
// import React from "react";
// import Azproducts from "../components/Azproducts";
// import Layout from "../components/Layout";
// const amazonScraper = require("amazon-buddy");

// const Amazon = ({ Pdata }) => {
//   // console.log(Pdata);
//   return (
//     <Layout>
//       <Grid container>
//         {Pdata.map((P) => (
//           <Grid item md={3} xs={12} key={P.asin}>
//             {/* <h4>{P.title}</h4>
//               <a href={P.url}>Link</a>
//             <img src={P.thumbnail} /> */}
//             <Azproducts product={P} />
//           </Grid>
//         ))}
//       </Grid>
//     </Layout>
//   );
// };

// export default Amazon;

// export const getStaticProps = async () => {
//   const AZproducts = await amazonScraper.products({
//     keyword: "مكياج",
//     number: 50,
//     country: "AE",
//     currency: "AED",
//     host: "www.amazon.ae",
//     lang: "ar-ae",
//   });
//   const categories_AE = await amazonScraper.categories({ country: "AE" });
//   console.log(categories_AE["warehouse-deals"]);
//   const Pdata = AZproducts.result;
//   // await db.connect();
//   // const featuredProductsDocs = await Product.find(
//   //   { isFeatured: true },
//   //   "-reviews"
//   // )
//   //
//   //   .limit(3);

//   return {
//     props: {
//       Pdata,
//     },
//   };
// };
