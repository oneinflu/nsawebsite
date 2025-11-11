import React from "react";
import BlogSlugClient from "./BlogSlugClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function BlogSlugPage({ params }: PageProps) {
  const { slug } = React.use(params);
  return <BlogSlugClient slug={slug} />;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const res = await fetch(`https://northstarapis-yamqp.ondigitalocean.app/api/blogs/slug/${slug}/full`, { cache: 'no-store' });
    if (!res.ok) throw new Error(String(res.status));
    const data = await res.json();
    const blog = data?.blog || {};
    return {
      title: blog.title || 'Blog',
      description: blog.excerpt || undefined,
      openGraph: {
        title: blog.title || 'Blog',
        description: blog.excerpt || undefined,
        url: `https://northstarapis-yamqp.ondigitalocean.app/api/blogs/${slug}`,
        images: blog.image ? [{ url: blog.image }] : undefined,
      },
      alternates: {
        canonical: `/blogs/${slug}`,
      },
    };
  } catch {
    return {
      title: 'Blog',
    };
  }
}


