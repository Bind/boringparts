import Head from "next/head";
import PageTitle from "@/components/PageTitle";
import tinytime from "tinytime";
import Link from "next/link";
import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";

const mdxComponents = {
  pre: ({ className, ...props }) => (
    <pre
      className={` bg-red ${className} rounded-md  border-black border-solid py-3 px-4 overflow-x-auto`}
      {...props}
    />
  ),
};

const postDateTemplate = tinytime("{dddd}, {MMMM} {DD}, {YYYY}");

export default function Post({ meta, children, posts }) {
  const router = useRouter();
  const postIndex = posts.findIndex((post) => post.link === router.pathname);
  const previous = posts[postIndex + 1];
  const next = posts[postIndex - 1];

  return (
    <article className="">
      <Head>
        <title>{meta.title} – Boring parts</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:title" content={`${meta.title} – Boring.Parts`} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta property="og:url" content={router.pathname} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta name="description" content={meta.description}></meta>
      </Head>
      <header className="py-6">
        <div>
          <div>
            <PageTitle>{meta.title || "No Title Set"}</PageTitle>
          </div>
          <dl>
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text leading-6 font-medium text-gray-900">
                <time dateTime={meta.date}>
                  {postDateTemplate.render(
                    new Date(meta.date || new Date().getTime())
                  )}
                </time>
              </dd>
            </div>
          </dl>
        </div>
      </header>
      <div className="pb-16 xl:pb-20" style={{ gridTemplateRows: "auto 1fr" }}>
        <div className=" xl:pb-0 xl:col-span-3 xl:row-span-2">
          <div className="prose max-w-none  pb-8">
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </div>
          {meta.discussion && (
            <div className="pt-6 pb-16">
              <p>
                Want to talk about this post?{" "}
                <a
                  href={meta.discussion}
                  className="font-medium text-teal-500 hover:text-teal-600"
                >
                  Discuss this on GitHub &rarr;
                </a>
              </p>
            </div>
          )}
        </div>
        <footer className="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
          {(next || previous) && (
            <div className="space-y-8 py-8">
              {next && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Next Article
                  </h2>
                  <div className="text-teal-500 hover:text-teal-600">
                    <Link href={next.link}>
                      <a>{next.title}</a>
                    </Link>
                  </div>
                </div>
              )}
              {previous && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Previous Article
                  </h2>
                  <div className="text-teal-500 hover:text-teal-600">
                    <Link href={previous.link}>
                      <a>{previous.title}</a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </footer>
      </div>
    </article>
  );
}
