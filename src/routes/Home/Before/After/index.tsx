import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NotFound from "../../../../components/NotFound";
import UserDetailsCard from "../../../../components/UserDetailsCard";
import { UserDTO } from "../../../../models/userDTO";

import * as userService from "../../../../services/user-service";


export default function After() {

  const params = useParams();

  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    userService.findUser(String(params.username))
      .then(res => {
        console.log(res.data)
        setUser(res.data);
      })
      .catch(err => {
        console.log(err.response.data)

      })
  }, [])

  console.log(params.username)

  return (
    <>
      {
        user 
        ? <UserDetailsCard user={user} />
        : <NotFound />
      }
    </>
  )
}