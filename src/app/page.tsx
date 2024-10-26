import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return (
    <div className="flex flex-wrap gap-4">
      {[...images].map((image) => (
        <div key={image.id} className="flex w-48 flex-col gap-2">
          <img
            src={image.url}
            alt={image.name}
            className="h-full w-full rounded-lg object-cover"
          />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
};

export default function HomePage() {
  return (
    <main className="px-6">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">
          Please sign in to see your images
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
