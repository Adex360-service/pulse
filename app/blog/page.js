import BlogSearchProvider from "../components/blog/BlogSearchProvider";
import BlogHero from "../components/blog/BlogHero";
import BlogRecommended from "../components/blog/BlogRecommended";
import BlogCategorySection from "../components/blog/BlogCategorySection";
import BlogExplore from "../components/blog/BlogExplore";
import BlogMerchantStories from "../components/blog/BlogMerchantStories";
import { blogCategories } from "../content/blog";

export const metadata = {
  title: "Subscription Insights & Growth Tips | Pulse Blog",
  description: "Explore subscription strategies to acquire, grow, and retain subscribers, plus merchant success stories and Shopify guides.",
};

export default function BlogPage() {
  return (
    <main id="top" className="bg-white text-[#262522] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#7138e8] [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-[#7138e8]">
      <BlogSearchProvider>
        <BlogHero />
        <BlogRecommended />
        {blogCategories.map(category => <BlogCategorySection key={category.id} category={category} />)}
        <BlogExplore />
      </BlogSearchProvider>
      <BlogMerchantStories />
    </main>
  );
}
