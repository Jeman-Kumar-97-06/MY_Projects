import {users} from '../route';//the 'users' object from 'route' file outside.

export async function GET( _request : Request, {params} : {params : {id : string }} ) { //_request not request bcoz unused
    const {id} = await params;
    const user = users.find(user=>user.id==parseInt(id));
    return Response.json(user);
}