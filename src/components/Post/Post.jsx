import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPost, getPostComments } from "../../../helpers/API";

function Post() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            const res = await getPost(id);

            if (res.status === 200) setPost(res.data);
            else navigate("/blog/posts");
        }

        async function fetchComments() {
            const res = await getPostComments(id);

            if (res.status === 200) setComments(res.data);
        }

        fetchPost();
        fetchComments();
    }, [id]);

    if (!post || !comments) return <p>Loading...</p>;

    return (
        <div>
            <Link to="/blog/posts">Back to Posts</Link>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <div className="p-5">
                {comments.length === 0 && <p>No comments found</p>}
                {comments.map((comment) => (
                    <div key={comment._id}>
                        <div>{comment.body}</div>
                        <div>{comment.author}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Post;
