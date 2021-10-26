import React, {useState, useCallback, useEffect} from 'react';
import PageTitle from "../components/pageTitle/PageTitle";
import FilterButtons from "../components/filter/FilterButtons";
import ProductList from "../components/post/ProductList";
import Pagination from "../components/pagination/Pagination";
import usePagination from "../hooks/PaginationHook";

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
    const [items, setItems] = useState([]);
    const [displayNumber, setDisplayNumber] = useState(0);
    const itemsPerPage = 40;
    const [currentPage, setCurrentPage, currentPosts, paginate] = usePagination(items.filter(item => item.display), itemsPerPage);
    const [filterBtn, setFilterBtn] = useState('All');

    useEffect(() => {
        fetch(
            'https://react-cosmetics-shop-bdae3-default-rtdb.firebaseio.com/shop.json'
        ).then((response) => {
            return response.json();
        }).then((data) => {
            setItems(data.map(item => ({...item, interest: false, display: true})));
            setDisplayNumber(data.length);
        });

    }, []);

    const handleIconClick = useCallback((id) => {
        setItems(items =>
            items.map(item =>
                item.id === id ? {...item, interest: !item.interest} : item
            )
        );
        setDisplayNumber(items.length);
    }, []);

    const filter = useCallback((category) => {
        setFilterBtn(category);

        if(category==='All') {
            setItems(items => items.map(item => ({...item, display: true})));
            setDisplayNumber(items.length);
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