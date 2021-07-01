/* eslint-disable */
import { join, resolve } from 'path';
import { writeFileSync } from 'fs';
import { getStamps } from './european.tools';

const SIZE = 2000;

const appsToGenerate = [
  { brand: 'hyundai', appId: '99cfff84-f4e2-4be8-a5ed-e5b755eb6581', fileName: 'hyundai', image: 'hacksore/hks:latest' },
  { brand: 'kia', appId: '693a33fa-c117-43f2-ae3b-61a02d24f417', fileName: 'kia', image: 'hacksore/hks:latest' },
  // { brand: 'kia', appId: 'e7bcd186-a5fd-410d-92cb-6876a42288bd', fileName: 'kia-e7bcd186-a5fd-410d-92cb-6876a42288bd', image: 'hacksore/hks:arm' },
];

const main = async () => {
  for (const { brand, appId, fileName, image } of appsToGenerate) {
    const stamps = await getStamps(brand, appId, image);
    const array = stamps.slice(3, SIZE + 1);
    writeFileSync(join(resolve('.'), `${fileName}.json`), JSON.stringify(array));
  }
}


main().catch((err) => console.error(err));
