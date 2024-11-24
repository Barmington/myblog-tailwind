import { redirect } from 'next/navigation';
import { db } from '@/utils/db';
import FormDesign from './FormDesign';

export default function newBlog() {
  async function handleAddBlog(formData) {
    'use server';

    const username = formData.get('username');
    const content = formData.get('content');
    const title = formData.get('title');

    await db.query(
      `INSERT INTO blogs (username, content, title) VALUES ($1, $2, $3)`,
      [username, content, title]
    );

    try {
      await db.query(query, values);
      console.log('Blog added successfully.');
    } catch (err) {
      console.error('Error adding blog:', err);
    }
    redirect('/blogs');
  }
  return (
    <div>
      <h3>Write a blog</h3>
      <form action={handleAddBlog}>
        <FormDesign>
          <label>Username</label>
          <input name="username" placeholder="username" />
          <label>Comment</label>
          <textarea name="content" placeholder="Content"></textarea>
          <label>Title</label>
          <input name="title" placeholder="Title" />
        </FormDesign>
        <button className="border rounded-md bg-black border-black md:text-white hover:text-black hover:bg-lime-300 px-5">
          Add blog
        </button>
      </form>
    </div>
  );
}
