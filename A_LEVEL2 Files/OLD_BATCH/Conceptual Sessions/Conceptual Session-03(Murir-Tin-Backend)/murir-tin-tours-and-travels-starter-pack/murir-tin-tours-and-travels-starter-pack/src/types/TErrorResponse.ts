export type TErrorResponse = {
  statusCode: number
  status: 'error' | 'fail'
  message: string
  issues: TErrorIssues[]
  // issues: [
  //   {
  //     path: string
  //     message: string
  //     kind: string
  //   },
  // ]
}

export type TErrorIssues = {
  path: string
  message: string
  kind: string
}
