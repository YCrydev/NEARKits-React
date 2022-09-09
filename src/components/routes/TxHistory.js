import React from "react";
import DoughnutCharts from "../Chart/Doughnut";
import LineChart from "../Chart/LineChart";
import TxDivider from "../TX-components/TxDivider";
import TxLabel from "../TX-components/TxLabel";

const TxHistory = () => {
  return (
    <>
      <div className="container flex flex-col w-full mx-auto md:flex-row">
        <div className="order-last w-full max-w-4xl px-3 mt-5 md:mt-0">
          <div className="flex flex-col">
            <div
              className="relative flex flex-col min-w-0 min-h-0 px-6 break-words bg-white border dark:bg-primaryDark dark:border-primaryDark border-secondaryGrey rounded-nearkits py-7"
              id="card-body"
            >
              {/* card-header */}
              <div className="flex flex-row justify-between" id="card-header">
                <div className="text-lg font-bold text-black dark:text-white">
                  <h4>Transaction History</h4>
                </div>

                <button
                  id="csv-button"
                  className="p-1 text-white rounded-nearkits bg-disabled"
                >
                  CSV
                </button>
              </div>
              {/* card-header */}

              {/* card-body */}
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="text-xl text-black dark:text-white">
                    Buys:{" "}
                    <span className="text-black dark:text-white">{49.58}Ⓝ</span>
                  </div>
                  <div className="text-xl text-black dark:text-white">
                    Sales:{" "}
                    <span className="text-black dark:text-white">
                      {149.58}Ⓝ
                    </span>
                  </div>
                </div>
                <div className="container flex justify-center max-w-[300px] w-full mx-auto">
                  <DoughnutCharts />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 pt-5 space-y-2">
                <TxDivider
                  month={"Jul"}
                  totalBuys={"0.00"}
                  totalSells={"0.30"}
                />
                <TxLabel
                  contractName={"x.paras.near"}
                  totalAmount={0.3}
                  timeStamp="Fri Jul 22 2022 06:37:52 "
                  labelType={"Sales"}
                />
                <TxLabel
                  contractName={"x.paras.near"}
                  totalAmount={0.3}
                  timeStamp="Fri Jul 22 2022 06:37:52 "
                  labelType={"Sales"}
                />
                <TxLabel
                  contractName={"x.paras.near"}
                  totalAmount={0.3}
                  timeStamp="Fri Jul 22 2022 06:37:52 "
                  labelType={"Sales"}
                />
                <TxLabel
                  contractName={"x.paras.near"}
                  totalAmount={0.3}
                  timeStamp="Fri Jul 22 2022 06:37:52 "
                  labelType={"Sales"}
                />
              </div>
              {/* card-body */}
            </div>
          </div>
        </div>
        <div className="container w-full max-w-lg px-3 mx-auto md:order-last">
          <div className="flex flex-col space-y-5">
            <div className="relative flex flex-col min-w-0 break-words bg-white border dark:bg-primaryDark dark:border-primaryDark border-secondaryGrey rounded-nearkits">
              <div className="container flex justify-center max-w-[300px] w-full mx-auto ">
                <LineChart />
              </div>
            </div>
            <div className="relative flex flex-col min-w-0 break-words bg-white border dark:bg-primaryDark dark:border-primaryDark border-secondaryGrey rounded-nearkits">
              <div className="container flex justify-center max-w-[300px] w-full mx-auto">
                {" "}
                <LineChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TxHistory;
