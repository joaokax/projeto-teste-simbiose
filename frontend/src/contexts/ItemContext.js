import { createContext, useState } from "react";
import FormModal from "../components/FormModal";

export const ItemContext = createContext();

export function ItemContextProvider({children}) {
    const [openFormModal, setOpenFormModal] = useState(false)

    function handleAdd() {
        setOpenFormModal(true);
    }

    return (
        <ItemContext.Provider value={{handleAdd}}>
            {children}
            {openFormModal && <FormModal />}
        </ItemContext.Provider>
    )
}

