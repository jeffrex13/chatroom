import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Sidebar from '@/components/Sidebar'
import ChannelMenu from '@/components/ChannelMenu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Sidebar */}
        <Sidebar />

        <div className="flex">
          {/* Channel bar */}
          <ChannelMenu />
          {/* Content */}
          <div className="bg-gray-700 h-screen w-screen" />
        </div>
      </main>
    </>
  )
}
