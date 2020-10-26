import Link from "next/link";
import { BlinkCursor } from "@/components/BlinkCursor";
import React from "react";

function Logo({ className }) {
  return (
    <React.Fragment>
      <div className="pt-6 space-y-2 md:space-y-5">
        <h4 className="dollarsign text-md leading-9 font-extrabold text-primary tracking-tight text-4xl sm:leading-10 md:text-6xl md:leading-14">
          boring.parts <BlinkCursor />
        </h4>
        <p className="sm:text-xs md:text-base leading-7 text-primary">
          and other stuff by <strong>D. Binder</strong> 😴
        </p>
      </div>
    </React.Fragment>
  );
}

export default function Header() {
  return (
    <header className="flex justify-between items-center pt-10 ">
      <div>
        <Link href="/">
          <a aria-label="Boring Parts Blog">
            <Logo className="hidden sm:block h-6 text-xl" />
          </a>
        </Link>
      </div>
    </header>
  );
}
