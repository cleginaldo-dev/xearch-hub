'use client'

import { Footer } from '@/src/Layout/Footer'
import Header from '@/src/Layout/Header'
import classes from '@/src/Layout/Layout.module.css'
import { Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { Sidebar } from './Sidebar/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const mobile = useMediaQuery('(max-width: 36em)')
  const middleScreen = useMediaQuery('(min-width: 65em)')
  return (
    <>
      <div className={classes.main}>
        <Header />
        <Flex>
          {(middleScreen === undefined || middleScreen) && <Sidebar />}
          <Flex direction="column" px={mobile ? 10 : 20} mih="100vh" w="100%">
            {children}
          </Flex>
        </Flex>
        <Footer />
      </div>
    </>
  )
}
