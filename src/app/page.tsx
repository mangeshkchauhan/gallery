import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/db21425c-42a1-43a5-ad7f-6eaab0d9457f-6oayex.png",
  "https://utfs.io/f/95d39429-e3eb-4133-a127-1084be71e2ac-48kiqb.jpg",
  "https://utfs.io/f/fb626ad6-9474-404e-8663-64133fd1b986-ja6c04.com_reyna-s-valorant_3840x2160.jpg",
  "https://utfs.io/f/d553d18f-8b65-4610-83a8-2cf6eeaed676-zdflo5.png",
  "https://utfs.io/f/fd615736-212c-44e3-adca-32af4520f196-8onit4.jpg",
  "https://utfs.io/f/bb03a773-ad02-4b11-a96b-b2326b945bc7-3cp10z.jpg",
  "https://utfs.io/f/f5977ffd-e202-4ea8-a96e-940980f557de-4o63ls.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  url,
  id: index + 1,
}));

export default function HomePage() {
  return (
    <main className="px-6">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img
              src={image.url}
              alt="image.url"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
