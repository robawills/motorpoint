import AOS from "aos";

const aos = () => {
  AOS.init({ once: true, duration: 600 });
};

export default aos;
