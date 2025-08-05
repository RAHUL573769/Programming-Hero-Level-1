/* eslint-disable no-unused-vars */
// export enum USER_ROLE {
//   user = 'user',
//   admin = 'admin',
// }

// const myRole = USER_ROLE.user
// console.log(myRole)

export const USER_ROLE = { user: 'user', admin: 'admin' } as const
export const USER_STATUS = { active: 'active', inActive: 'in-active' } as const
