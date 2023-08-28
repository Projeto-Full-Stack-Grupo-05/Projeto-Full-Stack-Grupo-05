import { useContext } from "react"
import { BurguerMenu, DivFormInLine, ModalContent } from "./style"
import { UserContext } from "../../context/UserContext/UserContext"
import Modal from "../Modal/index"

export const UserMenu = () => {

    const { 
            editProfileIsOpen,
            setEditProfileisOpen,
            editAddressIsOpen,
            setEditAddressIsOpen,
        } = useContext(UserContext)
    return (
        <>
            <BurguerMenu>
                <p
                onClick={() => setEditProfileisOpen(!editProfileIsOpen)}>Editar perfil</p>
                <p
                onClick={() => setEditAddressIsOpen(!editAddressIsOpen)}>Atualizar endereço</p>
            </BurguerMenu>
            {
                editProfileIsOpen &&
                <Modal 
                isOpen={editProfileIsOpen}
                onClose={() => setEditProfileisOpen(!editProfileIsOpen)}>
                    <ModalContent>
                        <div>
                            <h2>Editar perfil</h2>
                            <h4
                            onClick={() => setEditProfileisOpen(!editProfileIsOpen)}>X</h4>
                        </div>
                        <h3>Informações pessoais</h3>
                        <form action="submit">
                            <fieldset>
                                <label htmlFor="name">Nome</label>
                                <input type="text" />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="email">Email</label>
                                <input type="text" />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="cpf">CPF</label>
                                <input type="text" />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="cellphone">Celular</label>
                                <input type="text" />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="birthDate">Data de nascimento</label>
                                <input type="date" />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="description">Descrição</label>
                                <textarea id="description" rows={4} cols={10} />
                            </fieldset>
                        <div>
                            <button
                            onClick={() => setEditProfileisOpen(!editProfileIsOpen)}
                            className="btn-cancel">Cancelar</button>
                            <button
                            className="btn-exclude">Excluir Perfil</button>
                            <button
                            className="btn-save">Salvar alterações</button>
                        </div>
                        </form>
                    </ModalContent>
                </Modal>
            }
            {
                editAddressIsOpen && 
                <Modal
                isOpen={editAddressIsOpen}
                onClose={() => setEditAddressIsOpen(!editAddressIsOpen)}>
                    <ModalContent>
                        <div>
                            <h2>Editar endereço</h2>
                            <h2
                            onClick={() => setEditAddressIsOpen(!editAddressIsOpen)}>X</h2>
                        </div>
                            <h3>Informações de endereço</h3>
                            <form action="submit">
                                <fieldset>
                                    <label htmlFor="cep">CEP</label>
                                    <input type="number" />
                                </fieldset>
                                <DivFormInLine>
                                    <fieldset>
                                        <label htmlFor="state">Estado</label>
                                        <input type="text" />
                                    </fieldset>
                                    <fieldset>
                                        <label htmlFor="city">Cidade</label>
                                        <input type="text" />
                                    </fieldset>
                                </DivFormInLine>
                                <fieldset>
                                    <label htmlFor="street">Rua</label>
                                    <input type="text" />
                                </fieldset>
                                <DivFormInLine>
                                    <fieldset>
                                        <label htmlFor="number">Número</label>
                                        <input type="number" />
                                    </fieldset>
                                    <fieldset>
                                        <label htmlFor="complement">Complemento</label>
                                        <input type="text" />
                                    </fieldset>
                                </DivFormInLine>
                            <div className="flex-end">
                                <button
                                onClick={() => setEditAddressIsOpen(!editAddressIsOpen)}
                                className="btn-cancel">Cancelar</button>
                                <button
                                className="btn-save">Salvar alterações</button>
                            </div>
                            </form>
                    </ModalContent>
                </Modal>
            }      
        </>
    )
}