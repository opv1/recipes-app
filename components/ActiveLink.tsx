import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { IActiveLinkProps } from 'interfaces'

const ActiveLink: React.FC<IActiveLinkProps> = ({
  activeClassName,
  href,
  children,
}) => {
  const router = useRouter()

  let className = children.props.className || ''

  if (router.pathname === href) {
    className = `${className} ${activeClassName}`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

export default ActiveLink
