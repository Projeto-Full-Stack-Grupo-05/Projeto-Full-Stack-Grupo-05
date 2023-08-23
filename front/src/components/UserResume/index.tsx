import { UserContext } from "../../context/UserContext/UserContext";
import { useContext } from "react";
import { Card } from "./style";

export default function CardUserResume() {
  const { user } = useContext(UserContext);
  return (
    <Card>
      <div>
        <div>
          <h3>{user?.userImg}</h3>
        </div>

        <h6>{user?.name}</h6>
        <span>{user?.profile}</span>

        <p>{user?.description}</p>

        <button>Criar anuncio</button>
      </div>
    </Card>
  );
}
