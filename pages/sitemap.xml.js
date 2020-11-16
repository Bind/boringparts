import React from "react";
import getAllPostPreviews from "../src/utils/getAllPostPreviews";

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://boring.parts/</loc>
        </url>
        ${posts
          .filter(({ link, module: { meta } }) => meta.published)
          .map(({ link }) => {
            return `
                    <url>
                        <loc>https://boring.parts${`${link}`}</loc>
                    </url>
                `;
          })
          .join("")}
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const posts = getAllPostPreviews();

    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(posts));
    res.end();
  }
}

export default Sitemap;
