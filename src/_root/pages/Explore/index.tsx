import GridPostList from "@/components/shared/Card/GridPostList.tsx";
import Loader from "@/components/shared/Loader.tsx";
import { useInView } from "react-intersection-observer";
import { useGetPosts, useSearchPosts } from "@/lib/react-query/queries.ts";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce.tsx";
import { Input } from "@/components/ui/input.tsx";

/*定义搜索组件props类型*/
export type SearchResultProps = {
    isSearchFetching: boolean;
    /*eslint-disable-next-line @typescript-eslint/no-explicit-any*/
    searchedPosts: { documents: any[] };
};

/*搜索组件*/
const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultProps) => {
    /*如果正在搜索，则显示加载器*/
    if (isSearchFetching) {
        return <Loader />;
    }
    /*如果搜索结果不为空，则显示搜索结果*/
    else if (searchedPosts && searchedPosts.documents.length > 0) {
        return <GridPostList posts={searchedPosts.documents} />;
    }
    /*否则显示没有找到结果*/
    else {
        return (
            <p className="text-light-4 mt-10 text-center w-full">没有这个结果</p>
        );
    }
};

const Explore = () => {
    /*使用useInView获取ref和inView状态*/
    const { ref, inView } = useInView();

    /*获取帖子数据：一共有多少帖子*/
    const { data: posts, fetchNextPage, hasNextPage } = useGetPosts();

    /*定义搜索值和防抖搜索值状态*/
    const [searchValue, setSearchValue] = useState("");

    const debouncedSearch = useDebounce(searchValue, 500);

    /*获取搜索结果*/
    const { data: searchedPosts = { documents: [] }, isFetching: isSearchFetching } = useSearchPosts(debouncedSearch);

    /*当inView为true且没有搜索值时，调用fetchNextPage函数*/
    useEffect(() => {
        if (inView && !searchValue) {
            fetchNextPage().then(r => {
                console.log(r);
            }).catch(error => {
                console.error('错误是:', error);
            });
        }
    }, [fetchNextPage, inView, searchValue]);

    /*如果帖子无任何数据*/
    if (!posts) {
        return (
            <div className="flex-center w-full h-full">
                <Loader />
            </div>
        );
    }

    /*定义是否显示搜索结果和是否显示帖子的状态*/
    const shouldShowSearchResults = searchValue !== "";
    const shouldShowPosts = !shouldShowSearchResults &&
        posts.pages.every((item) => item.documents.length === 0);


    return (
        <div className="explore-container">
            <div className="explore-inner_container">
                <h2 className="h3-bold md:h2-bold w-full">搜索</h2>
                <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4">
                    <img
                        src='/assets/icons/search.svg'
                        width={24}
                        height={24}
                        alt="search"
                    />
                    <Input
                        type="text"
                        placeholder="输入关键词"
                        className="explore-search"
                        value={searchValue}
                        onChange={(e) => {
                            const { value } = e.target;
                            setSearchValue(value);
                        }}
                    />
                </div>
            </div>

            <div className="flex-between w-full max-w-5xl mt-16 mb-7">
                <h3 className="body-bold md:h3-bold">今天的帖子</h3>

                <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
                    <p className="small-medium md:base-medium text-light-2">更多</p>
                    <img
                        src='/assets/icons/filter.svg'
                        width={20}
                        height={20}
                        alt="filter"
                    />
                </div>
            </div>

            <div className="flex flex-wrap gap-9 w-full max-w-5xl">
                {shouldShowSearchResults ? (
                    <SearchResults
                        isSearchFetching={isSearchFetching}
                        searchedPosts={searchedPosts}
                    />
                ) : shouldShowPosts ? (
                    <p className="text-light-4 mt-10 text-center w-full">结束</p>
                ) : (
                    posts.pages.map((item, index) => (
                        <GridPostList key={`page-${index}`} posts={item.documents} />
                    ))
                )}
            </div>

            {hasNextPage && !searchValue && (
                <div ref={ref} className="mt-10">
                    <Loader />
                </div>
            )}
        </div>
    );
};

export default Explore;