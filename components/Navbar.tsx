import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image 
          src="/hilink-logo.svg" alt="logo" width={74} height={29}/> {/* Using nextjs Image component. It is an optimized version of images that can significantly reduce load times. */} 
      </Link>
    </nav>
  )
}

export default Navbar