import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutMe from "../../components/AboutME/AboutMe";
import AllPosts from "../../components/BodyContent/AllPosts/AllPosts";
import BodyContent from "../../components/BodyContent/BodyContent";
import SinglePost from "../../components/BodyContent/SinglePost/SinglePost";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.content}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="posts" />} />
          <Route path="/" element={<BodyContent />}>
            <Route path="posts" element={<AllPosts />}>
              <Route path=":postId" element={<SinglePost />} />
            </Route>
            <Route path="aboutMe" element={<AboutMe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
