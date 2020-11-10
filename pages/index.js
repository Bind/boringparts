import tinytime from "tinytime";
import Link from "next/link";
import Head from "next/head";
import getAllPostPreviews from "@/utils/getAllPostPreviews";
import TableOfContents from "@/layouts/TableOfContents";
import TagText from "@/components/TagText";

const posts = getAllPostPreviews();

const postDateTemplate = tinytime("{MM} {DD} {YYYY}");

export default function Home() {
  return (
    <TableOfContents>
      {posts
        .filter(({ link, module: { default: Component, meta } }) => {
          return meta.published === true;
        })
        .map(({ link, module: { default: Component, meta } }) => {
          return (
            <li key={link}>
              <article className="space-y-2  xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <div className="space-y-5 xl:col-span-3">
                  <div className="">
                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                      <Link href={link}>
                        <a className="text-gray-900">{meta.title}</a>
                      </Link>
                    </h2>
                    <div className="flex flex-row items-center">
                      <dl className="flex flex-row items-center justify-center">
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base leading-6 font-medium text-gray-900 flex align-center justify-center">
                          <time
                            className="flex justify-center align-center"
                            dateTime={meta.date}
                          >
                            {postDateTemplate.render(new Date(meta.date))}
                          </time>
                        </dd>
                      </dl>
                      <div className="space-x-1 px-1 flex flex-row items-center">
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
                        className="text-gray-900 "
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
    </TableOfContents>
  );
}
