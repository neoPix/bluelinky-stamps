/* eslint-disable */
import { join, resolve } from 'path';
import { writeFileSync } from 'fs';
import { getStamps } from './european.tools';

const SIZE = 2000;

const appsToGenerate = [
  { brand: 'hyundai', appId: '99cfff84-f4e2-4be8-a5ed-e5b755eb6581', fileName: 'hyundai' },
  { brand: 'kia', appId: '693a33fa-c117-43f2-ae3b-61a02d24f417', fileName: 'kia' },
  { brand: 'kia', appId: 'e7bcd186-a5fd-410d-92cb-6876a42288bd', fileName: 'kia-e7bcd186-a5fd-410d-92cb-6876a42288bd' },
];

const main = async () => {
  for (const { brand, appId, fileName } of appsToGenerate) {
    const stamps = await getStamps(brand, appId);
    const array = stamps.slice(1, SIZE + 1);
    writeFileSync(join(resolve('.'), `${fileName}.json`), JSON.stringify(array, undefined, 4));
  }
}


main().catch((err) => console.error(err));
