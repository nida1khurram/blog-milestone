import FeatureSection from '@/components/FeatureSection'
import BlogSection from '@/components/BlogSection'

const dummyPosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js 15',
    excerpt: 'Learn how to build modern web applications with Next.js 15.',
    date: 'June 1, 2023',
    author: 'John Doe',
    coverImage: '/picture/n.png',
  },
  {
    id: '2',
    title: 'Mastering Tailwind CSS',
    excerpt: 'Discover advanced techniques for building beautiful UIs with Tailwind CSS.',
    date: 'June 5, 2023',
    author: 'Jane Smith',
    coverImage: '/picture/t.jpg',
  },
  {
    id: '3',
    title: 'The Power of React Hooks',
    excerpt: 'Unlock the full potential of React with hooks and functional components.',
    date: 'June 10, 2023',
    author: 'Bob Johnson',
    coverImage: '/picture/r.png',
  },
]

export default function Home() {
  return (
    <div>
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Welcome to Web Development Blog</h1>
          <p className="mt-5 text-xl text-gray-500">Stay up-to-date with the latest in web development and technology.</p>
        </div>
      </div>
      <FeatureSection/>
      <BlogSection posts={dummyPosts} />
    </div>
  )
}