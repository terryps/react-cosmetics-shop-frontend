import React, { useState, useCallback } from 'react';
import PageTitle from "../components/pageTitle/PageTitle";
import FilterButtons from "../components/filter/FilterButtons";
import ProductList from "../components/product/ProductList";
import Pagination from "../components/pagination/Pagination";
import usePagination from "../hooks/PaginationHook";
import productData from "../data/product-data.json";

const AllCategories = ['All', 'Edition', 'Face', 'Lip', 'Eye', 'Cheek', 'Nail', 'Tools', 'Acc', 'Kit'];

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
            <FilterButtons filterBtn={filterBtn} filter={filter} categories={AllCategories} />
            <ProductList
                currentItems={currentPosts}
                handleIconClick={handleIconClick}/>
            <Pagination
                currentPage={currentPage}
                postsPerPage={itemsPerPage}
                totalPosts={displayNumber}
                paginate={paginate} />
        </section>
    );
}

export default Shop;