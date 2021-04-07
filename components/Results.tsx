import React from "react";
import tw, { css } from "twin.macro";
import { User } from "../types/user";

interface IResultsProps {
  users: User[];
}

const markerStyles = css`
  li::marker {
    ${tw`text-gray-600 dark:text-orange-100 text-sm`}
  }
`;

export default function Results({ users }: IResultsProps) {
  if (!users || users?.length === 0) {
    return <p>No users found</p>;
  }

  return (
    <ol
      css={[
        tw`list-inside list-decimal text-gray-800 dark:text-gray-200`,
        markerStyles,
      ]}
    >
      {users.map(user => (
        <li key={user.id}>
          <span>{user.name}</span>
          <a
            href={`https://${user.website}`}
            rel="noopener noreferrer"
            tw="ml-2 md:ml-4 text-emerald-900 dark:text-orange-200 opacity-80 text-sm font-light "
          >
            @{user.username}
          </a>
        </li>
      ))}
    </ol>
  );
}
