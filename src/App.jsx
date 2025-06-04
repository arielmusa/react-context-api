import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import PostsPage from "./pages/PostsPage";
import { PostsProvider } from "./Contexts/PostContext";
import "./assets/css/App.css";

function App() {
  return (
    <>
      <PostsProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<PostsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostsProvider>
    </>
  );
}

export default App;
