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
    CheckIcon,
    UserIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useToasts, ToastProvider } from 'react-toast-notifications'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



<script>
    if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.querySelector('html').classList.add('dark')
    } else if (localStorage.theme === 'dark') {
        document.querySelector('html').classList.add('dark')
    }
</script>


const navigation = [
    {
        name: 'File', href: '#', separator: false, check: false, icon: '', child: [
            { name: 'New', href: '#', separator: false, check: false, icon: 'ChevronRightIcon', child: [] },
            { name: 'Open', href: '#', separator: false, check: false, icon: '', child: [] },
            { name: 'Save', href: '#', separator: true, check: false, icon: '', child: [] },
            { name: 'Share', href: '#', separator: false, check: false, icon: '', child: [] }
        ]
    },
    {
        name: 'Edit', href: '#', separator: false, check: false, icon: '', child: [
            { name: 'Undo', href: '#', separator: false, check: false, icon: '', child: [] },
            { name: 'Redo', href: '#', separator: true, check: false, icon: '', child: [] },
            { name: 'Cut', href: '#', separator: false, check: false, icon: '', child: [] },
            { name: 'Copy', href: '#', separator: false, check: false, icon: '', child: [] },
            { name: 'Paste', href: '#', separator: true, check: false, icon: '', child: [] },
            { name: 'Find', href: '#', separator: false, check: false, icon: '', child: [] },
            { name: 'Find/Replace', href: '#', separator: false, check: false, icon: '', child: [] }
        ]
    },
    {
        name: 'Tools', href: '#', separator: false, check: false, icon: '', child: [
            { name: 'IDE Theme', href: '#', separator: true, check: false, icon: 'BellIcon', child: [] },
            { name: 'Key Bindings', href: '#', separator: false, check: false, icon: '', child: [] },
            { name: 'Font Wrap', href: '#', separator: false, check: true, icon: '', child: [] },
            { name: 'Show Line Number', href: '#', separator: true, check: false, icon: '', child: [] },
            { name: 'Expand', href: '#', separator: false, check: false, icon: '', child: [] },
            { name: 'Collapse', href: '#', separator: true, check: false, icon: '', child: [] },
            { name: 'Go to fullscreen', href: '#', separator: true, check: false, icon: '', child: [] },
            { name: 'Font Size', href: '#', separator: false, check: false, icon: '', child: [] }
        ]
    },
    {
        name: 'Convert', href: '#', separator: false, check: false, icon: '', child: [
            { name: 'XML', href: '#', separator: false, check: false, icon: '', child: [] },
            { name: 'JSON', href: '#', separator: false, check: false, icon: '', child: [] },
            { name: 'Tree', href: '#', separator: false, check: false, icon: '', child: [] }
        ]
    },
    {
        name: 'View', href: '#', separator: false, check: false, icon: '', child: [
            { name: 'Hide Icon Bar', href: '#', separator: false, check: false, icon: '', child: [] },
            { name: 'Hide Right Pan', href: '#', separator: false, check: false, icon: '', child: [] },
            { name: 'Hide Left Pan', href: '#', separator: true, check: false, icon: '', child: [] },
            { name: 'Mode', href: '#', separator: false, check: false, icon: '', child: [] }
        ]
    }
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const ToastDemo = ({ content }) => {
    const { addToast } = useToasts()
    return (
        <Popover.Button onClick={() => addToast(content, {
            appearance: 'success',
            autoDismiss: false,
            content: 'Hello'
        })}>
            Add Toast
        </Popover.Button>
    )
}

export default function NavBarTailwind() {
    const notifySuccess = () => toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const notifyError = () => toast.error('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (

        <Popover className="relative border-b-2 dark:border-DarkBorderUp border-lightBorderUp">
            {({ open }) => (
                <>
                    <div className="max-w-7x2 mx-auto">
                        <div className="flex justify-between items-center py-1 md:justify-start">
                            <div className="-mr-2 -my-2 md:hidden"> 
                                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-DarkBG focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                                                            open ? 'text-black' : 'text-black',
                                                            'group bg-white dark:bg-DarkBG inline-flex items-center relative -top-2 text-sm hover:text-DarkBG focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-800'
                                                        )}
                                                    >
                                                        <span className="text-black dark:text-DarkText dark:hover:bg-DarkBG hover:bg-gray-100 px-1">{firstLevel.name}</span>

                                                    </Popover.Button>
                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
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
                                                                                        <Popover.Button style={{ width: '100%' }}
                                                                                            className={classNames(
                                                                                                openSecond ? 'text-black' : 'text-black',
                                                                                                'group bg-white  inline-flex items-center text-sm hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-offset-1'
                                                                                            )}
                                                                                        >
                                                                                            <span className="flex-grow text-left text-black dark:text-DarkText dark:hover:bg-white-600 hover:bg-gray-100 px-1">{secondLevel.name}</span>
                                                                                            <ChevronRightIcon
                                                                                                className={classNames(
                                                                                                    openSecond ? 'text-black' : 'text-black',
                                                                                                    'mt-1 h-5 w-5 group-hover:text-gray-500'
                                                                                                )}
                                                                                                aria-hidden="true"
                                                                                            />
                                                                                        </Popover.Button>
                                                                                        <Transition
                                                                                            show={openSecond}
                                                                                            as={Fragment}
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
                                                                                                                    <p className="text-sm text-black">{thirdLevel.name}</p>
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
                                                                                className={classNames(
                                                                                    secondLevel.separator ? '-m-3 p-1 flex items-start hover:bg-gray-50 border-b-2 border-lightBorderUp pb-2' : '-m-3 p-1 flex items-start hover:bg-gray-50'
                                                                                )}
                                                                            >
                                                                                <div className="w-full flex">
                                                                                    <div class="h-4 w-4">
                                                                                        {
                                                                                            secondLevel.icon != '' ? <BellIcon /> : ''
                                                                                        }
                                                                                    </div>

                                                                                    <p className="text-sm text-black pl-2 w-full text-left">
                                                                                        {secondLevel.name}
                                                                                        {
                                                                                            secondLevel.check ? <CheckIcon class="h-4 w-4 float-right" /> : ''
                                                                                        }
                                                                                    </p>
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
                                        <a href="#" className="text-sm">
                                            <span className="text-left flex-grow text-black dark:text-DarkText dark:hover:bg-gray-600 hover:bg-gray-100 px-1">{firstLevel.name}</span>
                                        </a>
                                ))}

                            </Popover.Group>
                            <p class="text-sm dark:text-DarkText underline pl-12 text-light">Last edit was 2 days ago</p>

                            <div class="ml-5">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-4 rounded mr-5" onClick={notifySuccess}>Notify Success!</button>
                                <button class="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-1 px-4 rounded" onClick={notifyError}>Notify Error!</button>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                />
                            </div>

                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-4 rounded mr-5"><UserIcon class="w-5 h-5 float-left pr-1" /> Share</button>
                                <div class="flex justify-end items-center space-x-2">
                                    <span class="text-sm text-black light dark:text-DarkText">Light</span>
                                    <div>
                                        <input type="checkbox" name="" id="toggle" class="hidden" />
                                        <label for="toggle" >
                                            <div class="w-9 h-5 flex items-center bg-gray-300 rounded-full p-1">
                                                <div class="toggle-dot w-4 h-4 bg-white dark:bg-DarkText rounded-full shadow-md transform duration-300 ease-in-out"></div>
                                            </div>
                                        </label>
                                    </div>
                                    <span class="text-sm text-black light dark:text-DarkText">Dark</span>
                                </div>
                                <Menu as="div" className="relative inline-block text-left ml-5">
                                    {({ open }) => (
                                        <>
                                            <div>
                                                <Menu.Button className="inline-flex justify-center w-full">
                                                    <img src="user.png" class="w-6 h-6" />
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
                                                    className="origin-top-right z-50 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                >
                                                    <div className="py-1">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Account settings
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Support
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    License
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <form method="POST" action="#">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        type="submit"
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                            'block w-full text-left px-4 py-2 text-sm'
                                                                        )}
                                                                    >
                                                                        Sign out
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        </form>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </>
                                    )}
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
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
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                                                    <span className="ml-3 text-base font-medium text-black">{item.name}</span>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )
            }
        </Popover >

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