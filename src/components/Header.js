import Link from "next/link";

function Logo({ className }) {
  return <div className={className}>📈 WindSprint</div>;
}

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link href="/">
          <a aria-label="WindSprint Blog Template">
            <Logo className="hidden sm:block h-6" />
          </a>
        </Link>
      </div>
    </header>
  );
}
