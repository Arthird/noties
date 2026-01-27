import Masonry from "react-masonry-css";
import { NotiCard, type Noti, type NotiId } from "../../../entities/noti/";
import { BREAKPOINTS } from "shared/config/ui/breackpoints";

type NotiListProps = {
  noties: Noti[];
  loading: boolean;
  onEditBtnClick?: (notiId: NotiId) => void;
  onDeleteBtnClick?: (notiId: NotiId) => void;
};

export default function NotiList({
  noties,
  loading,
  onEditBtnClick,
  onDeleteBtnClick,
}: NotiListProps) {
  const breakpointColumnsObj = {
    default: 4,
    [BREAKPOINTS.lg]: 3,
    [BREAKPOINTS.md]: 2,
    [BREAKPOINTS.sm]: 1,
  };
  return (
    <div className="flex flex-1 ">
      {loading ? (
        <div className="flex flex-1 items-center justify-center min-h-100 m-auto">
          {/*// TODO: Loader gif*/}
          <p>Wait please...</p>
        </div>
      ) : (
        <Masonry
          className="flex flex-1 -ml-4 w-auto"
          breakpointCols={breakpointColumnsObj}
        >
          {noties.sort((notiA, notiB) => notiA.edited.getTime() - notiB.edited.getTime()).map((noti) => (
            <NotiCard
              key={noti.id}
              title={noti.title}
              className="mb-4 ml-4 break-inside-avoid"
              onEdit={() => onEditBtnClick?.(noti.id)}
              onDelete={() => onDeleteBtnClick?.(noti.id)}
            >
              {noti.content}
            </NotiCard>
          ))}
        </Masonry>
      )}
    </div>
  );
}
