import AOS from 'aos';
import 'aos/dist/aos.css';

export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    duration: 1000,
    delay: 57,
    once: false,
  });
};
