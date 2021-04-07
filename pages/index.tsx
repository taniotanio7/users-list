import React, { useState } from "react";
import "twin.macro";
import Head from "next/head";

import ErrorBox from "../components/ErrorBox";
import Results from "../components/Results";
import ResultsLoader from "../components/ResultsLoader";
import Input from "../components/ui/Input";

import { useFilteredUsers } from "../hooks/data/useFilteredUsers";
import { useUsers } from "../hooks/data/useUsers";

export default function Home() {
  const [filter, setFilter] = useState('')
  const { loading, error, data: users = [] } = useUsers();
  const filteredUsers = useFilteredUsers(users, filter);

  return (
    <>
      <Head>
        <title>Users list</title>
        <meta property="og:title" content="Users list app" key="title" />
      </Head>
      <header tw="pt-2 pb-4 md:(pt-4 pb-6) lg:pb-10 xl:pb-12">
        <h1 tw="text-center text-4xl md:text-6xl lg:text-8xl font-bold lg:font-semibold text-gray-900 dark:text-gray-100">
          Users list
        </h1>
      </header>
      <main tw="container mx-auto px-2">
        <article>
          <form tw="max-w-xl mx-auto">
            <Input
              name="User name"
              hideLabel
              placeholder="Search by user name..."
              value={filter}
              onChange={e => setFilter(e.target.value)}
            />
          </form>

          <div tw="max-w-2xl mx-auto mt-4 md:mt-6 lg:mt-8">
            <div tw="bg-emerald-50 text-gray-800 dark:(text-gray-200 bg-yellow-900) p-3 md:px-5 rounded-xl shadow-lg md:shadow-xl">
              {loading && <ResultsLoader />}
              {error && <ErrorBox error={error} />}
              {!loading && !error && users && <Results users={filteredUsers} />}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
