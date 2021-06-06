import { Fragment } from 'react'
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import {
    BellIcon,
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    ChevronRightIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

<script>
    if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.querySelector('html').classList.add('dark')
    } else if (localStorage.theme === 'dark') {
        document.querySelector('html').classList.add('dark')
    }
</script>

const navigation = [
    { name: 'File', href: '#', current: false, child: [] },
    {
        name: 'Edit', href: '#', current: false, child: [
            {
                name: 'Option 1', href: '#', current: false, child: [
                    { name: 'Option 1', href: '#', current: false },
                    { name: 'Option 2', href: '#', current: false }
                ]
            },
            { name: 'Option 2', href: '#', current: false, child: [] },
            { name: 'Option 3', href: '#', current: false, child: [] }
        ]
    },
    { name: 'View', href: '#', current: false, child: [] },
    { name: 'Insert', href: '#', current: false, child: [] },
    { name: 'Format', href: '#', current: false, child: [] },
    { name: 'Tools', href: '#', current: false, child: [] },
    { name: 'Add-ons', href: '#', current: false, child: [] },
    { name: 'Help', href: '#', current: false, child: [] },
    {
        name: 'Options', href: '#', current: false, child: [
            { name: 'Option 1', href: '#', current: false, child: [] },
            { name: 'Option 2', href: '#', current: false, child: [] },
            { name: 'Option 3', href: '#', current: false, child: [] }
        ]
    }
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBarTailwind() {
    return (
        <Popover className="relative border-b-2 dark:border-DarkBorderUp border-lightBorderUp">
            {({ open }) => (
                <>
                    <div className="max-w-7x2 mx-auto">
                        <div className="flex justify-between items-center py-1 md:justify-start">                            
                            <div className="-mr-2 -my-2 md:hidden">
                                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-lightText hover:text-gray-500 hover:bg-DarkBG focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <Popover.Group as="nav" className="hidden md:flex space-x-2 m-0">
                                {navigation.map((firstLevel) => (

                                    firstLevel.child.length > 0 ?
                                        <Popover className="relative">
                                            {({ open }) => (
                                                <>
                                                    <Popover.Button
                                                        className={classNames(
                                                            open ? 'text-lightText' : 'text-lightText',
                                                            'group bg-white dark:bg-DarkBG inline-flex items-center text-base font-small hover:text-DarkBG focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-800'
                                                        )}
                                                    >
                                                        <span className="text-lightText dark:text-DarkText dark:hover:bg-DarkBG hover:bg-gray-100 px-1">{firstLevel.name}</span>
                                                        <ChevronDownIcon
                                                            className={classNames(
                                                                open ? 'text-lightText' : 'text-lightText',
                                                                'mt-1 h-5 w-5 group-hover:text-gray-500'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </Popover.Button>
                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        enter="transition ease-out duration-150 transform"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-1000 transform"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel
                                                            static
                                                            className="absolute z-10 -ml-4 mt-1 transform px-2 w-56 max-w-md sm:px-0 lg:ml-0 lg:left-0 lg:-translate-x-1/1"
                                                        >
                                                            <div className="rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-4">
                                                                    {firstLevel.child.map((secondLevel) => (
                                                                        secondLevel.child.length > 0 ?

                                                                            <Popover className="relative">
                                                                                {({ openSecond }) => (
                                                                                    <>
                                                                                        <Popover.Button style={{width:'100%'}}
                                                                                            className={classNames(
                                                                                                openSecond ? 'text-lightText' : 'text-lightText',
                                                                                                'group bg-white  inline-flex items-center text-base font-small hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-offset-1'
                                                                                            )}
                                                                                        >
                                                                                            <span className="flex-grow text-left text-lightText dark:text-DarkText dark:hover:bg-white-600 hover:bg-gray-100 px-1">{secondLevel.name}</span>
                                                                                            <ChevronRightIcon
                                                                                                className={classNames(
                                                                                                    openSecond ? 'text-lightText' : 'text-lightText',
                                                                                                    'mt-1 h-5 w-5 group-hover:text-gray-500'
                                                                                                )}
                                                                                                aria-hidden="true"
                                                                                            />
                                                                                        </Popover.Button>
                                                                                        <Transition
                                                                                            show={openSecond}
                                                                                            as={Fragment}
                                                                                            enter="transition ease-out duration-200"
                                                                                            enterFrom="opacity-0 translate-y-1"
                                                                                            enterTo="opacity-100 translate-y-0"
                                                                                            leave="transition ease-in duration-1000"
                                                                                            leaveFrom="opacity-100 translate-y-0"
                                                                                            leaveTo="opacity-0 translate-y-1"
                                                                                        >
                                                                                            <Popover.Panel
                                                                                                static
                                                                                                className="fixed top-0 z-10 -ml-4 mt-2 transform px-2 w-56 max-w-md sm:px-0 lg:ml-28 lg:left-1/2 lg:-translate-x-1/1"
                                                                                            >
                                                                                                <div className="rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                                                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-4">
                                                                                                        {secondLevel.child.map((thirdLevel) => (

                                                                                                            <a
                                                                                                                key={thirdLevel.name}
                                                                                                                href={thirdLevel.href}
                                                                                                                className="-m-3 p-1 flex items-start rounded-lg hover:bg-gray-50"
                                                                                                            >
                                                                                                                <div className="ml-4">
                                                                                                                    <p className="text-base font-small text-lightText">{thirdLevel.name}</p>
                                                                                                                </div>
                                                                                                            </a>
                                                                                                        ))}
                                                                                                    </div>
                                                                                                </div>
                                                                                            </Popover.Panel>
                                                                                        </Transition>
                                                                                    </>
                                                                                )}
                                                                            </Popover>
                                                                            :
                                                                            <a
                                                                                key={secondLevel.name}
                                                                                href={secondLevel.href}
                                                                                className="-m-3 p-1 flex items-start rounded-lg hover:bg-gray-50"
                                                                            >
                                                                                <div className="ml-3">
                                                                                    <p className="text-base font-small text-lightText">{secondLevel.name}</p>
                                                                                </div>
                                                                            </a>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                        :
                                        <a href="#" className="text-base font-small">
                                            <span className="text-left flex-grow text-lightText dark:text-DarkText dark:hover:bg-gray-600 hover:bg-gray-100 px-1">{firstLevel.name}</span>
                                        </a>
                                ))}

                            </Popover.Group>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

                                <div class="flex justify-end items-center space-x-2">
                                    <span class="text-sm text-lightText light dark:text-DarkText">Light</span>
                                    <div>
                                        <input type="checkbox" name="" id="toggle" class="hidden" />
                                        <label for="toggle" >
                                            <div class="w-9 h-5 flex items-center bg-gray-300 rounded-full p-1">
                                                <div class="toggle-dot w-4 h-4 bg-white dark:bg-DarkText rounded-full shadow-md transform duration-300 ease-in-out"></div>
                                            </div>
                                        </label>
                                    </div>
                                    <span class="text-sm text-lightText light dark:text-DarkText">Dark</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            static
                            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="font-medium">XML</span>
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-lightText hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                                >
                                                    <span className="ml-3 text-base font-medium text-lightText">{item.name}</span>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

window.onload = function () {

    const checkbox = document.querySelector("#toggle");
    const html = document.querySelector("html");

    const toggleDarkMode = function () {
        checkbox.checked
            ? html.classList.add("dark")
            : html.classList.remove("dark")
    }

    toggleDarkMode();
    checkbox.addEventListener("click", toggleDarkMode);
}