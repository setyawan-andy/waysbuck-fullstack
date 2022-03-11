import { useState } from "react";
import HeaderAdmin from "./HeaderAdmin";
import ContentAdmin from "./ContentAdmin";
import TopingAdmin from "./TopingAdmin";

const AdminPage = () => {


  return (
      <>
      <HeaderAdmin />

      <ContentAdmin />

      <TopingAdmin />

      <section>
          <div className="container w-11/12 md:w-9/12 mt-14 mb-10 font-lato">
            <div className="text-maroon text-4xl font-extrabold"> 
              <h2>Income transaction</h2>
            </div>
            <div className="flex flex-1 justify-center border-2 border-gray-400 rounded-md mt-10">
              <table>
                <thead>
                  <tr className="text-sm font-extrabold">
                    <th className="rounded-l-sm bg-gray-200 py-3 pl-2 pr-10 border-r-2 border-gray-400">No</th>
                    <th className="bg-gray-200 py-3 pl-2 pr-32 border-r-2 border-gray-400">Name</th>
                    <th className="bg-gray-200 py-3 pl-2 pr-40 border-r-2 border-gray-400">Address</th>
                    <th className="bg-gray-200 py-3 pl-2 pr-24 border-r-2 border-gray-400">Post Code</th>
                    <th className="bg-gray-200 py-3 pl-2 pr-36 border-r-2 border-gray-400">Income</th>
                    <th className="bg-gray-200 py-3 pl-2 pr-36 border-r-2 border-gray-400">Status</th>
                    <th className="bg-gray-200 py-3 pl-2 pr-36 border-b-2 rounded-r-sm border-gray-400">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-sm font-normal">
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400">1</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400">Sugeng No Pants</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400">Cileungsi</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400">16820</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400 text-blue-500">69.000</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400 text-orange-400">Waiting Approve</td>
                    <td className="flex flex-1 gap-4 items-center justify-center py-3">
                      <button className="py-1 px-5 bg-cancel text-xs text-white rounded-md">Cancel</button>
                      <button className="py-1 px-5 bg-approve text-xs text-white rounded-md">Approve</button>
                    </td>
                  </tr>
                  <tr className="text-sm font-normal">
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400">2</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400">Haris Gams</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400">Serang</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400">42111</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400 text-blue-500">30.000</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400 text-green">Success</td>
                    <td className="flex flex-1 gap-4 items-center justify-center py-3 border-t-2 border-gray-400">
                      <img src="../img/checklist.svg" alt="checklist" />
                    </td>
                  </tr>
                  <tr className="text-sm font-normal">
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400">3</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400">Aziz Union</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400">Bekasi</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400">13450</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400 text-blue-500">28.000</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400 text-red-400">Cancel</td>
                    <td className="flex flex-1 gap-4 items-center justify-center py-3 border-t-2 border-gray-400">
                      <img src="../img/cancel.svg" alt="cancel" />
                    </td>
                  </tr>
                  <tr className="text-sm font-normal">
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400">4</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400">Lae Tanjung Balai</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400">Tanjung Balai</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400">21331</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400 text-blue-500">30.000</td>
                    <td className="rounded-l-sm py-3 pl-2 pr-10 border-r-2 border-t-2 border-gray-400 text-cyan-400">On The Way</td>
                    <td className="flex flex-1 gap-4 items-center justify-center py-3 border-t-2 border-gray-400">
                      <img src="../img/checklist.svg" alt="checklist" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> 
          </div>
      </section>
      </>
  )
};

export default AdminPage;
