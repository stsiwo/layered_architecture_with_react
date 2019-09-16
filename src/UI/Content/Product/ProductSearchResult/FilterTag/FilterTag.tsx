import * as React from "react";
import "./FilterTag.scss";

const FilterTag: React.FunctionComponent<{}> = (props: {}) => {

    // need current filter name
    // 
    const currentTags = ["tag1111111111111111111111111111", "tag2", "tag3", "tag4", "tag2", "tag3", "tag4","tag2", "tag3", "tag4","tag2", "tag3", "tag4","tag2", "tag3", "tag4" ];

    const renderTag: () => React.ReactNode = () => {
        return currentTags.map((tag) => {
            return (
                <div className="product-search-result-list-filter-tag-cover" key={tag}>
                    <div className="product-search-result-list-filter-tag-name">{tag}</div>
                    <button className="product-search-result-list-filter-tag-remove-btn" >&#10006;</button>
                </div>
            );
        });
    }

    return (
        <div className="product-search-result-list-filter-tag-wrapper">
            {renderTag()} 
        </div>
    );
} 

export default FilterTag;
