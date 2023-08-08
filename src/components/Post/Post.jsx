import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createPostComment, getPost, getPostComments } from "../../../helpers/API";
import CommentForm from "./CommentForm";

function Post() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);
    const [commentErrors, setCommentErrors] = useState([]);

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

    async function handleCommentSubmit(comment) {
        const res = await createPostComment(id, comment);

        if (res.status === 200) {
            const newComment = res.data.comment;
            setComments((prevComments) => [newComment, ...prevComments]);
        } else setCommentErrors(res.data.errors);
    }

    if (!post || !comments) return <div className="loading">Loading...</div>;

    return (
        <div className="post-container">
            <Link className="posts-link" to="/blog/posts">
                Back to Posts
            </Link>
            <h2 className="post-title">{post.title}</h2>
            <hr />
            <div className="post-body">{post.body}</div>
            <hr />
            <div className="comments">
                <h3>Discussion</h3>
                <CommentForm onSubmit={handleCommentSubmit} />
                {commentErrors.length > 0 && (
                    <ul className="comment-errors">
                        {commentErrors.map((error) => (
                            <li key={error.msg}>{error.msg}</li>
                        ))}
                    </ul>
                )}
                {comments.length === 0 && <p>No comments found</p>}
                {comments.map((comment) => (
                    <div className="comment" key={comment._id}>
                        <div className="comment-author">{comment.author}</div>
                        <div className="comment-body">{comment.body}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Post;
