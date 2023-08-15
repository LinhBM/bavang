import axios from "@axios";

const CONTROLLER_NAME = 'https://64d312b867b2662bf3dba3cc.mockapi.io'

const GetAll = async (param: any) => {
  const res = await axios.get(`${CONTROLLER_NAME}/getall`, {params: param})
  return res
}

const Post = async (param: any) => {
  const res = await axios.post(`${CONTROLLER_NAME}/getall`, param)
}

const Put = async (param: any) => {
  const res = await axios.put(`${CONTROLLER_NAME}/getall/${param.id}`, param)
}

const Delete = async (param: any) => {
  const res = await axios.delete(`${CONTROLLER_NAME}/getall/${param.id}`)
}

const ProcessService = {GetAll, Post, Put, Delete}

export default ProcessService
