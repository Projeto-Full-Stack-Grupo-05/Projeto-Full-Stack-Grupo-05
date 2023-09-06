
import React, { useContext, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import {
  ButtonAddImg,
  ButtonExcluir,
  ButtonSave,
  DivButtons,
  FormModal,
  Header,
} from "./style";
import { CarContext } from "../../context/CarContext/carContext";
import { kenzieApi } from "../../services/kenzie-car";
import Modal from "../Modal";

export const ModalEditAnnounce: React.FC = () => {
  const carContext = useContext(CarContext);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    marca: "",
    modelo: "",
    ano: "",
    combustivel: "",
    cor: "",
    quilometragem: "",
    preco: "",
    precoFipe: "",
    descricao: "",
    imagemCapa: "",
    imagem1: "",
    imagem2: "",
  });
  const [marcas, setMarcas] = useState<string[]>([]);
  const [, setModelos] = useState<string[]>([]);
  const [modelosDaMarca, setModelosDaMarca] = useState<string[]>([]);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fieldName: string
  ) => {
    const { value } = event.target;

    if (fieldName === "marca") {
      setModelosDaMarca([]);
    }

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const response = await kenzieApi.get("/cars");
        const marcasArray = Object.keys(response.data) as string[];
        setMarcas(marcasArray);
      } catch (error) {
        console.error("Erro ao obter marcas:", error);
      }
    };

    const fetchModelos = async () => {
      try {
        const response = await kenzieApi.get("/cars");
        const modelosArray = (
          Object.values(response.data) as string[][]
        ).flat();
        setModelos(modelosArray);
      } catch (error) {
        console.error("Erro ao obter modelos:", error);
      }
    };

    fetchMarcas();
    fetchModelos();
  }, []);

  const handleAddGalleryImage = () => {
    setGalleryImages((prevImages) => [...prevImages, ""]);
  };

  const handleGalleryImageChange = (index: number, value: string) => {
    const updatedImages = [...galleryImages];
    updatedImages[index] = value;
    setGalleryImages(updatedImages);
  };

  return (
    <div>
      <button onClick={openModal}>Editar anúncio</button>
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <Header>
          <h2>Criar anúncio</h2>
          <p onClick={closeModal}>
            <MdClose size={21} />
          </p>
        </Header>
        <FormModal>
          <h3>Infomações do veículo</h3>

          <label>Marca</label>
          <select
            name="marca"
            value={formData.marca}
            onChange={(event) => handleInputChange(event, "marca")}
          >
            <option value="">Selecione a marca</option>
            {marcas.map((marca) => (
              <option key={marca} value={marca}>
                {marca}
              </option>
            ))}
          </select>

          <label>Modelo</label>
          {formData.marca && (
            <select
              name="modelo"
              value={formData.modelo}
              onChange={(event) => handleInputChange(event, "modelo")}
              disabled={!formData.marca}
            >
              <option value="">Selecione o modelo</option>
              {modelosDaMarca.map((modelo) => (
                <option key={modelo} value={modelo}>
                  {modelo}
                </option>
              ))}
            </select>
          )}
          <div>
            <div>
              <label>Ano</label>
              <input
                type="number"
                placeholder="Ano"
                value={formData.ano}
                onChange={(event) => handleInputChange(event, "ano")}
              />
            </div>

            <div>
              <label>Combustível</label>
              <input
                type="text"
                placeholder="Combustível"
                value={formData.combustivel}
                onChange={(event) => handleInputChange(event, "combustivel")}
              />
            </div>
          </div>
          <div>
            <div>
              <label>Cor</label>
              <input
                type="text"
                placeholder="Cor"
                value={formData.cor}
                onChange={(event) => handleInputChange(event, "cor")}
              />
            </div>
            <div>
              <label>Quilometragem</label>
              <input
                type="number"
                placeholder="Quilometragem"
                value={formData.quilometragem}
                onChange={(event) => handleInputChange(event, "quilometragem")}
              />
            </div>
          </div>
          <div>
            <div>
              <label>Preço</label>
              <input
                type="number"
                placeholder="R$"
                value={formData.preco}
                onChange={(event) => handleInputChange(event, "preco")}
              />
            </div>
            <div>
              <label>Preço tabela FIPE</label>
              <input
                type="number"
                placeholder="R$"
                value={formData.precoFipe}
                onChange={(event) => handleInputChange(event, "precoFipe")}
              />
            </div>
          </div>

          <label>Descrição</label>
          <input
            type="text"
            value={formData.descricao}
            onChange={(event) => handleInputChange(event, "descricao")}
          />

          <label>Imagem da capa</label>
          <input
            type="url"
            placeholder="https://image.com "
            value={formData.imagemCapa}
            onChange={(event) => handleInputChange(event, "imagemCapa")}
          />

          <label>1- Imagem da capa</label>
          <input
            type="url"
            placeholder="https://image.com"
            value={formData.imagem1}
            onChange={(event) => handleInputChange(event, "imagem1")}
          />

          <label>2- Imagem da capa</label>
          <input
            type="url"
            placeholder="https://image.com"
            value={formData.imagem2}
            onChange={(event) => handleInputChange(event, "imagem2")}
          />
          {galleryImages.map((image, index) => (
            <div key={index}>
              <label>{`${index + 3}- Imagem da galeria`}</label>
              <input
                type="url"
                placeholder="https://image.com"
                value={image}
                onChange={(event) =>
                  handleGalleryImageChange(index, event.target.value)
                }
              />
            </div>
          ))}
          <ButtonAddImg onClick={handleAddGalleryImage}>
            Adicionar campo para imagem da galeria
          </ButtonAddImg>

          <DivButtons>
            <ButtonExcluir onClick={() => carContext?.carDelete}>
              Excluir anúncio
            </ButtonExcluir>
            <ButtonSave>Salvar alterações</ButtonSave>
          </DivButtons>
        </FormModal>
      </Modal>
    </div>
  );
};