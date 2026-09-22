import BlogSearchProvider from "../components/blog/BlogSearchProvider";
import BlogHero from "../components/blog/BlogHero";
import BlogRecommended from "../components/blog/BlogRecommended";
import BlogCategorySection from "../components/blog/BlogCategorySection";
import BlogExplore from "../components/blog/BlogExplore";
import BlogMerchantStories from "../components/blog/BlogMerchantStories";
import { blogArticles } from "../content/blogContent";
import ComingSoon from "../components/coming-soon/ComingSoon";

export const metadata = {
  title: "Subscription Insights & Growth Tips | Pulse Blog",
  description:
    "Explore subscription strategies to acquire, grow, and retain subscribers, plus merchant success stories and Shopify guides.",
};

export default function BlogPage() {
  const heroArticle = blogArticles?.[0];
  const featuredPosts = blogArticles?.slice(1, 6);
  const explorePosts = blogArticles?.slice(1) ?? [];
  const recommendedBlogs = blogArticles?.slice(1) ?? [];

  return (
    <main
      id="top"
      className="bg-white text-[#262522] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#7138e8] [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-[#7138e8]"
    >
      <BlogSearchProvider posts={explorePosts}>
        <BlogHero article={heroArticle} featuredPosts={featuredPosts} />
        <BlogRecommended posts={recommendedBlogs} />
        {/* {blogCategories.map((category) => (
          <BlogCategorySection key={category.id} category={category} />
        ))} */}
        {/* <BlogExplore posts={explorePosts} /> */}
      </BlogSearchProvider>
      {/* <BlogMerchantStories
        posts={blogArticles}
        categories={merchantStoryCategories}
      /> */}
      {/* <ComingSoon
        eyebrow="Insights & Growth Tips"
        title="Pulse Blog"
        description="Explore subscription strategies to acquire, grow, and retain subscribers, plus merchant success stories and Shopify guides."
        message="Coming soon"
        messageDescription="We’re preparing the blog. Check back soon to read the latest insights and growth tips for subscription businesses."
        actionLabel="Explore Pulse"
        actionHref="/"
      /> */}
    </main>
  );
}
