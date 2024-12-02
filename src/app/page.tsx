import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-56 w-48 flex-col justify-center">
          <Link href={`/img/${image.id}`} className="max-h-48">
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={480}
              height={480}
              alt={image.name}
              className="max-h-full rounded-md"
            />
          </Link>
          <div className="max-w-full overflow-x-hidden text-center">
            {image.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
