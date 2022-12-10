import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <div>
        <Link href="/home">
          Home
        </Link>

        <Link
          href={{
            pathname: "/blog/[id]",
            query: { id: "123" },
          }}
        >Blog
        </Link>
      </div>
    </div>

  )
}

