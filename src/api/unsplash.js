import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID w5e8YeUw35Ljg0JuTy1fD02lR0rceUia-RSTAIPxMv4'
    }
});