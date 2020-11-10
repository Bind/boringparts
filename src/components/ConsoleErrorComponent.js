export default ({ className, ...props }) => (
  <blockquote
    className={`bg-white text-xl font-mono text-red-600 backg${className} rounded-md   border-solid py-3 px-4 overflow-x-auto`}
    {...props}
  ></blockquote>
);
