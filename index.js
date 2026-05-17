// =============================================
// Prompt Remote - index.js
// =============================================

const MODULE_NAME = 'prompt_remote';

const svgX = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>';
const svgSettings = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6"/></svg>';
const svgEdit = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 7a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1 -1v-1a1 1 0 0 1 2 0v1a3 3 0 0 1 -3 3h-9a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h1a1 1 0 0 1 1 1"/><path d="M14.596 5.011l4.392 4.392l-6.28 6.303a1 1 0 0 1 -.708 .294h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 .294 -.708zm6.496 -2.103a3.097 3.097 0 0 1 .165 4.203l-.164 .18l-.693 .694l-4.387 -4.387l.695 -.69a3.1 3.1 0 0 1 4.384 0"/></svg>';
const svgPlus = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5l0 14"/><path d="M5 12l14 0"/></svg>';
const svgSave = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 3a1 1 0 0 1 .707 .293l4 4a1 1 0 0 1 .293 .707v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h1v4a1 1 0 0 0 .883 .993l.117 .007h6a1 1 0 0 0 1 -1v-4zm-4 8a2.995 2.995 0 0 0 -2.995 2.898a1 1 0 0 0 -.005 .102a3 3 0 1 0 3 -3m1 -8v3h-4v-3z"/></svg>';
const svgLoad = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"/></svg>';
const svgDirective = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.997 4.17a3 3 0 0 1 2.003 2.83v12a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 2.003 -2.83a4 4 0 0 0 3.997 3.83h4a4 4 0 0 0 3.98 -3.597zm-2.997 10.83h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m0 -4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m-1 -9a2 2 0 1 1 0 4h-4a2 2 0 1 1 0 -4z"/></svg>';
const svgUp = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6 -6l6 6"/></svg>';
const svgDown = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6l6 -6"/></svg>';
const svgTrash = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007zm-10 4a1 1 0 0 0 -1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 -1 -1m4 0a1 1 0 0 0 -1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 -1 -1"/><path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005z"/></svg>';
const svgCaretRight = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z"/></svg>';
const svgCaretDown = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z"/></svg>';
const svgPencil = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.085 6.5l5.415 5.415l-8.793 8.792a1 1 0 0 1 -.707 .293h-4a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 .293 -.707zm5.406 -2.698a3.828 3.828 0 0 1 1.716 6.405l-.292 .293l-5.415 -5.415l.293 -.292a3.83 3.83 0 0 1 3.698 -.991"/></svg>';
const svgMove = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 14a1 1 0 0 1 -1 1h-11.001v-.092a3 3 0 0 0 -5.12 -2.03a.515 .515 0 0 1 -.879 -.363v-6.515a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3z"/><path d="M21 18a1 1 0 0 1 -1 1h-14.584l1.291 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.414 0l-3 -3a1 1 0 0 1 -.097 -.112l-.071 -.11l-.054 -.114l-.035 -.105l-.03 -.149l-.006 -.117l.003 -.075l.017 -.126l.03 -.111l.044 -.111l.052 -.098l.067 -.096l.08 -.09l3 -3a1 1 0 1 1 1.414 1.414l-1.293 1.293h14.586a1 1 0 0 1 1 1"/></svg>';
const svgReload = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"/><path d="M20 4v5h-5"/></svg>';

const defaultSettings = Object.freeze({
    enabled: true,
    moduleApiSelect: true,
    modulePresetSelect: true,
    modulePromptSwitch: true,
    modulePrefill: true,
    moduleNoteBoard: true,
    apiDisplayMode: 'dropdown',
    presetDisplayMode: 'dropdown',
    buttonPlacement: 'standalone',
    theme: 'light',
    selectedProfiles: [],
    profilePresetMap: {},
    promptSwitchTargets: {},
    promptSwitchStates: {},
    prefillData: {},
    groupDirectives: [
        { id: 'gd_development', name: '전개', tagName: 'development', directive: 'The following entries are the direction for the story to develop. Read the current context and develop the story toward this direction with believable, seamless flow.' },
        { id: 'gd_longterm', name: '장기전개', tagName: 'long-term', directive: 'The following entries are a long-term direction. Continue the current story as-is. Do not execute, rush toward, or resolve these now. Be aware of this direction and slowly steer the story toward it. Treat these entries as background knowledge, not as something to actively express. Do not write obvious or forced foreshadowing. Read the preceding context and do not repeat hints that already exist. Restraint is more important than expression.' },
        { id: 'gd_information', name: '정보', tagName: 'information', directive: 'The following entries are factual corrections. Do not contradict them. Treat them only as information and do not include them as descriptions in the prose. Only use them as knowledge to write accurately.' },
        { id: 'gd_critical', name: '중요지침', tagName: 'critical', directive: 'The following entries are the highest priority instructions. They override any conflicting instructions. Follow them exactly as written without exception. Any output that does not comply will be considered a failed response.' },
    ],
    noteBoardProfiles: [],
});

let currentTab = 'quick-settings';
let panelVisible = false;

function getSettings() {
    const { extensionSettings } = SillyTavern.getContext();
    if (!extensionSettings[MODULE_NAME]) extensionSettings[MODULE_NAME] = structuredClone(defaultSettings);
    for (const k of Object.keys(defaultSettings)) {
        if (!Object.hasOwn(extensionSettings[MODULE_NAME], k)) extensionSettings[MODULE_NAME][k] = defaultSettings[k];
    }
    return extensionSettings[MODULE_NAME];
}

function save() { SillyTavern.getContext().saveSettingsDebounced(); }
function saveMeta() { SillyTavern.getContext().saveMetadata(); }
function getNBData() {
    const { chatMetadata } = SillyTavern.getContext();
    if (!chatMetadata) return null;
    if (!chatMetadata[MODULE_NAME + '_nb']) chatMetadata[MODULE_NAME + '_nb'] = { groups: [] };
    return chatMetadata[MODULE_NAME + '_nb'];
}
function hasChatOpen() { try { const { getCurrentChatId } = SillyTavern.getContext(); return !!(getCurrentChatId && getCurrentChatId()); } catch(e) { return false; } }
function uid() { return 'pr_' + Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
function escHtml(s) { const d = document.createElement('div'); d.textContent = s||''; return d.innerHTML; }

// === Connection Profile ===
function getProfileSelect() { return document.getElementById('connection_profiles'); }
function getAllProfiles() { const s = getProfileSelect(); if(!s) return []; return Array.from(s.options).map(o=>o.text||o.value).filter(v=>v&&v!=='<None>'); }
function getCurrentProfile() { const s = getProfileSelect(); if(!s) return ''; const o = s.options[s.selectedIndex]; return o?(o.text||o.value):''; }
function switchProfile(name) {
    const s = getProfileSelect(); if(!s) return;
    for(const o of s.options) { if(o.text===name||o.value===name) { s.value=o.value; s.dispatchEvent(new Event('change',{bubbles:true})); break; } }
    setTimeout(()=>renderQuickSettings(),500);
}

// === Preset ===
function getCurrentPresetName() {
    for(const id of ['#settings_preset_openai','#settings_preset','#settings_preset_novel','#settings_preset_textgenerationwebui']) {
        const s = document.querySelector(id); if(s&&s.value) { const o=s.options[s.selectedIndex]; if(o) return o.text||o.value; }
    }
    return '';
}
function getAllPresets() {
    for(const id of ['#settings_preset_openai','#settings_preset','#settings_preset_novel','#settings_preset_textgenerationwebui']) {
        const s = document.querySelector(id); if(s&&s.options.length>0) return Array.from(s.options).map(o=>o.text||o.value).filter(v=>v);
    }
    return [];
}
let _pendingPresetName = null;

function switchPreset(name) {
    if(!name) return;
    for(const id of ['#settings_preset_openai','#settings_preset','#settings_preset_novel','#settings_preset_textgenerationwebui']) {
        const s = document.querySelector(id); if(!s) continue;
        for(const o of s.options) { if(o.text===name||o.value===name) { s.value=o.value; _pendingPresetName=name; s.dispatchEvent(new Event('change',{bubbles:true})); return; } }
    }
}

// === Prompt list (using toggle-action spans) ===
function getAvailablePrompts() {
    const result = [];
    document.querySelectorAll('.completion_prompt_manager_prompt').forEach(row => {
        const nameEl = row.querySelector('[data-pm-name]');
        const name = nameEl?.dataset.pmName;
        if (!name) return;
        const identifier = row.dataset.pmIdentifier || name;
        const toggleEl = row.querySelector('.prompt-manager-toggle-action');
        const enabled = toggleEl ? toggleEl.classList.contains('fa-toggle-on') : false;
        result.push({ name, identifier, enabled });
    });
    return result;
}

function setPromptToggle(identifier, state) {
    document.querySelectorAll('.completion_prompt_manager_prompt').forEach(row => {
        if (row.dataset.pmIdentifier !== identifier) return;
        const toggleEl = row.querySelector('.prompt-manager-toggle-action');
        if (!toggleEl) return;
        const isOn = toggleEl.classList.contains('fa-toggle-on');
        if (state && !isOn) toggleEl.click();
        else if (!state && isOn) toggleEl.click();
    });
}

// === ST Popup ===
async function showPopup(title, contentHtml, onSave) {
    return new Promise((resolve) => {
        const overlay = document.createElement('dialog');
        overlay.className = 'pr-popup-overlay';
        const dialog = document.createElement('div');
        dialog.className = 'pr-popup-dialog';
        const header = document.createElement('h3');
        header.className = 'pr-popup-title';
        header.textContent = title;
        dialog.appendChild(header);
        const body = document.createElement('div');
        body.className = 'pr-popup-body';
        body.innerHTML = contentHtml;
        dialog.appendChild(body);
        const footer = document.createElement('div');
        footer.className = 'pr-popup-footer';
        function close(result) { overlay.close(); overlay.remove(); resolve(result); }
        if (onSave) {
            const saveBtn = document.createElement('button');
            saveBtn.className = 'pr-popup-btn pr-popup-btn-save';
            saveBtn.textContent = '저장';
            saveBtn.addEventListener('click', () => { onSave(body); close(1); });
            footer.appendChild(saveBtn);
            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'pr-popup-btn pr-popup-btn-cancel';
            cancelBtn.textContent = '닫기';
            cancelBtn.addEventListener('click', () => close(0));
            footer.appendChild(cancelBtn);
        } else {
            const closeBtn = document.createElement('button');
            closeBtn.className = 'pr-popup-btn pr-popup-btn-cancel';
            closeBtn.textContent = '닫기';
            closeBtn.addEventListener('click', () => close(0));
            footer.appendChild(closeBtn);
        }
        dialog.appendChild(footer);
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
        const _t=getSettings().theme;if(_t!=='light')overlay.classList.add('pr-theme-'+_t);overlay.showModal();document.activeElement?.blur();
    });
}

async function showInputPopup(title, label, defaultVal) {
    return new Promise((resolve) => {
        const overlay = document.createElement('dialog');
        overlay.className = 'pr-popup-overlay';
        const dialog = document.createElement('div');
        dialog.className = 'pr-popup-dialog';
        const header = document.createElement('h3');
        header.className = 'pr-popup-title';
        header.textContent = title;
        dialog.appendChild(header);
        const body = document.createElement('div');
        body.className = 'pr-popup-body';
        const lbl = document.createElement('label');
        lbl.textContent = label;
        lbl.style.cssText = 'display:block;margin-bottom:6px;';
        body.appendChild(lbl);
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'pr-input';
        input.value = defaultVal || '';
        body.appendChild(input);
        dialog.appendChild(body);
        const footer = document.createElement('div');
        footer.className = 'pr-popup-footer';
        function close(val) { overlay.close(); overlay.remove(); resolve(val); }
        const okBtn = document.createElement('button');
        okBtn.className = 'pr-popup-btn pr-popup-btn-save';
        okBtn.textContent = '확인';
        okBtn.addEventListener('click', () => close(input.value));
        footer.appendChild(okBtn);
        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'pr-popup-btn pr-popup-btn-cancel';
        cancelBtn.textContent = '취소';
        cancelBtn.addEventListener('click', () => close(null));
        footer.appendChild(cancelBtn);
        dialog.appendChild(footer);
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
        const _t=getSettings().theme;if(_t!=='light')overlay.classList.add('pr-theme-'+_t);overlay.showModal();document.activeElement?.blur();
    });
}

// =============================================
// PANEL (independent, no ST drawer classes)
// =============================================
function createPanel() {
    document.getElementById('prompt-remote-panel')?.remove();
    const panel = document.createElement('div');
    panel.id = 'prompt-remote-panel';

    const inner = document.createElement('div');
    inner.className = 'pr-inner';
    inner.innerHTML = `
        <div class="pr-header">
            <div class="pr-tab-bar">
                <button class="pr-tab-btn active" data-tab="quick-settings">퀵 세팅</button>
                <button class="pr-tab-btn" data-tab="note-board">노트 보드</button>
            </div>
            <button class="pr-close-btn">${svgX}</button>
        </div>
        <div class="pr-tab-content active" id="pr-tab-quick-settings"></div>
        <div class="pr-tab-content" id="pr-tab-note-board"></div>`;

    inner.querySelectorAll('.pr-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            inner.querySelectorAll('.pr-tab-btn').forEach(b => b.classList.remove('active'));
            inner.querySelectorAll('.pr-tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('pr-tab-'+btn.dataset.tab).classList.add('active');
            currentTab = btn.dataset.tab;
            if (currentTab==='quick-settings') renderQuickSettings(); else renderNoteBoard();
        });
    });

    inner.querySelector('.pr-close-btn')?.addEventListener('click', () => togglePanel());

    panel.appendChild(inner);
    return panel;
}

function insertPanel() {
    const panel = createPanel();
    document.body.appendChild(panel);
}

function togglePanel() {
    const s=getSettings();
    if(!s.enabled) return;
    const panel = document.getElementById('prompt-remote-panel');
    if (!panel) return;
    panelVisible = !panelVisible;
    if (panelVisible) {
        panel.classList.add('pr-open');
        if (currentTab==='quick-settings') renderQuickSettings(); else renderNoteBoard();
    } else {
        panel.classList.remove('pr-open');
    }
}

function setupPanelAutoClose() {
    // Panel stays open until user explicitly closes it
}

// === Toggle Button ===
function createToggleButton() {
    const settings = getSettings();
    document.getElementById('prompt-remote-toggle-btn')?.remove();
    document.getElementById('prompt-remote-wand-btn')?.remove();

    if(!settings.enabled) {
        if(panelVisible) { panelVisible=false; document.getElementById('prompt-remote-panel')?.classList.remove('pr-open'); }
        return;
    }

    if (settings.buttonPlacement === 'wand') {
        const wand = document.getElementById('extensionsMenu');
        if (wand) {
            const item = document.createElement('div');
            item.id = 'prompt-remote-wand-btn';
            item.className = 'list-group-item flex-container flexGap5';
            item.style.cursor = 'pointer';
            item.innerHTML = '<i class="fa-solid fa-mobile-retro"></i><span>프롬프트 리모컨</span>';
            item.addEventListener('click', (e) => { e.stopPropagation(); togglePanel(); document.getElementById('extensionsMenuButton')?.click(); });
            wand.appendChild(item);
        }
    } else {
        const btn = document.createElement('div');
        btn.id = 'prompt-remote-toggle-btn';
        btn.className = 'fa-solid fa-mobile-retro interactable';
        btn.title = '프롬프트 리모컨';
        btn.style.cssText = 'cursor:pointer;order:-1;';
        btn.addEventListener('click', (e) => { e.stopPropagation(); togglePanel(); });
        const target = document.getElementById('leftSendForm') || document.getElementById('send_form');
        if (target) target.prepend(btn);
    }
}

// =============================================
// TAB 1: QUICK SETTINGS
// =============================================
function renderQuickSettings() {
    const c = document.getElementById('pr-tab-quick-settings');
    if (!c) return;
    const s = getSettings();
    c.innerHTML = '';

    // Prefill is independent, always shown if enabled
    const prefillEnabled = s.modulePrefill;

    // Data flows: profiles → mapped presets → prompt targets
    if (!s.moduleApiSelect) { if (prefillEnabled) c.appendChild(buildPrefillSection(s)); return; }
    const profiles = s.selectedProfiles;
    c.appendChild(buildApiSection(s, profiles));
    if (profiles.length === 0) { if (prefillEnabled) c.appendChild(buildPrefillSection(s)); return; }

    if (!s.modulePresetSelect) { if (prefillEnabled) c.appendChild(buildPrefillSection(s)); return; }
    const mapped = s.profilePresetMap[getCurrentProfile()] || [];
    c.appendChild(buildPresetSection(s, mapped));
    if (mapped.length === 0) { if (prefillEnabled) c.appendChild(buildPrefillSection(s)); return; }

    if (s.modulePromptSwitch) c.appendChild(buildPromptSwitchSection(s));

    if (prefillEnabled) c.appendChild(buildPrefillSection(s));
}

function buildSection(title, configKey, bodyEl) {
    const card = document.createElement('div');
    card.className = 'pr-card';
    const header = document.createElement('div');
    header.className = 'pr-section-header';
    const titleGroup = document.createElement('div');
    titleGroup.style.cssText = 'display:flex;align-items:center;gap:0;';
    const t = document.createElement('span');
    t.className = 'pr-section-title';
    t.textContent = title;
    titleGroup.appendChild(t);
    if (configKey === 'prompt-switch') {
        const reload = document.createElement('button');
        reload.className = 'pr-gear-btn';
        reload.innerHTML = svgReload;
        reload.addEventListener('click', (e) => { e.stopPropagation(); applyPromptSwitchStates(); });
        titleGroup.appendChild(reload);
    }
    header.appendChild(titleGroup);
    if (configKey) {
        const gear = document.createElement('button');
        gear.className = 'pr-gear-btn';
        gear.innerHTML = svgSettings;
        gear.addEventListener('click', (e) => { e.stopPropagation(); openConfig(configKey); });
        header.appendChild(gear);
    }
    card.appendChild(header);
    card.appendChild(bodyEl);
    return card;
}

function openConfig(k) {
    if(k==='api') openApiConfig();
    else if(k==='preset') openPresetConfig();
    else if(k==='prompt-switch') openPromptSwitchConfig();
    else if(k==='prefill') openPrefillConfig();
}

function emptyMsg(t) { const s = document.createElement('span'); s.className='pr-empty'; s.textContent=t; return s; }

function buildApiSection(settings, profiles) {
    const current = getCurrentProfile();
    const wrap = document.createElement('div');
    if (profiles.length === 0) {
        wrap.appendChild(emptyMsg('미설정 (⚙에서 설정)'));
        return buildSection('API 선택', 'api', wrap);
    }
    if (settings.apiDisplayMode === 'buttons') {
        wrap.className = 'pr-btn-row';
        for (const p of profiles) {
            const btn = document.createElement('button');
            btn.className = 'pr-btn-item' + (p===current?' selected':'');
            btn.textContent = p;
            btn.addEventListener('click', () => switchProfile(p));
            wrap.appendChild(btn);
        }
    } else if (settings.apiDisplayMode === 'gallery') {
        wrap.className = 'pr-gallery-row';
        for (const p of profiles) {
            const btn = document.createElement('button');
            btn.className = 'pr-gallery-item' + (p===current?' selected':'');
            btn.textContent = [...p][0];
            btn.title = p;
            btn.addEventListener('click', () => switchProfile(p));
            wrap.appendChild(btn);
        }
    } else {
        wrap.className = 'pr-dropdown-wrap';
        const sel = document.createElement('select'); sel.className='';
        for (const p of profiles) { const opt=document.createElement('option'); opt.value=p; opt.textContent=p; if(p===current) opt.selected=true; sel.appendChild(opt); }
        sel.addEventListener('change', () => switchProfile(sel.value));
        wrap.appendChild(sel);
    }
    return buildSection('API 선택', 'api', wrap);
}

function buildPresetSection(settings, mapped) {
    const currentPreset = getCurrentPresetName();
    const wrap = document.createElement('div');
    if (mapped.length === 0) {
        wrap.appendChild(emptyMsg('미설정 (⚙에서 설정)'));
        return buildSection('프리셋 선택', 'preset', wrap);
    }
    if (settings.presetDisplayMode === 'buttons') {
        wrap.className = 'pr-btn-row';
        for (const p of mapped) {
            const btn = document.createElement('button');
            btn.className = 'pr-btn-item' + (p===currentPreset?' selected':'');
            btn.textContent = p;
            btn.addEventListener('click', () => switchPreset(p));
            wrap.appendChild(btn);
        }
    } else if (settings.presetDisplayMode === 'gallery') {
        wrap.className = 'pr-gallery-row';
        for (const p of mapped) {
            const btn = document.createElement('button');
            btn.className = 'pr-gallery-item' + (p===currentPreset?' selected':'');
            btn.textContent = [...p][0];
            btn.title = p;
            btn.addEventListener('click', () => switchPreset(p));
            wrap.appendChild(btn);
        }
    } else {
        wrap.className = 'pr-dropdown-wrap';
        const sel = document.createElement('select'); sel.className='';
        for (const p of mapped) { const opt=document.createElement('option'); opt.value=p; opt.textContent=p; if(p===currentPreset) opt.selected=true; sel.appendChild(opt); }
        sel.addEventListener('change', () => switchPreset(sel.value));
        wrap.appendChild(sel);
    }
    return buildSection('프리셋 선택', 'preset', wrap);
}

function buildPromptSwitchSection(settings) {
    const presetName = getCurrentPresetName();
    const targets = settings.promptSwitchTargets[presetName] || [];
    const states = settings.promptSwitchStates[presetName] || {};
    const displayNames = settings.promptSwitchDisplayNames?.[presetName] || {};
    const wrap = document.createElement('div');

    if (targets.length === 0) {
        wrap.appendChild(emptyMsg('미설정 (⚙에서 설정)'));
        return buildSection('프롬프트 스위치', 'prompt-switch', wrap);
    }

    for (const id of targets) {
        const checked = states[id] !== undefined ? states[id] : true;
        const name = displayNames[id] || id;
        const row = document.createElement('div'); row.className = 'pr-toggle-row';
        const label = document.createElement('span'); label.className = 'pr-toggle-label'; label.textContent = name;
        row.appendChild(label);
        const sw = document.createElement('label'); sw.className = 'pr-toggle-switch';
        const input = document.createElement('input'); input.type = 'checkbox'; input.checked = checked;
        input.addEventListener('change', () => {
            if (!settings.promptSwitchStates[presetName]) settings.promptSwitchStates[presetName] = {};
            settings.promptSwitchStates[presetName][id] = input.checked;
            save();
            applyPromptSwitchStates();
        });
        sw.appendChild(input);
        sw.appendChild(Object.assign(document.createElement('span'), { className: 'pr-toggle-slider' }));
        row.appendChild(sw);
        wrap.appendChild(row);
    }
    return buildSection('프롬프트 스위치', 'prompt-switch', wrap);
}

function buildPrefillSection(settings) {
    const presetName = getCurrentPresetName();
    const pd = settings.prefillData[presetName] || { text:'', enabled:false };
    const preview = pd.text ? pd.text.substring(0,60)+(pd.text.length>60?'...':'') : '(없음)';
    const wrap = document.createElement('div'); wrap.className = 'pr-prefill-area';
    const sw = document.createElement('label'); sw.className = 'pr-toggle-switch';
    const input = document.createElement('input'); input.type='checkbox'; input.checked=pd.enabled;
    input.addEventListener('change', () => {
        if(!settings.prefillData[presetName]) settings.prefillData[presetName]={text:'',enabled:false};
        settings.prefillData[presetName].enabled=input.checked; save();
    });
    sw.appendChild(input);
    sw.appendChild(Object.assign(document.createElement('span'),{className:'pr-toggle-slider'}));
    const prev = document.createElement('span'); prev.className='pr-prefill-preview'; prev.textContent=preview;
    wrap.appendChild(prev);
    wrap.appendChild(sw);
    return buildSection('프리필', 'prefill', wrap);
}

// =============================================
// PROMPT SWITCH - Apply
// =============================================
function applyPromptSwitchStates(overrideName) {
    const settings = getSettings();
    const presetName = overrideName || getCurrentPresetName();
    const targets = settings.promptSwitchTargets[presetName] || [];
    const states = settings.promptSwitchStates[presetName] || {};

    for (const id of targets) {
        if (states[id] === undefined) continue;
        setPromptToggle(id, states[id]);
    }
}

// =============================================
// CONFIG POPUPS
// =============================================
async function openApiConfig() {
    const settings = getSettings();
    const all = getAllProfiles();
    let html = '<p style="margin-bottom:8px;opacity:0.7;">표시할 연결 프로필을 선택하세요.</p>';
    for (const p of all) {
        const checked = settings.selectedProfiles.includes(p);
        html += `<label style="display:flex;align-items:center;gap:8px;padding:3px 0;cursor:pointer;"><input type="checkbox" value="${escHtml(p)}" ${checked?'checked':''}>${escHtml(p)}</label>`;
    }
    await showPopup('API 선택', html, (dlg) => {
        const checked = [];
        dlg.querySelectorAll('input[type="checkbox"]:checked').forEach(c => checked.push(c.value));
        settings.selectedProfiles = checked;
        save(); renderQuickSettings();
    });
}

async function openPresetConfig() {
    const settings = getSettings();
    const profile = getCurrentProfile();
    const all = getAllPresets();
    const mapped = settings.profilePresetMap[profile] || [];
    let html = `<p style="margin-bottom:8px;opacity:0.7;">선택한 프로필에 배정할 프리셋을 선택하세요.</p>`;
    for (const p of all) {
        html += `<label style="display:flex;align-items:center;gap:8px;padding:3px 0;cursor:pointer;"><input type="checkbox" value="${escHtml(p)}" ${mapped.includes(p)?'checked':''}>${escHtml(p)}</label>`;
    }
    if(all.length===0) html+='<p style="opacity:0.5;">프리셋 없음</p>';
    await showPopup(`프리셋 선택 — ${profile}`, html, (dlg) => {
        const checked = [];
        dlg.querySelectorAll('input[type="checkbox"]:checked').forEach(c => checked.push(c.value));
        settings.profilePresetMap[profile] = checked;
        save(); renderQuickSettings();
    });
}

async function openPromptSwitchConfig() {
    const settings = getSettings();
    const presetName = getCurrentPresetName();
    const currentTargets = settings.promptSwitchTargets[presetName] || [];
    const prompts = getAvailablePrompts();

    let html = '<p style="margin-bottom:8px;opacity:0.7;">선택한 프리셋에 ON/OFF 바로가기할 프롬프트를 선택하세요.</p>';
    for (const p of prompts) {
        html += `<label style="display:flex;align-items:center;gap:8px;padding:3px 0;cursor:pointer;">
            <input type="checkbox" data-id="${escHtml(p.identifier)}" ${currentTargets.includes(p.identifier)?'checked':''}>
            ${escHtml(p.name)}</label>`;
    }
    if (prompts.length === 0) html += '<p style="opacity:0.5;">프롬프트 없음</p>';

    await showPopup(`프롬프트 스위치 — ${presetName}`, html, (dlg) => {
        const checked = [];
        const nameMap = {};
        dlg.querySelectorAll('input[type="checkbox"]:checked').forEach(c => {
            checked.push(c.dataset.id);
        });

        // Build display name map
        for (const p of prompts) {
            nameMap[p.identifier] = p.name;
        }

        // Find removed targets
        const previousTargets = settings.promptSwitchTargets[presetName] || [];
        const removed = previousTargets.filter(t => !checked.includes(t));
        const prevStates = settings.promptSwitchStates[presetName] || {};

        // Delete stored states for removed targets
        for (const id of removed) {
            delete prevStates[id];
        }

        settings.promptSwitchTargets[presetName] = checked;
        settings.promptSwitchStates[presetName] = prevStates;

        // Store display names
        if (!settings.promptSwitchDisplayNames) settings.promptSwitchDisplayNames = {};
        settings.promptSwitchDisplayNames[presetName] = nameMap;

        // New targets get current ST state as initial value
        for (const id of checked) {
            if (prevStates[id] === undefined) {
                const found = prompts.find(p => p.identifier === id);
                if (found) prevStates[id] = found.enabled;
            }
        }

        save(); renderQuickSettings();
    });
}

async function openPrefillConfig() {
    const settings = getSettings();
    const presetName = getCurrentPresetName();
    const pd = settings.prefillData[presetName] || { text:'', enabled:false };
    await showPopup(`프리필 — ${presetName}`, `
        <p style="margin-bottom:8px;opacity:0.7;">선택한 프리셋에 사용할 프리필을 작성하세요.</p>
        <textarea id="pr-prefill-text" class="pr-input" style="width:100%;min-height:100px;resize:vertical;">${escHtml(pd.text||'')}</textarea>
    `, (dlg) => {
        settings.prefillData[presetName] = { text: dlg.querySelector('#pr-prefill-text').value, enabled: pd.enabled };
        save(); renderQuickSettings();
    });
}

// =============================================
// TAB 2: NOTE BOARD
// =============================================
function renderNoteBoard() {
    const c = document.getElementById('pr-tab-note-board'); if(!c) return;
    const s = getSettings();
    if(!s.moduleNoteBoard) { c.innerHTML=''; return; }
    if(!hasChatOpen()) { c.innerHTML='<p class="pr-empty" style="padding:10px;">채팅을 선택해주세요.</p>'; return; }
    const nb = getNBData();
    if(!nb) { c.innerHTML='<p class="pr-empty" style="padding:10px;">채팅을 선택해주세요.</p>'; return; }
    c.innerHTML='';

    const toolbar = document.createElement('div'); toolbar.className='pr-nb-toolbar';
    toolbar.innerHTML=`<button id="pr-nb-add-group">${svgPlus} 그룹 추가</button>
        <button id="pr-nb-manage-directives">${svgDirective} 그룹 지침</button>
        <button id="pr-nb-save-profile">${svgSave} 저장</button>
        <button id="pr-nb-load-profile">${svgLoad} 불러오기</button>`;
    c.appendChild(toolbar);

    const gw = document.createElement('div');
    for(let i=0;i<nb.groups.length;i++) gw.appendChild(buildGroupEl(nb.groups[i],i,nb.groups.length));
    c.appendChild(gw);

    toolbar.querySelector('#pr-nb-add-group').addEventListener('click',()=>{ nb.groups.push({id:uid(),name:'새 그룹',depth:0,role:'system',directiveId:null,collapsed:false,notes:[]}); saveMeta(); renderNoteBoard(); });
    toolbar.querySelector('#pr-nb-save-profile').addEventListener('click', async()=>{
        const name = await showInputPopup('저장','이름');
        if(!name) return; s.noteBoardProfiles.push({name,data:structuredClone(nb)}); save(); toastr.success(`"${name}" 저장 완료`);
    });
    toolbar.querySelector('#pr-nb-load-profile').addEventListener('click',()=>openLoadProfile());
    toolbar.querySelector('#pr-nb-manage-directives').addEventListener('click',()=>openDirectivesConfig());
}

function buildGroupEl(group,index,total) {
    const s=getSettings(), el=document.createElement('div'); el.className='pr-group';
    const dir=s.groupDirectives.find(d=>d.id===group.directiveId);
    const header=document.createElement('div'); header.className='pr-group-header';
    header.innerHTML=`<span class="pr-collapse-icon${group.collapsed?' collapsed':''}">${group.collapsed?svgCaretRight:svgCaretDown}</span><span class="pr-group-name">${escHtml(group.name||'새 그룹')}</span>`;
    const actions=document.createElement('div'); actions.className='pr-group-actions';
    addBtn(actions,svgUp,'위로',index>0?()=>moveGroup(group.id,-1):null);
    addBtn(actions,svgDown,'아래로',index<total-1?()=>moveGroup(group.id,1):null);
    addBtn(actions,svgPlus,'노트 추가',()=>addNote(group.id));
    addBtn(actions,svgEdit,'그룹 설정',()=>openGroupEdit(group.id));
    addBtn(actions,svgTrash,'그룹 삭제',()=>deleteGroup(group.id));
    const groupTitle = header.querySelector('.pr-group-name');
    const tooltipParts = [`깊이: ${group.depth??0}`, `역할: ${group.role||'system'}`];
    if(dir) tooltipParts.push(`지침: ${escHtml(dir.name)}`);
    groupTitle.title = tooltipParts.join('  ');
    header.appendChild(actions); el.appendChild(header);

    const body=document.createElement('div'); body.className='pr-group-body'+(group.collapsed?' collapsed':'');
    for(let i=0;i<group.notes.length;i++) body.appendChild(buildNoteEl(group.notes[i],i,group.notes.length,group.id));
    if(group.notes.length===0) body.appendChild(emptyMsg('노트 없음'));
    el.appendChild(body);
    header.addEventListener('click',(e)=>{if(e.target.closest('.pr-group-actions'))return; group.collapsed=!group.collapsed; saveMeta(); renderNoteBoard();});
    return el;
}

function buildNoteEl(note,index,total,groupId) {
    const el=document.createElement('div'); el.className='pr-note';
    const header=document.createElement('div'); header.className='pr-note-header';
    const titleEl=document.createElement('span'); titleEl.className='pr-note-title'; titleEl.textContent=note.title||'새 노트';
    titleEl.addEventListener('click',()=>{note.collapsed=!note.collapsed;saveMeta();renderNoteBoard();});
    header.appendChild(titleEl);
    const headerRight=document.createElement('div'); headerRight.className='pr-note-actions';
    addBtn(headerRight,svgUp,'위로',index>0?()=>moveNote(groupId,note.id,-1):null);
    addBtn(headerRight,svgDown,'아래로',index<total-1?()=>moveNote(groupId,note.id,1):null);
    addBtn(headerRight,svgEdit,'편집',async()=>{ await openNoteEdit(groupId,note.id); });
    addBtn(headerRight,svgTrash,'삭제',()=>deleteNote(groupId,note.id));
    const sw=document.createElement('label'); sw.className='pr-toggle-switch'; sw.style.marginLeft='6px';
    const cb=document.createElement('input'); cb.type='checkbox'; cb.checked=note.enabled!==false;
    cb.addEventListener('change',()=>{note.enabled=cb.checked;saveMeta();});
    sw.appendChild(cb); sw.appendChild(Object.assign(document.createElement('span'),{className:'pr-toggle-slider'}));
    headerRight.appendChild(sw);
    header.appendChild(headerRight);
    el.appendChild(header);
    const body=document.createElement('div'); body.className='pr-note-body'+(note.collapsed?' collapsed':'');
    const ta=document.createElement('textarea'); ta.className='pr-input';
    ta.placeholder='노트 내용...'; ta.value=note.content||'';
    ta.addEventListener('input',SillyTavern.libs.lodash.debounce(()=>{note.content=ta.value;saveMeta();},500));
    body.appendChild(ta);
    el.appendChild(body);
    return el;
}

function addBtn(p,iconSvg,title,fn){const b=document.createElement('button');b.innerHTML=iconSvg;if(fn){b.addEventListener('click',(e)=>{e.stopPropagation();fn();});}else{b.classList.add('pr-btn-disabled');}p.appendChild(b);}

function findGroup(id){return getNBData()?.groups.find(g=>g.id===id);}
function moveGroup(id,dir){const nb=getNBData();if(!nb)return;const i=nb.groups.findIndex(g=>g.id===id);if(i<0||i+dir<0||i+dir>=nb.groups.length)return;[nb.groups[i],nb.groups[i+dir]]=[nb.groups[i+dir],nb.groups[i]];saveMeta();renderNoteBoard();}
function addNote(gid){const g=findGroup(gid);if(!g)return;g.notes.push({id:uid(),title:'새 노트',content:'',enabled:true,collapsed:false});saveMeta();renderNoteBoard();}
function deleteGroup(id){const nb=getNBData();if(!nb)return;nb.groups=nb.groups.filter(g=>g.id!==id);saveMeta();renderNoteBoard();}
function moveNote(gid,nid,dir){const g=findGroup(gid);if(!g)return;const i=g.notes.findIndex(n=>n.id===nid);if(i<0||i+dir<0||i+dir>=g.notes.length)return;[g.notes[i],g.notes[i+dir]]=[g.notes[i+dir],g.notes[i]];saveMeta();renderNoteBoard();}
function deleteNote(gid,nid){const g=findGroup(gid);if(!g)return;g.notes=g.notes.filter(n=>n.id!==nid);saveMeta();renderNoteBoard();}

async function openNoteEdit(gid,nid){
    const nb=getNBData();if(!nb)return;
    const group=findGroup(gid);if(!group)return;
    const note=group.notes.find(n=>n.id===nid);if(!note)return;
    const others=nb.groups.filter(g=>g.id!==gid);
    let html=`<label>이름<input type="text" id="pr-note-title" class="pr-input" value="${escHtml(note.title||'')}"></label>`;
    if(others.length>0){
        html+=`<label style="margin-top:8px;">그룹 이동<div class="pr-dropdown-wrap"><select id="pr-move-tgt"><option value="">현재 그룹 유지</option>`;
        for(const g of others) html+=`<option value="${g.id}">${escHtml(g.name||'그룹')}</option>`;
        html+=`</select></div></label>`;
    }
    await showPopup('노트 설정',html,(dlg)=>{
        const newTitle=dlg.querySelector('#pr-note-title').value;
        if(newTitle!==null) note.title=newTitle;
        const moveTgt=dlg.querySelector('#pr-move-tgt');
        if(moveTgt&&moveTgt.value){
            const tgt=findGroup(moveTgt.value);if(tgt){
                const idx=group.notes.findIndex(n=>n.id===nid);if(idx>=0) tgt.notes.push(group.notes.splice(idx,1)[0]);
            }
        }
        saveMeta();renderNoteBoard();
    });
}

async function openGroupEdit(gid){
    const group=findGroup(gid);if(!group)return;const s=getSettings();
    let dirOpts='<option value="">없음</option>';
    for(const d of s.groupDirectives) dirOpts+=`<option value="${d.id}" ${group.directiveId===d.id?'selected':''}>${escHtml(d.name)} (&lt;${escHtml(d.tagName)}&gt;)</option>`;
    await showPopup('그룹 설정',`<div style="display:flex;flex-direction:column;gap:8px;">
        <label>이름<input type="text" id="pr-ge-name" class="pr-input" value="${escHtml(group.name||'')}"></label>
        <label>깊이<input type="number" id="pr-ge-depth" class="pr-input" value="${group.depth??0}" min="0"></label>
        <label>역할<div class="pr-dropdown-wrap"><select id="pr-ge-role"><option value="system" ${group.role==='system'?'selected':''}>system</option><option value="user" ${group.role==='user'?'selected':''}>user</option><option value="assistant" ${group.role==='assistant'?'selected':''}>assistant</option></select></div></label>
        <label>그룹 지침<div class="pr-dropdown-wrap"><select id="pr-ge-dir">${dirOpts}</select></div></label></div>`,(dlg)=>{
        group.name=dlg.querySelector('#pr-ge-name').value||'새 그룹';group.depth=parseInt(dlg.querySelector('#pr-ge-depth').value)||0;
        group.role=dlg.querySelector('#pr-ge-role').value;group.directiveId=dlg.querySelector('#pr-ge-dir').value||null;saveMeta();renderNoteBoard();
    });
}

async function openLoadProfile(){
    const s=getSettings();if(s.noteBoardProfiles.length===0){toastr.warning('저장된 프로필이 없습니다.');return;}
    let html='';for(let i=0;i<s.noteBoardProfiles.length;i++){
        html+=`<div class="pr-popup-card" style="display:flex;align-items:center;gap:6px;" data-pidx="${i}">
            <span style="flex:1;cursor:pointer;">${escHtml(s.noteBoardProfiles[i].name)}</span>
            <div class="pr-group-actions">
                ${i>0?`<button data-pmove="${i}" data-dir="-1">${svgUp}</button>`:`<button class="pr-btn-disabled">${svgUp}</button>`}
                ${i<s.noteBoardProfiles.length-1?`<button data-pmove="${i}" data-dir="1">${svgDown}</button>`:`<button class="pr-btn-disabled">${svgDown}</button>`}
                <button data-prename="${i}">${svgEdit}</button>
                <button data-pdel="${i}">${svgTrash}</button>
            </div></div>`;
    }
    return new Promise((resolve)=>{
        const overlay=document.createElement('dialog');overlay.className='pr-popup-overlay';
        const dialog=document.createElement('div');dialog.className='pr-popup-dialog';
        const header=document.createElement('h3');header.className='pr-popup-title';header.textContent='불러오기';
        dialog.appendChild(header);
        const body=document.createElement('div');body.className='pr-popup-body';body.innerHTML=html;
        dialog.appendChild(body);
        const footer=document.createElement('div');footer.className='pr-popup-footer';
        const closeBtn=document.createElement('button');closeBtn.className='pr-popup-btn pr-popup-btn-cancel';closeBtn.textContent='닫기';
        function close(){overlay.close();overlay.remove();resolve();}
        closeBtn.addEventListener('click',close);
        footer.appendChild(closeBtn);
        dialog.appendChild(footer);
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
        const _t=getSettings().theme;if(_t!=='light')overlay.classList.add('pr-theme-'+_t);overlay.showModal();document.activeElement?.blur();
        body.querySelectorAll('[data-pidx]').forEach(card=>card.addEventListener('click',(e)=>{
            if(e.target.closest('[data-pdel]')||e.target.closest('[data-pmove]')||e.target.closest('[data-prename]'))return;
            const p=s.noteBoardProfiles[parseInt(card.dataset.pidx)];if(p){SillyTavern.getContext().chatMetadata[MODULE_NAME+'_nb']=structuredClone(p.data);saveMeta();renderNoteBoard();toastr.success(`"${p.name}" 불러오기 완료`);}close();
        }));
        body.querySelectorAll('[data-pdel]').forEach(btn=>btn.addEventListener('click',()=>{s.noteBoardProfiles.splice(parseInt(btn.dataset.pdel),1);save();close();openLoadProfile();}));
        body.querySelectorAll('[data-pmove]').forEach(btn=>btn.addEventListener('click',()=>{
            const idx=parseInt(btn.dataset.pmove),dir=parseInt(btn.dataset.dir);
            if(idx+dir<0||idx+dir>=s.noteBoardProfiles.length)return;
            [s.noteBoardProfiles[idx],s.noteBoardProfiles[idx+dir]]=[s.noteBoardProfiles[idx+dir],s.noteBoardProfiles[idx]];save();close();openLoadProfile();
        }));
        body.querySelectorAll('[data-prename]').forEach(btn=>btn.addEventListener('click',async()=>{
            const idx=parseInt(btn.dataset.prename);const name=await showInputPopup('이름 변경','이름',s.noteBoardProfiles[idx].name);
            if(name!==null){s.noteBoardProfiles[idx].name=name;save();close();openLoadProfile();}
        }));
    });
}

async function openDirectivesConfig(){
    const s=getSettings();const draft=structuredClone(s.groupDirectives);
    function buildList(){return draft.map((d,i)=>`<div class="pr-popup-card">
        <div style="display:flex;gap:6px;margin-bottom:4px;align-items:center;">
            <input type="text" placeholder="이름" value="${escHtml(d.name)}" data-field="name" data-idx="${i}" class="pr-input" style="flex:1;">
            <input type="text" placeholder="태그" value="${escHtml(d.tagName)}" data-field="tagName" data-idx="${i}" class="pr-input" style="width:100px;">
            <button class="pr-popup-icon-btn" data-ddel="${i}">${svgTrash}</button></div>
        <textarea placeholder="지시어 (선택)" data-field="directive" data-idx="${i}" class="pr-input" style="width:100%;min-height:36px;resize:vertical;">${escHtml(d.directive||'')}</textarea></div>`).join('');}
    return new Promise((resolve)=>{
        const overlay=document.createElement('dialog');overlay.className='pr-popup-overlay';
        const dialog=document.createElement('div');dialog.className='pr-popup-dialog';
        const header=document.createElement('h3');header.className='pr-popup-title';header.textContent='그룹 지침';
        dialog.appendChild(header);
        const body=document.createElement('div');body.className='pr-popup-body';
        body.innerHTML=`<div id="pr-dir-list">${buildList()}</div>`;
        dialog.appendChild(body);
        const footer=document.createElement('div');footer.className='pr-popup-footer';
        function close(saved){overlay.close();overlay.remove();resolve(saved);}
        const addBtn2=document.createElement('button');addBtn2.className='pr-popup-btn pr-popup-btn-save';addBtn2.id='pr-add-dir';addBtn2.innerHTML=`${svgPlus} 추가`;addBtn2.style.marginRight='auto';
        footer.appendChild(addBtn2);
        const saveBtn=document.createElement('button');saveBtn.className='pr-popup-btn pr-popup-btn-save';saveBtn.textContent='저장';
        saveBtn.addEventListener('click',()=>{syncDraft(body,draft);s.groupDirectives=draft;save();close(true);});
        footer.appendChild(saveBtn);
        const cancelBtn=document.createElement('button');cancelBtn.className='pr-popup-btn pr-popup-btn-cancel';cancelBtn.textContent='닫기';
        cancelBtn.addEventListener('click',()=>close(false));
        footer.appendChild(cancelBtn);
        dialog.appendChild(footer);
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
        const _t=getSettings().theme;if(_t!=='light')overlay.classList.add('pr-theme-'+_t);overlay.showModal();document.activeElement?.blur();
        footer.querySelector('#pr-add-dir')?.addEventListener('click',()=>{syncDraft(body,draft);draft.push({id:uid(),name:'',tagName:'',directive:''});body.querySelector('#pr-dir-list').innerHTML=buildList();});
        body.addEventListener('click',(e)=>{const del=e.target.closest('[data-ddel]');if(del){syncDraft(body,draft);draft.splice(parseInt(del.dataset.ddel),1);body.querySelector('#pr-dir-list').innerHTML=buildList();}});
    });
}
function syncDraft(dlg,draft){if(!dlg)return;dlg.querySelectorAll('[data-idx]').forEach(el=>{const i=parseInt(el.dataset.idx),f=el.dataset.field;if(draft[i]&&f)draft[i][f]=el.value;});}

// =============================================
// GENERATE INTERCEPTOR
// =============================================
globalThis.PromptRemote_interceptGeneration = async function(chat,contextSize,abort,type){};

// =============================================
// EXTENSION SETTINGS
// =============================================
function createExtSettings(){
    const html=`<div id="prompt-remote-ext-settings" class="extension_settings"><div class="inline-drawer"><div class="inline-drawer-toggle inline-drawer-header">
        <b>프롬프트 리모컨</b><div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div></div><div class="inline-drawer-content">

        <div class="pr-ext-group">
            <div class="pr-ext-group-title">기본 설정</div>
            <div class="pr-ext-row"><label>프롬프트 리모컨 활성화</label><label class="pr-toggle-switch"><input type="checkbox" id="pr-ext-enabled"><span class="pr-toggle-slider"></span></label></div>
            <div class="pr-ext-row"><label>버튼 위치</label><div class="pr-ext-btn-group" id="pr-ext-buttonPlacement"><button data-val="standalone" class="pr-ext-btn">독립 버튼</button><button data-val="wand" class="pr-ext-btn">요술봉</button></div></div>
            <div class="pr-ext-row"><label>테마</label><div class="pr-ext-theme-row" id="pr-ext-theme"><div class="pr-ext-theme-btn" data-theme="light" style="background:#f2f2f2;"></div><div class="pr-ext-theme-btn" data-theme="dark" style="background:#2a2a2a;"></div><div class="pr-ext-theme-btn" data-theme="pink" style="background:#fde8ef;"></div><div class="pr-ext-theme-btn" data-theme="green" style="background:#e8f5e9;"></div><div class="pr-ext-theme-btn" data-theme="blue" style="background:#e8f2fc;"></div><div class="pr-ext-theme-btn" data-theme="lavender" style="background:#ede7f6;"></div></div></div>
        </div>

        <div class="pr-ext-group">
            <div class="pr-ext-group-title">기능 ON/OFF</div>
            <div class="pr-ext-grid">
                <div class="pr-ext-row"><label>API 선택</label><label class="pr-toggle-switch"><input type="checkbox" id="pr-ext-moduleApiSelect"><span class="pr-toggle-slider"></span></label></div>
                <div class="pr-ext-row"><label>프리셋 선택</label><label class="pr-toggle-switch"><input type="checkbox" id="pr-ext-modulePresetSelect"><span class="pr-toggle-slider"></span></label></div>
                <div class="pr-ext-row"><label>프롬프트 스위치</label><label class="pr-toggle-switch"><input type="checkbox" id="pr-ext-modulePromptSwitch"><span class="pr-toggle-slider"></span></label></div>
                <div class="pr-ext-row"><label>프리필</label><label class="pr-toggle-switch"><input type="checkbox" id="pr-ext-modulePrefill"><span class="pr-toggle-slider"></span></label></div>
                <div class="pr-ext-row"><label>노트 보드</label><label class="pr-toggle-switch"><input type="checkbox" id="pr-ext-moduleNoteBoard"><span class="pr-toggle-slider"></span></label></div>
            </div>
            <div class="pr-ext-group-title" style="margin-top:8px;">표시 방법</div>
            <div class="pr-ext-row"><label>API 선택</label><div class="pr-ext-btn-group" id="pr-ext-apiDisplayMode"><button data-val="dropdown" class="pr-ext-btn">드롭다운</button><button data-val="buttons" class="pr-ext-btn">버튼</button><button data-val="gallery" class="pr-ext-btn">갤러리</button></div></div>
            <div class="pr-ext-row"><label>프리셋 선택</label><div class="pr-ext-btn-group" id="pr-ext-presetDisplayMode"><button data-val="dropdown" class="pr-ext-btn">드롭다운</button><button data-val="buttons" class="pr-ext-btn">버튼</button><button data-val="gallery" class="pr-ext-btn">갤러리</button></div></div>
        </div>

    </div></div></div>`;
    document.getElementById('extensions_settings2')?.insertAdjacentHTML('beforeend',html);
    const settings=getSettings();

    // 활성화 토글
    const enabledEl=document.getElementById('pr-ext-enabled');
    if(enabledEl){enabledEl.checked=settings.enabled;enabledEl.addEventListener('change',()=>{settings.enabled=enabledEl.checked;save();createToggleButton();});}

    // 기능 토글
    const deps={modulePromptSwitch:'modulePresetSelect',modulePresetSelect:'moduleApiSelect'};
    for(const f of ['moduleApiSelect','modulePresetSelect','modulePromptSwitch','modulePrefill','moduleNoteBoard']){
        const el=document.getElementById('pr-ext-'+f);if(!el)continue;el.checked=settings[f];
        if(deps[f]&&!settings[deps[f]])el.disabled=true;
        el.addEventListener('change',()=>{
            settings[f]=el.checked;
            if(f==='moduleApiSelect'&&!el.checked){settings.modulePresetSelect=false;settings.modulePromptSwitch=false;const ps=document.getElementById('pr-ext-modulePresetSelect'),sw=document.getElementById('pr-ext-modulePromptSwitch');if(ps){ps.checked=false;ps.disabled=true;}if(sw){sw.checked=false;sw.disabled=true;}}
            if(f==='modulePresetSelect'&&!el.checked){settings.modulePromptSwitch=false;const sw=document.getElementById('pr-ext-modulePromptSwitch');if(sw){sw.checked=false;sw.disabled=true;}}
            if(f==='moduleApiSelect'&&el.checked){const ps=document.getElementById('pr-ext-modulePresetSelect');if(ps)ps.disabled=false;}
            if(f==='modulePresetSelect'&&el.checked){const sw=document.getElementById('pr-ext-modulePromptSwitch');if(sw)sw.disabled=false;}
            save();if(panelVisible){if(currentTab==='quick-settings')renderQuickSettings();else renderNoteBoard();}
        });
    }

    // 버튼 그룹 (버튼 위치, 표시 방법)
    for(const f of ['buttonPlacement','apiDisplayMode','presetDisplayMode']){
        const group=document.getElementById('pr-ext-'+f);if(!group)continue;
        group.querySelectorAll('.pr-ext-btn').forEach(btn=>{
            if(btn.dataset.val===settings[f])btn.classList.add('selected');
            btn.addEventListener('click',()=>{
                group.querySelectorAll('.pr-ext-btn').forEach(b=>b.classList.remove('selected'));
                btn.classList.add('selected');
                settings[f]=btn.dataset.val;save();
                if(f==='buttonPlacement')createToggleButton();
                if(panelVisible&&currentTab==='quick-settings')renderQuickSettings();
            });
        });
    }

    // 테마 선택
    const themeRow=document.getElementById('pr-ext-theme');
    if(themeRow){
        themeRow.querySelectorAll('.pr-ext-theme-btn').forEach(btn=>{
            if(btn.dataset.theme===settings.theme)btn.classList.add('selected');
            btn.addEventListener('click',()=>{
                themeRow.querySelectorAll('.pr-ext-theme-btn').forEach(b=>b.classList.remove('selected'));
                btn.classList.add('selected');
                settings.theme=btn.dataset.theme;save();
                applyTheme(settings.theme);
            });
        });
        applyTheme(settings.theme);
    }
}

function applyTheme(theme){
    const targets=[
        document.getElementById('prompt-remote-panel'),
        document.getElementById('prompt-remote-ext-settings')
    ];
    targets.forEach(el=>{
        if(!el)return;
        el.className=el.className.replace(/pr-theme-\S+/g,'').trim();
        if(theme!=='light')el.classList.add('pr-theme-'+theme);
    });
    document.querySelectorAll('.pr-popup-overlay').forEach(el=>{
        el.className=el.className.replace(/pr-theme-\S+/g,'').trim();
        if(theme!=='light')el.classList.add('pr-theme-'+theme);
    });
}
// =============================================
(function init(){
    const{eventSource,event_types}=SillyTavern.getContext();
    insertPanel(); createExtSettings(); createToggleButton(); setupPanelAutoClose();
    eventSource.on(event_types.CHAT_COMPLETION_PROMPT_READY,(e)=>{
        if(e.dryRun)return;
        const s=getSettings();
        if(!s.enabled)return;
        const chat=e.chat;
        if(s.moduleNoteBoard){const nb=getNBData();if(nb&&nb.groups){
            const lastUserIdx=chat.reduce((acc,m,i)=>m.role==='user'?i:acc,-1);
            const baseIdx=lastUserIdx>=0?lastUserIdx:chat.length;
            const grouped={};
            for(const group of nb.groups){
                const notes=group.notes.filter(n=>n.enabled!==false&&n.content);if(notes.length===0)continue;
                let content='';const dir=s.groupDirectives.find(d=>d.id===group.directiveId);
                if(dir&&dir.tagName){content+=`<${dir.tagName}>\n`;if(dir.directive)content+=dir.directive+'\n';}
                content+=notes.map(n=>'- '+n.content).join('\n');
                if(dir&&dir.tagName)content+=`\n</${dir.tagName}>`;
                const d=group.depth??0;
                if(!grouped[d])grouped[d]=[];
                grouped[d].push({role:group.role==='user'?'user':group.role==='assistant'?'assistant':'system',content});
            }
            const depths=Object.keys(grouped).map(Number).sort((a,b)=>b-a);
            for(const d of depths){
                const pos=Math.max(0,chat.length-d);
                const msgs=grouped[d].map(m=>({role:m.role,content:m.content}));
                chat.splice(pos,0,...msgs);
            }
        }}
        if(s.modulePrefill){const pd=s.prefillData[getCurrentPresetName()];if(pd&&pd.enabled&&pd.text){
            chat.push({role:'assistant',content:pd.text});
        }}
    });
    eventSource.on(event_types.CHAT_CHANGED,()=>{if(panelVisible){if(currentTab==='quick-settings')renderQuickSettings();else renderNoteBoard();}});
    if(event_types.PRESET_CHANGED)eventSource.on(event_types.PRESET_CHANGED,()=>{if(panelVisible&&currentTab==='quick-settings')renderQuickSettings();});
    eventSource.on(event_types.OAI_PRESET_CHANGED_AFTER,()=>{const pn=_pendingPresetName;_pendingPresetName=null;setTimeout(()=>{if(pn&&getSettings().modulePromptSwitch)applyPromptSwitchStates(pn);if(panelVisible&&currentTab==='quick-settings')renderQuickSettings();},3000);});
    if(event_types.CONNECTION_PROFILE_LOADED)eventSource.on(event_types.CONNECTION_PROFILE_LOADED,()=>{if(panelVisible&&currentTab==='quick-settings')renderQuickSettings();});
    console.log(`[${MODULE_NAME}] Prompt Remote loaded.`);
})();
