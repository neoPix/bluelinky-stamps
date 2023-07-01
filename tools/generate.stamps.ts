/* eslint-disable */
import { join, resolve } from 'path';
import { writeFileSync } from 'fs';
import { getStamps } from './european.tools';

const SIZE = 1000;

const appsToGenerate = [
  { brand: 'hyundai', appId: '1eba27d2-9a5b-4eba-8ec7-97eb6c62fb51', fileName: 'hyundai-1eba27d2-9a5b-4eba-8ec7-97eb6c62fb51', image: 'hacksore/hks:arm' },
  { brand: 'kia', appId: 'a2b8469b-30a3-4361-8e13-6fceea8fbe74', fileName: 'kia-a2b8469b-30a3-4361-8e13-6fceea8fbe74', image: 'hacksore/hks:arm' },
  { brand: 'hyundai', appId: '99cfff84-f4e2-4be8-a5ed-e5b755eb6581', fileName: 'hyundai', image: 'hacksore/hks:latest' },
  { brand: 'kia', appId: '693a33fa-c117-43f2-ae3b-61a02d24f417', fileName: 'kia', image: 'hacksore/hks:latest' },
];

const main = async () => {
  for (const { brand, appId, fileName, image } of appsToGenerate) {
    const now = new Date().toISOString();
    const stamps = await getStamps(brand, appId, image);
    const array = stamps.slice(3, SIZE + 1);
    writeFileSync(join(resolve('.'), `${fileName}.json`), JSON.stringify(array));
    writeFileSync(join(resolve('.'), `${fileName}.v2.json`), JSON.stringify({ stamps: array, generated: now, frequency: 120000 }));
  }
}


main().catch((err) => console.error(err));
