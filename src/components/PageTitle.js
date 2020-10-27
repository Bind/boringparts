export default function PageTitle({ children }) {
  return (
    <h1 className="text-2xl leading-9 font-extrabold text-primary tracking-tight sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
      {children}
    </h1>
  );
}
