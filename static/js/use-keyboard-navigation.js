import {
  useState,
  useEffect,
  useRef,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import useDebounce from "./use-debounce.js";

const VALID_PAGES = ["100", "200", "300"];
const NAVIGATION_TIMEOUT = 1000;
const isPageValid = (pn) => !!VALID_PAGES.find((page) => page === pn);

function useKeyboardNavigation(initialPageNumber) {
  const [pageNumber, setPageNumber] = useState(initialPageNumber);
  const pageNumberRef = useRef(pageNumber);
  const debouncedInput = useDebounce(pageNumber, NAVIGATION_TIMEOUT);

  useEffect(() => {
    if (isPageValid(pageNumber) && pageNumber !== initialPageNumber) {
      window.location.href = pageNumber;
    } else {
      setPageNumber(initialPageNumber);
      pageNumberRef.current = initialPageNumber;
    }
  }, [debouncedInput]);

  useEffect(() => {
    pageNumberRef.current = pageNumber;
  }, [pageNumber]);

  const handleKeydown = (e) => {
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      if (pageNumberRef.current.length < 3) {
        setPageNumber(`${pageNumberRef.current}${e.key}`);
      } else {
        setPageNumber(e.key);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return pageNumber;
}

export default useKeyboardNavigation;
