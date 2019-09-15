import * as React from "react";
import "./ProductSearchResult.scss";
import { Link } from "react-router-dom";
import { useProductSearchResultType } from "./useProductSearchResultType";
import { useProductSearchResult } from "./useProductSearchResult";
import { ProductSearchResultListType } from "../../../../Application/ProductServices/GetProductSearchResultList/GetProductSearchResultListOutputType";
import { displayAsMoney } from "../../../Base/Utils/Utils";

const ProductSearchResult: React.FunctionComponent<{}> = (props: {}) => {

    const productSearchResultListHook: useProductSearchResultType = useProductSearchResult();

    const renderProductPrice: (product: ProductSearchResultListType) => React.ReactNode = (product) => {

        if (product.price.discountPrice === undefined) {
            return <h3 className="product-search-result-item-detail-only-standard-price">${Number(product.price.standardPrice).toFixed(2)}</h3>;
        } else {
            return (
                <div className="product-search-result-item-detail-price">
                    <div className="product-search-result-item-detail-price-starndart-price">${displayAsMoney(product.price.standardPrice)}</div>
                    <h3 className="product-search-result-item-detail-price-discount-price">${displayAsMoney(product.price.discountPrice)}</h3>
                </div>
            );
        }
    }

    const renderProductSearchResult: () => React.ReactNode = () => {
        return productSearchResultListHook.paginationHook.currentProductSearchResult.products.map((product) => {
            return (
                <article className="product-search-result-list-item" key={product.id}>
                    <Link to={`/products/${product.id}`} className="product-search-result-list-item-link">
                        <img className="product-search-result-list-item-image" src={product.image} alt="featured product" />
                        <div className="product-search-result-list-item-detail">
                            <h3 className="product-search-result-list-item-detail-name">{product.name}</h3>
                            {renderProductPrice(product)}
                            <div className="product-search-result-list-item-detail-review">
                                <div className="product-search-result-list-item-detail-review-icon" ></div>
                                <div className="product-search-result-list-item-detail-review-score">{Number(product.reviews.averageScore).toFixed(2)}</div>
                                <div className="product-search-result-list-item-detail-review-total-number">{Number(product.reviews.totalReviews).toLocaleString()}</div>
                            </div>
                        </div>
                        {(product.featured.bestSeller && <div className="product-search-result-list-item-mark-best-seller">Best Seller</div>)}
                        {(product.featured.brandNew && <div className="product-search-result-list-item-mark-brand-new">Brand-New</div>)}
                        {(product.featured.discount && <div className="product-search-result-list-item-mark-discount">Discount</div>)}
                    </Link>
                </article>
            );
        });
    };

    const renderFilterList: () => React.ReactNode = () => {
        return productSearchResultListHook.paginationHook.currentProductSearchResult.filters.map((filter) => {
            return (
                <article className="product-search-result-filter-list-item" key={filter.id}>
                    <h3 className="product-search-result-filter-list-item-name">{filter.name}</h3>
                    <div className="product-search-result-filter-list-item-input-wrapper">
                        {(filter.items.map((item) => {
                            return (
                                <div className="product-search-result-filter-list-item-input-cover" key={item.id}>
                                    <label className="product-search-result-filter-list-item-input-label">
                                        <input type="checkbox" className="product-search-result-filter-list-item-input-name" />
                                        {item.name}
                                    </label>
                                </div> 
                            );
                        }))}
                    </div>
                </article>
            );
        });
    };

    const renderPagenation: () => React.ReactNode = () => {
        return productSearchResultListHook.paginationHook.pageNum.map((pageNum) => {
            return (
                <button className="product-search-result-filter-list-pagination-btn" value={pageNum} key={pageNum}>{pageNum}</button>
            );
        });
    };

    return (
        <div className="product-search-result-wrapper">
            <div className="product-search-result-cover">
                <div className={`product-search-result-filter-list-wapper ${productSearchResultListHook.toggleFilterHook.currentToggleFilterCss}`}>
                    <h2 className="product-search-result-filter-list-wapper-title">Filters</h2>
                    <div className="product-search-result-filter-list-tags-wrapper">
                    
                    </div>
                    <div className="product-search-result-filter-list-sort-wrapper">
                    
                    </div>
                    <div className="product-search-result-filter-list-coover">
                        {renderFilterList()}
                    </div>
                </div>
                <section className="product-search-result-list-wrapper"> 
                    <h2 className="product-search-result-list-wapper-title">Search Result</h2>
                    <div className="product-search-result-list-cover">
                        {renderProductSearchResult()}
                    </div>
                    {(productSearchResultListHook.currentScreenWidth < productSearchResultListHook.cssGlobal.tabletSize &&
                        <button
                            className="product-search-result-list-filter-icon"
                            onClick={productSearchResultListHook.toggleFilterHook.toggleFilterComponentEventHandler}>
                        </button>
                    )}
                    <div className="product-search-result-filter-list-shadow"></div>
                    <div className="product-search-result-filter-list-pagenation">
                        {renderPagenation()}
                    </div>
                </section>
            </div>
        </div>
    );
} 

export default ProductSearchResult;
