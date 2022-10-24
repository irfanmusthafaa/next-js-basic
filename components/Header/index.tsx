import Link from 'next/link'

export default function Header() {
  return (
    <header className='container'>
      <ul>
        <li><Link href="/home"><a>Home</a></Link></li>
        <li><Link href="/home"><a>Blog</a></Link></li>
        <li><Link href="/home"><a>Users</a></Link></li>
      </ul>
    </header>
  )
}
