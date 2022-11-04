import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Portal =
  (Component: React.ComponentType<any>, elementSelector: string) =>
  (props: any) => {
    const ref = useRef<HTMLDivElement | null>();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      ref.current = document.querySelector<HTMLDivElement>(elementSelector);
      setMounted(true);
    }, []);

    return mounted
      ? createPortal(<Component {...props} />, ref.current!)
      : null;
  };

export default Portal;
