import ContentWrapper from "./components/ContentWrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";
import Spinner from "./components/spinner/spinner.component";

const Dashboard = lazy(() => import("./components/routes/Dashboard"));
const MyNfts = lazy(() => import("./components/routes/MyNfts"));
const BatchOffer = lazy(() => import("./components/routes/BatchOffer"));
const SendMessage = lazy(() => import("./components/routes/SendMessage"));
const ManageMessage = lazy(() => import("./components/routes/ManageMessage"));
const BatchList = lazy(() => import("./components/routes/BatchList"));
const CustomizeGallery = lazy(() =>
  import("./components/routes/CustomizeGallery")
);
const TxHistory = lazy(() => import("./components/routes/TxHistory"));
const Snipe = lazy(() => import("./components/routes/Snipe"));
const CollectionInfo = lazy(() => import("./components/routes/CollectionInfo"));
const WhaleTracker = lazy(() => import("./components/routes/WhaleTracker"));
const DataInfo = lazy(() => import("./components/routes/DataInfo"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/myNfts" element={<MyNfts />} />
            <Route path="/batchOffer" element={<BatchOffer />} />
            <Route path="/batchList" element={<BatchList />} />
            <Route path="/sendMessage" element={<SendMessage />} />
            <Route path="/manageMessage" element={<ManageMessage />} />
            <Route path="/customizeGallery" element={<CustomizeGallery />} />
            <Route path="/txHistory" element={<TxHistory />} />
            <Route path="/snipe" element={<Snipe />} />
            <Route path="/snipe/collection_info" element={<CollectionInfo />} />
            <Route path="/whaleTracker" element={<WhaleTracker />} />
            <Route path="/whaleTracker/informations" element={<DataInfo />} />
          </Routes>
        </ContentWrapper>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
