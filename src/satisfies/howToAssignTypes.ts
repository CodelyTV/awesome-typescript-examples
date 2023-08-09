export type User = {
  id: string;
  name: string;
  contact: `${string}@${string}` | number;
};

const user1: User = {
  id: "d00b8323-3301-40f4-bef0-6531256fb290",
  name: "Javi",
  contact: "javiuser@email.com",
};

user1.contact;
//     ^?

const user2 = {
  id: "d00b8323-3301-40f4-bef0-6531256fb290",
  name: "Javi",
} as User;

user2.contact;
//     ^?

const user3 = {
  id: "d00b8323-3301-40f4-bef0-6531256fb290",
  name: "Javi",
  contact: 123456789,
} satisfies User;

user3.contact;
//     ^?
