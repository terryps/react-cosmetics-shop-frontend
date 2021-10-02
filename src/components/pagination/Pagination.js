import styles from "./Pagination.module.css";

function Pagination({currentPage, postsPerPage, totalPosts, paginate}) {
    const pageNumbers = (() => {
        let results = [];
        for(let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++) {
            results.push(i);
        }

        return results;
    })();

    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                {
                    pageNumbers.map(pageNumber => (
                        <li key={pageNumber}
                            className={`${styles.li} ${pageNumber === currentPage && styles.active}`}>
                            <a href='#'
                               className={styles.a}
                               onClick={(e) => paginate(pageNumber, e)}>
                                {pageNumber}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Pagination;