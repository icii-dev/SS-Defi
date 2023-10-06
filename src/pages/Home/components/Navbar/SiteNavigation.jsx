import Logo from './components/Logo';
import LaunchAppButton from './components/LaunchAppButton';
import MobileMenuButton from './components/MobileMenuButton';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function SiteNavigation(props) {
    return (
        <>
            <div className="hidden md:block">
                <DesktopSiteNavigation />
            </div>
            <div className="md:hidden">
                <MobileSiteNavigation />
            </div>
        </>
    );
}

const MobileSiteNavigation = () => {
    return (
        <div
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            className="fixed top-0 z-[9999] flex h-[70px] w-screen justify-between px-[24px] py-[17px] backdrop-blur-[30px]"
        >
            <Popover className="flex w-full justify-between">
                {({ open }) => (
                    <>
                        <div className="flex items-center">
                            <Logo className="h-[30px] w-[141.388px]" />
                        </div>
                        <div className="flex items-center gap-3">
                            <LaunchAppButton />
                            <MobileMenuButton />
                        </div>
                        <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Popover.Panel
                                className="absolute left-0 top-[70px] flex w-full flex-col shadow-lg backdrop-blur-[30px] md:inline-flex md:max-h-full md:w-full md:min-w-0 md:flex-row md:items-center md:justify-between md:gap-[24px] md:overflow-y-visible md:border-b-0 md:shadow-none"
                                style={{
                                    maxHeight: 'calc(100vh - 5rem)',
                                    overflowY: 'auto',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <div className="stroke-secondary flex flex-col gap-[32px] py-[36px] md:w-full md:flex-shrink md:flex-row md:items-center md:justify-between md:border-y-0 md:py-0">
                                    <div className="flex flex-col gap-[32px] px-[16px] md:min-w-0 md:flex-shrink md:flex-row md:items-center md:gap-[32px] md:px-0">
                                        <a className="text-[16px] font-medium text-white md:text-[14px]" href="#about">
                                            About
                                        </a>
                                        <a
                                            className="text-[16px] font-medium text-white md:text-[14px]"
                                            href="#features"
                                        >
                                            Features
                                        </a>
                                        <a
                                            className="text-[16px] font-medium text-white md:text-[14px]"
                                            href="#ecosystem"
                                        >
                                            Ecosystem
                                        </a>
                                        <a className="text-[16px] font-medium text-white md:text-[14px]" href="#backed">
                                            Backers & Partners
                                        </a>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
};

const DesktopSiteNavigation = (props) => {
    return (
        <div
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            className="fixed top-0 z-[1000] flex h-[96px] w-screen justify-between px-[120px] py-[24px] backdrop-blur-[30px]"
        >
            <div className="flex items-center">
                <Logo className="h-[48px] w-[212.082px]" />
            </div>
            <div className="hidden items-center text-[20px] font-bold md:flex md:gap-[5px] lg:gap-[20px]">
                <AnchorLink
                    href="#about"
                    className="button-navbar-hover flex w-fit cursor-pointer items-center font-['Roboto'] text-[16px] md:text-[12px] min-[1000px]:text-[16px] font-bold text-white max-[815px]:hidden px-[20px] py-[12px]"
                >
                    <div className="text-white">About</div>
                </AnchorLink>
                <AnchorLink
                    href="#features"
                    className="button-navbar-hover flex w-fit cursor-pointer items-center font-['Roboto'] text-[16px] md:text-[12px] min-[1000px]:text-[16px] font-bold text-white max-[815px]:hidden px-[20px] py-[12px]"
                >
                    <div className="text-white">Features</div>
                </AnchorLink>
                <AnchorLink
                    href="#ecosystem"
                    className="button-navbar-hover flex w-fit cursor-pointer items-center font-['Roboto'] text-[16px] md:text-[12px] min-[1000px]:text-[16px] font-bold text-white max-[815px]:hidden px-[20px] py-[12px]"
                >
                    <div className="text-white">Ecosystem</div>
                </AnchorLink>
                <AnchorLink
                    href="#backed"
                    className="button-navbar-hover flex w-fit cursor-pointer items-center font-['Roboto'] text-[16px] md:text-[12px] min-[1000px]:text-[16px] font-bold text-white max-[815px]:hidden px-[20px] py-[12px]"
                >
                    <div className="text-white">Backers & Partners</div>
                </AnchorLink>
            </div>
            <div className="flex items-center gap-3">
                <LaunchAppButton styleButton="py-[12px] px-[24px] rounded-[16px] h-[48px] w-[175px]" />
            </div>
        </div>
    );
};
