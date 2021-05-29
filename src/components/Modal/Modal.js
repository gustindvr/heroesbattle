import {ContainerModal, ContentModal, TitleModal} from '../Layout/ModalStyles/Index';
import {Button} from '../Layout/Elements/Button';

const Modal = ({dataHero, setModal}) => {

  //destructuring
  const {appearance, biography, work} = dataHero;

  const closeModal = () => {
    setModal(false);
  }

  return ( 
    <ContainerModal>
      <TitleModal>{dataHero.name}</TitleModal>
      <ContentModal>
        <ul>
          <li>Peso: {appearance.weight[1] || 'No se especifica'}</li>
          <li>Altura: {appearance.height[1] || 'No se especifica'}</li>
          <li>Nombre Completo: {biography['full-name'] || 'No se especifica'}</li>
          <li>Alias: {biography.aliases[0] || 'No se especifica'}</li>
          <li>Color de Ojos: {appearance['eye-color'] || 'No se especifica'}</li>
          <li>Color de Cabello: {appearance['hair-color'] || 'No se especifica'} </li>
          <li>Lugar de Trabajo: {work.base || 'No se especifica'} </li>
        </ul>
      </ContentModal>
        <Button onClick={closeModal}>Cerrar</Button>
    </ContainerModal>
   );
}
 
export default Modal;