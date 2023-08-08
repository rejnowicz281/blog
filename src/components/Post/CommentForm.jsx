import PropTypes from "prop-types";
import { useState } from "react";

function CommentForm({ onSubmit }) {
    const [comment, setComment] = useState({
        author: "",
        body: "",
    });

    function handleChange(e) {
        setComment((prevComment) => ({
            ...prevComment,
            [e.target.name]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(comment);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="author">Author</label>
                <input type="text" id="author" name="author" onChange={handleChange} />
            </div>
            <div className="form-field">
                <label htmlFor="body">Body</label>
                <textarea id="body" name="body" onChange={handleChange} />
            </div>
            <button className="submit-comment" type="submit">
                Leave a comment
            </button>
        </form>
    );
}

CommentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
