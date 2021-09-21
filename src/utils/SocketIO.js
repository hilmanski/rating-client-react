import { endpoint } from '../utils/API'
const io = require("socket.io-client");

export const socket = io(endpoint);