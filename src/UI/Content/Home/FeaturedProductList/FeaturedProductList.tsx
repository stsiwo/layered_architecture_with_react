import * as React from "react";
import "./FeaturedProductList.scss";
import { SampleProductListType, SampleProductList } from "./SampleProductList";
import { Link } from "react-router-dom";
import { useResolvedService } from "../../../Base/Hooks/ResolvedServicve";
import { useResponsiveComponent } from "../../../Base/Hooks/ResponsiveComponentHook";
import { useCssGlobalContext } from "../../../Base/Context/CssGlobalContext/CssGlobalContext";

const FeaturedProductList: React.FunctionComponent<{}> = (props: {}) => {

    const scrollContainerRef = React.createRef<HTMLDivElement>();
    const currentScreenWidth = useResponsiveComponent();
    const cssGlobal = useCssGlobalContext();

    const navigateToLeft: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    };

    const navigateToRight: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        scrollContainerRef.current.scrollTo({ left: scrollContainerRef.current.scrollWidth, behavior: "smooth" });
    };

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
                <div className="featured-product-list-cover" ref={scrollContainerRef}>
                    {renderFeaturedProducts(SampleProductList)} 
                </div>
            </div>
            {(currentScreenWidth < cssGlobal.mobileLSize &&
                <div className="featured-product-list-btn-wrapper">
                    <button className="featured-product-list-left-btn" onClick={navigateToLeft} />
                    <button className="featured-product-list-right-btn" onClick={navigateToRight} />
                </div>
            )}
        </section>
    );
} 

export default FeaturedProductList;
