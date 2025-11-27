import * as cheerio from "cheerio";
import fs from "fs";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let cacheDir = import.meta.dirname + "/../cache";

if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir);
}

for (let i = 1; i<10; i++) {
    let body;
  if (fs.existsSync(cacheDir + `/${i}.html`)) {
    body = fs.readFileSync(cacheDir + `/${i}.html`);
  } else {
    await sleep(1000);
    let res = await fetch(`https://blastwave-comic.com/index.php?p=comic&nro=${i}`);
    body = await res.text();
    fs.writeFileSync(cacheDir + `/${i}.html`, body);
  }

  
  const $ = cheerio.load(body);
  let img = $("#comic_ruutu img");
  console.log('https://blastwave-comic.com/'+img.attr("src"));
  console.log(img.attr("alt"));
  
}