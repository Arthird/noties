import clsx from "clsx";

export type ContentProps = { children?: React.ReactNode };

export default function Content({ children }: ContentProps) {
  return (
    <p
      className={clsx(
        "text-md p-1 bg-amber-200 text-neutral-950 m-1 break-all",
      )}
    >
      {children}
    </p>
  );
}
