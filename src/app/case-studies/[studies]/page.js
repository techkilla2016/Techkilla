import React from 'react'
import CaseStudiePage from '@/components/case-studies/page'
const page = ({ params }) => {
    return (
        <CaseStudiePage BaseUrl={process.env.BaseUrl} params={params} />
    )
}

export default page