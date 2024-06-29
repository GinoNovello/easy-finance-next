 
import { cookies } from 'next/headers'
 
async function create(data:any) {

     cookies().set({
         name: 'name',
         value: 'lee',
         httpOnly: true,
         path: '/',
        })

  
}

