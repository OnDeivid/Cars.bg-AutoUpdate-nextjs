const serverURL = 'https://6949-178-254-251-51.ngrok-free.app'
const endpointURL = 'https://automation-eosin.vercel.app'


const endpoints = {
    home: '/',
    getStarted: '/GetStarted',
    aboutUs: '/AboutUs',
    guide: '/Guide',
    login: '/Login'
}
const textEndpoint = {
    home: 'Начало',
    getStarted: 'Започни',
    guide: 'Ръководство',
    aboutUs: 'Нас'
}

export { endpoints, textEndpoint, serverURL, endpointURL };