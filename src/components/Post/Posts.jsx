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

    if (!posts) return <p>Loading...</p>;

    return (
        <div>
            {posts.length === 0 && <p>No posts found</p>}
            {posts.map((post) => (
                <Link to={`/blog/posts/${post._id}`} key={post._id}>
                    <div>{post.title}</div>
                    <div>{post.body}</div>
                </Link>
            ))}
        </div>
    );
}

export default Posts;
