import swaddle from 'swaddle';

export function create(token?: string): ProxyHandler<Object> {
    const headers = {};

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return swaddle('', { headers });
}

const obj = create('').channels.get();