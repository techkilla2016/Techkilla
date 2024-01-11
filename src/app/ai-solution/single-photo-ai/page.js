import Header from '@/components/header'
import React from 'react'
import SingleAIPhoto from '@/components/ai-solution/single-photo-ai'
export const metadata = {
    title: 'AI Photo Booth | Techkilla',
    description: 'Develop by Techkilla Teams',
}
const PhotoAI = () => {
    return (
        <>
            <Header />
            <SingleAIPhoto />
        </>
    )
}

export default PhotoAI
