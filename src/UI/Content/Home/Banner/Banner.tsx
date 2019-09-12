import * as React from "react";
import "./Banner.scss";
import { useBanner } from "./useBanner";
import { useBannerType } from "./useBannerType";
//const SampleImageSrc = require("../../../../Images/sample_image.jpg");

const Banner: React.FunctionComponent<{}> = (props: {}) => {

    const bannerHook: useBannerType = useBanner();

    return (
        <div className="banner-slider-wrapper">
            <div className="banner-list" ref={bannerHook.bannerListRef}>
                <div className="banner-list-item">
                    <img src="" alt="item 1"/>
                </div>
                <div className="banner-list-item">
                    <img src="" alt="item 2"/>
                </div>
                <div className="banner-list-item">
                    <img src="" alt="item 3"/>
                </div>
            </div>
            <i className="banner-left-icon" onClick={bannerHook.handleLeftBtnClick} />
            <i className="banner-right-icon" onClick={bannerHook.handleRightBtnClick}/>
            <div className="banner-nav-btn-wrapper">
                <button className={` banner-nav-btn ${bannerHook.nav1SelectedClass}`} onClick={bannerHook.handleNavBtnClick} value="0"></button>
                <button className={` banner-nav-btn ${bannerHook.nav2SelectedClass}`} onClick={bannerHook.handleNavBtnClick} value="1"></button>
                <button className={` banner-nav-btn ${bannerHook.nav3SelectedClass}`} onClick={bannerHook.handleNavBtnClick} value="2"></button>
            </div>
        </div>
    );
} 

export default Banner;
