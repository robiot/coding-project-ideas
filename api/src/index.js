import { Router } from 'itty-router'
import { v4 as uuidv4 } from 'uuid'
const router = Router()

const corsheaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function response(text, data = {}) {
    data.headers = { ...data.headers, ...corsheaders }
    return new Response(text, data)
}

router.post('/user/login', async request => {
    var user
    var password
    try {
        const content = await request.text()
        const buffer = Buffer.from(content, 'base64')
            .toString()
            .split(':')
        if (buffer.length != 2) {
            return response(
                JSON.stringify({ status: 'fail', message: 'Data error' })
            )
        }
        user = buffer[0]
        password = buffer[1]
    } catch (error) {
        return response(
            JSON.stringify({ status: 'fail', message: 'Data error' })
        )
    }

    const data = JSON.parse(await USERS.get(user))
    if (data === null) {
        return response(
            JSON.stringify({
                status: 'fail',
                message: 'User or password incorrect.',
            })
        )
    }

    if (data.password === password) {
        await sleep(Math.floor(Math.random() * (50 - 0 + 1) + 0))
        return response(
            JSON.stringify({ status: 'success', token: data.token })
        )
    } else {
        await sleep(Math.floor(Math.random() * (50 - 0 + 1) + 0))
        return response(
            JSON.stringify({
                status: 'fail',
                message: 'User or password incorrect.',
            })
        )
    }
})

// {
//   "title": "Tic Tac Toe",
//   "description" : "A simple tic tac toe game",
//   "difficulty" : "1",
//   "tags" : '{"Python", "Beginner"}',
//   "author" : "robiot"
//   "token" : "asdasdAsdasd-asdasd-asdasd-sdsad"
// }

router.post('/idea/new', async request => {
    try {
        const content = await request.json()
        const data = JSON.parse(await USERS.get(content.author))
        if (data === null) {
            return response('', { status: 401 })
        }

        if (data.token === content.token) {
            //const listlength = JSON.parse(JSON.stringify(await IDEAS.list())).keys.length
            const title = content.title.substring(0, 25)
            const description = content.description.substring(0, 200)
            const difficulty = content.difficulty > 5 ? 5 : content.difficulty

            const id = `${title.toLowerCase().replace(/\s/g, '-')}-${uuidv4()}`
            IDEAS.put(
                id,
                JSON.stringify({
                    title: title,
                    description: description,
                    difficulty: difficulty,
                    author: content.author,
                    voters: [],
                })
            )
            return response(id)
        }
        return response('', { status: 401 })
    } catch (error) {
        return response('', { status: 501 })
    }
})

router.get('/idea/list', async request => {
  return response( JSON.stringify(JSON.parse(JSON.stringify(await IDEAS.list())).keys, null, 2) );
})

router.options('*', () => response('', { status: 200 }))

router.all('*', () => response('404, not found', { status: 404 }))

addEventListener('fetch', e => {
    e.respondWith(router.handle(e.request))
})
