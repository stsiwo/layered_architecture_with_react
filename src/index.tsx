import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { myContainer } from "../inversify.config";
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
/**
 * typescript: version 3.6 cuases below errors because it remove GlobalFetch in this version
 *
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


const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

const result = client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));


const App = ( props: any ) => {
  return (
    <div>
      <Comp1 />
      <Comp2 />
    </div>
  );
};

class TempRepo {

  myCH1(): any {
    return React.useState(0);
  }
}
const CustomHook1 = () => {

  const temp = new TempRepo();
  
  return temp.myCH1();
};

const CustomHook2 = () => {
  
  return React.useState(0); 
};

const Comp1 = (props: any) => {

  const [ count, setCount ] = CustomHook1();

  return (
     <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

const Comp2 = (props: any) => {

  const [ count, setCount ] = CustomHook1();

  return (
     <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

ReactDOM.render(
  <App/>
  ,document.getElementById('root')
)
