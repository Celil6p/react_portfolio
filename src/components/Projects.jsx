import { content } from "../Content";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Modal from "react-modal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
    background: "linear-gradient(210deg, rgba(237,199,80,1) 11%, rgba(255,192,0,1) 50%, rgba(251,255,161,1) 89%)", 
    zIndex: "99",
  },
  overlay: {
    background: "rgba(5, 5, 5, 0.75)",
    padding: "2rem",
    zIndex: "99",
  },
};
Modal.setAppElement("#root");

const Projects = () => {
  const { Projects } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectProject, setSelectProject] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <section className="bg-crossedLinear" id="projects">
    {/* modal */}
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
      <div className="flex flex-col gap-2">
          <img className="" src={selectProject?.image} alt="..." />
          <h6 className="mt-3">{selectProject?.title}</h6>
        </div>
        <br />
        <p className="list-decimal px-4 font-Paprika sm:text-sm text-xs text-black !leading-7">
        {selectProject?.explanation}
        </p>
        <a className="m-4 text-blue-800" target="_blank" href={selectProject?.link}>{selectProject?.link}</a>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn bg-bg_light_primary text-dark_primary hover:text-bg_light_primary hover:bg-dark_primary">
            Close
          </button>
        </div>
      </Modal>
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="hidden lg:block max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 mt-32 sm:mb-32 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
                onClick={() => {
                  setSelectProject(content);
                  openModal();
                }}
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-black self-end">
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
