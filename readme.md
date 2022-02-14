## Bluelinky Stamps

List of daily generated stamps for UVO and Bluelink.

Using:
- [hyundai-kia-stamp](https://github.com/Hacksore/hyundai-kia-stamp/tree/arm) (docker)

Used by: 
- [Bluelinky](https://github.com/Hacksore/bluelinky) [JS]
- [Kia_uvo](https://github.com/fuatakgun/kia_uvo) [Python]
- [EVCC](https://github.com/evcc-io/evcc) [GO]
## Dependencies

- node/npm
- docker
- qemu (see : https://github.com/Hacksore/hyundai-kia-stamp/tree/arm#before-you-start)

## Usage

```bash
docker pull hacksore/hks
docker pull hacksore/hks:arm
npm i
npm run stamps
```

## Info

`kia.json`, `hyundai.json`, `kia.v2.json` and `hyundai.v2.json` are outdated but still generated.

`kia-e7bcd186-a5fd-410d-92cb-6876a42288bd.json`, `hyundai-014d2225-8495-4735-812d-2616334fd15d.json`, `kia-e7bcd186-a5fd-410d-92cb-6876a42288bd.v2.json`, `hyundai-014d2225-8495-4735-812d-2616334fd15d.v2.json` are updated every hour.

Each stamp file contains 1000 stamps, 20 seconds appart. This about 333 minutes worth of stamps (about 5h30).
