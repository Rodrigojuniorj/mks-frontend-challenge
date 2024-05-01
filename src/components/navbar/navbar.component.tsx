'use client'

import './navbar.scss'
import 'react-modern-drawer/dist/index.css'

import Image from 'next/image'
import { useState } from 'react'
import { Drawer as DrawerComponent } from '@/components/drawer/drawer.component'
import Drawer from 'react-modern-drawer'
import { useCart } from '@/context/cart-context'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { total } = useCart()

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <nav className="header">
      <div className="title">
        <h1>MKS</h1>
        <span>Sistemas</span>
      </div>

      <button className="card_button" onClick={toggleDrawer}>
        <Image src="/store/cart.svg" width={19} height={18} alt="Cart" />
        <span>{total}</span>
      </button>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="drawer_container"
        size={486}
      >
        <DrawerComponent toggleDrawer={toggleDrawer} />
      </Drawer>
    </nav>
  )
}
