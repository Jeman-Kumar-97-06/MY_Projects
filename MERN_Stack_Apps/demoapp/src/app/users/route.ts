export const users = [
    {id:1,name:"John Doe"},
    {id:2,name:"Jane Doe"}
]

//When request is sent to http://localhost:3000/users : the following response json with users will be sent.
export async function GET() {
    return Response.json(users);
}
//Receives a POST request :
export async function POST(request:Request) {
    const user = await request.json();
    //Create a new user based on the data sent via the req body through POST req.
    const newUser = {
        id : users.length +1,
        name : user.name
    };
    //Push it to the users array.
    users.push(newUser);
    return new Response(JSON.stringify(newUser),{
        headers : {
            'Content-Type':'application/json'
        },
        status:201,
    })
};


//