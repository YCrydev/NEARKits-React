import ContentWrapper from "./components/ContentWrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import MyNfts from "./components/pages/MyNfts";
import BatchOffer from "./components/pages/BatchOffer";
import SendMessage from "./components/pages/SendMessage";
import ManageMessage from "./components/pages/ManageMessage";
import BatchList from "./components/pages/BatchList";
import CustomizeGallery from "./components/pages/CustomizeGallery";
import TxHistory from "./components/pages/TxHistory";
import Snipe from "./components/pages/Snipe";
import CollectionInfo from "./components/pages/CollectionInfo";
import WhaleTracker from "./components/pages/WhaleTracker";
import DataInfo from "./components/pages/DataInfo";

function App() {
  return (
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
  );
}

export default App;
