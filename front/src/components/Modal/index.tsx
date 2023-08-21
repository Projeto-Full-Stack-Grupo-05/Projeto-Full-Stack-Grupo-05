
import { FC, ReactNode } from 'react';
import { ModalContent, Overlay } from './styles';


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}
  
const Modal: FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContent>
        {children}
      </ModalContent>
    </Overlay>
  );
};

export default Modal;
