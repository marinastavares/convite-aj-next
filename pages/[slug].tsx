import type { NextPage } from "next";
import Home from "../components/Home";
import { useRouter } from 'next/router'

const Page: NextPage = () => {
  const router = useRouter()

  return (
    <Home  slug={router?.asPath?.replace('/','')} />
  );
};

export default Page;
