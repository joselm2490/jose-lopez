// js/i18n.js

(function () {
    function getDict(lang) {
        const data = window.PORTFOLIO_DATA || {};
        return data[lang === 'en' ? 'en' : 'es'] || data.es || {};
    }

    function getNestedValue(obj, path) {
        return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), obj);
    }

    function getCurrentLang() {
        const stored = localStorage.getItem('lang');
        if (stored === 'en' || stored === 'es') return stored;
        return 'es';
    }

    function renderProjects(dict) {
        const grid = document.getElementById('projectsGrid');
        if (!grid || !dict.projects || !Array.isArray(dict.projects.items)) return;

        grid.innerHTML = dict.projects.items.map(project => {
            const stackHtml = project.stack.map(tech =>
                `<span class="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/70">${tech}</span>`
            ).join('');

            const actionHtml = project.url
                ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 mt-auto pt-5 transition-colors">
                        <span>${dict.projects.liveBtn}</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                   </a>`
                : `<span class="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-auto pt-5">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        <span>${dict.projects.privateBadge}</span>
                   </span>`;

            return `
                <article class="surface-card p-6 flex flex-col h-full reveal-on-scroll visible">
                    <div class="mb-3">
                        <span class="inline-block text-xs font-semibold tracking-wide text-sky-700 dark:text-sky-400">
                            ${project.badge}
                        </span>
                    </div>
                    <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2.5 tracking-tight">${project.title}</h3>
                    <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 flex-grow">
                        ${project.description}
                    </p>
                    <div class="flex flex-wrap gap-1.5">
                        ${stackHtml}
                    </div>
                    ${actionHtml}
                </article>
            `;
        }).join('');
    }

    function setLanguage(lang) {
        const targetLang = lang === 'en' ? 'en' : 'es';
        const dict = getDict(targetLang);
        localStorage.setItem('lang', targetLang);
        document.documentElement.lang = targetLang;
        if (dict.metaTitle) document.title = dict.metaTitle;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = getNestedValue(dict, key);
            if (val !== null) el.textContent = val;
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            const val = getNestedValue(dict, key);
            if (val !== null) el.innerHTML = val;
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const val = getNestedValue(dict, key);
            if (val !== null) el.setAttribute('placeholder', val);
        });

        renderProjects(dict);

        const langLabel = document.getElementById('langLabel');
        if (langLabel) {
            langLabel.textContent = targetLang === 'es' ? 'EN' : 'ES';
        }

        const langToggleBtn = document.getElementById('langToggle');
        if (langToggleBtn) {
            langToggleBtn.setAttribute(
                'aria-label',
                targetLang === 'es' ? 'Switch language to English' : 'Cambiar idioma a Español'
            );
        }

        if (window.TextTyper && typeof window.TextTyper.setWords === 'function' && dict.hero) {
            window.TextTyper.setWords(dict.hero.typerWords);
        }
    }

    function toggleLanguage() {
        const next = getCurrentLang() === 'es' ? 'en' : 'es';
        setLanguage(next);
    }

    window.I18N_DICT = window.PORTFOLIO_DATA;
    window.getCurrentLang = getCurrentLang;
    window.setLanguage = setLanguage;
    window.toggleLanguage = toggleLanguage;

    document.addEventListener('DOMContentLoaded', function () {
        const langToggleBtn = document.getElementById('langToggle');
        if (langToggleBtn) {
            langToggleBtn.addEventListener('click', toggleLanguage);
        }
        setLanguage(getCurrentLang());
    });
})();
