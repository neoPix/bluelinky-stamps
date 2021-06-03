/* eslint-disable */
import { join, resolve } from 'path';
import { writeFileSync } from 'fs';
import { getStamps } from './european.tools';

const SIZE = 2000;

const generateStampsForBrand = async (brand) => {
  const stamps = await getStamps(brand);
  const array = stamps.slice(1, SIZE + 1);

  writeFileSync(join(resolve('.'), `${brand}.json`), JSON.stringify(array, undefined, 4));
};

generateStampsForBrand('hyundai').catch((err) => console.error(err));
generateStampsForBrand('kia').catch((err) => console.error(err));
