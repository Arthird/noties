import clsx from "clsx";

export type ContentProps = { children?: React.ReactNode };

export default function Content({ children }: ContentProps) {
  return (
    <h3 className={clsx("text-lg p-1 text-neutral-950 line-clamp-1 break-all")}>
      <b>{children}</b>
    </h3>
  );
}
