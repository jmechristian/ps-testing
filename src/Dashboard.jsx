import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, BeakerIcon } from '@heroicons/react/24/outline';
import { data } from './test';
import Test from './components/Test';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const navigation = [
  { name: 'Test 1', href: '0', icon: BeakerIcon, current: true },
  { name: 'Test 2', href: '1', icon: BeakerIcon, current: false },
  { name: 'Test 3', href: '2', icon: BeakerIcon, current: false },
  { name: 'Test 4', href: '3', icon: BeakerIcon, current: false },
  { name: 'Test 5', href: '4', icon: BeakerIcon, current: false },
  { name: 'Test 6', href: '5', icon: BeakerIcon, current: false },
  { name: 'Test 7', href: '6', icon: BeakerIcon, current: false },
  { name: 'Test 8', href: '7', icon: BeakerIcon, current: false },
  { name: 'Test 9', href: '8', icon: BeakerIcon, current: false },
  { name: 'Test 10', href: '9', icon: BeakerIcon, current: false },
  { name: 'Test 11', href: '10', icon: BeakerIcon, current: false },
  { name: 'Test 12', href: '11', icon: BeakerIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isIndex, setIsIndex] = useState(0);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-50 lg:hidden'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-dark-dark/80' />
            </Transition.Child>

            <div className='fixed inset-0 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='relative mr-16 flex w-full max-w-xs flex-1'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
                      <button
                        type='button'
                        className='-m-2.5 p-2.5'
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className='sr-only'>Close sidebar</span>
                        <XMarkIcon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-dark-dark px-6 pb-4 ring-1 ring-white/10'>
                    <div className='flex h-32 shrink-0 items-center'>
                      <img
                        className='h-24 w-24'
                        src='https://packschool.s3.amazonaws.com/PS_com+LOGO+1.png'
                        alt='Your Company'
                      />
                    </div>
                    <nav className='flex flex-1 flex-col'>
                      <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                        <li>
                          <ul role='list' className='-mx-2 space-y-1'>
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-800 text-white'
                                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon
                                    className='h-6 w-6 shrink-0'
                                    aria-hidden='true'
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-dark-dark px-6 pb-4'>
            <div className='flex h-30 shrink-0 items-center'>
              <img
                className='h-20 mt-5 w-auto'
                src='https://packschool.s3.amazonaws.com/PS_com+LOGO+1.png'
                alt='Your Company'
              />
            </div>
            <nav className='flex flex-1 flex-col'>
              <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                <li>
                  <ul role='list' className='-mx-2 space-y-1'>
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <div
                          onClick={() => setIsIndex(Number(item.href))}
                          className={classNames(
                            Number(item.href) === isIndex
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon
                            className='h-6 w-6 shrink-0'
                            aria-hidden='true'
                          />
                          {item.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className='mt-auto'>
                  <a
                    href='#'
                    className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white'
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className='lg:pl-72'>
          <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-700 bg-dark-mid px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
            <button
              type='button'
              className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>

            {/* Separator */}
            <div
              className='h-6 w-px bg-dark-dark/10 lg:hidden'
              aria-hidden='true'
            />

            <div className='flex flex-1 gap-x-4 justify-between lg:gap-x-6'>
              <div
                onClick={() => (isIndex === 0 ? {} : setIsIndex(isIndex - 1))}
              >
                <ChevronLeftIcon className='w-9 h-10 fill-white cursor-pointer' />
              </div>
              <div className='flex items-center gap-x-4 lg:gap-x-6'>
                <div
                  onClick={() =>
                    isIndex === data.length - 1 ? {} : setIsIndex(isIndex + 1)
                  }
                >
                  <ChevronRightIcon className='w-9 h-10 fill-white cursor-pointer' />
                </div>
              </div>
            </div>
          </div>

          <main className='py-10 bg-dark-mid grid this-height'>
            {/* MAIN STUFF */}
            <Test isIndex={isIndex} />
          </main>
        </div>
      </div>
    </>
  );
}
