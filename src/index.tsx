import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './UI/Header/Header';
import { CssGlobalContext } from './UI/Base/Context/CssGlobalContext/CssGlobalContext';
import { CssGlobalContextDefaultState } from './UI/Base/Context/CssGlobalContext/CssGlobalContextDefaultState';
import { Content } from './UI/Content/Content';
import { Footer } from './UI/Footer/Footer';
import { useResponsiveComponent } from './UI/Base/Hooks/ResponsiveComponentHook';

/**
 * typescript: version 3.6 cuases below errors because it remove GlobalFetch in this version
 *
 *   const client = new ApolloClient({
 *     uri: 'https://48p1r2roz4.sse.codesandbox.io',
 *   });
 * ERROR in [at-loader] ./node_modules/apollo-link-http-common/lib/index.d.ts:38:13
 *   TS2304: Cannot find name 'GlobalFetch'.
 *
 * ERROR in [at-loader] ./node_modules/apollo-boost/lib/index.d.ts:25:13
 *   TS2304: Cannot find name 'GlobalFetch'.
 *
 * workaround: change typescript's version to 3.5.1
 * see more detail: https://github.com/apollographql/apollo-link/issues/513#issuecomment-368234260
 *
 **/

const App = (props: any) => {
    return (
        <div>
            <CssGlobalContext.Provider value={CssGlobalContextDefaultState}>
                <Header />
                <Content />
                <Footer />
            </CssGlobalContext.Provider>
        </div>
    );
};

ReactDOM.render(
  <App/>
  ,document.getElementById('root')
)
