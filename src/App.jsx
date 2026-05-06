import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import HomePage from "./Pages/home";
import AboutPage from "./Pages/about";
import BlogPage from "./Pages/blog";
import FaqPage from "./Pages/faq";
import DonatePage from "./Pages/donate";
import Job from "./Pages/job";
import PageLoader from "./components/page_loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const finishLoading = () => {
      window.setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    };

    if (document.readyState === "complete") {
      finishLoading();
      return undefined;
    }

    window.addEventListener("load", finishLoading);

    return () => {
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage fadeIn />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/job" element={<Job />} />
        </Routes>
      </HashRouter>
      {showScrollTop ? (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:bg-gray-800"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      ) : null}
    </>
  );
}

export default App;
