import { useInView } from "../hooks/useInView";

// Wraps children and fades/slides them in when scrolled into view.
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
