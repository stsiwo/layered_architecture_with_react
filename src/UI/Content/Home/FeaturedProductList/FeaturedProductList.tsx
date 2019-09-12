import * as React from "react";
import "./FeaturedProductList.scss";
import { SampleProductListType } from "./SampleProductList";
import { Link } from "react-router-dom";
import { useFeaturedProductListType } from "./useFeaturedProductListType";
import { useFeaturedProductList } from "./useFeaturedProductList";

const FeaturedProductList: React.FunctionComponent<{}> = (props: {}) => {

    const featuredProductListHook: useFeaturedProductListType = useFeaturedProductList();

    const renderFeaturedProducts: (list: SampleProductListType[]) => React.ReactNode = (list) => {
        return list.map((product) => (
            <article className="featured-product-item" key={product.id}>
                <Link to={`/products/${product.id}`} className="featured-product-item-link">
                    <img className="featured-product-item-image" src={product.image} alt="featured product" />
                    <div className="featured-product-item-detail">
                        <h3 className="featured-product-item-detail-name">{product.productName}</h3>
                        <h3 className="featured-product-item-detail-price">${Number(product.productPrice).toFixed(2)}</h3>
                    </div>
                </Link>
            </article>
        ));
    }    

    return (
        <section className="featured-product-list-wapper">
            <h2 className="featured-product-list-wapper-title">Featured Products</h2>
            <div className="featured-product-list">
                <div className="featured-product-list-cover" ref={featuredProductListHook.scrollContainerRef}>
                    {renderFeaturedProducts(featuredProductListHook.sampleProductList)} 
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
