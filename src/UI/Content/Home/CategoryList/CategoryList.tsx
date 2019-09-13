import * as React from "react";
import "./CategoryList.scss";
import { Link } from "react-router-dom";
import { useCategoryListType } from "./useCategoryListType";
import { useCategoryList } from "./useCategoryList";

const CategoryList: React.FunctionComponent<{}> = (props: {}) => {

    const categoryListHook: useCategoryListType = useCategoryList();

    const renderCategoryList: () => React.ReactNode = () => {
        console.log("inside render func");
        console.log(categoryListHook.categoryList)
        return categoryListHook.categoryList.map((category) => {
            return (
                <article className="category-item" key={category.id}>
                    <Link to={`/categorys/${category.id}`} className="category-item-link">
                        <img className="category-item-image" src={category.image} alt={category.name} />
                        <h2 className="category-item-name">{category.name}</h2>
                    </Link>
                </article>
            );
        });
    };

    return (
        <section className="category-list-wrapper"> 
            <h2 className="category-list-wapper-title">Category</h2>
            <div className="category-list-cover">
                {renderCategoryList()}
            </div>
        </section>
    );
} 

export default CategoryList;
