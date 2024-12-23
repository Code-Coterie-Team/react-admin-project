// import React from 'react'
import Panel from "./Panel"
import { Users, UserAdd, UserRemove01, CheckMarkCircle, Search02 } from "../icons"
function User() {
    return (
        <div className='userPage main py-6 px-8'>

            <div className='grid grid-cols-4 gap-3 pb-8'>
                <Panel icon={<Users />} title="Total Users" amount={152845} type="aset" />
                <Panel icon={<UserAdd />} title="Total Users" amount={152845} type="" />
                <Panel icon={<CheckMarkCircle />} title="Active Users" amount={98520} type="" />
                <Panel icon={<UserRemove01 />} title="Churn Rate" amount={2.4} type="persent" />

            </div>
            <div className='users mb-8 bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid '>
                <div className="flex pb-7 justify-between items-center">
                    <h2 className="text-xl text-gray-100 font-semibold">Users</h2>
                    <div className="search relative">
                        <input className=" bg-gray-700 focus:outline-none focus:ring focus:border-blue-500 py-2 pr-4 pl-10 rounded-lg placeholder-gray-400 " placeholder="Search users..." type="text" />
                        <div className="absolute top-[0.625rem] left-2">
                            <Search02 />
                        </div>
                    </div>
                </div>
                <div className="tableProductList">
                    <table className="border-collapse w-full ">
                        <thead>
                            <tr>
                                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                                    Name
                                </th>
                                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">Email</th>
                                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">Role</th>
                                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">Status</th>
                                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-6 py-4">
                                    <div className="flex flex-row gap-4 items-center">
                                        <div className="flex justify-center items-center h-10 w-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full ">
                                            <div className="flex justify-center items-center font-medium uppercase">j</div>
                                        </div>
                                        <span className="font-semibold text-sm">
                                            John Doe
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm">john@example.com</td>
                                <td className="px-6 py-4">
                                    <span className="bg-blue-800 font-semibold text-blue-100 rounded-full px-2 text-xs">Customer</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="bg-green-800 font-semibold text-green-100 rounded-full px-2 text-xs">Active</span>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <button className="text-indigo-400 pr-2">Edit</button>
                                    <button className="text-red-400 text-sm">Delete</button>
                                </td>

                            </tr>
                            <tr>
                                <td className="px-6 py-4 ">
                                    <div className="flex flex-row gap-4 items-center">
                                        <div className="flex justify-center items-center h-10 w-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full ">
                                            <div className="flex justify-center items-center font-medium uppercase">j</div>
                                        </div>
                                        <span className="font-semibold text-sm">

                                            Jane Smith
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm">john@example.com</td>
                                <td className="px-6 py-4">
                                    <span className="bg-blue-800 font-semibold text-blue-100 rounded-full px-2 text-xs">Admin</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="bg-green-800 font-semibold text-green-100 rounded-full px-2 text-xs">Active</span>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <button className="text-indigo-400 pr-2">Edit</button>
                                    <button className="text-red-400">Delete</button>
                                </td>

                            </tr>
                            <tr>
                                <td className="px-6 py-4">
                                    <div className="flex flex-row gap-4 items-center">
                                        <div className="flex justify-center items-center h-10 w-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full ">
                                            <div className="flex justify-center items-center font-medium uppercase">b</div>
                                        </div>
                                        <span className="font-semibold text-sm">
                                            Bob Johnson
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    bob@example.com
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <span className="bg-blue-800 font-semibold text-blue-100 rounded-full px-2 text-xs">Customer</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="bg-red-800 font-semibold text-red-100 rounded-full px-2 text-xs">Inactive</span>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <button className="text-indigo-400 pr-2">Edit</button>
                                    <button className="text-red-400">Delete</button>
                                </td>

                            </tr>
                            <tr>
                                <td className="px-6 py-4">
                                    <div className="flex flex-row gap-4 items-center">
                                        <div className="flex justify-center items-center h-10 w-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full ">
                                            <div className="flex justify-center items-center font-medium uppercase">a</div>
                                        </div>
                                        <span className="font-semibold text-sm">
                                            Alice Brown
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm">alice@example.com</td>
                                <td className="px-6 py-4">
                                    <span className="bg-blue-800 font-semibold text-blue-100 rounded-full px-2 text-xs">Customer</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="bg-green-800 font-semibold text-green-100 rounded-full px-2 text-xs">Active</span>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <button className="text-indigo-400 pr-2">Edit</button>
                                    <button className="text-red-400">Delete</button>
                                </td>

                            </tr>
                            <tr>
                                <td className="px-6 py-4">
                                    <div className="flex flex-row gap-4 items-center">
                                        <div className="flex justify-center items-center h-10 w-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full ">
                                            <div className="flex justify-center items-center font-medium uppercase">c</div>
                                        </div>
                                        <span className="font-semibold text-sm">
                                            Charlie Wilson
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm">charlie@example.com</td>
                                <td className="px-6 py-4">
                                    <span className="bg-blue-800 font-semibold text-blue-100 rounded-full px-2 text-xs">Moderator</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="bg-green-800 font-semibold text-green-100 rounded-full px-2 text-xs">Active</span>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <button className="text-indigo-400 pr-2">Edit</button>
                                    <button className="text-red-400">Delete</button>
                                </td>

                            </tr>
                        </tbody>


                    </table>
                </div>
            </div>
            <div className="chartProducts grid grid-cols-2 gap-4">

                <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
                    chartproducts
                </div>
                <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
                    chartProducts
                </div>
                <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
                    chartProducts
                </div>
            </div>
        </div>


    )
}

export default User
