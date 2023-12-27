"use client"
import React, { useEffect, useState } from 'react'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import CaseStudieCart from './Card'
const CardContent = ({ useCase }) => {
    const [page, setPage] = useState(0)
    const [completedUseCase, setCompletedUseCase] = useState()
    useEffect(() => {
        const arr = [];
        for (let i = 0; i < useCase?.length / 8; i++) {
            arr.push(i + 1);
        }
        setCompletedUseCase(arr)
    }, [page, useCase])
    return (
        <Container>
            <Row>
                {
                    useCase?.map((curItem, keys) => (keys + 1 >= (8 * page + 1) && keys + 1 <= (8 * (page + 1))) && (
                        <Col key={keys} xxl={3} xl={3} lg={4} md={6} sm={6} xm={12} className='my-4'>
                            <CaseStudieCart {...curItem} />
                        </Col>
                    ))
                }
            </Row>
            {useCase?.length > 8 && <div className="d-flex m-auto justify-content-center">
                <Pagination>
                    <Pagination.First
                        onClick={() => {
                            setPage(0);
                        }} />
                    <Pagination.Prev
                        onClick={() => {
                            setPage(page > 0 ? page - 1 : page);
                        }} />
                    {completedUseCase?.map((res, key) => (
                        <Pagination.Item
                            key={key}
                            active={page + 1 == res}
                            onClick={() => {
                                setPage(key);
                            }} >
                            {res}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next
                        onClick={() => {
                            setPage((completedUseCase.length - 1) > page ? page + 1 : page);
                        }} />
                    <Pagination.Last
                        onClick={() => {
                            setPage(completedUseCase.length - 1);
                        }} />
                </Pagination>
            </div>}
        </Container>
    )
}

export default CardContent
