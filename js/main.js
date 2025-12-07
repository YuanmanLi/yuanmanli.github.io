document.addEventListener('DOMContentLoaded', () => {
    try {
        renderSidebar();
        renderContent();
        initScrollSpy();
    } catch (e) {
        console.error("Error rendering page:", e);
    }
});

function renderSidebar() {
    // Profile
    const profileImg = document.getElementById('profile-img');
    if (profileImg && data.profile.image) profileImg.src = data.profile.image;
    
    const profileName = document.getElementById('profile-name');
    if (profileName) {
        profileName.innerHTML = `${data.profile.name_en}<div class="chinese-name">${data.profile.name_cn}</div>`;
    }
    
    const profileTitle = document.getElementById('profile-title');
    if (profileTitle) {
        profileTitle.textContent = data.profile.title;
        
        // Inject Language Switch Button
        if (data.language_switch) {
            let langBtn = document.getElementById('lang-switch-btn');
            if (!langBtn) {
                langBtn = document.createElement('a');
                langBtn.id = 'lang-switch-btn';
                langBtn.className = 'lang-btn';
                profileTitle.parentNode.insertBefore(langBtn, profileTitle.nextSibling);
            }
            langBtn.href = data.language_switch.link;
            langBtn.innerHTML = `<i class="fas fa-language"></i> ${data.language_switch.label}`;
        }
    }

    // Social Links
    const socialContainer = document.getElementById('social-links');
    if (socialContainer) {
        socialContainer.innerHTML = '';
        const iconMap = {
            "Homepage": "fa-home",
            "Google Scholar": "fa-graduation-cap",
            "DBLP": "fa-book",
            "SZU": "fa-university"
        };

        data.navbar.forEach(link => {
            if (link.link) {
                const a = document.createElement('a');
                a.href = link.link;
                a.target = "_blank";
                a.title = link.name;
                const iconClass = iconMap[link.name] || "fa-link";
                a.innerHTML = `<i class="fas ${iconClass}"></i> ${link.name}`;
                socialContainer.appendChild(a);
            }
        });
    }

    // Contact Info
    const contactContainer = document.getElementById('contact-info');
    if (contactContainer) {
        contactContainer.innerHTML = '';
        const contactData = [
            { icon: "fa-map-marker-alt", text: data.contact.address },
            { icon: "fa-envelope", text: data.contact.email.replace('E-mail: ', '') }
        ];

        contactData.forEach(item => {
            const div = document.createElement('div');
            div.className = 'contact-item';
            div.innerHTML = `<i class="fas ${item.icon}"></i> <span>${item.text}</span>`;
            contactContainer.appendChild(div);
        });
    }
}

function renderContent() {
    // Bio
    const bioText = document.getElementById('bio-text');
    if (bioText) bioText.innerHTML = data.profile.bio;

    // News (Compact List)
    const newsList = document.getElementById('news-list');
    if (newsList) {
        newsList.innerHTML = '';
        newsList.className = 'news-list'; // Ensure class
        data.news.forEach(item => {
            const li = document.createElement('li');
            li.className = 'news-item';
            
            const tag = item.tag || 'News';
            const content = item.content || item;
            
            li.innerHTML = `<span class="news-tag">${tag}</span><span class="news-content">${content}</span>`;
            newsList.appendChild(li);
        });
    }

    // Standard Lists (Teaching, Awards, etc.)
    renderList('teaching-list', data.teaching);
    renderList('awards-list', data.awards);
    renderList('positions-list', data.positions, true);
    renderList('interests-list', data.interests); // Research Interests
    renderList('activities-list', data.activities);
    renderList('funding-list', data.funding, true);

    // Publications
    renderPapers('journal-list', data.journal_papers);
    renderPapers('conference-list', data.conference_papers);
}

function renderList(elementId, items, isHtml = false) {
    const ul = document.getElementById(elementId);
    if (!ul) return;
    ul.className = 'compact-list'; // Use new compact class
    ul.innerHTML = '';

    items.forEach(item => {
        const li = document.createElement('li');
        if (isHtml) {
            li.innerHTML = item;
        } else {
            li.textContent = item;
        }
        ul.appendChild(li);
    });
}

function renderPapers(elementId, papers) {
    const ul = document.getElementById(elementId);
    if (!ul) return;
    ul.className = 'pub-list';
    ul.innerHTML = '';

    // Regex to match name variants: Yuanman Li, Li Yuanman, Y. M. Li, Y.M.Li
    const nameRegex = /(Yuanman Li|Li Yuanman|Y\.\s?M\.\s?Li)/gi;

    // Support both Array (old format) and String (new raw format)
    let paperList = [];
    if (Array.isArray(papers)) {
        paperList = papers;
    } else if (typeof papers === 'string') {
        paperList = papers.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    }

    // Sort by Year Descending (Newest first)
    paperList.sort((a, b) => {
        const getYear = (str) => {
            // Match 19xx or 20xx
            const matches = str.match(/(?:19|20)\d{2}/g);
            return matches ? parseInt(matches[matches.length - 1], 10) : 0;
        };
        const yearA = getYear(a);
        const yearB = getYear(b);
        return yearB - yearA; 
    });

    paperList.forEach((paper, index) => {
        const li = document.createElement('li');
        li.className = 'pub-item';
        
        // 1. Cleanup: Remove manual HTML tags and leading numbering (e.g. "[1].")
        let content = paper.replace(/^\[?\d+\]?[\.\s]*/, '') // Remove existing numbering
                           .replace(/<span class='yml'>/g, '').replace(/<\/span>/g, '')
                           .replace(/<i><b>/g, '').replace(/<\/b><\/i>/g, '');
        
        // 2. Auto-highlight Author Name
        content = content.replace(nameRegex, '<span class="highlight-author">$1</span>');

        // 3. Auto-highlight Journal/Conference Name
        // Logic: Find text after the closing quote (” or ") and before the next comma
        // Matches: ... “Title”, Journal Name, ... OR ... "Title" Journal Name, ...
        content = content.replace(/([”"])[,\s]*\s+([^,]+?)\s*,/g, '$1, <i><b>$2</b></i>,');
        
        li.innerHTML = `<span class="pub-index">[${index + 1}]</span> ${content}`;
        ul.appendChild(li);
    });
}

function initScrollSpy() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    if (navLinks.length === 0 || sections.length === 0) return;

    // Simple active state on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}
