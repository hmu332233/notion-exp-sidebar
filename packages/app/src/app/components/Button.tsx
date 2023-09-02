'use client';
import { Button } from '@nextui-org/button';
import { useState } from 'react';
import useExtension from '../hooks/useExtension';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function TestButton() {
  useExtension();
  const [url, setUrl] = useState<string>('');
  const [url2, setUrl2] = useState<string>('');

  const handleClick = async () => {
    // console.log(window.parent.location.href, document.referrer);
    // setUrl(window.parent.location.href);
    setUrl2(document.referrer);
    // const data = await fetcher('/api/exp');
    // console.log(data);

    window.postMessage(
      {
        type: 'NEXTUI_MESSAGE',
        payload: {
          type: 'NEXTUI_MESSAGE',
          data: 'hello world',
        },
      },
      '*',
    );
  };

  return (
    <>
      {url2 && <p>{url2}</p>}
      <Button color="primary" onClick={handleClick}>
        Button
      </Button>
      {url && <p>{url}</p>}
    </>
  );
}

export default TestButton;
