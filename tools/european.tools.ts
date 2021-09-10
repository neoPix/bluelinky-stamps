import { execSync, spawn } from 'child_process';

export const getStamps = async (brand: string, appID: string, image: string): Promise<Array<string>> => {
  if (!appID) {
    throw new Error(`${brand} is not managed.`);
  }

  return new Promise((resolve, reject) => {
    console.debug(`Pulling image ${image}`);
    execSync(`docker pull ${image}`);
    console.debug(`Starting image ${image} - ${brand}`);
    const process = spawn('docker', ['run', '--rm', image, brand, 'list', appID]);
    const list: Array<string> = [];
    let errors = '';

    process.stdout.on('data', (data) => {
      const chunk: Array<string> = data.toString().split('\n').map(s => s.trim()).filter(s => s != '');
      list.push(...chunk);
    });

    process.stderr.on('data', (data) => {
      errors += data + '\n';
    });

    process.on('close', (code) => {
      console.debug(`Done with ${image} - ${brand}`);
      if(code === 0) {
        return resolve(list);
      }
      reject(errors);
    });
  });
};


