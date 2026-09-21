import Container from "../ui/Container";
import BlogImage from "./BlogImage";

export default function BlogCategorySection({ category }) {
  return (
    <section className="pt-12 max-sm:pt-10" aria-labelledby={`category-${category.id}`}>
      <Container>
        <h2 id={`category-${category.id}`} className="mb-7 font-[family-name:var(--font-fraunces)] text-[32px] leading-[1.15] font-semibold tracking-[-.5px] text-[#46218b] max-sm:text-[28px]">{category.title}</h2>
        <div className="grid grid-cols-[2fr_1fr] items-stretch gap-10 max-lg:gap-6 max-md:grid-cols-1">
          <div className="grid grid-cols-2 gap-x-6 gap-y-9 max-sm:grid-cols-1 max-sm:gap-y-6">
            {category.posts.map(post => (
              <article className="flex min-w-0 flex-col border-b border-[#d5d3d0] pb-3" key={post.href}>
                <a className="font-[family-name:var(--font-fraunces)] text-[17px] leading-[1.3] font-semibold hover:text-[#7138e8]" href={post.href}>{post.title}</a>
                <p className="mt-2 line-clamp-2 text-[15px] leading-[1.45]">{post.description}</p>
                <div className="mt-auto flex flex-wrap justify-between gap-x-3 gap-y-1 pt-3 text-[13px] leading-5 text-[#666]">
                  {post.author && <span>{post.author}</span>}
                  <span className="ml-auto">{post.date}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="self-center max-md:mx-auto max-md:w-full max-md:max-w-[460px]">
            <BlogImage src={category.image} category sizes="(max-width: 768px) 100vw, 430px" />
          </div>
        </div>
      </Container>
    </section>
  );
}
