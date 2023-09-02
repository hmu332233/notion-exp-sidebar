import { useEffect } from 'react';

function useExtension() {
  useEffect(() => {
    const words = {
      extensions:
        'Extensions are software programs, built on web technologies (such as HTML, CSS, and JavaScript) that enable users to customize the Chrome browsing experience.',
      popup:
        "A UI surface which appears when an extension's action icon is clicked.",
    };

    chrome.runtime.onMessage.addListener(({ name, data }) => {
      if (name === 'define-word') {
        console.log(name, data);
      }
    });
  }, []);
}

export default useExtension;
