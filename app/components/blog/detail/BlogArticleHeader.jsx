import Link from "next/link";
import Container from "../../ui/Container";

export default function BlogArticleHeader({ article }) {
  return (
    <header className="bg-[#f7f7fc] pt-10 pb-12 max-sm:py-8">
      <Container className="max-w-[800px]">
        <nav aria-label="Breadcrumb" className="mb-7 text-xs leading-5 text-[#77716e]">
          <ol className="flex flex-wrap gap-x-2">
            <li><Link href="/" className="hover:text-[#8b43fd]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="hover:text-[#8b43fd]">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="break-all">{article.slug}</li>
          </ol>
        </nav>
        <h1 className="font-[family-name:var(--font-fraunces)] text-[40px] leading-[1.08] font-semibold tracking-[-.8px] max-sm:text-[32px]">{article.title}</h1>
      </Container>
    </header>
  );
}
