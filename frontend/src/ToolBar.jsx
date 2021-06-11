import React from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faCopy, faCode, faReply, faShare, faSave, faShareAlt, faPlay, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { FaBeer } from 'react-icons/fa';

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
        <div className="flex w-full border-solid pt-1">

            <div className="flex w-2/4">
                {/*Clear Button*/}
                <div className="cursor-pointer p-1 pl-1 px-2.5 has-tooltip" onClick={props.clearData}>
                    {/* <FaBeer /> */}
                    <FontAwesomeIcon icon={faFile} class="text-lightIcon dark:text-gray-500 h-4 w-4" />
                    {/* <span class='tooltip'>Clear</span> */}
                </div>
                {/*Copy Button*/}
                <div className="cursor-pointer p-1 px-2.5" onClick={props.copyData}>
                    <FontAwesomeIcon icon={faCopy} class="text-lightIcon dark:text-gray-500 h-4 w-4" />
                </div>
                {/*Expand*/}
                <div className="cursor-pointer p-1 px-2.5" onClick={props.expand}>
                    <FontAwesomeIcon icon={faExpandAlt} class="text-lightIcon dark:text-gray-500 h-4 w-4" />
                </div>
                {/*Minified*/}
                <div className="cursor-pointer p-1 px-2.5" onClick={props.minified}>
                    <FontAwesomeIcon icon={faCode} class="text-lightIcon dark:text-gray-500 h-4 w-4" />
                </div>
                <div className="cursor-pointer p-1 px-2.5" onClick={props.undo}>
                    <FontAwesomeIcon icon={faReply} class="transform -rotate-45 text-lightIcon dark:text-gray-500 h-4 w-4" />
                </div>
                <div className="cursor-pointer p-1 px-2.5" onClick={props.redo}>
                    <FontAwesomeIcon icon={faShare} class="transform rotate-45 scale-x-100 text-lightIcon dark:text-gray-500 h-4 w-4" />
                </div>
                <Menu as="div" className="relative">
                    {({ open }) => (
                        <>
                            <div>
                                <Menu.Button className="bg-white dark:bg-DarkBG flex focus:outline-none focus:ring-1 focus:ring-offset-2 hover:text-gray-900 focus:ring-gray-800 pt-0.5 px-2.5">
                                    <span className="text-lightIcon dark:text-gray-500 dark:hover:bg-gray-600 hover:bg-gray-100 text-sm">Font 12px</span>
                                    <ChevronDownIcon
                                        className={classNames(
                                            open ? 'text-gray-600' : 'text-lightIcon',
                                            'mt-1 h-4 w-4 group-hover:text-gray-500'
                                        )}
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>
                            <Transition
                                show={open}
                                as={Fragment}
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
                <div className="cursor-pointer p-1 px-2.5" onClick={() => props.saveContent(false)}>
                    <FontAwesomeIcon icon={faSave} class="text-lightIcon dark:text-gray-500 h-4 w-4" />
                </div>
                <div className="cursor-pointer p-1 px-2.5" onClick={props.setIsOpen}>
                    <FontAwesomeIcon icon={faShareAlt} class="text-lightIcon dark:text-gray-500 h-4 w-4" />
                </div>
                <div id="playButton" className="cursor-pointer p-1 px-2.5" onClick={props.renderData}>
                    <FontAwesomeIcon icon={faPlay} class="text-lightIcon dark:text-gray-500 h-4 w-4" />
                </div>
            </div>

            <div className="flex w-2/4 justify-end">

                <Menu as="div" className="ml-3 relative p-1 px-2.5">
                    {({ open }) => (
                        <>
                            <div>
                                <Menu.Button className="bg-white dark:bg-DarkBG flex focus:outline-none focus:ring-1 focus:ring-offset-2 hover:text-gray-900 focus:ring-gray-800">
                                    <span className="text-lightIcon dark:text-gray-500 dark:hover:bg-gray-600 hover:bg-gray-100 text-sm">XML</span>
                                    <ChevronDownIcon
                                        className={classNames(
                                            open ? 'text-lightIcon' : 'text-lightIcon',
                                            'mt-0.5 h-4 w-4 group-hover:text-gray-500'
                                        )}
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>
                            <Transition
                                show={open}
                                as={Fragment}
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
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>

                <div className="cursor-pointer p-1 px-2.5" onClick={props.expandResults}>
                    <FontAwesomeIcon icon={faExpandAlt} class="text-lightIcon dark:text-gray-500 h-4 w-4" />
                </div>
                <div className="cursor-pointer p-1 px-2.5" onClick={props.minifiedResults}>
                    <FontAwesomeIcon icon={faCode} class="text-lightIcon dark:text-gray-500 h-4 w-4" />
                </div>
            </div>
        </div>
    );
}