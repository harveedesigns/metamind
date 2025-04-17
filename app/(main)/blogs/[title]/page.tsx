import { Metadata } from 'next';
import { getMetadataForPath } from '../../../metadata';
import BlogTitle from './BlogTitle';

export async function generateMetadata(): Promise<Metadata> {
  const data = getMetadataForPath("/blogs");

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      url: "https://www.metamindhealth.com/blogs",
      siteName: "Metamind Health",
      images: [
        {
          url: "https://www.metamindhealth.com/images/logo.png",
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: ["https://www.metamindhealth.com/images/logo.png"],
    },
  };
}

const page = () => {
  return (
    <BlogTitle />
  )
}

export default page