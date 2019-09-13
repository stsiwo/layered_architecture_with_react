import * as React from "react";
import "./FeaturedProductList.scss";
import { Link } from "react-router-dom";
import { useFeaturedProductListType } from "./useFeaturedProductListType";
import { useFeaturedProductList } from "./useFeaturedProductList";
import { GetFeaturedProductListOutputType } from "../../../../Application/ProductServices/GetFeaturedProductList/GetFeaturedProductListOutputType";
import { displayAsMoney } from "../../../Base/Utils/Utils";

const FeaturedProductList: React.FunctionComponent<{}> = (props: {}) => {

    const featuredProductListHook: useFeaturedProductListType = useFeaturedProductList();

    const renderProductPrice: (product: GetFeaturedProductListOutputType) => React.ReactNode = (product) => {

        if (product.productPrice.discountPrice === undefined) {
            return <h3 className="featured-product-item-detail-only-standard-price">${Number(product.productPrice.standardPrice).toFixed(2)}</h3>;
        } else {
            return (
                <React.Fragment>
                    <div className="featured-product-item-detail-price">${displayAsMoney(product.productPrice.standardPrice)}</div>
                    <h3 className="featured-product-item-detail-discount-price">${displayAsMoney(product.productPrice.discountPrice)}</h3>
                </React.Fragment>
            );
        }
    }

    const renderFeaturedProducts: (list: GetFeaturedProductListOutputType[]) => React.ReactNode = (list) => {
        return list.map((product) => (
            <article className="featured-product-item" key={product.id}>
                <Link to={`/products/${product.id}`} className="featured-product-item-link">
                    <img className="featured-product-item-image" src={product.image} alt="featured product" />
                    <div className="featured-product-item-detail">
                        <h3 className="featured-product-item-detail-name">{product.productName}</h3>
                        {renderProductPrice(product)}
                        <div className="featured-product-item-detail-review">
                            <div className="featured-product-item-detail-review-icon" ></div>
                            <div className="featured-product-item-detail-review-score">{Number(product.reviews.averageScore).toFixed(2)}</div>
                            <div className="featured-product-item-detail-review-total-number">{Number(product.reviews.totalReviews).toLocaleString()}</div>
                        </div>
                    </div>
                    {(product.featured.bestSeller && <div className="featured-product-item-mark-best-seller">Best Seller</div>)}
                    {(product.featured.brandNew && <div className="featured-product-item-mark-brand-new">Brand-New</div>)}
                    {(product.featured.discount && <div className="featured-product-item-mark-discount">Discount</div>)}
                </Link>
            </article>
        ));
    }    

    return (
        <section className="featured-product-list-wapper">
            <h2 className="featured-product-list-wapper-title">Featured Products</h2>
            <div className="featured-product-list">
                <div className="featured-product-list-cover" ref={featuredProductListHook.scrollContainerRef}>
                    {renderFeaturedProducts(featuredProductListHook.featuredProductList)} 
                </div>
            </div>
            {(featuredProductListHook.currentScreenWidth < featuredProductListHook.cssGlobal.mobileLSize &&
                <div className="featured-product-list-btn-wrapper">
                    <button className="featured-product-list-left-btn" onClick={featuredProductListHook.navigateToLeft} />
                    <button className="featured-product-list-right-btn" onClick={featuredProductListHook.navigateToRight} />
                </div>
            )}
        </section>
    );
} 

export default FeaturedProductList;
