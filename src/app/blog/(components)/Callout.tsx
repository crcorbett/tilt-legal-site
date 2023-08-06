type CalloutProps = {
  children: any;
  title: string;
};

function Callout({ children, title }: CalloutProps) {
  return (
    <div className="flex flex-col my-4 space-y-4 bg-blue-300">
      <div className="text-3xl font-semibold text-blue-500">{title}</div>
      <div>{children}</div>
    </div>
  );
}
export { Callout };
