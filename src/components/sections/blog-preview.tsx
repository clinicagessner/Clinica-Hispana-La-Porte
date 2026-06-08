import { ArrowRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/animations/reveal";
import { BlogCard } from "@/components/blog/blog-card";
import { getRecentPosts } from "@/lib/blog";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

export async function BlogPreview() {
  const t = await getTranslations("BlogPreview");
  const locale = (await getLocale()) as Locale;
  const posts = getRecentPosts(locale, 3);

  if (posts.length === 0) return null;

  return (
    <section className="bg-gradient-to-b from-cloud to-sky-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-deep">
              {t("eyebrow")}
            </p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-dark sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-primary">
              {t("subtitle")}
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:text-right">
            <Link
              href="/blog"
              className={cn(ctaButton({ variant: "outline", size: "md" }))}
            >
              {t("cta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 80}>
              <BlogCard post={post} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
