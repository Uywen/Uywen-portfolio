import Link from "next/link"

function HeaderComponent() {
    return(
<div>
    {

    }
    <Link href="/">
        <p>Home</p>
    </Link>
    <Link href="contact">
        <p>Contact me</p>
    </Link>
    <Link href="project">
        <p>My Projects</p>
    </Link>
        <style jsx>{`
        p{
            margin-left:38rem;
            width: 60%
        }
        `}</style>
    
</div>
    )
}

export default HeaderComponent
