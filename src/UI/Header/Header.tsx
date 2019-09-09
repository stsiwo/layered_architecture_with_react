import * as React from "react";
import { useCss } from "react-use";
import { useHeaderCss } from "./HeaderCss";
import { useCssGlobalContext } from "../Base/Context/CssGlobalContext/CssGlobalContext";
import LogoIcon from "./LogoIcon/LogoIcon";
import SearchBox from "./SearchBox/SearchBox";
import MenuToggleIcon from "./MenuToggleIcon/MenuToggleIcon";
import { useResponsiveComponent } from "../Base/Hooks/ResponsiveComponentHook";
import MenuWrapper from "./MenuWrapper/MenuWrapper";
import Menu from "./MenuWrapper/Menu/Menu";

const Header: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();
    const currentScreenWidth = useResponsiveComponent();

    const className = useHeaderCss({
        cssGlobal: cssGlobal,
        currentScreenWidth: currentScreenWidth
    }); 


    const renderMenuSidebar = () => {
        return (
            <React.Fragment>
                <MenuToggleIcon />
                <MenuWrapper />
            </React.Fragment>
        );
    }

    const renderHorizontalMenu = () => {
        return (
            <Menu />
        );
    }

    return (
        <header className={className}>
            <LogoIcon />
            <SearchBox />
            {(currentScreenWidth < cssGlobal.laptopSize && renderMenuSidebar() )}
            {(currentScreenWidth >= cssGlobal.laptopSize && renderHorizontalMenu() )}
        </header>
    );
} 

export default Header;