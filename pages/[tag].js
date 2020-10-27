import tinytime from "tinytime";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import getAllPostPreviews from "@/utils/getAllPostPreviews";
import TagText from "@/components/TagText";

const posts = getAllPostPreviews();

const postDateTemplate = tinytime("{MM} {DD} {YYYY}");

export default function Home() {
  const router = useRouter();
  const { tag } = router.query;

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
        {posts
          .filter(({ link, module: { default: Component, meta } }) => {
            return meta.tags.includes(tag);
          })
          .map(({ link, module: { default: Component, meta } }) => {
            return (
              <li key={link} className="py-12">
                <article className="space-y-2  xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  <div className="space-y-5 xl:col-span-3">
                    <div className="">
                      <h2 className="text-2xl leading-8 font-bold tracking-tight">
                        <Link href={link}>
                          <a className="text-primary">{meta.title}</a>
                        </Link>
                      </h2>
                      <div className="flex flex-row items-center">
                        <dl className="flex flex-row items-center justify-center">
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base leading-6 font-medium text-primary flex align-center justify-center">
                            <time
                              className="flex justify-center align-center"
                              dateTime={meta.date}
                            >
                              {postDateTemplate.render(new Date(meta.date))}
                            </time>
                          </dd>
                        </dl>
                        <div className="space-x-1 pl-6 flex flex-row items-center">
                          {meta.tags.map((t) => {
                            return <TagText tag={t} link={`/${t}`}></TagText>;
                          })}
                        </div>
                      </div>
                      <div className="prose max-w-none text-primary">
                        <Component />
                      </div>
                    </div>
                    <div className="text-base leading-6 font-medium">
                      <Link href={link}>
                        <a
                          className="text-primary hover:text-gray-700"
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
