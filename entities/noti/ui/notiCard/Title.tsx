import clsx from "clsx";

export type ContentProps = { children?: React.ReactNode };

export default function Content({ children }: ContentProps) {
  return (
    <h3
      className={clsx(
        "p-1 pb-0 text-lg text-neutral-200",
        "line-clamp-1 break-all",
      )}
    >
      <b>{children}</b>
    </h3>
  );
}
