import React, { useEffect, useState } from 'react'
import { href, Link, useLocation } from 'react-router-dom'
import { dummyProfileData } from '../assets/assets'
import { CalendarIcon, DollarSignIcon, FileTextIcon, icons, LayoutGrid, MenuIcon, SettingsIcon, UserIcon, XIcon } from 'lucide-react';
export default function Sidebar() {

    const { pathname } = useLocation();
    const [username, setUserName] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName);

    }, [])

    //close mobile sidebar on route change
    useEffect(() => {
        setMobileOpen(false);

    }, [pathname])

    const role="" || "EMPLOYEE";
    const navItems=[
        {
            name:"Dashboard",
            href:"/dashboard",
            icon:LayoutGrid
        },

        role=="ADMIN" ?
        {
            name:"Employee",
            href:"/employee",
            icon:UserIcon
        } : null,

        {
            name:"Attandance",
            href:"/attendance",
            icon:CalendarIcon
        },
        {
            name:"Leave",
            href:"/leave",
            icon:FileTextIcon
        },

        {
            name:"Paylsips",
            href:"/payslips",
            icon:DollarSignIcon
        },
        {
            name:"Settings",
            href:"/settings",
            icon:SettingsIcon
        }
    ]

    const sidebarContent = (
        <>

            {/* Brand header */}

            <div className='px-5 pt-6 pb-5 border-b border-whote/6'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <UserIcon className='text-white size-7' />
                        <div>

                            <p className='font-semibold text-[13px] text-white tracking-wide'>Employee MS</p>
                            <p className='text-[11px] text-slate-500 font-medium'>Managment System</p>
                        </div>
                    </div>
                    {/* Close menu on mobile */}
                    <button onClick={() => setMobileOpen(false)} className='lg:hidden text-slate-400 hover:text-white p-1'>

                        <XIcon size={18} />
                    </button>
                </div>


            </div>

            {/* User profile card */}
            <div>
                {username &&(
                   <div className='mx-3 mt-4 mb-1 p-3 rounded-lg bg-white/3 border border-white/4'>
                    <div className='flex items-center gap-3'>
                        <div className='w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center ring-1 ring-white/10 shrink-0'>
                            {/* UserName Icon */}
                            <span className='text-slate-400 text-xs font-semibold' >
                            {username.charAt(0).toUpperCase()}
                            </span>
                        </div>
                        <div className='min-w-0'>
                            <p className='text-[13px] font-medium text-slate-200 truncate'>{username}</p>
                            <p className='text-[11px] text-slate-500 truncate'>{role==="ADMIN"?"Administrator":"Employee"}</p>
                        </div>
                    </div>
                   </div>
                )}
            </div>

            {/* Section label */}
            <div className='px-5 pt-5 pb-2'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500'>Navigation</p>
            </div>

            {/* Navigation list */}
            <div className='flex-1 px-3 space-y-0.5 overflow-y-auto'>
                {navItems.filter(Boolean).map((utem)=>{
                    const isActive=pathname.startsWith(utem.href)
                    return(
                    <Link>
                    </Link>
                    )
                })}
            </div>

            {/* Logout */}

        </>
    )
    return (
        <>

            {/* Mobile hamburger button */}

            <button
                onClick={() => setMobileOpen(true)}
                className='lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg border border-white/10'>

                <MenuIcon size={18} className='' />
            </button>


            {/* Mobile overlay */}

            {mobileOpen &&

                <div className='lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40'
                    onClick={() => setMobileOpen(false)}
                />
            }


            {/* Sidebar-desktop */}

            <aside className='hidden lg:flex flex-col h-full w-[260px]
   bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white shrink-0 border-r border-white/4
   
   '>
                {/* Sidebar content */}

                {sidebarContent}
            </aside>



            {/* Sidebar Mobile */}
            <aside className={`lg:hidden fixed inset-y-0 left-0 w-72
    bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white z-50 flex-col transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {sidebarContent}
            </aside>
        </>
    )
}
