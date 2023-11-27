import axios, {RawAxiosRequestHeaders} from "axios";

const defaultHeaders: RawAxiosRequestHeaders = {

};
const jsonHeaders: RawAxiosRequestHeaders = {
    "Content-Type": "application/json",
    ...defaultHeaders

};
const formDataHeaders: RawAxiosRequestHeaders = {
    "Content-Type": "multipart/form-data",
    ...defaultHeaders
};
const baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;

const axiosJsonInstance = axios.create({
    headers: jsonHeaders,
    baseURL
});

const axiosFormDataInstance = axios.create({
    headers: formDataHeaders,
    baseURL
});

export {
    axiosJsonInstance,
    axiosFormDataInstance
}