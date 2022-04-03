const target = document.querySelector('.target');

const observer = new IntersectionObserver(
  entries => {
    if (entries[0].isIntersecting) console.log('Element is fully visible in screen');
    console.log(entries);
  },
  { threshold: 0 }
);

observer.observe(target);
