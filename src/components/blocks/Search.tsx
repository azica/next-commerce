"use client"

import { Input, List, ListItem } from "@material-tailwind/react"
import { Search as SearchIcon } from "akar-icons"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent, useEffect, useState } from "react"

import { useSearchedProducts } from "@/services/getSearchedProducts"

import Spinner from "../ui/Spinner"

const Search = ({ handleOpen }: { handleOpen: () => void }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const { products } = useSearchedProducts<Model.Product[]>();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer)
    }, [products]);

    const handleSearch = (term: string) => {
        setIsLoading(true)
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
        <div className="flex flex-col justify-center">
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
            {
                isLoading ? <Spinner />
                    : <List>

                        {products.map((product) => (
                            <Link href={`/shop/${product.id}`} key={product.id} onClick={handleOpen}>
                                <ListItem>{product.title}</ListItem>
                            </Link>
                        ))}
                    </List>
            }

        </div>
    )
}

export default Search