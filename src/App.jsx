import React, { useEffect, useRef, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
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
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(0);

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
      const currentScrollY = window.scrollY;

      setScrollDirection(currentScrollY < lastScrollY.current ? "up" : "down");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleStickyArrowClick = () => {
    if (scrollDirection === "up") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      return;
    }

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
      <button
        type="button"
        onClick={handleStickyArrowClick}
        className="fixed bottom-20 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:bg-gray-800"
        aria-label={scrollDirection === "up" ? "Scroll to bottom" : "Scroll to top"}
      >
        <FontAwesomeIcon
          icon={scrollDirection === "up" ? faArrowDown : faArrowUp}
        />
      </button>
    </>
  );
}

export default App;
