import { db } from '@/utils/db';
import FormDesign from './FormDesign';
// import InputLayout from './ImputLayout';
// import { redirect } from 'next/navigation';

export default function AddComment() {
  async function handleAddComment(formData) {
    'use server';

    const username = formData.get('username');
    const content = formData.get('content');
    const blog_id = formData.get('blog_id');

    await db.query(
      `
        INSERT INTO comments (username, content, blog_id)
        VALUES ($1, $2, $3)`,
      [username, content, blog_id]
    );

    try {
      await db.query(query, values);
      console.log('Comment added successfully.');
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  }

  // redirect('/blogs/newBlog');

  return (
    <div>
      <h3 className="mt-5">Comment on blog</h3>
      <form
        className="border border-black bg-slate-200 rounded-md p-6"
        action={handleAddComment}
      >
        <FormDesign>
          <div className="flex ">
            <label>Username: </label>
            <input name="username" placeholder="Username" />

            <label>Blog_ID: </label>
            <input name="blog_id" placeholder="BlogID" />
          </div>
          <label>Comment</label>
          <textarea name="content" placeholder="Comment"></textarea>
        </FormDesign>
        <button className="border rounded-md bg-black border-black md:text-white hover:text-black hover:bg-lime-300 px-5">
          Add comment
        </button>
      </form>
    </div>
  );
}
