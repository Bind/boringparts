import tinytime from "tinytime";
import Link from "next/link";
import Head from "next/head";
import getAllPostPreviews from "@/utils/getAllPostPreviews";

const posts = getAllPostPreviews();

const postDateTemplate = tinytime("{MM} {DD} {YYYY}");

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog – Boring Parts</title>
        <link
          rel="shortcut icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/sleeping-face_1f634.png"
        />
        <meta
          name="description"
          content="Boring Parts of Software Engineering that need to be right."
        />
      </Head>
      <div>
        <br />
        <p>
          Software Engineering can be <strong>boring AF</strong>. I've decided
          to write down the solutions to monotonous issues I've come across and
          solved.
        </p>
      </div>
      <ul className="divide-y divide-teal-200">
        {posts.map(({ link, module: { default: Component, meta } }) => {
          return (
            <li key={link} className="py-12">
              <article className="space-y-2  xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500">
                    <time dateTime={meta.date}>
                      {postDateTemplate.render(new Date(meta.date))}
                    </time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                      <Link href={link}>
                        <a className="text-gray-900">{meta.title}</a>
                      </Link>
                    </h2>
                    <div className="prose max-w-none text-primary">
                      <Component />
                    </div>
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <Link href={link}>
                      <a
                        className="text-teal-500 hover:text-teal-600"
                        aria-label={`Read "${meta.title}"`}
                      >
                        Read more &rarr;
                      </a>
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
