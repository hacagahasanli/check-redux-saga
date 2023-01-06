import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions/users";
import { Card } from "./Card";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(
      getUsers({
        id: 1,
        name: "Hasanli Hacagha",
        company: {
          name: "WAP",
          catchPhrase: "Multi-layered client server neural-net",
        },
      })
    );
  }, [dispatch]);

  return (
    <>
      {users.length > 0 && users?.map((user) => <Card {...{ user }} key={user.id} />)}
      {users.length === 0 && <p>No users available!</p>}
    </>
  );
};

export default Users;
