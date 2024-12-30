// import React from 'react'
import Panel from "../../components/Panel";
import {
  Users,
  UserAdd,
  UserRemove01,
  CheckMarkCircle,
  Search02,
} from "../../icons";
import ChartUserGrowth from "./components/ChartUserGrowth";
import ChartUserActivityHeatmap from "./components/ChartUserActivityHeatmap";
import ChartUserDemographics from "./components/ChartUserDemographics";
import { useGetAllUsers } from "../../api";
import { useEffect, useState } from "react";
function User() {
  const { data } = useGetAllUsers();
  const [searchUsers, setSearchUsers] = useState<string>("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  useEffect(() => {
    if (searchUsers === "") {
      setFilteredData(data);
    } else {
      const results = data?.filter((item) =>
        item.name.toLowerCase().includes(searchUsers.toLowerCase())
      );
      setFilteredData(results);
    }
  }, [searchUsers]);

  return (
    <div className="userPage main py-6 px-8">
      <div className="grid grid-cols-4 gap-3 pb-8">
        <Panel
          icon={
            <Users
              className="text-indigo-600"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="Total Users"
          amount={152845}
          type="aset"
        />
        <Panel
          icon={
            <UserAdd
              className="text-green-600"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="New Users Today"
          amount={243}
          type=""
        />
        <Panel
          icon={
            <CheckMarkCircle
              className="text-yellow-500"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="Active Users"
          amount={98520}
          type=""
        />
        <Panel
          icon={
            <UserRemove01
              className="text-red-500"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="Churn Rate"
          amount={2.4}
          type="persent"
        />
      </div>
      <div className="users mb-8 bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
        <div className="flex pb-7 justify-between items-center">
          <h2 className="text-xl text-gray-100 font-semibold">Users</h2>
          <div className="search relative">
            <input
              onChange={(e) => {
                setSearchUsers(e.target.value);
              }}
              className=" bg-gray-700 focus:outline-none focus:ring focus:border-blue-500 py-2 pr-4 pl-10 rounded-lg placeholder-gray-400 "
              placeholder="Search users..."
              type="text"
            />
            <div className="absolute top-[0.625rem] left-2">
              <Search02 />
            </div>
          </div>
        </div>
        <div className="tableProductList">
          <table className="border-collapse w-full ">
            <thead>
              <tr className="tableBorderB">
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Name
                </th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Email
                </th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Role
                </th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Status
                </th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4">
                    <div className="flex flex-row gap-4 items-center">
                      <div className="flex justify-center items-center h-10 w-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full ">
                        <div className="flex justify-center items-center font-medium uppercase">
                          {user.name[0].toUpperCase()}
                        </div>
                      </div>
                      <span className="font-semibold text-sm">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-800 font-semibold text-blue-100 rounded-full px-2 text-xs">
                    {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-800 font-semibold text-green-100 rounded-full px-2 text-xs">
                    {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-indigo-400 pr-2 hover:text-indigo-300">Edit</button>
                    <button className="text-red-400 text-sm hover:text-indigo-300">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="chartProducts grid grid-cols-2 gap-4">
        <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
          <h2 className="text-lg font-medium pb-4 text-gray-100">
            User Growth
          </h2>
          <ChartUserGrowth />
        </div>
        <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
          <h2 className="text-lg font-medium pb-4 text-gray-100">
            User Activity Heatmap
          </h2>
          <ChartUserActivityHeatmap />
        </div>
        <div className="lg:col-span-2 bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
          <h2 className=" text-lg font-medium pb-4 text-gray-100">
            User Demographics
          </h2>
          <ChartUserDemographics />
        </div>
      </div>
    </div>
  );
}

export default User;
