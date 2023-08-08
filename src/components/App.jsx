import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Post from "./Post/Post";
import Posts from "./Post/Posts";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Navigate to="/blog/posts" />} />
                <Route path="/blog/posts" element={<Posts />} />
                <Route path="/blog/posts/:id" element={<Post />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
