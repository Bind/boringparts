import getAllPostPreviews from "./getAllPostPreviews";

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPostPreviews()
        .filter((post) => post.module.meta.published)
        .map((post) => ({
          title: post.module.meta.title,
          link: post.link,
        })),
    },
  };
}
