type HomeProps =
{
    children: React.ReactNode;
}

const Home = ({children}: HomeProps) => {
    return (
        <>
            <div style={{border: "1px solid black", padding: "10px"}}>
                <div>Home page</div>
            </div>
                {children} 
        </>
    )
}

export default Home;
