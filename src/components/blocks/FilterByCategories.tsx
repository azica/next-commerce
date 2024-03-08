"use client"
import { List, ListItem, ListItemPrefix, Checkbox, Typography } from "@material-tailwind/react";
import { usePathname, useRouter } from "next/navigation";

import { useAllCategories } from "@/services/getCategories";

const FilterByCategories = () => {
  const { categories, isLoading, isError } = useAllCategories();
  const router = useRouter();
  const pathname = usePathname();

  const changeHandle = (categoryId: string) => {
    router.push(`${pathname}?categoryId=${categoryId}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <List className="p-0">
      {categories?.map((el: Model.Category) => (
        <ListItem className="p-0" key={el.id}>
          <label htmlFor={String(el.id)} className="flex w-full cursor-pointer items-center px-3 py-2">
            <ListItemPrefix className="mr-3">
              <Checkbox
                value={el.id}
                id={String(el.id)}
                ripple={false}
                onChange={() => changeHandle(String(el.id))}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography className="font-medium">{el.name}</Typography>
          </label>
        </ListItem>
      ))}
    </List>
  );
};

export default FilterByCategories;
