import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import { useWindowHeight, useWindowWidth } from '../../hooks'

const Navigation = () => {

    const data = useStaticQuery(graphql`
        query NavQuery {
            sanityMenuBar(title: {eq: "Navigation"}) {
                menuLink {
                    _id
                    title
                    slug {
                        current
                    }
                    page {
                        _id
                        title
                        slug {
                            current
                        }
                    }
                    subMenu {
                        _id
                        title
                        page {
                            title
                            slug {
                                current
                            }
                        }
                    }
                }
                mobileMenuBG {
                    ...ImageWithPreview
                }
            }
            sanitySiteId(title: {eq: "Essence of Beauty"}) {
                logo {
                    ...ImageWithPreview
                }
            }
        }
    `)

    let windowHeight = useWindowHeight()
    let windowWidth = useWindowWidth()

    const navLogo = data.sanitySiteId.logo
    const menuLinks = data.sanityMenuBar.menuLink
    const mobileNavBG = data.sanityMenuBar.mobileMenuBG

    const [ dropdownOpen, setDropdownOpen ] = useState(null)
    const [ mobileNavOpen, setMobileNavOpen ] = useState(false)
    const [ mobileDropdownOpen, setMobileDropdownOpen ] = useState(null)

    const closeMobileNav = () => {
        setMobileNavOpen(false)
        setMobileDropdownOpen(false)
    }

    useEffect(() => {
        if(windowWidth > 992){
             closeMobileNav()
        }
    }, [ windowWidth ])

    return(
        <nav onMouseLeave={() => setDropdownOpen(null)} className="bg-white flex flex-row items-center w-full p-1 rounded-b-md z-50">

            <Link to="/">
                <SanityImage {...navLogo} className="h-20 p-1 ml-2" alt="Essence of Beauty"/>
            </Link>

            {windowWidth >= 992 ?

                <div className="flex flex-row items-center mx-auto z-50">

                    {menuLinks.map((link, i) => {
                        return(
                            link.slug ?
                                <Link 
                                    key={link._id} 
                                    className="p-1 cursor-pointer hover:text-green mx-2"
                                    to={`/${link.slug.current}`}
                                    onMouseEnter={()=> setDropdownOpen(null)}
                                >
                                    <span className="text-lg font-semibold">{link.title}</span>
                                </Link>
                            : 
                                
                                    <div 
                                        key={link._id}
                                        className="relative p-1 cursor-pointer mx-2 hover:text-green" 
                                        onMouseEnter={()=> setDropdownOpen(link.title)}
                                        role="button"
                                        tabIndex={i}
                                    >
                                        <span className="text-lg font-semibold">{link.title}</span>
                                    
                                    {dropdownOpen === link.title ?
                                        link.subMenu.length === 0 ?
                                            <div className="absolute transform left-1/2 -translate-x-1/2 flex flex-col whitespace-nowrap p-2 z-30 shadow-md rounded-sm cursor-default text-black bg-white">
                                                {link.page.map((page) => {                          
                                                    return(
                                                        <Link 
                                                            key={page._id} 
                                                            className="p-1 cursor-pointer font-semibold hover:text-green mx-2"
                                                            to={`/${page.slug.current}`}
                                                        >
                                                            {page.title}
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        : 
                                            <div className="absolute transform left-1/2 -translate-x-1/2 flex flex-row whitespace-nowrap p-2 z-30 shadow-md rounded-sm cursor-default text-black bg-white">
                                                {link.subMenu.map((subMenu) => {                          
                                                    return(
                                                        <div key={subMenu._id} className="flex flex-col mx-3 p-1">
                                                            <h3 className="border-b-2 border-green text-xl font-semibold text-brown my-2">{subMenu.title}</h3>
                                                            {subMenu.page.map((page) => {
                                                                return(
                                                                    <Link 
                                                                        key={page._id} 
                                                                        className="p-1 cursor-pointer font-semibold hover:text-green mx-2"
                                                                        to={`/${page.slug.current}`}
                                                                >
                                                                        {page.title}
                                                                    </Link>
                                                                )
                                                            })}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                    : null
                                    }
                                </div>
                        )    
                    })}

                </div>
            :

                <div className="relative ml-auto">
                
                    <button 
                        className={`${mobileNavOpen === true ? 'fixed top-4' : 'absolute top-1/2 transform -translate-y-1/2'} right-3 h-12 w-12 z-50`}
                        onClick={() => setMobileNavOpen(mobileNavOpen === true ? false : true)}
                    >
                        <div
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 rounded-lg shadow-md transform transition duration-150 ease-in-out ${
                                mobileNavOpen === true
                                ? "-translate-y-1/2 rotate-45 bg-lightGreen w-8"
                                : "-translate-y-3 bg-darkGreen w-10 md:w-12"
                            }`}
                        />
                        <div
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1 rounded-lg shadow-md transform transition duration-75 ease-in-out ${
                                mobileNavOpen === true ? "scale-0" : "bg-darkGreen w-10 md:w-12"
                            }`}
                        />
                        <div
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 rounded-lg shadow-md transform transition duration-150 ease-in-out ${
                                mobileNavOpen === true
                                ? "-translate-y-1/2 -rotate-45 bg-lightGreen w-8"
                                : "translate-y-2 bg-darkGreen w-10 md:w-12"
                            }`}
                        />
                    </button>



                    <div className={`transform transition-all duration-300 flex-col fixed top-0 left-0 z-40 ${mobileNavOpen === true ? '' : 'translate-x-full'}`} style={{ height: windowHeight, width: windowWidth }}>
                        
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-green to-darkGreen z-20 opacity-90 overflow-auto">

                            <div className="relative top-20 flex flex-col items-center text-white">

                                {menuLinks.map((link, i) => {
                                    return(
                                        link.slug ?
                                        <Link 
                                            key={link._id} 
                                            className="p-1 mx-2"
                                            to={`/${link.slug.current}`}
                                            onClick={() => closeMobileNav()}
                                        >
                                            <span className="text-2xl font-semibold">{link.title}</span>
                                        </Link>
                                    :
                                        <div 
                                            key={link._id} 
                                            className="relative p-1 mx-2 flex flex-col items-center" 
                                            onClick={()=> setMobileDropdownOpen(mobileDropdownOpen === link.title ? null : link.title)}
                                            onKeyDown={()=> setMobileDropdownOpen(mobileDropdownOpen === link.title ? null : link.title)}
                                            role="button"
                                            tabIndex={i}
                                        >

                                        <span className="text-2xl font-semibold">{link.title}</span>
                                
                                        {mobileDropdownOpen === link.title ?
                                            link.subMenu.length === 0 ?
                                                <div className="flex flex-col items-center p-2 mb-2">
                                                    {link.page.map((page) => {                          
                                                        return(
                                                            <Link 
                                                                key={page._id} 
                                                                className="pb-1 font-semibold text-lg"
                                                                to={`/${page.slug.current}`}
                                                            >
                                                                {page.title}
                                                            </Link>
                                                        )
                                                    })}
                                                </div>
                                            : 
                                                <div className="flex flex-col items-center p-2 mb-2">
                                                    {link.subMenu.map((subMenu) => {                          
                                                        return(
                                                            <div key={subMenu._id} className="flex flex-col w-full">
                                                                <h3 className="border-b-2 border-green text-xl font-semibold text-brown mt-2">{subMenu.title}</h3>
                                                                {subMenu.page.map((page) => {
                                                                    return(
                                                                        <Link 
                                                                            key={page._id} 
                                                                            className="pb-1 font-semibold text-lg"
                                                                            to={`/${page.slug.current}`}
                                                                    >
                                                                            {page.title}
                                                                        </Link>
                                                                    )
                                                                })}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                        : null
                                        }
                                    </div>
                                    )
                                })}

                            </div>
                        </div>

                        <div className="absolute top-0 left-0 h-full w-full z-10">
                            <SanityImage {...mobileNavBG} 
                                alt=""
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  }}
                            />
                        </div>

                    </div>
                               
                </div>

            }

        </nav>
    )
}

export default Navigation