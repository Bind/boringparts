import tinytime from "tinytime";
import Link from "next/link";
import Head from "next/head";
import getAllPostPreviews from "@/utils/getAllPostPreviews";
import TagText from "@/components/TagText";

const posts = getAllPostPreviews();

const postDateTemplate = tinytime("{MM} {DD} {YYYY}");

export default function TableOfContents({ children }) {
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
          Software Engineering can be <strong>boring AF</strong>. Come on in,
          the monotony is fine. <br />
          <br />
          <strong>
            {" "}
            PS. I run a consulting firm, and I'm very good at fixing the
            terrible decisions made by the previous firm you hired.
          </strong>
        </p>
      </div>
      <ul className="space-y-6 mt-6">{children}</ul>
    </div>
  );
}
