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
    coverImage: '/picture/r.jpeg',
  },
  {
    id: '4',
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'Learn best practices for creating robust and scalable APIs using Node.js.',
    date: 'June 15, 2023',
    author: 'Alice Williams',
    coverImage: '/picture/napi.jpeg',
  },
  {
    id: '5',
    title: 'Introduction to TypeScript',
    excerpt: 'Discover how TypeScript can improve your JavaScript development workflow.',
    date: 'June 20, 2023',
    author: 'Charlie Brown',
    coverImage: '/picture/type.png',
  },
]

export default function BlogListPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Blog Posts</h1>
        <BlogSection posts={dummyPosts} />
      </div>
    </div>
  )
}
