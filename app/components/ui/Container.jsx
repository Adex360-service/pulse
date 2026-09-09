export default function Container({ children, className = "", as: Tag = "div" }) {
  return <Tag className={`mx-auto w-[min(1280px,calc(100%-96px))] max-sm:w-[calc(100%-32px)] ${className}`}>{children}</Tag>;
}
