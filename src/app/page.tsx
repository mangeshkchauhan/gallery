import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return (
    <main className="px-6">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images].map((image) => (
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
    </main>
  );
}
