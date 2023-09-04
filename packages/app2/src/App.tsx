import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import './App.css';

function App() {
  useEffect(() => {
    // const words = {
    //   extensions:
    //     'Extensions are software programs, built on web technologies (such as HTML, CSS, and JavaScript) that enable users to customize the Chrome browsing experience.',
    //   popup:
    //     "A UI surface which appears when an extension's action icon is clicked."
    // };
    // chrome.runtime.onMessage.addListener(({ name, data }) => {
    //   if (name === 'define-word') {
    //     console.log(name, data);
    //   }
    // });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button color="primary">테스트</Button>
    </div>
  );
}

export default App;
