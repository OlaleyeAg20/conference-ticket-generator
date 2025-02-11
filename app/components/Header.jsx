import React from 'react'
import Logos from './Logo'
import Link from 'next/link'
import { Button } from './Button'
import { Arrowright } from './Icon'

export const Header = () => {
  return (
    <header>
        <Logos />
        <nav className='nav'>
            <ul>
            <li>
                <Link href="/">Events</Link>
            </li>
            <li>
                <Link href="/">My Tickets</Link>
            </li>
            <li>
                <Link href="/">About Project</Link>
            </li>
            </ul>
        </nav>
        <Button>My Tickets <Arrowright /></Button>
    </header>
  )
}
