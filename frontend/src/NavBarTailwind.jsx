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
        <Popover className="relative bg-white dark:bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7x2 mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center border-b-2 dark:border-gray-600 border-gray-100 py-1 md:justify-start md:space-x-10">
                            <div className="flex justify-start">
                                <a href="#">
                                    <span className="font-medium dark:text-white">XML</span>
                                </a>
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <Popover.Group as="nav" className="hidden md:flex space-x-2">
                                {navigation.map((firstLevel) => (

                                    firstLevel.child.length > 0 ?
                                        <Popover className="relative">
                                            {({ open }) => (
                                                <>
                                                    <Popover.Button
                                                        className={classNames(
                                                            open ? 'text-gray-900' : 'text-gray-500',
                                                            'group bg-white dark:bg-gray-800 inline-flex items-center text-base font-small hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-800'
                                                        )}
                                                    >
                                                        <span className="text-gray-900 dark:text-white dark:hover:bg-gray-600 hover:bg-gray-100 px-1">{firstLevel.name}</span>
                                                        <ChevronDownIcon
                                                            className={classNames(
                                                                open ? 'text-gray-600' : 'text-gray-400',
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
                                                                                                openSecond ? 'text-gray-900' : 'text-gray-500',
                                                                                                'group bg-white  inline-flex items-center text-base font-small hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-offset-1'
                                                                                            )}
                                                                                        >
                                                                                            <span className="flex-grow text-left text-gray-900 dark:text-black dark:hover:bg-white-600 hover:bg-gray-100 px-1">{secondLevel.name}</span>
                                                                                            <ChevronRightIcon
                                                                                                className={classNames(
                                                                                                    openSecond ? 'text-gray-600' : 'text-gray-400',
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
                                                                                                                    <p className="text-base font-small text-gray-900">{thirdLevel.name}</p>
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
                                                                                    <p className="text-base font-small text-gray-900">{secondLevel.name}</p>
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
                                            <span className="text-left flex-grow text-gray-900 dark:text-white dark:hover:bg-gray-600 hover:bg-gray-100 px-1">{firstLevel.name}</span>
                                        </a>
                                ))}

                            </Popover.Group>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

                                <div class="flex justify-end items-center space-x-2">
                                    <span class="text-sm text-gray-900 light dark:text-white">Light</span>
                                    <div>
                                        <input type="checkbox" name="" id="toggle" class="hidden" />
                                        <label for="toggle" >
                                            <div class="w-9 h-5 flex items-center bg-gray-300 rounded-full p-1">
                                                <div class="toggle-dot w-4 h-4 bg-white dark:bg-gray-500 rounded-full shadow-md transform duration-300 ease-in-out"></div>
                                            </div>
                                        </label>
                                    </div>
                                    <span class="text-sm text-gray-900 light dark:text-white">Dark</span>
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
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                                                    <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
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
        // <Disclosure as="nav" className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 flex-wrap p-6">
        //     {({ open }) => (
        //         <>
        //             <div className="flex items-center flex-grow text-black mr-6">
        //                 <span class="font-semibold text-xl tracking-tight">XML</span>
        //                 <div className="relative flex  flex-grow h-8">
        //                     <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        //                         {/* Mobile menu button*/}
        //                         <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        //                             <span className="sr-only">Open main menu</span>
        //                             {open ? (
        //                                 <XIcon className="block h-6 w-6" aria-hidden="true" />
        //                             ) : (
        //                                 <MenuIcon className="block h-6 w-6" aria-hidden="true" />
        //                             )}
        //                         </Disclosure.Button>
        //                     </div>
        //                     <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        //                         <div className="hidden sm:block sm:ml-6">
        //                             <div className="flex space-x-0">
        //                                 {navigation.map((item) => (
        //                                     <a
        //                                         key={item.name}
        //                                         href={item.href}
        //                                         className={classNames(
        //                                             item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white dark:text-gray-300',
        //                                             'px-3 py-2'
        //                                         )}
        //                                         aria-current={item.current ? 'page' : undefined}
        //                                     >
        //                                         {item.name}
        //                                         {item.child.length > 0 ? 
        //                                          <Transition show={open}>
        //                                              <Menu.Items static className="origin-top-right absolute left-0 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        //                                                  {item.child.map((childItem) => (
        //                                                     <Menu.Item>
        //                                                         {({ active }) => (
        //                                                             <a href="#" className={classNames(active ? 'bg-gray-100': '', 'block px-4 py-2 text-sm text-gray-700 text-left')}>
        //                                                                 {childItem.name}
        //                                                             </a>
        //                                                         )}
        //                                                     </Menu.Item>
        //                                                  ))}
        //                                              </Menu.Items>
        //                                          </Transition>
        //                                          : ""
        //                                          }
        //                                     </a>
        //                                 ))}
        //                                 {/* Profile dropdown */}
        //                                 <Menu as="div" className="ml-3 relative">
        //                                     {({ open }) => (
        //                                         <>
        //                                             <div>
        //                                                 <Menu.Button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
        //                                                     Options
        //                                                      {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
        //                                                     {/* <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> */}
        //                                                 </Menu.Button>
        //                                             </div>
        //                                             <Transition
        //                                                 show={open}
        //                                                 as={Fragment}
        //                                                 enter="transition ease-out duration-100"
        //                                                 enterFrom="transform opacity-0 scale-95"
        //                                                 enterTo="transform opacity-100 scale-100"
        //                                                 leave="transition ease-in duration-75"
        //                                                 leaveFrom="transform opacity-100 scale-100"
        //                                                 leaveTo="transform opacity-0 scale-95"
        //                                             >
        //                                                 <Menu.Items
        //                                                     static
        //                                                     className="origin-top-right absolute left-0 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        //                                                 >
        //                                                     <Menu.Item>
        //                                                         {({ active }) => (
        //                                                             <a
        //                                                                 href="#"
        //                                                                 className={classNames(
        //                                                                     active ? 'bg-gray-100' : '',
        //                                                                     'block px-4 py-2 text-sm text-gray-700 text-left'
        //                                                                 )}
        //                                                             >
        //                                                                 Settings</a>
        //                                                         )}
        //                                                     </Menu.Item>
        //                                                     <Menu.Item>
        //                                                         {({ active }) => (
        //                                                             <a
        //                                                                 href="#"
        //                                                                 className={classNames(
        //                                                                     active ? 'bg-gray-100' : '',
        //                                                                     'block px-4 py-2 text-sm text-gray-700 text-left'
        //                                                                 )}
        //                                                             >
        //                                                                 View License
        //                                                             </a>
        //                                                         )}
        //                                                     </Menu.Item>
        //                                                     <Menu.Item>
        //                                                         {({ active }) => (
        //                                                             <a
        //                                                                 href="#"
        //                                                                 className={classNames(
        //                                                                     active ? 'bg-gray-100' : '',
        //                                                                     'block px-4 py-2 text-sm text-gray-700 text-left'
        //                                                                 )}
        //                                                             >
        //                                                                 About
        //                                                             </a>
        //                                                         )}
        //                                                     </Menu.Item>
        //                                                 </Menu.Items>
        //                                             </Transition>
        //                                         </>
        //                                     )}
        //                                 </Menu>

        //                                 <a href="#" class="inline-block py-2 px-3 text-gray-400 cursor-not-allowed underline">Last edited was yesterday at 23:16</a>

        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        //                         <div class="flex justify-end items-center space-x-2">
        //                             <span class="text-sm text-white light dark:text-gray-500">Light</span>
        //                             <div>
        //                                 <input type="checkbox" name="" id="toggle" class="hidden" />
        //                                 <label for="toggle" >
        //                                     <div class="w-9 h-5 flex items-center bg-gray-300 rounded-full p-1">
        //                                         <div class="toggle-dot w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out"></div>
        //                                     </div>
        //                                 </label>
        //                             </div> 
        //                             <span class="text-sm text-gray-500 dark:text-gray-100">Dark</span>
        //                         </div>
        //                         <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        //                             <span className="sr-only">View notifications</span>
        //                             <BellIcon className="h-6 w-6" aria-hidden="true" />
        //                         </button>

        //                         {/* Profile dropdown */}
        //                         <Menu as="div" className="ml-3 relative">
        //                             {({ open }) => (
        //                                 <>
        //                                     <div>
        //                                         <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        //                                             <span className="sr-only">Open user menu</span>
        //                                             <img
        //                                                 className="h-8 w-8 rounded-full"
        //                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        //                                                 alt=""
        //                                             />
        //                                         </Menu.Button>
        //                                     </div>
        //                                     <Transition
        //                                         show={open}
        //                                         as={Fragment}
        //                                         enter="transition ease-out duration-100"
        //                                         enterFrom="transform opacity-0 scale-95"
        //                                         enterTo="transform opacity-100 scale-100"
        //                                         leave="transition ease-in duration-75"
        //                                         leaveFrom="transform opacity-100 scale-100"
        //                                         leaveTo="transform opacity-0 scale-95"
        //                                     >
        //                                         <Menu.Items
        //                                             static
        //                                             className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        //                                         >
        //                                             <Menu.Item>
        //                                                 {({ active }) => (
        //                                                     <a
        //                                                         href="#"
        //                                                         className={classNames(
        //                                                             active ? 'bg-gray-100' : '',
        //                                                             'block px-4 py-2 text-sm text-gray-700'
        //                                                         )}
        //                                                     >
        //                                                         Your Profile
        //                                                     </a>
        //                                                 )}
        //                                             </Menu.Item>
        //                                             <Menu.Item>
        //                                                 {({ active }) => (
        //                                                     <a
        //                                                         href="#"
        //                                                         className={classNames(
        //                                                             active ? 'bg-gray-100' : '',
        //                                                             'block px-4 py-2 text-sm text-gray-700'
        //                                                         )}
        //                                                     >
        //                                                         Settings
        //                                                     </a>
        //                                                 )}
        //                                             </Menu.Item>
        //                                             <Menu.Item>
        //                                                 {({ active }) => (
        //                                                     <a
        //                                                         href="#"
        //                                                         className={classNames(
        //                                                             active ? 'bg-gray-100' : '',
        //                                                             'block px-4 py-2 text-sm text-gray-700'
        //                                                         )}
        //                                                     >
        //                                                         Sign out
        //                                                     </a>
        //                                                 )}
        //                                             </Menu.Item>
        //                                         </Menu.Items>
        //                                     </Transition>
        //                                 </>
        //                             )}
        //                         </Menu>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="block lg:hidden">
        //                 <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        //                     <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        //                 </button>
        //             </div>
        //             {/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        //                 <div className="text-sm lg:flex-grow">
        //                 {navigation.map((item) => (
        //                         <a
        //                             key={item.name}
        //                             href={item.href}
        //                             className={classNames(
        //                                 item.current ? 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4' : 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
        //                             )}
        //                             aria-current={item.current ? 'page' : undefined}
        //                         >
        //                             {item.name}
        //                         </a>
        //                     ))}
        //                 </div>
        //             </div>*/}
        //             <Disclosure.Panel className="sm:hidden">
        //                 <div className="px-2 pt-2 pb-3 space-y-1">
        //                     {navigation.map((item) => (
        //                         <a
        //                             key={item.name}
        //                             href={item.href}
        //                             className={classNames(
        //                                 item.current ? 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4' : 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
        //                             )}
        //                             aria-current={item.current ? 'page' : undefined}
        //                         >
        //                             {item.name}
        //                         </a>
        //                     ))}
        //                 </div>
        //             </Disclosure.Panel>
        //         </>
        //     )}
        // </Disclosure>
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