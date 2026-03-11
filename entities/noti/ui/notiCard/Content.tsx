export type ContentProps = { children?: React.ReactNode };

export default function Content({ children }: ContentProps) {
  return (
    <p className="text-md color-text-secondary m-1 mt-0 wrap-anywhere whitespace-pre-wrap">
      {children}
    </p>
  );
}
