import CourseThankYouPage from '@/components/thank-you/CourseThankYouPage';
import { courseThankYouConfig, getCourseContent } from '@/components/thank-you/courseThankYouConfig';
import type { Metadata } from 'next';

export default async function Page({ params }: { params: Promise<{ course: string }> }) {
  const { course } = await params;
  return <CourseThankYouPage course={course} />;
}

export function generateStaticParams() {
  return Object.keys(courseThankYouConfig).map((course) => ({ course }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }): Promise<Metadata> {
  const { course } = await params;
  const content = getCourseContent(course);
  return {
    title: `${content.title} | NorthStar Academy`,
    description: content.subtitle,
  };
}