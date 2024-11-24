import { fetchBlogs } from '@/utils/blogs';
import Link from 'next/link';

export default async function BlogsPage({ searchParams }) {
  const sort = (await searchParams).sort;
  console.log(sort);
  let blogs = [];
  try {
    blogs = await fetchBlogs(sort || 'asc');
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
  return (
    <div className="flex flex-col justify-center items-center border-0 border-r-8 border-solid bg-sky-200 h-fit w-fit">
      <h2>Blogs</h2>
      <Link href="/blogs?sort=asc">Sort ascending</Link>
      <Link href="/blogs?sort=desc">Sort descending</Link>

      <div className="w-8/12">
        {blogs.length ? (
          <ul>
            {blogs.map(blog => (
              <li key={blog.id}>
                <Link href={`/blogs/${blog.id}`}>
                  <em>
                    <b>{blog.title}</b>{' '}
                  </em>{' '}
                </Link>

                <p className="border-2 border-solid bg-gray-100 h-auto mb-8 rounded-md p-4">
                  {blog.content}{' '}
                  <span>
                    <em>
                      <b>_{blog.username}</b>
                    </em>
                  </span>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </div>
  );
}
