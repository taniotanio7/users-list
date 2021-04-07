import React from "react";
import "twin.macro";

interface IErrorProps {
  error?: Error;
}

export default function ErrorBox({ error }: IErrorProps) {
  return (
    <div tw="text-center">
      <h2 tw="text-xl font-semibold text-emerald-900 dark:text-white mb-4">
        Error {error.name}
      </h2>
      <p tw="dark:opacity-80">Users list couldn't be fetched</p>
      {error.message && <p tw="opacity-70">{error.message}</p>}
    </div>
  );
}
