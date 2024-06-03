import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/1c0b6a8f-1106-4d13-81a2-d3ef5cc40dbf-53wb8x.jpeg",
  "https://utfs.io/f/8694b76b-2a79-4a0e-af00-df0653101f9f-5hbl5l.jpeg",
  "https://utfs.io/f/da6eb8f2-81c7-4259-a66b-52dc2013d0c7-u3r3w1.jpeg",
  "https://utfs.io/f/c094c7d9-a09f-40e7-a532-365da3c19305-77xdpk.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
