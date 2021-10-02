import { useState } from 'react';

const usePagination = (data, postsPerPage) => {
    const posts = data;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastPost = postsPerPage * currentPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPagePosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber, e) => {
        e.preventDefault();
        setCurrentPage(pageNumber);
    };

    return [currentPage, setCurrentPage, currentPagePosts, paginate];
}

export default usePagination;