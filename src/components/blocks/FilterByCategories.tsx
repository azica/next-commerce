"use client"
import { List, ListItem, ListItemPrefix, Typography, Radio } from "@material-tailwind/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { useAllCategories } from "@/services/getCategories";

const FilterByCategories = () => {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "")
  const { categories, isLoading, isError } = useAllCategories();
  const router = useRouter();
  const pathname = usePathname();

  const changeHandle = (category: string) => {
    setActiveCategory(category)
    router.push(`${pathname}?category=${category}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!categories || !categories.length) {
    return <p>There is no categories</p>
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <List className="p-0">
      {categories?.map((el, idx) => (
        <ListItem className="p-0" key={idx}>
          <label htmlFor={el} className="flex w-full cursor-pointer items-center px-3 py-2">
            <ListItemPrefix className="mr-3">
              <Radio
                name={el}
                id={el}
                onChange={() => changeHandle(el)}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0 text-purple-600",
                }}
                checked={el === activeCategory}
              />
            </ListItemPrefix>
            <Typography className="font-medium capitalize">{el}</Typography>
          </label>
        </ListItem>
      ))}
    </List>
  );
};

export default FilterByCategories;
