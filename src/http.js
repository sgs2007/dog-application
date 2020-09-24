export class Http {

    static HEADERS = {'Content-Type': 'application/json'}

    static async get(url) {
        try {
            return await request(url, 'GET')
        } catch (error) {
            console.log(error)
        }
    }

    static async post(url, data={}) {
        try {
            return await request(url, "POST", data)
        } catch (error) {
            console.log(error)
        }
    }

    static async putch(url, data={}) {
        try {
            return await request(url, "PUTCH", data)
        } catch (error) {
            console.log
        }
    }

    static async delete(url) {
        try {
            return await request(url, "DELETE")
        } catch (error) {
            console.log(error)
        }
    }
    
}

async function request(url, method = "GET", data) {
    const config = {
        method,
        headers: Http.HEADERS
    }

    if (method === 'POST' || method === 'PATCH') {
        config.body = JSON.stringify(data)
    }

    const response = await fetch(url, config)

    return await response.json()
}