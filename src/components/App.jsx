import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Post from "./Post/Post";
import Posts from "./Post/Posts";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/*" element={<Navigate to="/blog/posts" />} />
                <Route path="/blog/posts" element={<Posts />} />
                <Route path="/blog/posts/:id" element={<Post />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
