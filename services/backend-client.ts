import type { IPost } from "../context/posts-context"

const API_BASE_URL = "https://us-central1-noon-39ac7.cloudfunctions.net/"

const POST = async (path, data) => {
  const result = await fetch(API_BASE_URL+path, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return await result.json()
}

const GET = async (path) => {
  console.log('get', API_BASE_URL+path)
  const result = await fetch(API_BASE_URL+path, {
    method: "GET",
    headers: {
      'Accept': 'application/json'
    }
  })
  return await result.json()
}

export interface IFetchPosts {
  data: IPost[]
  message: string
}

export const fetchPosts = async (): Promise<IFetchPosts> => GET("fetchposts")

export const makeFavourite = async (data): Promise<void> => POST("makeFavourite", data)
