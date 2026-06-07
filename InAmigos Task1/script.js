/* ==========================================================================
   INAMIGOS FOUNDATION - INTERACTIVE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- 1. MOBILE NAVBAR TOGGLE --- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-links a');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }


  /* --- 2. SCROLL EVENTS: NAVBAR SHRINK & PROGRESS BAR --- */
  const navbar = document.getElementById('navbar');
  const scrollProgressBar = document.getElementById('scrollProgress');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollDepth = window.scrollY;
    
    // Navbar Shrink
    if (scrollDepth > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll Progress Indicator
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight > 0) {
      const scrollPercent = (scrollDepth / docHeight) * 100;
      scrollProgressBar.style.width = scrollPercent + '%';
    }

    // Back to Top Button
    if (scrollDepth > 350) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }

    // Active Nav Link Tracking
    trackActiveSection();
  });

  // Back to Top Action
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  /* --- 3. ACTIVE NAV LINK TRACKING --- */
  const sections = document.querySelectorAll('section, header');
  const navLinksList = document.querySelectorAll('.nav-links li');

  function trackActiveSection() {
    let currentId = '';
    const scrollPos = window.scrollY + 150; // offset for sticky navbar

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id') || '';
      }
    });

    navLinksList.forEach(li => {
      li.classList.remove('active');
      const href = li.querySelector('a')?.getAttribute('href');
      if (href === '#' && (currentId === 'home' || currentId === '')) {
        li.classList.add('active');
      } else if (href === `#${currentId}`) {
        li.classList.add('active');
      }
    });
  }


  /* --- 4. PROBLEM SECTION TAB SWITCHER --- */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      // Update button active states
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Update pane active states
      tabPanes.forEach(pane => {
        pane.classList.remove('active');
        if (pane.getAttribute('id') === targetTab) {
          pane.classList.add('active');
        }
      });
    });
  });


  /* --- 5. INTERSECTION OBSERVER FOR FADE-IN REVEAL --- */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Trigger once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(elem => {
    revealObserver.observe(elem);
  });


  /* --- 6. STATISTICAL COUNTER ANIMATION --- */
  const counterNumbers = document.querySelectorAll('.counter-number');

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const targetVal = parseInt(counter.getAttribute('data-target'), 10);
        animateCounter(counter, targetVal);
        observer.unobserve(counter); // Trigger once
      }
    });
  }, {
    threshold: 0.5
  });

  counterNumbers.forEach(num => {
    counterObserver.observe(num);
  });

  function animateCounter(element, target) {
    let start = 0;
    const duration = 1500; // 1.5 seconds animation
    const stepTime = Math.max(Math.floor(duration / target), 15);
    
    const increment = Math.ceil(target / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target.toLocaleString() + '+';
        clearInterval(timer);
      } else {
        element.textContent = start.toLocaleString() + '+';
      }
    }, stepTime);
  }


  /* --- 7. IMPACT ECOSYSTEM: INTERACTIVE ORBIT NODES --- */
  const ecosystemNodes = document.querySelectorAll('.ecosystem-node');
  const ecoTitle = document.getElementById('ecoTitle');
  const ecoDesc = document.getElementById('ecoDesc');

  // Desktop Hover Logic
  ecosystemNodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      // Clear borders/active status of other nodes
      ecosystemNodes.forEach(n => {
        n.style.background = 'rgba(255, 255, 255, 0.05)';
        n.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        n.style.color = 'var(--light)';
      });

      // Highlight current hovered node
      node.style.background = 'rgba(46, 139, 87, 0.15)';
      node.style.borderColor = 'var(--primary)';
      node.style.color = 'var(--primary-light)';

      // Update center text values
      const title = node.getAttribute('data-title');
      const desc = node.getAttribute('data-desc');
      if (title && desc) {
        ecoTitle.textContent = title;
        ecoDesc.textContent = desc;
      }
    });
  });

  // Mobile Layout Detection & Helper Grid Setup
  const mobileEcoGrid = document.querySelector('.mobile-ecosystem-grid');
  const ecoOrbit = document.querySelector('.ecosystem-orbit-circle');
  const ecoCenter = document.querySelector('.ecosystem-center');

  function checkEcosystemMobileLayout() {
    if (window.innerWidth <= 768) {
      if (mobileEcoGrid) mobileEcoGrid.style.display = 'grid';
      ecosystemNodes.forEach(n => n.style.display = 'none');
      if (ecoOrbit) ecoOrbit.style.display = 'none';
      if (ecoCenter) ecoCenter.style.display = 'none';
    } else {
      if (mobileEcoGrid) mobileEcoGrid.style.display = 'none';
      ecosystemNodes.forEach(n => n.style.display = 'flex');
      if (ecoOrbit) ecoOrbit.style.display = 'flex';
      if (ecoCenter) ecoCenter.style.display = 'flex';
    }
  }

  // Initial check & resize bind
  checkEcosystemMobileLayout();
  window.addEventListener('resize', checkEcosystemMobileLayout);

  // Mobile Tab clicks to select nodes
  const mobileNodeButtons = document.querySelectorAll('[data-mobile-node]');
  mobileNodeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      mobileNodeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const nodeIndex = btn.getAttribute('data-mobile-node');
      const matchingNode = document.querySelector(`.node-${nodeIndex}`);
      if (matchingNode) {
        const title = matchingNode.getAttribute('data-title');
        const desc = matchingNode.getAttribute('data-desc');
        ecoTitle.textContent = title;
        ecoDesc.textContent = desc;
      }
    });
  });


  /* --- 8. PHOTO JOURNEY MASONRY GALLERY FILTER --- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle button states
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });

});
