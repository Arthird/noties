import Masonry from "react-masonry-css";
import { NotiCard, type Noti, type NotiId } from "../../entities/noti";
import { BREAKPOINTS } from "shared/config/ui/breackpoints";
import clsx from "clsx";

type NotiListProps = {
  noties: Noti[];
  loading: boolean;
  onEditBtnClick?: (notiId: NotiId) => void;
  onDeleteBtnClick?: (notiId: NotiId) => void;
  className?: string;
};

export default function NotiList({
  noties,
  loading,
  onEditBtnClick,
  onDeleteBtnClick,
  className,
}: NotiListProps) {
  const breakpointColumnsObj = {
    default: 4,
    [BREAKPOINTS.lg]: 3,
    [BREAKPOINTS.md]: 2,
    [BREAKPOINTS.sm]: 1,
  };
  return (
    <div className={clsx("flex flex-1", className)}>
      <Masonry
        className="flex flex-1 -ml-4 w-auto"
        breakpointCols={breakpointColumnsObj}
      >
        {noties
          .sort(
            (notiA, notiB) => notiB.edited.getTime() - notiA.edited.getTime(),
          )
          .map((noti) => (
            <NotiCard
              key={noti.id}
              noti={noti}
              className="mb-4 ml-4 break-inside-avoid"
              onEdit={() => onEditBtnClick?.(noti.id)}
              onDelete={() => onDeleteBtnClick?.(noti.id)}
            />
          ))}
      </Masonry>
    </div>
  );
}
