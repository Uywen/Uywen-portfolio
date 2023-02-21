import Link from 'next/link'

export default function project(){
    return(
    <div>
        {
            
        }
        <Link href='https://github.com/Uywen/hangman-app'>
        <p>GITHUB HANGMAN</p>
        </Link>
        <Link href="https://github.com/Uywen/to-do-list">
            <p>GITHUB TODOLIST</p>
        </Link>
        <Link href="https://app.netlify.com/sites/uywentodolist/settings/general">
            <p>Netlify App</p>
        </Link>
        <Link href="https://github.com/Uywen/footwebsite">
            <p>GITHUB FOOTBALL WEBSITE</p>
        </Link>
        <style global jsx>{`
        body{
            background:lightblue
        }`}</style>
    </div>
)
}
