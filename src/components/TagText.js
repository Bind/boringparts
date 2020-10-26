import Link from "next/link";

export default function TagText({ tag, link }) {
  return (
    <Link href={link}>
      <a className="leading-9  text-referencehighlight-100 tracking-tight text-sm">
        {`#${tag}`}
      </a>
    </Link>
  );
}
