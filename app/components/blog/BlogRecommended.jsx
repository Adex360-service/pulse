import Container from "../ui/Container";
import BlogPostCard from "./BlogPostCard";
import { recommendedPosts } from "../../content/blog";

export default function BlogRecommended() {
  return (
    <section className="pt-14 max-sm:pt-10" aria-label="Recommended blog posts">
      <Container>
        <div className="grid grid-cols-4 gap-4 border-b border-[#c7c3be] pb-[72px] max-lg:grid-cols-2 max-lg:gap-x-6 max-lg:gap-y-10 max-sm:grid-cols-1 max-sm:pb-12">
          {recommendedPosts.map(post => <BlogPostCard post={post} key={post.href} />)}
        </div>
      </Container>
    </section>
  );
}
