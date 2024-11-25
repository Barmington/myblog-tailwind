import Comments from '@/Components/Comments.jsx';
import { db } from '@/utils/db'; // Ensure proper import of your database utility

export default async function BlogPostPage({ params }) {
  console.log(params);
  const { id } = params;

  try {
    // Fetch the blog post by ID
    const blogResult = await db.query('SELECT * FROM blogs WHERE id = $1', [
      id,
    ]);
    const post = blogResult.rows[0];

    // Handle "not found" scenario
    if (!post) {
      return <div>Blog post not found.</div>;
    }

    // Fetch comments for the blog
    const commentsResult = await db.query(
      'SELECT * FROM comments WHERE blog_id = $1',
      [id]
    );
    post.comments = commentsResult.rows || []; // Attach comments to the blog post

    return (
      <div className="w-11/12 ml-10 flex flex-col justify-center items-start">
        <div className="w-auto">
          <div className="mt-6">
            <h1>{post.title}</h1>
            <p>
              By{' '}
              <strong>
                <em>{post.username}</em>
              </strong>
            </p>
            <p>{post.content}</p>
          </div>
        </div>
        <div>
          <Comments />
          {post.comments.length ? (
            <ul>
              {post.comments.map(comment => (
                <li key={comment.id}>
                  <div className="border rounded-md bg-slate-100 mt-6">
                    <p>
                      <b>
                        {' '}
                        <em>{comment.username} - </em>
                      </b>{' '}
                      {comment.content}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return <div>Error loading blog post.</div>;
  }
}
