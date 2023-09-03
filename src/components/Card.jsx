import React from "react";
import "./Card.scss";
import Modal from "react-modal";
import Tag from "./Tag.jsx";
import Tag2 from "./Tag2.jsx";
import Carousel from "./Slideshow.jsx";

const customStyles = {
  content: {
    width: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    boxShadow: "0px 0px 20px rgba(204, 153,255, 0.3)",
  },
  overlay: {
    backgroundColor: "rgba(0, 128, 0, 0.1)",
  },
};

Modal.setAppElement("#root");

function Card({ itemsData }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="card__container" onClick={openModal}>
        <img
          src={itemsData.cover}
          alt="project-logo"
          className="card__container__picture"
        />
        <div className="card__container__title">
          <span className="card__container__title__span">
            {itemsData.title}
          </span>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="modal-container">
          <div className="modal-container__header">
            <div className="modal-container__header_btn">
              <button onClick={closeModal}>Fermer </button>
            </div>
            <h2>{itemsData.title}</h2>
          </div>
          <div className="modal-container__description">
            <h3>Description :</h3>
            {itemsData.description.map((d, index) => (
              <div className="modal-container__description__infos" key={index}>
                <Tag tag={d} />
              </div>
            ))}
          </div>

          <div className="modal-container__tags">
            <h3>Compétences :</h3>
            <div className="modal-container__tags_flex">
              {itemsData.tags.map((t, index) => (
                <Tag2 key={index} tag={t} />
              ))}
            </div>
          </div>
          <div className="modal-container__link">
            <a href={itemsData.github} target="_blank">
              <button>Lien vers le site</button>
            </a>
          </div>
          <div className="modal-container__slide">
            <Carousel images={itemsData.pictures} />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Card;
