import CourseThankYouPage from '@/components/thank-you/CourseThankYouPage';
import { courseThankYouConfig } from '@/components/thank-you/courseThankYouConfig';

export default async function Page({ params }: { params: Promise<{ course: string }> }) {
  const { course } = await params;
  return <CourseThankYouPage course={course} />;
}

export function generateStaticParams() {
  return Object.keys(courseThankYouConfig).map((course) => ({ course }));
}

export const dynamicParams = false;