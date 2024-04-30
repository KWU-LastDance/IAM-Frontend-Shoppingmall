import { rest } from 'msw'

const ex : Array<{id: number, name: string, age: number}> = [
    {id: 1, name: 'John', age: 20},
]

const items : Array<{id: number, name: string, price: number, review: number, img: string}> = [
    {id: 1, name: '사과 - 상', price: 3000, review: 2, img: '../public/img/apple.jpg'},
    {id: 2, name: '사과 - 중', price: 2000, review: 3, img: '../public/img/apple.jpg'},
    {id: 3, name: '사과 - 하', price: 1000, review: 1, img: '../public/img/apple.jpg'},
    {id: 4, name: '배 - 상', price: 5000, review: 5, img: '../public/img/apple.jpg'},
    {id: 5, name: '배 - 중', price: 4000, review: 4, img: '../public/img/apple.jpg'},
    {id: 6, name: '배 - 하', price: 3000, review: 3, img: '../public/img/apple.jpg'},
]

export const handlers = [
    rest.get('/api/data', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(ex))
    }),
    rest.post('/api/data', (req, res, ctx) => {
        const {name, age} = req.body
        ex.push({id: ex.length+1, name, age})
        return res(ctx.status(200), ctx.json(ex))
    }),

    rest.get('/api/item', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(items))
    }),
]