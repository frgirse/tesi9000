'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from "./Authentication.module.css"

export default function Authentication() {
  const routePathName = usePathname()
  const isActive: (pathname: string) => boolean = (pathname) =>
    routePathName === pathname

  return (
    <nav>
      <div className="flex flex-row">
                                                
       
      
      
        <Link href="/register" legacyBehavior>
          <a className="w-24 text-center bg-amber-600 rounded-xl text-white" data-active={isActive('/register')}>Registration</a>
        </Link>
        
      </div>
    </nav>
  )
}