import { ComponentProps } from 'react'

export const Pool = (props: ComponentProps<'svg'>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.2971 7.20007H12.4971V3.19995C12.4971 1.43263 13.9298 0 15.6971 0C17.4644 0 18.8972 1.43263 18.8972 3.19995H17.2971C17.2971 2.31631 16.5807 1.60005 15.6971 1.60005C14.8134 1.60005 14.0972 2.31631 14.0972 3.19995V12.0001H12.4971V8.80012H5.2971V10.4001H3.69705V3.20002C3.69705 1.4327 5.12982 6.80089e-05 6.89715 6.80089e-05C8.66447 6.80089e-05 10.0971 1.4327 10.0971 3.20002H8.49705C8.49705 2.31638 7.78079 1.60011 6.89715 1.60011C6.0135 1.60011 5.2971 2.31638 5.2971 3.20002V7.20007ZM1.59424 14.3428L1 12.8573C3.85069 11.717 6.97772 11.717 10.3501 12.8411C13.3778 13.8503 16.1173 13.8503 18.5999 12.8573L19.1942 14.3428C16.3435 15.4831 13.2164 15.4831 9.84407 14.3589C6.81633 13.3497 4.07687 13.3497 1.59424 14.3428ZM1.59424 18.3426L1 16.8571C3.85069 15.7168 6.97772 15.7168 10.3501 16.841C13.3778 17.8502 16.1173 17.8502 18.5999 16.8571L19.1942 18.3426C16.3435 19.4829 13.2164 19.4829 9.84407 18.3588C6.81633 17.3497 4.07687 17.3497 1.59424 18.3426Z"
      fill={props.fill || 'currentColor'}
    />
  </svg>
)
