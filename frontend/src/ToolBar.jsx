import React from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faCopy, faCode, faReply, faShare, faSave, faShareAlt, faPlay, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

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
        <div className="flex w-full border-solid py-1 border-t-2 dark:border-DarkBorderBottom border-lightBorderBottom">

            <div className="flex w-2/4">
                {/*Clear Button*/}
                <div className="cursor-pointer px-1 has-tooltip" onClick={props.clearData}>
                    <FontAwesomeIcon icon={faFile} class="text-lightIcon dark:text-gray-500 h-5 w-5" />
                    <span class='tooltip'>Clear</span>
                </div>
                {/*Copy Button*/}
                <div className="cursor-pointer px-1" onClick={props.copyData}>
                    <FontAwesomeIcon icon={faCopy} class="text-lightIcon dark:text-gray-500 h-5 w-5" />
                </div>
                {/*Expand*/}
                <div className="cursor-pointer px-1" onClick={props.expand}>
                    <FontAwesomeIcon icon={faExpandAlt} class="text-lightIcon dark:text-gray-500 h-5 w-5" />
                </div>
                {/*Minified*/}
                <div className="cursor-pointer px-1" onClick={props.minified}>
                    <FontAwesomeIcon icon={faCode} class="text-lightIcon dark:text-gray-500 h-5 w-5" />
                </div>
                <div className="cursor-pointer px-1" onClick={props.undo}>
                    <FontAwesomeIcon icon={faReply} class="transform -rotate-45 text-lightIcon dark:text-gray-500 h-5 w-5" />
                </div>
                <div className="cursor-pointer px-1" onClick={props.redo}>
                    <FontAwesomeIcon icon={faShare} class="transform rotate-45 scale-x-100 text-lightIcon dark:text-gray-500 h-5 w-5" />
                </div>
                <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                        <>
                            <div>
                                <Menu.Button className="bg-white dark:bg-DarkBG flex px-1 focus:outline-none focus:ring-1 focus:ring-offset-2 hover:text-gray-900 focus:ring-gray-800">
                                    <span className="text-lightIcon dark:text-gray-500 dark:hover:bg-gray-600 hover:bg-gray-100 px-1">Font 12px</span>
                                    <ChevronDownIcon
                                        className={classNames(
                                            open ? 'text-gray-600' : 'text-lightIcon',
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
                                                    'block px-4 py-2 text-sm text-lightIcon text-left'
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
                                                    'block px-4 py-2 text-sm text-lightIcon text-left'
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
                                                    'block px-4 py-2 text-sm text-lightIcon text-left'
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
                <div className="cursor-pointer px-1" onClick={() => props.saveContent(false)}>
                    <FontAwesomeIcon icon={faSave} class="text-lightIcon dark:text-gray-500 h-5 w-5" />
                </div>
                <div className="cursor-pointer px-1" onClick={props.setIsOpen}>
                    <FontAwesomeIcon icon={faShareAlt} class="text-lightIcon dark:text-gray-500 h-5 w-5" />
                </div>
                <div className="cursor-pointer px-1 " onClick={props.renderData}>
                    <FontAwesomeIcon icon={faPlay} class="text-lightIcon dark:text-gray-500 h-5 w-5" />
                </div>
            </div>

            <div className="flex w-2/4 justify-end">

                <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                        <>
                            <div>
                                <Menu.Button className="bg-white dark:bg-DarkBG flex px-1 focus:outline-none focus:ring-1 focus:ring-offset-2 hover:text-gray-900 focus:ring-gray-800">
                                    <span className="text-lightIcon dark:text-gray-500 dark:hover:bg-gray-600 hover:bg-gray-100 px-1">XML</span>
                                    <ChevronDownIcon
                                        className={classNames(
                                            open ? 'text-lightIcon' : 'text-lightIcon',
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
                                                    'block px-4 py-2 text-sm text-lightIcon text-left'
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
                                                    'block px-4 py-2 text-sm text-lightIcon text-left'
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
                                                    'block px-4 py-2 text-sm text-lightIcon text-left'
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
                <div className="cursor-pointer px-1 text-lightIcon dark:text-gray-500 rounded" onClick={props.handleFull}>Full Screen</div>

                {/* <div className="cursor-pointer px-1 text-black-500 dark:text-gray-500 rounded" onClick={props.xmlProcess}>XML</div>
                <div className="cursor-pointer px-1 text-black-500 dark:text-gray-500 rounded" onClick={props.jsonProcess}>JSON</div>
                <div className="cursor-pointer px-1 text-black-500 dark:text-gray-500 rounded" onClick={props.treeProcess}>TREE</div> */}
                <div className="cursor-pointer px-1" onClick={props.expandResults}>
                    <FontAwesomeIcon icon={faExpandAlt} class="text-lightIcon dark:text-gray-500 h-5 w-5" />
                </div>
                <div className="cursor-pointer px-1" onClick={props.minifiedResults}>
                    <FontAwesomeIcon icon={faCode} class="text-lightIcon dark:text-gray-500 h-5 w-5" />
                </div>
            </div>
        </div>
    );
}