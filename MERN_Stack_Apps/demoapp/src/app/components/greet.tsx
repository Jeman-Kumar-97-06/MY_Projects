export const Greet = () => {
    console.log("Greet comp");//This is execute on the server and then sent to client: client can press f12 and see "Server : Greet comp"
    return (
        <h1>Greet Comp</h1>
    )
}