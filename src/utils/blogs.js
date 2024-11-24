import { db } from '@/utils/db';

export async function fetchBlogs(sort = 'asc') {
  const result = await db.query('SELECT * FROM blogs');
  const blogs = result.rows;

  if (sort === 'desc') {
    blogs.reverse();
  }
  return blogs;
}
