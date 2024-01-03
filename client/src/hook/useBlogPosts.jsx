import { useState, useEffect } from "react";
import axios from "axios";

function usePosts() {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios("http://localhost:4000/posts");
      setPosts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return { posts,isError, isLoading};
}

export default usePosts;
