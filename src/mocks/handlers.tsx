import { rest } from 'msw'
import { items } from './data'

export const handlers = [

    // 상품 조회, 검색
    rest.get('/api/v1/product', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(items))
    }),


]