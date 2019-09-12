import * as React from "react";
import "./BrandNewProductList.scss";
import { SampleBrandNewProductListType } from "./SampleBrandNewProductList";
import { Link } from "react-router-dom";
import { useBrandNewProductListType } from "./useBrandNewProductListType";
import { useBrandNewProductList } from "./useBrandNewProductList";

const BrandNewProductList: React.FunctionComponent<{}> = (props: {}) => {

    const brandNewProductListHook: useBrandNewProductListType = useBrandNewProductList();

    const renderBrandNewProducts: (list: SampleBrandNewProductListType[]) => React.ReactNode = (list) => {
        return list.map((product) => (
            <article className="brand-new-product-item" key={product.id}>
                <Link to={`/products/${product.id}`} className="brand-new-product-item-link">
                    <img className="brand-new-product-item-image" src={product.image} alt="brand-new product" />
                    <div className="brand-new-product-item-detail">
                        <h3 className="brand-new-product-item-detail-name">{product.productName}</h3>
                        <h3 className="brand-new-product-item-detail-price">${Number(product.productPrice).toFixed(2)}</h3>
                    </div>
                </Link>
            </article>
        ));
    }    

    return (
        <section className="brand-new-product-list-wapper">
            <h2 className="brand-new-product-list-wapper-title">BrandNew Products</h2>
            <div className="brand-new-product-list">
                <div className="brand-new-product-list-cover" ref={brandNewProductListHook.scrollContainerRef}>
                    {renderBrandNewProducts(brandNewProductListHook.sampleBrandNewProductList)} 
                </div>
            </div>
            {(brandNewProductListHook.currentScreenWidth < brandNewProductListHook.cssGlobal.mobileLSize &&
                <div className="brand-new-product-list-btn-wrapper">
                    <button className="brand-new-product-list-left-btn" onClick={brandNewProductListHook.navigateToLeft} />
                    <button className="brand-new-product-list-right-btn" onClick={brandNewProductListHook.navigateToRight} />
                </div>
            )}
        </section>
    );
} 

export default BrandNewProductList;
