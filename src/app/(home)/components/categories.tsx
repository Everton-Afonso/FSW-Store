import { prismaClient } from "@/lib/prisma";
import CategoriesItem from "./categories-item";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map((categorie) => (
        <CategoriesItem key={categorie.id} category={categorie} />
      ))}
    </div>
  );
};

export default Categories;
