import { City } from './dto/City';
import { District } from './dto/District';
import { Province } from './dto/Province';
import { Subistrict } from './dto/Subdistrict';

async function parseArea(path: string) {
  const regex = /[^/]+(?=\.csv)/g;
  const match = path.match(regex);
  const fileName = match ? match[0] : 'error';
  console.log(`Sedang proses generate ${fileName}...`)
  const file = Bun.file(path)
  const text = await file.text();
  const [_, ...data] = text.replaceAll('\n', '').replaceAll('\"', '').split('\r')
  const area = data
    .filter(el => !!el)
    .map((el) => {
      if (path.includes('provinsi')) {
        return new Province(el)
      }
      if (path.includes('kabupaten')) {
        return new City(el)
      }
      if (path.includes('kecamatan')) {
        return new District(el)
      }
      if (path.includes('kelurahan')) {
        return new Subistrict(el)
      }
      return
    })

  await Bun.write(`./json/${fileName}.json`, JSON.stringify(area))
  console.log(`Berhasil generate ${fileName}!`)
}

await Promise.all([
  parseArea('./csv/provinsi.csv'),
  parseArea('./csv/kabupaten_kota.csv'),
  parseArea('./csv/kecamatan.csv'),
  parseArea('./csv/kelurahan.csv'),
])