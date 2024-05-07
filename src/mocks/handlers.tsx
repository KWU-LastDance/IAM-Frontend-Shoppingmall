import { rest } from 'msw'

const items : Array<{id: number, name: string, price: number, review: number, img: string, cnt: number}> = [
    {id: 1, name: '사과 - 상', price: 3000, review: 2, img: '../public/img/apple.jpg', cnt: 99},
    {id: 2, name: '사과 - 중', price: 2000, review: 3, img: '../public/img/apple.jpg', cnt: 50},
    {id: 3, name: '사과 - 하', price: 1000, review: 1, img: '../public/img/apple.jpg', cnt: 70},
    {id: 4, name: '배 - 상', price: 5000, review: 5, img: '../public/img/apple.jpg', cnt: 99},
    {id: 5, name: '배 - 중', price: 4000, review: 4, img: '../public/img/apple.jpg', cnt: 80},
    {id: 6, name: '배 - 하', price: 3000, review: 3, img: '../public/img/apple.jpg', cnt: 40},
]

export const handlers = [
    rest.get('/api/item', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(items))
    }),


]