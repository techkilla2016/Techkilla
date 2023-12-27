"use client"
import React, { useEffect, useState } from 'react'
import ProdcutCard from '@/components/product/card'
import YouTubePlayer from '@/components/general/video/youtube'
import { Pagination, Container, Col, Row } from 'react-bootstrap'
const CardContent = ({ product, desc }) => {
    const [isPlay, setIsPlay] = useState(false)
    const [curVideo, setCurVideo] = useState('')
    const [page, setPage] = useState(0)
    const [completedUseCase, setCompletedUseCase] = useState()
    const handleClose = () => {
        setIsPlay(false)
    }
    const handleOpen = (payload) => {
        setIsPlay(true)
        if (payload === '/' || payload === '') {
            setCurVideo('https://www.youtube.com/watch?v=JxMa3t3XDts&t=4s')
        } else {
            setCurVideo(payload)
        }
    }
    useEffect(() => {
        const arr = [];
        for (let i = 0; i < product?.length / 8; i++) {
            arr.push(i + 1);
        }
        setCompletedUseCase(arr)
    }, [page, product?.length])
    return (
        <>
            <div className='product-container'>
                <Container>
                    <p className='text-center first_line' >
                        {desc}
                    </p>
                    <div className='Heading'>
                        products
                    </div>
                    <Row className='justify-content-center'>
                        {
                            product?.map((curItem, keys) => {
                                return (
                                    (curItem.id >= (8 * page + 1) && curItem.id <= (8 * (page + 1))) && <Col key={keys} xxl={3} xl={3} lg={4} md={6} sm={6} xm={12} className=''>
                                        <ProdcutCard {...curItem} handleClick={handleOpen} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <div className="d-flex m-auto justify-content-center mt-4">
                        <Pagination className="">
                            <Pagination.First onClick={() => { setPage(0); }} />
                            <Pagination.Prev
                                onClick={() => {
                                    setPage(page > 0 ? page - 1 : page);
                                }}
                            />
                            {completedUseCase?.map((res, key) => (
                                <Pagination.Item
                                    key={key}
                                    active={page + 1 == res}
                                    onClick={() => {
                                        setPage(key);
                                    }}
                                >
                                    {res}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next
                                onClick={() => {
                                    setPage((completedUseCase.length - 1) > page ? page + 1 : page);
                                }}
                            />
                            <Pagination.Last
                                onClick={() => {
                                    setPage(completedUseCase.length - 1);
                                }}
                            />
                        </Pagination>
                    </div>
                </Container>
            </div>

            {
                isPlay && <YouTubePlayer url={curVideo} handleClose={handleClose} />
            }
        </>
    )
}

export default CardContent
