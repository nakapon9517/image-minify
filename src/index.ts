import { minify } from './minify';

const main = async () => {
  minify();
};

main()
  .then(() => console.info('---- Done'))
  .catch((e) => console.warn(`----- ${e}`))
  .finally(() => console.info('---- Finish'));
