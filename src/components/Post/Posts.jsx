import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../../../helpers/API";

function Posts() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            const res = await getPosts();

            if (res.status === 200) setPosts(res.data);
        }

        fetchPosts();
    }, []);

    if (!posts) return <div className="loading">Loading...</div>;

    return (
        <div className="posts">
            {posts.length === 0 && <p>No posts found</p>}
            {posts.map((post) => (
                <Link className="single-post" to={`/blog/posts/${post._id}`} key={post._id}>
                    <h2 className="single-post-title">{post.title}</h2>
                </Link>
            ))}
        </div>
    );
}

export default Posts;
