import React, { useState, useCallback } from 'react';
import PageTitle from "../components/pageTitle/PageTitle";
import FilterButtons from "../components/filter/FilterButtons";
import ProductList from "../components/post/ProductList";
import Pagination from "../components/pagination/Pagination";
import usePagination from "../hooks/PaginationHook";
import productData from "../data/product-data.json";

const AllCategories = [
    {name: "All", image: "https://stylenanda.com/design1/mobile_kr/3ce_cate_ico01.png"},
    {name: "Edition", image: "https://stylenanda.com/design1/mobile_kr/3ce_cate_ico03.png"},
    {name: "Face", image: "https://stylenanda.com/design1/mobile_kr/3ce_cate_ico04.png"},
    {name: "Lip", image: "https://stylenanda.com/design1/mobile_kr/3ce_cate_ico05.png"},
    {name: "Eye", image: "https://stylenanda.com/design1/mobile_kr/3ce_cate_ico06.png"},
    {name: "Cheek", image: "https://stylenanda.com/design1/mobile_kr/3ce_cate_ico07.png"},
    {name: "Nail", image: "https://stylenanda.com/design1/mobile_kr/3ce_cate_ico08.png"},
    {name: "Tools", image: "https://stylenanda.com/design1/mobile_kr/3ce_cate_ico09.png"},
    {name: "Acc", image: "https://stylenanda.com/design1/mobile_kr/3ce_cate_ico10.png"},
    {name: "Kit", image: "https://stylenanda.com/design1/mobile_kr/3ce_cate_ico11.png"},
];

function Shop() {
    const [items, setItems] = useState(productData.map(data => ({...data, interest: false, display: true})));
    const itemsPerPage = 40;
    const [currentPage, setCurrentPage, currentPosts, paginate] = usePagination(items.filter(item => item.display), itemsPerPage);
    const [displayNumber, setDisplayNumber] = useState(productData.length);
    const [filterBtn, setFilterBtn] = useState('All');

    const handleIconClick = useCallback((id) => {
        setItems(items =>
            items.map(item =>
                item.id === id ? {...item, interest: !item.interest} : item
            )
        );
    }, []);

    const filter = useCallback((category) => {
        setFilterBtn(category);

        if(category==='All') {
            setItems(items => items.map(item => ({...item, display: true})));
            setDisplayNumber(productData.length);
        }

        else {
            setItems(items => items.map(item => ({...item, display: item.category.includes(category)})));
            setCurrentPage(1);
            const filteredItem = items.filter(item => item.category.includes(category));
            setDisplayNumber(filteredItem.length);
        }
    }, [items]);

    return (
        <section>
            <PageTitle title="3ce shop"/>
            <ProductList
                currentItems={currentPosts}
                handleIconClick={handleIconClick}>
                <FilterButtons
                    filterBtn={filterBtn}
                    filter={filter}
                    categories={AllCategories} />
            </ProductList>
            <Pagination
                currentPage={currentPage}
                postsPerPage={itemsPerPage}
                totalPosts={displayNumber}
                paginate={paginate} />
        </section>
    );
}

export default Shop;