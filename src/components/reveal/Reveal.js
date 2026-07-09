import React, {useRef, useState, useEffect} from "react";

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      {threshold: 0.1}
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  return inView;
}

export function Fade({
  children,
  bottom,
  left,
  right,
  duration = 1000,
  distance = "20px",
  style: extraStyle,
  ...rest
}) {
  const ref = useRef(null);
  const show = useInView(ref);

  const translate = bottom
    ? `translateY(${distance})`
    : left
      ? `translateX(-${distance})`
      : right
        ? `translateX(${distance})`
        : `translateY(${distance})`;

  const style = {
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    opacity: show ? 1 : 0,
    transform: show ? "none" : translate,
    willChange: "opacity, transform",
    ...extraStyle
  };

  return (
    <div ref={ref} style={style} {...rest}>
      {children}
    </div>
  );
}

export function Slide({
  children,
  left,
  right,
  duration = 1000,
  style: extraStyle,
  ...rest
}) {
  const ref = useRef(null);
  const show = useInView(ref);

  const style = {
    transition: `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`,
    transform: show ? "none" : left ? "translateX(-100%)" : "translateX(100%)",
    opacity: show ? 1 : 0,
    overflow: "hidden",
    willChange: "opacity, transform",
    ...extraStyle
  };

  return (
    <div ref={ref} style={style} {...rest}>
      {children}
    </div>
  );
}
