/* eslint-disable */
import { join, resolve } from 'path';
import { writeFileSync } from 'fs';
import { getStamps } from './european.tools';

const SIZE = 1000;

const appsToGenerate = [
  { brand: 'hyundai', appId: '014d2225-8495-4735-812d-2616334fd15d', fileName: 'hyundai-014d2225-8495-4735-812d-2616334fd15d', image: 'hacksore/hks:arm' },
  { brand: 'kia', appId: 'e7bcd186-a5fd-410d-92cb-6876a42288bd', fileName: 'kia-e7bcd186-a5fd-410d-92cb-6876a42288bd', image: 'hacksore/hks:arm' },
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
