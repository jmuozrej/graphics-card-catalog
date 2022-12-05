import { useEffect, useRef, useState } from "react";

type Props = {
    onBottomHit: () => void;
    isLoading: boolean;
    children: React.ReactNode
}
  
function isBottom(ref: React.RefObject<HTMLDivElement>) {
if (!ref.current) {
    return false;
}
return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
}
  
  const InfiniteScroll: React.FC<Props> = ({
    onBottomHit,
    isLoading,
    children,
  }) => {
    const [initialLoad, setInitialLoad] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (initialLoad) {
        onBottomHit();
        setInitialLoad(false);
      }
    }, [onBottomHit, initialLoad]);
  
    useEffect(() => {
      const onScroll = () => {
        if (!isLoading && isBottom(contentRef)) {
          onBottomHit();
        }
      };
      document.addEventListener('scroll', onScroll);
      return () => document.removeEventListener('scroll', onScroll);
    }, [onBottomHit, isLoading]);
  
    return <div ref={contentRef}>{children}</div>;
  }

  export default InfiniteScroll