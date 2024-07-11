import { useState } from "react";

import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";

import { ButtonControl, ConsultationWrapper } from "./styles";

function Consultation03() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <ConsultationWrapper>
      <ButtonControl>
        <Button name="Open Modal" onClick={openModal} />
      </ButtonControl>
      <Modal open={isModalOpen} onClose={closeModal}>
        <p>Conformation Modal</p>
      </Modal>
    </ConsultationWrapper>
  );
}

export default Consultation03;
