import axios, {AxiosInstance, RawAxiosRequestHeaders} from "axios";

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
const octetStreamHeaders: RawAxiosRequestHeaders = {
    "Content-Type": "application/octet-stream",
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

const axiosOctetStreamInstance = axios.create({
    headers: octetStreamHeaders,
    baseURL
});

class AxiosApi {

    axiosJsonInstance: AxiosInstance
    axiosFormDataInstance: AxiosInstance
    axiosOctetStreamInstance: AxiosInstance
    constructor() {
        this.axiosJsonInstance = axiosJsonInstance;
        this.axiosFormDataInstance = axiosFormDataInstance
        this.axiosOctetStreamInstance = axiosOctetStreamInstance
    }

}

const axiosApi = new AxiosApi();

export {
    axiosJsonInstance,
    axiosFormDataInstance,
    axiosApi,
    AxiosApi,
}