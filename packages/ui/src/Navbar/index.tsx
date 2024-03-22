import React from 'react';
import { AiOutlineNotification, AiOutlineSearch } from 'react-icons/ai';
import { MdApps } from 'react-icons/md';
import Sidebar from './Sidebar';
import SidebarSlider from './SidebarSlider';

export default function Navbar() {
    const [show, setShow] = React.useState(false);
    return (
        <>
            <header className="bg-gray-800 p-4 text-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
                    <div className="relative flex h-16 justify-between">
                        <div className="relative z-10 flex items-center">
                            <button
                                type="button"
                                onClick={() => setShow(!show)}
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Menu</span>
                                <MdApps
                                    className="h-6 w-6 text-violet-600"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>

                        <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                            <div className="w-full sm:max-w-xs">
                                <label
                                    htmlFor="search"
                                    className="sr-only">
                                    Search
                                </label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <AiOutlineSearch
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <input
                                        id="search"
                                        name="search"
                                        className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                                        placeholder="Search"
                                        type="search"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                            <button
                                type="button"
                                className="relative flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <AiOutlineNotification
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                            <div className="relative ml-4 flex-shrink-0">
                                <button className="relative flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    User
                                </button>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* <Sidebar open={show} /> */}
            <SidebarSlider open={show} />
        </>
    );
}
