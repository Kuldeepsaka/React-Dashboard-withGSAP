import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useGSAP(() => {
    const scrollSections = document.querySelectorAll('.scroll-section');

    scrollSections.forEach((section) => {
      const wrapper = section.querySelector('.wrapper');
      const items = wrapper.querySelectorAll('.item');

      let direction = section.classList.contains('horizontal-section')
        ? 'horizontal'
        : 'vertical';

      items.forEach((item, index) => {
        if (index !== 0) {
          direction === 'horizontal'
            ? gsap.set(item, { xPercent: 100 })
            : gsap.set(item, { yPercent: 100 });
        }
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: 'top top',
          end: () => `+=${items.length * 100}%`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: 'none' },
      });

      items.forEach((item, index) => {
        timeline.to(item, { scale: 0.9, borderRadius: '10px' });
        if (items[index + 1]) {
          direction === 'horizontal'
            ? timeline.to(items[index + 1], { xPercent: 0 }, '<')
            : timeline.to(items[index + 1], { yPercent: 0 }, '<');
        }
      });
    });
  }, []);
};
