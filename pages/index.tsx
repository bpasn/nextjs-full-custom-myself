import React, { FC, ReactElement } from 'react'
import { GetServerSideProps, GetServerSidePropsResult, GetStaticProps, GetStaticPropsResult, GetServerSidePropsContext, PreviewData } from 'next'
import style from '../styles/Home.module.css'
import axios, { AxiosResponse } from 'axios'
import { Data } from './api/hello'
import { ParsedUrlQuery } from 'querystring'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import SignUpComponent from '../components/SignUpComponent'
import AuthScreen from '../screens/AuthScreen'


interface Props {
  result?: any,
  message?: string,
  error?: string | unknown
}

const Home: FC<Props> = (props: Props): ReactElement => {
  return (
    <AuthScreen />
  )
}



export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>): Promise<GetServerSidePropsResult<Props>> => {
  let wording: string = "Hello World";
  const serverSide = axios.create({
    baseURL: process.env.API_URL
  })
  const { data }: AxiosResponse<Data, any> = await serverSide.get("/api/hello")
  return {
    props: {
      message: JSON.stringify(data.result)
    }
  }
}

const charectorString = (s: string): string => {
  let nString: string = "";
  if (s.split(" ").length > 0) {
    for (let i: number = 0; i < s.split(" ").length; i++) {
      nString += s.split(" ")[i].substring(0, 1).toUpperCase() + s.split(" ")[i].substring(1).toLocaleLowerCase() + " "
    }
    return nString;
  }
  nString = s.substring(0, 1).toUpperCase() + s.substring(1).toLocaleLowerCase()
  return nString;
}
export default Home