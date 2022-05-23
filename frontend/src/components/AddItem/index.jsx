import React, {useContext} from "react";
import { ItemContext } from "../../contexts/ItemContext";

import { AddItemButton, AddIcon } from "./styles";

export default function AddItem() {
    const { handleAdd } = useContext(ItemContext)

    return (
        <li>
          <AddVideoButton onClick={handleAdd}>
            <AddIcon />
          </AddVideoButton>
        </li>
      );
}

