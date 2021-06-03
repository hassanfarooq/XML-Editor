import React from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const formatType = [
    { name: 'XML', type: 'xml' },
    { name: 'JSON', type: 'json' },
    { name: 'TREE', type: 'tree' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ToolBarDemo(props) {
    return (
        <div className="flex w-full border-solid max-w-7x2 mx-auto px-4 sm:px-6 py-1 bg-white dark:bg-gray-800">

            <div className="flex w-1/3 space-x-1">
                {/*Clear Button*/}
                <div className="cursor-pointer px-1" onClick={props.clearData}>
                    <svg className="h-5 w-5 text-black-500 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                {/*Copy Button*/}
                <div className="cursor-pointer px-1" onClick={props.copyData}>
                    <svg className="h-5 w-5 text-black-500 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                </div>
                {/*Expand*/}
                <div className="cursor-pointer px-1" onClick={props.expand}>
                    <svg className="h-5 w-5 text-black dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                </div>
                {/*Minified*/}
                <div className="cursor-pointer px-1" onClick={props.minified}>
                    <svg className="h-5 w-5 text-black dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </div>
                <div className="cursor-pointer px-1" onClick={props.undo}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform -rotate-45" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div className="cursor-pointer px-1" onClick={props.redo}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 scale-75" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>
                <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                        <>
                            <div>
                                <Menu.Button className="text-gray-800 hover:bg-gray-100 flex px-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                <span className="text-gray-900 dark:text-white dark:hover:bg-gray-600 hover:bg-gray-100 px-1">Font 12px</span>
                                    <ChevronDownIcon
                                                            className={classNames(
                                                                open ? 'text-gray-600' : 'text-gray-400',
                                                                'mt-1 h-5 w-5 group-hover:text-gray-500'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                </Menu.Button>
                            </div>
                            <Transition
                                show={open}
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    static
                                    className="origin-top-right absolute left-0 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                    <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm text-gray-700 text-left'
                                                    )}
                                                >
                                                    14px</a>
                                            )}
                                        </Menu.Item>

                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm text-gray-700 text-left'
                                                    )}
                                                >
                                                    16px</a>
                                            )}
                                        </Menu.Item>

                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm text-gray-700 text-left'
                                                    )}
                                                    onClick={props.treeProcess}
                                                >
                                                    18px</a>
                                            )}
                                        </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
            </div>
            <div className="flex w-1/3 space-x-1 justify-center">
                <div className="cursor-pointer px-1 " onClick={props.renderData}>
                    <svg className="h-5 w-5 text-black dark:text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                </div>


                <div className="cursor-pointer px-1" onClick={() => props.saveContent(false)}>
                    <svg className="h-5 w-5 text-black dark:text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                        <polyline points="17 21 17 13 7 13 7 21" />
                        <polyline points="7 3 7 8 15 8" />
                    </svg>
                </div>
                <div className="cursor-pointer px-1" onClick={props.setIsOpen}>
                    <svg className="h-5 w-5 text-black dark:text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                </div>
            </div>
            <div className="flex w-1/3 space-x-1 justify-end">

                <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                        <>
                            <div>
                                <Menu.Button className="text-gray-800 hover:bg-gray-100 flex px-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                <span className="text-gray-900 dark:text-white dark:hover:bg-gray-600 hover:bg-gray-100 px-1">XML</span>
                                    <ChevronDownIcon
                                                            className={classNames(
                                                                open ? 'text-gray-600' : 'text-gray-400',
                                                                'mt-1 h-5 w-5 group-hover:text-gray-500'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                </Menu.Button>
                            </div>
                            <Transition
                                show={open}
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    static
                                    className="origin-top-right z-50 absolute left-0 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                    <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm text-gray-700 text-left'
                                                    )}
                                                    onClick={props.xmlProcess}
                                                >
                                                    XML</a>
                                            )}
                                        </Menu.Item>

                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm text-gray-700 text-left'
                                                    )}
                                                    onClick={props.jsonProcess}
                                                >
                                                    JSON</a>
                                            )}
                                        </Menu.Item>

                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm text-gray-700 text-left'
                                                    )}
                                                    onClick={props.treeProcess}
                                                >
                                                    TREE</a>
                                            )}
                                        </Menu.Item>
                                    {/* {formatType.map((item) => (

                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm text-gray-700 text-left'
                                                    )}
                                                    onClick={props.xmlProcess}
                                                >
                                                    {item.name}</a>
                                            )}
                                        </Menu.Item>
                                    ))} */}

                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
                <div className="cursor-pointer px-1 text-black-500 dark:text-gray-500 rounded" onClick={props.handleFull}>Full Screen</div>
               
                {/* <div className="cursor-pointer px-1 text-black-500 dark:text-gray-500 rounded" onClick={props.xmlProcess}>XML</div>
                <div className="cursor-pointer px-1 text-black-500 dark:text-gray-500 rounded" onClick={props.jsonProcess}>JSON</div>
                <div className="cursor-pointer px-1 text-black-500 dark:text-gray-500 rounded" onClick={props.treeProcess}>TREE</div> */}
                <div className="cursor-pointer px-1" onClick={props.expandResults}>
                    <svg className="h-5 w-5 text-black dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                </div>
                <div className="cursor-pointer px-1" onClick={props.minifiedResults}>
                    <svg className="h-5 w-5 text-black dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </div>
            </div>
        </div>
    );
}