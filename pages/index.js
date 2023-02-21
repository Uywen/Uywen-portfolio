import HeaderComponent from "./header"

export default () => (
    <div>
           <div>
            <img src="/Me.jpg" alt="my-image" />
            </div>
            <br></br>
            <HeaderComponent></HeaderComponent>
            <br></br>
        <p>
            Im Uywen Africa 19 years old,I have always loved playing around with computers as a young boy.<br></br>
            In high school i started taking my passion for computers seriously and started coding in HTML
            and CSS.<br></br>Later I found out what these programming languages are capable of and the many<br></br>
            other programming languages out there.I then decided to join a coding bootcamp to sharpen my technical skills<br></br>
            in full stack web development.
        </p>
        <p>Im an aspiring full stack web developer that has knowledge of the following programming languages:
            <br></br>
            <br></br>
            - Javascript
            <br></br>
            - CSS
            <br></br>
            - HTML
            <br></br>
            - React
            <br></br>
            - GIT
            <br></br>
            - Node Js
            <br></br>
            - Mongo DB
            <br></br>
            - Express
            <br></br>
            - Next JS
            <br></br>
            <br></br>
        </p>
        <style jsx>{`
        img{
            height:20rem;
            display:block;
            margin-left:auto;
            margin-right:auto;
            border-radius:50%
        }
        p{
            margin:auto;
            width:60%;
            border:4px solid white;
            padding:10px;
            font-size:15px
        }`}</style>
        <style global jsx>{`
        body{
            background: lightblue
        }`}</style>
    </div>
)