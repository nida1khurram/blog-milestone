
// // Define the Author interface for nested author data
// interface Author {
//     name: string;
//     bio: string;
//     avatarUrl: string;
//   }
  
//   // Define the main Post interface
//   interface Post {
//     id: string;
//     title: string;
//     content: string; // HTML content as a string
//     date: string;
//     author: Author; // Nested object for author details
//     coverImage: string; // URL of the cover image
//   }
  
//   export interface Comment {
//     id: number;
//     author: string;
//     content: string;
//     date: string;
//   }
  
//   // Static list of posts
//   export const posts: Post[] = [
//     {
//       id: '1',
//       title: 'Getting Started with Next.js 15',
//       content: `
//         <p>Next.js 15 introduces several new features and improvements that make it even easier to build modern web applications. In this post, we'll explore some of the key highlights and how you can get started with the latest version of Next.js.</p>
        
//         <h2>Key Features</h2>
//         <ul>
//           <li>Improved performance with automatic code splitting</li>
//           <li>Enhanced static site generation capabilities</li>
//           <li>Better support for internationalization</li>
//           <li>Simplified API routes</li>
//         </ul>
        
//         <p>To get started with Next.js 15, you can create a new project using the following command:</p>
        
//         <pre><code>npx create-next-app@latest my-next-app</code></pre>
        
//         <p>This will set up a new Next.js project with all the latest features and best practices. From there, you can start building your application using the powerful tools and conventions provided by Next.js.</p>
//       `,
//       date: 'June 1, 2023',
//       author: {
//         name: 'John Doe',
//         bio: 'Web developer and tech enthusiast. Passionate about creating amazing user experiences with the latest web technologies.',
//         avatarUrl: '/picture/1.jpg',
//       },
//       coverImage: '/picture/n.png',
//     },
//     {
//       id: '2',
//       title: 'Mastering Tailwind CSS',
//       content: `
//         <p>Tailwind CSS is a powerful utility-first CSS framework that allows developers to build highly customizable and responsive designs. In this post, we'll explore some of its key features and benefits.</p>
        
//         <h2>Key Features</h2>
//         <ul>
//           <li>Rapid prototyping</li>
//           <li>Highly customizable with configuration files</li>
//           <li>Responsive design utilities</li>
//           <li>Excellent developer experience</li>
//         </ul>
//       `,
//       date: 'June 5, 2023',
//       author: {
//         name: 'Jane Smith',
//         bio: 'Web developer and tech enthusiast. Passionate about creating amazing user experiences with the latest web technologies.',
//         avatarUrl: '/picture/3.jpg',
//       },
//       coverImage: '/picture/t.jpg',
//     },
//     {
//         id: '3',
//         title: 'The Power of React Hooks',
//         content: `
//           <p>React Hooks have transformed the way we write React components. In this post, we'll explore the power of hooks and how they can simplify your React code while adding powerful functionality.</p>
      
//       <h2>Popular React Hooks</h2>
//       <ul>
//         <li>useState for local component state</li>
//         <li>useEffect for side effects and lifecycle methods</li>
//         <li>useContext for consuming context</li>
//         <li>useReducer for complex state management</li>
//         <li>useMemo and useCallback for performance optimization</li>
//       </ul>
      
//       <p>Here's an example of a custom hook that manages a counter:</p>
      
//       <pre><code>function useCounter(initialValue = 0) {
//   const [count, setCount] = useState(initialValue);
//   const increment = () => setCount(c => c + 1);
//   const decrement = () => setCount(c => c - 1);
//   return { count, increment, decrement };
// }</code></pre>
      
//       <p>By leveraging hooks, you can write more concise, reusable, and powerful React components.</p>
//     `,
//     date: 'June 10, 2023',
//     author: {
//       name: 'Bob Johnson',
//       bio: 'Senior React developer with a passion for clean, efficient code and modern web technologies.',
//       avatarUrl: '/placeholder.svg?height=64&width=64',
//     },
//     coverImage: '/picture/r.png',
//   },
//       {
//         id: '4',
//         title: 'Building Scalable APIs with Node.js',
//         content: `
//           <p>Node.js is a powerful platform for building scalable and efficient APIs. In this post, we'll explore best practices and techniques for creating robust APIs that can handle high traffic and complex operations.</p>
      
//       <h2>Key Concepts</h2>
//       <ul>
//         <li>RESTful API design principles</li>
//         <li>Middleware for request processing</li>
//         <li>Error handling and logging</li>
//         <li>Database integration and ORM usage</li>
//         <li>Authentication and authorization</li>
//       </ul>
      
//       <p>Here's an example of a basic Express.js route with error handling:</p>
      
//       <pre><code>app.get('/api/users/:id', async (req, res, next) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
//   } catch (error) {
//     next(error);
//   }
// });</code></pre>
      
//       <p>By following these best practices, you can create scalable, maintainable, and efficient APIs with Node.js.</p>
//     `,
//     date: 'June 15, 2023',
//     author: {
//       name: 'Alice Williams',
//       bio: 'Backend developer specializing in Node.js and microservices architecture.',
//       avatarUrl: '/placeholder.svg?height=64&width=64',
//     },
//     coverImage: '/picture/napi.jpeg',
//   },
      
//   {
//     id: '5',
//     title: 'Introduction to TypeScript',
//     excerpt: 'Discover how TypeScript can improve your JavaScript development workflow.',
//     content: `
//       <p>TypeScript is a powerful superset of JavaScript that adds static typing and other features to help you write more robust and maintainable code. In this post, we'll introduce you to TypeScript and its key benefits.</p>
      
//       <h2>TypeScript Features</h2>
//       <ul>
//         <li>Static typing</li>
//         <li>Interface definitions</li>
//         <li>Enums and tuples</li>
//         <li>Generics</li>
//         <li>Advanced type inference</li>
//       </ul>
      
//       <p>Here's an example of a TypeScript interface and its usage:</p>
      
//       <pre><code>interface User {
//   id: number;
//   name: string;
//   email: string;
//   age?: number;
// }

// function greetUser(user: User) {
//   console.log(`Hello, ${user.name}!`);
// }

// const john: User = { id: 1, name: 'John Doe', email: 'john@example.com' };
// greetUser(john);</code></pre>
      
//       <p>By adopting TypeScript in your projects, you can catch errors early, improve code quality, and enhance your development experience.</p>
//     `,
//     date: 'June 20, 2023',
//     author: {
//       name: 'Charlie Brown',
//       bio: 'Full-stack developer with a focus on TypeScript and modern JavaScript frameworks.',
//       avatarUrl: '/placeholder.svg?height=64&width=64',
//     },
//     coverImage: '/picture/type.png',
//   },
//   ];


// Define the Author interface for nested author data
interface Author {
    name: string;
    bio: string;
    avatarUrl: string;
  }
  
  // Define the main Post interface
  interface Post {
    id: string;
    title: string;
    content: string; // HTML content as a string
    date: string;
    author: Author; // Nested object for author details
    coverImage: string; // URL of the cover image
    excerpt?: string; // Optional property for excerpt
  }
  
  // Define the Comment interface
  export interface Comment {
    id: number;
    author: string;
    content: string;
    date: string;
  }
  
  // Static list of posts
  export const posts: Post[] = [
    {
      id: '1',
      title: 'Getting Started with Next.js 15',
      content: `
        <p>Next.js 15 introduces several new features and improvements that make it even easier to build modern web applications. In this post, we'll explore some of the key highlights and how you can get started with the latest version of Next.js.</p>
        <h2>Key Features</h2>
        <ul>
          <li>Improved performance with automatic code splitting</li>
          <li>Enhanced static site generation capabilities</li>
          <li>Better support for internationalization</li>
          <li>Simplified API routes</li>
        </ul>
        <p>To get started with Next.js 15, you can create a new project using the following command:</p>
        <pre><code>npx create-next-app@latest my-next-app</code></pre>
        <p>This will set up a new Next.js project with all the latest features and best practices. From there, you can start building your application using the powerful tools and conventions provided by Next.js.</p>
      `,
      date: 'June 1, 2023',
      author: {
        name: 'John Doe',
        bio: 'Web developer and tech enthusiast. Passionate about creating amazing user experiences with the latest web technologies.',
        avatarUrl: '/picture/1.jpg',
      },
      coverImage: '/picture/n.png',
    },
    {
      id: '2',
      title: 'Mastering Tailwind CSS',
      content: `
        <p>Tailwind CSS is a powerful utility-first CSS framework that allows developers to build highly customizable and responsive designs. In this post, we'll explore some of its key features and benefits.</p>
        <h2>Key Features</h2>
        <ul>
          <li>Rapid prototyping</li>
          <li>Highly customizable with configuration files</li>
          <li>Responsive design utilities</li>
          <li>Excellent developer experience</li>
        </ul>
      `,
      date: 'June 5, 2023',
      author: {
        name: 'Jane Smith',
        bio: 'Web developer and tech enthusiast. Passionate about creating amazing user experiences with the latest web technologies.',
        avatarUrl: '/picture/2.jpg',
      },
      coverImage: '/picture/t.jpg',
    },
    {
      id: '3',
      title: 'The Power of React Hooks',
      content: `
        <p>React Hooks have transformed the way we write React components. In this post, we'll explore the power of hooks and how they can simplify your React code while adding powerful functionality.</p>
        <h2>Popular React Hooks</h2>
        <ul>
          <li>useState for local component state</li>
          <li>useEffect for side effects and lifecycle methods</li>
          <li>useContext for consuming context</li>
          <li>useReducer for complex state management</li>
          <li>useMemo and useCallback for performance optimization</li>
        </ul>
        <p>Here's an example of a custom hook that manages a counter:</p>
        <pre><code>function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);
    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);
    return { count, increment, decrement };
  }</code></pre>
        <p>By leveraging hooks, you can write more concise, reusable, and powerful React components.</p>
      `,
      date: 'June 10, 2023',
      author: {
        name: 'Bob Johnson',
        bio: 'Senior React developer with a passion for clean, efficient code and modern web technologies.',
        avatarUrl: '/picture/3.jpg',
      },
      coverImage: '/picture/r.jpeg',
    },
    {
      id: '4',
      title: 'Building Scalable APIs with Node.js',
      content: `
        <p>Node.js is a powerful platform for building scalable and efficient APIs. In this post, we'll explore best practices and techniques for creating robust APIs that can handle high traffic and complex operations.</p>
        <h2>Key Concepts</h2>
        <ul>
          <li>RESTful API design principles</li>
          <li>Middleware for request processing</li>
          <li>Error handling and logging</li>
          <li>Database integration and ORM usage</li>
          <li>Authentication and authorization</li>
        </ul>
        <p>Here's an example of a basic Express.js route with error handling:</p>
        <pre><code>app.get('/api/users/:id', async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      next(error);
    }
  });</code></pre>
        <p>By following these best practices, you can create scalable, maintainable, and efficient APIs with Node.js.</p>
      `,
      date: 'June 15, 2023',
      author: {
        name: 'Alice Williams',
        bio: 'Backend developer specializing in Node.js and microservices architecture.',
        avatarUrl: '/picture/5.jpeg',
      },
      coverImage: '/picture/napi.jpeg',
    },
    {
      id: '5',
      title: 'Introduction to TypeScript',
      excerpt: 'Discover how TypeScript can improve your JavaScript development workflow.',
      content: `
        <p>TypeScript is a powerful superset of JavaScript that adds static typing and other features to help you write more robust and maintainable code. In this post, we'll introduce you to TypeScript and its key benefits.</p>
        <h2>TypeScript Features</h2>
        <ul>
          <li>Static typing</li>
          <li>Interface definitions</li>
          <li>Enums and tuples</li>
          <li>Generics</li>
          <li>Advanced type inference</li>
        </ul>
        <p>Here's an example of a TypeScript interface and its usage:</p>
        <pre><code>interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
  }
  
  function greetUser(user: User) {
    console.log(\`Hello, \${user.name}!\`);
  }
  
  const john: User = { id: 1, name: 'John Doe', email: 'john@example.com' };
  greetUser(john);</code></pre>
        <p>By adopting TypeScript in your projects, you can catch errors early, improve code quality, and enhance your development experience.</p>
      `,
      date: 'June 20, 2023',
      author: {
        name: 'Charlie Brown',
        bio: 'Full-stack developer with a focus on TypeScript and modern JavaScript frameworks.',
        avatarUrl: '/picture/6.jpeg',
      },
      coverImage: '/picture/type.png',
    },
  ];
  