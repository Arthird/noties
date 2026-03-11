import clsx from "clsx";

export type ContentProps = { children?: React.ReactNode };

export default function Content({ children }: ContentProps) {
  return (
    <h3
      className={clsx(
        "color-text-secondary p-1 pb-0 text-lg",
        "line-clamp-1 break-all",
      )}
    >
      <b>{children}</b>
    </h3>
  );
}
