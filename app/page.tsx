import Image from "next/image";
import { promises as fs } from 'fs'
export default async function Home() {
  let data = null
  try {
    const file = await fs.readFile(process.cwd() + '/data/playlistDataFromPuppeteer.json', 'utf8');
    data = JSON.parse(file);
  } catch(err){
    console.warn('unable to load json', err)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map(({ title, url, channel}: any) => <div key={url} className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="font-black">{title}</h1><span>{'|'}</span>
        <a className="underline" href={url} target="_blank">{url}</a><span>{'|'}</span>
        <p>Channel: {channel}</p>
      </div>)}

    </main>
  );
}
