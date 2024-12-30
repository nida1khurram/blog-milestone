// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import AuthorCard from '@/components/AuthorCard'
// import { useParams } from 'next/navigation'
// // Define the Author interface for nested author data
// interface Author {
//   name: string;
//   bio: string;
//   avatarUrl: string;
// }

// // Define the main Post interface
// interface Post {
//   id: string;
//   title: string;
//   content: string; // HTML content as a string
//   date: string;
//   author: Author; // Nested object for author details
//   coverImage: string; // URL of the cover image
// }
// const posts = [{
//   id: '1',
//   title: 'Getting Started with Next.js 15',
//   content: `
//     <p>Next.js 15 introduces several new features and improvements that make it even easier to build modern web applications. In this post, we'll explore some of the key highlights and how you can get started with the latest version of Next.js.</p>
    
//     <h2>Key Features</h2>
//     <ul>
//       <li>Improved performance with automatic code splitting</li>
//       <li>Enhanced static site generation capabilities</li>
//       <li>Better support for internationalization</li>
//       <li>Simplified API routes</li>
//     </ul>
    
//     <p>To get started with Next.js 15, you can create a new project using the following command:</p>
    
//     <pre><code>npx create-next-app@latest my-next-app</code></pre>
    
//     <p>This will set up a new Next.js project with all the latest features and best practices. From there, you can start building your application using the powerful tools and conventions provided by Next.js.</p>
//   `,
//   date: 'June 1, 2023',
//   author: {
//     name: 'Sir Hamza',
//     bio: 'Web developer and tech enthusiast. Passionate about creating amazing user experiences with the latest web technologies.',
//     avatarUrl: '/placeholder.svg?height=64&width=64',
//   },
//   coverImage: '/placeholder.svg?height=400&width=800',
// },
// {
//   id: '2',
//   title: 'Mastering Tailwind CSS',
//   content: `
//     <p>Next.js 15 introduces several new features and improvements that make it even easier to build modern web applications. In this post, we'll explore some of the key highlights and how you can get started with the latest version of Next.js.</p>
    
//     <h2>Key Features</h2>
//     <ul>
//       <li>Improved performance with automatic code splitting</li>
//       <li>Enhanced static site generation capabilities</li>
//       <li>Better support for internationalization</li>
//       <li>Simplified API routes</li>
//     </ul>
    
//     <p>To get started with Next.js 15, you can create a new project using the following command:</p>
    
//     <pre><code>npx create-next-app@latest my-next-app</code></pre>
    
//     <p>This will set up a new Next.js project with all the latest features and best practices. From there, you can start building your application using the powerful tools and conventions provided by Next.js.</p>
//   `,
//   date: 'June 1, 2023',
//   author: {
//     name: 'Sir Hamza',
//     bio: 'Web developer and tech enthusiast. Passionate about creating amazing user experiences with the latest web technologies.',
//     avatarUrl: '/placeholder.svg?height=64&width=64',
//   },
//   coverImage: '/placeholder.svg?height=400&width=800',
// },
// ]

// interface Comment {
//   id: number
//   author: string
//   content: string
//   date: string
// }


// export default function BlogPost() {
//   const params = useParams() // Use useParams hook
//   const postId = params.id // Access params.id directly

//   const [comments, setComments] = useState<Comment[]>([])
//   const [newComment, setNewComment] = useState('')

//   // Load comments from localStorage on component mount
//   useEffect(() => {
//     const savedComments = localStorage.getItem(`comments-${postId}`)
//     if (savedComments) {
//       setComments(JSON.parse(savedComments))
//     }
//   }, [postId])

//   // Save comments to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem(`comments-${postId}`, JSON.stringify(comments))
//   }, [comments, postId])

//   const handleSubmitComment = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (newComment.trim()) {
//       const comment: Comment = {
//         id: comments.length + 1,
//         author: 'Anonymous',
//         content: newComment.trim(),
//         date: new Date().toLocaleDateString(),
//       }
//       setComments([...comments, comment])
//       setNewComment('')
//     }
//   }

//   return (
//     {posts.map((post:Post) => (
//     <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <Image
//         src={post.coverImage}
//         alt={post.title}
//         width={800}
//         height={400}
//         className="w-full h-64 object-cover rounded-lg mb-8"
//       />
//       <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
//       <div className="text-gray-600 mb-8">
//         Published on {post.date} by {post.author.name}
//       </div>
//       <div className="prose prose-lg mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />
      
//       <AuthorCard
//         name={post.author.name}
//         bio={post.author.bio}
//         avatarUrl={post.author.avatarUrl}
//       />

//       <div className="mt-12">
//         <h2 className="text-2xl font-bold mb-4">Comments</h2>
//         {comments.map((comment) => (
//           <div key={comment.id} className="bg-gray-100 rounded-lg p-4 mb-4">
//             <div className="font-semibold">{comment.author}</div>
//             <div className="text-gray-600 text-sm mb-2">{comment.date}</div>
//             <p>{comment.content}</p>
//           </div>
//         ))}
//         <form onSubmit={handleSubmitComment} className="mt-8">
//           <textarea
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             placeholder="Leave a comment..."
//             className="w-full p-2 border rounded-lg mb-4"
//             rows={4}
//           />
//           <button
//             type="submit"
//             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
//           >
//             Submit Comment
//           </button>
//         </form>
//       </div>
//     </div>
//     ))}
//   )
// }





// 2
// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import AuthorCard from '@/components/AuthorCard';
// import { useParams } from 'next/navigation';
// import {posts, Comment} from '../../../components/data'

// export default function BlogPost() {
//   const params = useParams(); // Use useParams hook
//   const postId = params.id; // Access params.id directly

//   const [comments, setComments] = useState<Comment[]>([]);
//   const [newComment, setNewComment] = useState('');

//   // Find the post by postId
//   const post = posts.find((p) => p.id === postId);

//   // Load comments from localStorage on component mount
//   useEffect(() => {
//     const savedComments = localStorage.getItem(`comments-${postId}`);
//     if (savedComments) {
//       setComments(JSON.parse(savedComments));
//     }
//   }, [postId]);

//   // Save comments to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem(`comments-${postId}`, JSON.stringify(comments));
//   }, [comments, postId]);

//   const handleSubmitComment = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (newComment.trim()) {
//       const comment: Comment = {
//         id: comments.length + 1,
//         author: 'Anonymous',
//         content: newComment.trim(),
//         date: new Date().toLocaleDateString(),
//       };
//       setComments([...comments, comment]);
//       setNewComment('');
//     }
//   };

//   if (!post) {
//     return <p className="text-center text-red-500">Post not found.</p>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <Image
//         src={post.coverImage}
//         alt={post.title}
//         width={800}
//         height={400}
//         className="w-full h-64 object-cover rounded-lg mb-8"
//       />
//       <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
//       <div className="text-gray-600 mb-8">
//         Published on {post.date} by {post.author.name}
//       </div>
//       <div
//         className="prose prose-lg mb-12"
//         dangerouslySetInnerHTML={{ __html: post.content }}
//       />
//       <AuthorCard
//         name={post.author.name}
//         bio={post.author.bio}
//         avatarUrl={post.author.avatarUrl}
//       />

//       <div className="mt-12">
//         <h2 className="text-2xl font-bold mb-4">Comments</h2>
//         {comments.map((comment) => (
//           <div key={comment.id} className="bg-gray-100 rounded-lg p-4 mb-4">
//             <div className="font-semibold">{comment.author}</div>
//             <div className="text-gray-600 text-sm mb-2">{comment.date}</div>
//             <p>{comment.content}</p>
//           </div>
//         ))}
//         <form onSubmit={handleSubmitComment} className="mt-8">
//           <textarea
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             placeholder="Leave a comment..."
//             className="w-full p-2 border rounded-lg mb-4"
//             rows={4}
//           />
//           <button
//             type="submit"
//             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
//           >
//             Submit Comment
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }







// 3
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import AuthorCard from '@/components/AuthorCard';
import { useParams } from 'next/navigation';
import { posts, Comment } from '../../../components/data';

export default function BlogPost() {
  const params = useParams(); // Use useParams hook
  const postId = params.id; // Access params.id directly

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  // Find the post by postId
  const post = posts.find((p) => p.id === postId);

  // Helper function to save comments to cookies
  const saveCommentsToCookies = (comments: Comment[]) => {
    document.cookie = `comments-${postId}=${encodeURIComponent(
      JSON.stringify(comments)
    )}; path=/; max-age=31536000`; // 1 year expiration
  };

  // Helper function to load comments from cookies
  const loadCommentsFromCookies = (): Comment[] | null => {
    const cookieString = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`comments-${postId}=`));
    if (cookieString) {
      const cookieValue = decodeURIComponent(
        cookieString.split('=')[1]
      );
      try {
        return JSON.parse(cookieValue);
      } catch (error) {
        console.error('Error parsing comments from cookies:', error);
      }
    }
    return null;
  };

  // Load comments from localStorage or cookies on component mount
  useEffect(() => {
    const savedComments =
      localStorage.getItem(`comments-${postId}`) ||
      JSON.stringify(loadCommentsFromCookies());
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [postId]);

  // Save comments to both localStorage and cookies whenever they change
  useEffect(() => {
    localStorage.setItem(`comments-${postId}`, JSON.stringify(comments));
    saveCommentsToCookies(comments);
  }, [comments, postId]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: 'Anonymous',
        content: newComment.trim(),
        date: new Date().toLocaleDateString(),
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  if (!post) {
    return <p className="text-center text-red-500">Post not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Image
        src={post.coverImage}
        alt={post.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-8">
        Published on {post.date} by {post.author.name}
      </div>
      <div
        className="prose prose-lg mb-12"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <AuthorCard
        name={post.author.name}
        bio={post.author.bio}
        avatarUrl={post.author.avatarUrl}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-100 rounded-lg p-4 mb-4">
            <div className="font-semibold">{comment.author}</div>
            <div className="text-gray-600 text-sm mb-2">{comment.date}</div>
            <p>{comment.content}</p>
          </div>
        ))}
        <form onSubmit={handleSubmitComment} className="mt-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Leave a comment..."
            className="w-full p-2 border rounded-lg mb-4"
            rows={4}
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
}
