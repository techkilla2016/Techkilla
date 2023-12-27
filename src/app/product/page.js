"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import Loader from '@/components/Loader/sniper'
const Page = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/')
    }, [router])
    return (
        <Loader />
    )
}

export default Page
