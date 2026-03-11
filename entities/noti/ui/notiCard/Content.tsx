export type ContentProps = { children?: React.ReactNode };

export default function Content({ children }: ContentProps) {
  return (
    <p className="text-md m-1 mt-0 wrap-anywhere whitespace-pre-wrap text-neutral-100">
      {children}
    </p>
  );
}
