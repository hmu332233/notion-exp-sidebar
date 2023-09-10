import { createRouter } from 'next-connect';

const router = createRouter();

router.get((req, res) => {
  res.json({ message: 'Hello World' });
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
