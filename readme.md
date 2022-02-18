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

`kia-e7bcd186-a5fd-410d-92cb-6876a42288bd.json`, `hyundai-014d2225-8495-4735-812d-2616334fd15d.json`, `kia-e7bcd186-a5fd-410d-92cb-6876a42288bd.v2.json`, `hyundai-014d2225-8495-4735-812d-2616334fd15d.v2.json` are updated every 4 hour.

Each stamp file contains 1000 stamps, 120 seconds appart. This about 2000 minutes worth of stamps (about 33h20).

## Stamp file structure
The below structure is valid for the .v2.json files
```
{
	"stamps": [
		"dGpcIp3dP0dLfkNRUItk/sCdmouaEMW4JAlLv76lGxrWLqMbn3rTZi6VOyPOgdY=",
		"dGpcIp3dP0dLfkNRUItk/sCdmouaEMW4JAlLv76lGxrWLqMbn3rTZi6VOyPOj9Y=",
		"dGpcIp3dP0dLfkNRUItk/sCdmouaEMW4JAlLv76lGxrWLqMbn3rTZi6VOyPPh9Y=",
		"dGpcIp3dP0dLfkNRUItk/sCdmouaEMW4JAlLv76lGxrWLqMbn3rTZi6VOyPPhdY=",
		"dGpcIp3dP0dLfkNRUItk/sCdmouaEMW4JAlLv76lGxrWLqMbn3rTZi6VOSPBgdY=",
		"dGpcIp3dP0dLfkNRUItk/sCdmouaEMW4JAlLv76lGxrWLqMbn3rTZi6VOSPBj9Y=",
		"dGpcIp3dP0dLfkNRUItk/sCdmouaEMW4JAlLv76lGxrWLqMbn3rTZi6VOSPOh9Y="
	],
	"generated": "2022-02-08T07:04:03.677Z",
	"frequency": 120000
}
```
Where:</br>
"stamps": array of stamps</br>
"generated": date-time in UTC when the stamp file was generated</br>
"frequency": the time between the stamps (in milliseconds)</br>
Note that the validity of a single stamp my be longer than the frequency
