import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  height?: number;
  width?: number;
}
export const SkeletonLoading = ({ height, width }: Props) => {
  return (
    <SkeletonTheme
      baseColor="#121212"
      highlightColor="rgba(255,255,255,0.05)"
      height={height}
      width="100%"
    >
      <Skeleton
        containerClassName="flex-1"
        count={1}
        duration={2}
        style={{
          borderRadius: "8px",
          width: width + "px",
          border: "2px solid rgba(255,255,255,0.01)",
        }}
      />
    </SkeletonTheme>
  );
};
