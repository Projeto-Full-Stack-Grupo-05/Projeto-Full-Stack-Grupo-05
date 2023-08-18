import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import { ButtonAddAnnouce, ButtonAddImg, ButtonCancel, ButtonSubmit, DivButtons, Header, FormModal } from './styles';
import { api } from '../../services/api';
import kenzieApi from '../../services/kenzie-car';


const ModalAddAnnounce: React.FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    marca: '',
    modelo: '',
    ano: '',
    combustivel: '',
    cor: '',
    quilometragem: '',
    preco: '',
    precoFipe: '',
    descricao: '',
    imagemCapa: '',
    imagem1: '',
    imagem2: '',
  });

  const [marcas, setMarcas] = useState<string[]>([]); 
  const [modelos, setModelos] = useState<string[]>([]);
  
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  
  const handleSubmit = async () => {
    try {
      const response = await api.post('/sales', formData);
      console.log('Venda criada:', response.data);
      closeModal();
    } catch (error) {
      console.error('Erro ao criar venda:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

useEffect(() => {
  const fetchMarcas = async () => {
    try {
      const response = await kenzieApi.get('/cars');
      const marcasArray = Object.keys(response.data) as string[];
      setMarcas(marcasArray);
      console.log(marcasArray)
    } catch (error) {
      console.error('Erro ao obter marcas:', error);
    }
  };

  const fetchModelos = async () => {
    try {
      const response = await kenzieApi.get('/cars');
      const modelosArray = (Object.values(response.data) as string[][]).flat();
      setModelos(modelosArray);
      
    } catch (error) {
      console.error('Erro ao obter modelos:', error);
    }
  };

  fetchMarcas();
  fetchModelos();
}, []);

const [galleryImages, setGalleryImages] = useState<string[]>([]);

const handleAddGalleryImage = () => {
  setGalleryImages(prevImages => [...prevImages, '']);
};

const handleGalleryImageChange = (index: number, value: string) => {
  const updatedImages = [...galleryImages];
  updatedImages[index] = value;
  setGalleryImages(updatedImages);
};
  return (
    <div>
      <ButtonAddAnnouce onClick={openModal}>Criar anuncio</ButtonAddAnnouce>
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <Header>
          <h2>Criar anúncio</h2>
          <p onClick={closeModal}>X</p>
        </Header>
          <FormModal>
            <h3>Infomações do veículo</h3>  

            <label>Marca</label>
        <select
          name="marca"
          value={formData.marca}
          onChange={handleInputChange}
        >
          <option value="">Selecione a marca</option>
          {marcas.map(marca => (
            <option key={marca} value={marca}>
              {marca}
            </option>
          ))}
        </select>

        <label>Modelo</label>
        <select
          name="modelo"
          value={formData.modelo}
          onChange={handleInputChange}
          disabled={!formData.marca} 
        >
          <option value="">Selecione o modelo</option>
          {formData.marca && kenzieApi[formData.marca].map(modelo => (
            <option key={modelo.name} value={modelo.name}>
              {modelo.name}
            </option>
          ))}
        </select>

            <div>
              <div>
                <label>Ano</label>
                <input type="number" placeholder='Ano' value={formData.ano} />
              </div>

              <div>
                <label>Combustível</label>
                <input type="text" placeholder='Combustível' value={formData.combustivel} />
              </div>
            </div>
            <div>
              <div>
                <label>Cor</label>
                <input type="text" placeholder='Cor' value={formData.cor} />
              </div>
              <div>
                <label>Quilometragem</label>
                <input type="number" placeholder='Quilometragem' value={formData.quilometragem} />
              </div>
            </div>
            <div>
              <div>
                <label>Preço</label>
                <input type="number" placeholder='R$' value={formData.preco} />
              </div>
              <div>
                <label>Preço tabela FIPE</label>
                <input type="number" placeholder='R$'  value={formData.precoFipe}/>
              </div>
            </div>
            
            <label>Descrição</label>
            <input type="text"value={formData.descricao}/>

                <label>Imagem da capa</label>
                <input type="url" placeholder='Link img ' value={formData.imagemCapa}/>

                <label>1- Imagem da capa</label>
                <input type="url" placeholder='Link img' value={formData.imagem1}/>

                <label>2- Imagem da capa</label>
                <input type="url" placeholder='Link img' value={formData.imagem2 } />
            {galleryImages.map((image, index) => (
              <div key={index}>

                  <label>{`${index + 3}- Imagem da galeria`}</label>
                  <input
                    type="url"
                    placeholder="Link img"
                    value={image}
                    onChange={event => handleGalleryImageChange(index, event.target.value)}
                  />
              </div>
            ))}
            <ButtonAddImg onClick={handleAddGalleryImage}>Adicionar campo para imagem da galeria</ButtonAddImg>


            <DivButtons>
              <ButtonSubmit onClick={handleSubmit}>Criar anúncio</ButtonSubmit>
              <ButtonCancel onClick={closeModal}>Cancelar</ButtonCancel>
            </DivButtons>
          </FormModal>
      </Modal>
    </div>
  );
};

export default ModalAddAnnounce;
