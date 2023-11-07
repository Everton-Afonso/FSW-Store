import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./categoriyItem";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 px-5 lg:grid-cols-6">
      {categories.map((categorie) => (
        <CategoryItem key={categorie.id} category={categorie} />
      ))}
    </div>
  );
};

export default Categories;
