
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
