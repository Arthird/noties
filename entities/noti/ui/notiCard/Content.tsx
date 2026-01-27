export type ContentProps = { children?: React.ReactNode };

export default function Content({ children }: ContentProps) {
  return (
    <p className="text-md text-neutral-100 m-1 mt-0 whitespace-pre-wrap wrap-anywhere">{ children}</p>

  );
}
