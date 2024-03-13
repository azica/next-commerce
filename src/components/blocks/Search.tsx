"use client"

import { Input, List, ListItem } from "@material-tailwind/react"
import { Search as SearchIcon } from "akar-icons"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent, Suspense } from "react"

import { useSearchedProducts } from "@/services/getSearchedProducts"

import Spinner from "./Spinner"

const Search = ({ handleOpen }: { handleOpen: () => void }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const { products, isLoading, error } = useSearchedProducts<Model.Product[]>();

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    if (!products || products.length < 0) {
        <h2> There is not products</h2>
    }

    return (
        <div>
            <div className="w-full my-10">
                <Input
                    defaultValue={searchParams.get('query')?.toString()}
                    label="Search products..."
                    icon={<SearchIcon className="text-purple-500" />}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
                    type="search"
                    size="lg"
                />
            </div>
            <Suspense fallback={<Spinner />}>
                <List>
                    {products.map((product) => (
                        <Link href={`/shop/${product.id}`} key={product.id} onClick={handleOpen}>
                            <ListItem>{product.title}</ListItem>
                        </Link>
                    ))}
                </List>
            </Suspense>

        </div>
    )
}

export default Search