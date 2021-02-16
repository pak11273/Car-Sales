// import AddedFeatures from "./components/AddedFeatures";
// import AdditionalFeatures from "./components/AdditionalFeatures";

import Header from "./components/Header";
import React from "react";

// import Total from "./components/Total";

const App = () => {
  return (
    <div className="boxes">
      <div className="box">
        {/* <Header car={store.car} /> */}
        <Header />
        {/* <AddedFeatures car={store.car} /> */}
        {/* <AddedFeatures /> */}
      </div>
      <div className="box">
        {/* <AdditionalFeatures /> */}
        {/* <AdditionalFeatures additionalFeatures={store.additionalFeatures} /> */}
        {/* <Total car={store.car} additionalPrice={store.additionalPrice} /> */}
        {/* <Total /> */}
      </div>
    </div>
  );
};

export default App;
