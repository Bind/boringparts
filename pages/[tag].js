import tinytime from "tinytime";
import Link from "next/link";
import Head from "next/head";
import TableOfContents from "@/layouts/TableOfContents";
import { useRouter } from "next/router";
import getAllPostPreviews from "@/utils/getAllPostPreviews";
import TagText from "@/components/TagText";

const posts = getAllPostPreviews();

const postDateTemplate = tinytime("{MM} {DD} {YYYY}");

export default function Home() {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <TableOfContents>
      {posts
        .filter(({ link, module: { default: Component, meta } }) => {
          return meta.tags.includes(tag) && meta.published === true;
        })
        .map(({ link, module: { default: Component, meta } }) => {
          return (
            <li key={link}>
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
                        className="text-primary "
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
