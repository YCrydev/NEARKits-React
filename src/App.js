import ContentWrapper from "./components/ContentWrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import MyNfts from "./components/pages/MyNfts";
import BatchOffer from "./components/pages/BatchOffer";
import SendMessage from "./components/pages/SendMessage";
import ManageMessage from "./components/pages/ManageMessage";
import BatchList from "./components/pages/BatchList";

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
        </Routes>
      </ContentWrapper>
    </BrowserRouter>
  );
}

export default App;
