import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/am949YJAYProV7OVzCVPYAS5V9OQjnGIymCtcMaZhq6dxo04",
  "https://utfs.io/f/am949YJAYProf4gJDmQg0yfEYc5C8QRmPd17WruibAw9oDXl",
  "https://utfs.io/f/am949YJAYProYAnCxMRFe0gt7xRAB6wOVQSPr5kvc3noD4FJ",
  "https://utfs.io/f/am949YJAYProwfNiMnbhyKz0qJre3TvI9cMudoGslC2b4fBD",
  "https://utfs.io/f/am949YJAYProKLivPNCUMBxtL03NhWPD17iEnGTAa6c4e2SI",
  "https://utfs.io/f/am949YJAYPro6MyoaLrZUKcbF1JEVq4znO3vurgyjCD0BIle",
  "https://utfs.io/f/am949YJAYProciZ5Avu507bmXMAifzo1Owqarg4WuCUEcvY3",
  "https://utfs.io/f/am949YJAYProHYwC6Xv44msio1AzwdRXnKVbJSTUye2gEfZp",
  "https://utfs.io/f/am949YJAYProoh013c6gsJLC9u7UKTXw2GOAdEQSrZ6Decof",
  "https://utfs.io/f/am949YJAYPromikjChXPeZc0G39lFSfrVndsak7XtWLo4gi8",
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
