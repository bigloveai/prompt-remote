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
const svgFileText = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm3 14h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m0 -4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m-5 -4h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 0 -2"/><path d="M19 7h-4l-.001 -4.001z"/></svg>';
const svgPlay = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"/></svg>';
const svgFoldUp = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 13v-8l-3 3m6 0l-3 -3"/><path d="M9 17l1 0"/><path d="M14 17l1 0"/><path d="M19 17l1 0"/><path d="M4 17l1 0"/></svg>';
const svgFoldDown = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v8l3 -3m-6 0l3 3"/><path d="M9 7l1 0"/><path d="M14 7l1 0"/><path d="M19 7l1 0"/><path d="M4 7l1 0"/></svg>';
const svgReload = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"/><path d="M20 4v5h-5"/></svg>';

const defaultSettings = Object.freeze({
    enabled: true,
    moduleApiSelect: true,
    modulePresetSelect: true,
    modulePromptSwitch: true,
    modulePrefill: true,
    moduleNoteBoard: true,
    moduleQrOrganizer: true,
    qrFolders: [],
    qrEntries: [],
    qrOptions: { swap: false, charName: '', userName: '', language: '', length: '', api: '', preset: '' },
    apiDisplayMode: 'dropdown',
    presetDisplayMode: 'dropdown',
    buttonPlacement: 'standalone',
    theme: 'light',
    selectedProfiles: [],
    profilePresetMap: {},
    promptSwitchTargets: {},
    promptSwitchStates: {},
    promptSwitchDisplayNames: {},
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
let resettingTab = null;
let resetConfirmationOpen = false;
const NOTE_BOARD_KEY = MODULE_NAME + '_nb';
const newNoteBoard = () => ({ groups: [] });

function getSettings() {
    const { extensionSettings } = SillyTavern.getContext();
    if (!extensionSettings[MODULE_NAME]) extensionSettings[MODULE_NAME] = structuredClone(defaultSettings);
    for (const k of Object.keys(defaultSettings)) {
        if (!Object.hasOwn(extensionSettings[MODULE_NAME], k)) extensionSettings[MODULE_NAME][k] = structuredClone(defaultSettings[k]);
    }
    return extensionSettings[MODULE_NAME];
}

function save() { SillyTavern.getContext().saveSettingsDebounced(); }
function saveMeta() {
    // Old, debounced note editors must not race the bulk reset.
    if (resettingTab === 'note-board') return;
    return SillyTavern.getContext().saveMetadata();
}
function getNBData() {
    const { chatMetadata } = SillyTavern.getContext();
    if (!chatMetadata) return null;
    if (!chatMetadata[NOTE_BOARD_KEY]) chatMetadata[NOTE_BOARD_KEY] = newNoteBoard();
    return chatMetadata[NOTE_BOARD_KEY];
}
function hasChatOpen() { try { const { getCurrentChatId } = SillyTavern.getContext(); return !!(getCurrentChatId && getCurrentChatId()); } catch(e) { return false; } }
function uid() { return 'pr_' + Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
function escHtml(s) { const d = document.createElement('div'); d.textContent = s||''; return d.innerHTML; }

// Each new tab registers its owned settings and optional chat-data cleanup here.
// Shared extension settings (theme, placement, enabled) are deliberately separate.
const tabResetDefinitions = {
    'quick-settings': {
        label: '퀵 세팅',
        description: '퀵 세팅을 초기화할까요?',
        settings: ['selectedProfiles', 'profilePresetMap', 'promptSwitchTargets', 'promptSwitchStates', 'promptSwitchDisplayNames', 'prefillData', 'apiDisplayMode', 'presetDisplayMode', 'moduleApiSelect', 'modulePresetSelect', 'modulePromptSwitch', 'modulePrefill'],
        clear() { _pendingPresetName = null; pendingPresetImports.clear(); cancelPendingSwitchApply(); },
    },
    'note-board': {
        label: '노트 보드',
        description: '모든 채팅의 노트 보드를 초기화할까요?',
        settings: ['noteBoardProfiles', 'groupDirectives', 'moduleNoteBoard'],
        clear(settings) {
            // No generation marker or deferred cleanup is needed after all
            // current chats have actually been reset.
            delete settings.noteBoardResetId;
        },
    },
    'qr-organizer': {
        label: 'QR 런처',
        description: 'QR 런처를 초기화할까요?',
        settings: ['qrFolders', 'qrEntries', 'qrOptions', 'moduleQrOrganizer'],
    },
};

async function getResetHost() {
    return import('../../../../script.js');
}

function isRecord(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

async function resetRequest(url, body) {
    const context = SillyTavern.getContext();
    if (typeof context.getRequestHeaders !== 'function') throw new Error('서버 연결을 확인할 수 없습니다.');
    const response = await fetch(url, {
        method: 'POST', headers: context.getRequestHeaders(),
        body: JSON.stringify(body), cache: 'no-store',
    });
    if (!response.ok) throw new Error(`서버 요청에 실패했습니다 (${response.status}).`);
    return response.json();
}

function assertResetIdle(host) {
    if (host.settingsReady === false || host.isChatSaving ||
        (typeof host.isGenerating === 'function' ? host.isGenerating() : host.is_send_press)) {
        throw new Error('설정 불러오기, 응답 생성 또는 저장이 끝난 뒤 다시 초기화해 주세요.');
    }
}

function currentResetChat() {
    const context = SillyTavern.getContext();
    const id = context.getCurrentChatId?.();
    if (id === null || id === undefined || id === '') return null;
    const avatar = context.characters?.[context.characterId]?.avatar;
    return {
        file_name: String(id) + '.jsonl',
        ...(context.groupId ? { group: context.groupId } : { avatar }),
    };
}

function resetChatKey(chat) {
    return JSON.stringify([chat.group ? 'group' : (chat.avatar || ''), chat.file_name]);
}

function resetChatTarget(chat) {
    if (!isRecord(chat) || typeof chat.file_name !== 'string' ||
        !chat.file_name.endsWith('.jsonl') || /[\\/\0]/.test(chat.file_name)) {
        throw new Error('대화 파일 정보를 확인할 수 없습니다.');
    }
    const id = chat.file_name.slice(0, -6);
    if (!id || id === '.' || id === '..') throw new Error('대화 파일 이름을 확인할 수 없습니다.');
    if (chat.group) {
        return {
            exportBody: { file: chat.file_name, is_group: true, format: 'jsonl' },
            saveUrl: '/api/chats/group/save', saveBody: { id },
        };
    }
    if (typeof chat.avatar !== 'string' || !chat.avatar || /[\\/\0]/.test(chat.avatar)) {
        throw new Error(`${chat.file_name}: 이 종류의 대화를 안전하게 저장할 수 있는지 확인되지 않았습니다.`);
    }
    return {
        exportBody: { file: chat.file_name, avatar_url: chat.avatar, is_group: false, format: 'jsonl' },
        saveUrl: '/api/chats/save', saveBody: { file_name: id, avatar_url: chat.avatar },
    };
}

// ST's normal chat reader silently discards invalid JSONL lines. Use its raw
// export instead, and reject data that cannot survive JSON.parse/stringify
// without a value being lost (for example duplicate keys or rounded numbers).
function resetJsonSignature(text) {
    return (text.match(/"(?:[^"\\]|\\.)*"|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null|[{}\[\]:,]/g) || [])
        .map(token => token[0] === '"' ? JSON.stringify(JSON.parse(token)) : token).join('');
}

function parseResetChat(raw, name) {
    if (typeof raw !== 'string') throw new Error(`${name}: 대화 원본을 읽지 못했습니다.`);
    const lines = raw.split(/\r?\n/);
    while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
    try {
        const chat = lines.map(line => {
            const value = JSON.parse(line);
            if (!isRecord(value) || resetJsonSignature(line) !== resetJsonSignature(JSON.stringify(value))) {
                throw new Error('lossy JSON');
            }
            return value;
        });
        if (!chat.length || !isRecord(chat[0].chat_metadata)) throw new Error('missing metadata');
        return chat;
    } catch {
        throw new Error(`${name}: 다른 데이터를 온전히 보존할 수 없어 이 대화는 저장하지 않았습니다.`);
    }
}

function chatWithoutNoteBoard(chat) {
    const copy = structuredClone(chat);
    delete copy[0].chat_metadata[NOTE_BOARD_KEY];
    return JSON.stringify(copy);
}

async function getResetChatList() {
    const chats = await resetRequest('/api/chats/recent', { metadata: true });
    if (!Array.isArray(chats)) throw new Error('대화 목록을 읽지 못했습니다.');
    for (const chat of chats) {
        if (!isRecord(chat) || typeof chat.file_name !== 'string' ||
            (!isRecord(chat.chat_metadata) && chat.chat_items !== 0)) {
            throw new Error('모든 대화의 저장 정보를 확인하지 못했습니다. 이 상태에서는 초기화를 진행할 수 없습니다.');
        }
    }
    return [...new Map(chats.map(chat => [resetChatKey(chat), chat])).values()];
}

async function readResetChat(target, name) {
    const result = await resetRequest('/api/chats/export', target.exportBody);
    return { raw: result.result, chat: parseResetChat(result.result, name) };
}

async function resetAllNoteBoardChats(host, progress) {
    const context = SillyTavern.getContext();
    const metadata = context.chatMetadata;
    const current = currentResetChat();
    const currentKey = current ? resetChatKey(current) : null;
    const checkContext = () => {
        assertResetIdle(host);
        const now = currentResetChat();
        if ((now ? resetChatKey(now) : null) !== currentKey || SillyTavern.getContext().chatMetadata !== metadata) {
            throw new Error('초기화 중 대화가 바뀌었습니다. 다시 초기화해 주세요.');
        }
    };
    const chats = await getResetChatList();
    checkContext();
    const targets = chats.filter(chat =>
        (isRecord(chat.chat_metadata) && Object.hasOwn(chat.chat_metadata, NOTE_BOARD_KEY)) ||
        (resetChatKey(chat) === currentKey && isRecord(metadata) && Object.hasOwn(metadata, NOTE_BOARD_KEY)))
        .map(chat => ({ info: chat, target: resetChatTarget(chat) }));
    let completed = 0;
    progress(completed, targets.length);
    for (const { info, target } of targets) {
        checkContext();
        const original = await readResetChat(target, info.file_name);
        checkContext();
        const next = structuredClone(original.chat);
        next[0].chat_metadata[NOTE_BOARD_KEY] = newNoteBoard();
        const unchanged = chatWithoutNoteBoard(original.chat);
        if (chatWithoutNoteBoard(next) !== unchanged) throw new Error('다른 대화 데이터의 보존 검사에 실패했습니다.');
        if (JSON.stringify(next) !== JSON.stringify(original.chat)) {
            // Detect an edit since the first read rather than saving stale data.
            const latest = await readResetChat(target, info.file_name);
            checkContext();
            if (latest.raw !== original.raw) throw new Error(`${info.file_name}: 다른 저장 작업이 감지됐습니다. 다시 초기화해 주세요.`);
            if (resetChatKey(info) === currentKey && isRecord(metadata)) metadata[NOTE_BOARD_KEY] = newNoteBoard();
            const saved = await resetRequest(target.saveUrl, { ...target.saveBody, chat: next });
            if (saved?.ok !== true) throw new Error(`${info.file_name}: 저장 성공을 확인하지 못했습니다.`);
            const verified = await readResetChat(target, info.file_name);
            checkContext();
            if (chatWithoutNoteBoard(verified.chat) !== unchanged ||
                JSON.stringify(verified.chat[0].chat_metadata[NOTE_BOARD_KEY]) !== JSON.stringify(newNoteBoard())) {
                throw new Error(`${info.file_name}: 저장 결과가 예상과 다릅니다. 초기화 완료로 처리하지 않았습니다.`);
            }
        }
        progress(++completed, targets.length);
    }
    checkContext();
    if (current && isRecord(metadata) && Object.hasOwn(metadata, NOTE_BOARD_KEY)) metadata[NOTE_BOARD_KEY] = newNoteBoard();
    // Check the current listing again, including files added during the reset.
    const remaining = await getResetChatList();
    checkContext();
    if (remaining.some(chat => isRecord(chat.chat_metadata) && Object.hasOwn(chat.chat_metadata, NOTE_BOARD_KEY) &&
        JSON.stringify(chat.chat_metadata[NOTE_BOARD_KEY]) !== JSON.stringify(newNoteBoard()))) {
        throw new Error('초기화되지 않은 대화가 남아 있습니다. 다른 저장 작업이 끝난 뒤 다시 초기화해 주세요.');
    }
}

async function resetTabData(tabId, progress = () => {}) {
    const definition = tabResetDefinitions[tabId];
    if (!definition) throw new Error(`Unknown tab: ${tabId}`);
    if (resettingTab) throw new Error('이미 초기화가 진행 중입니다.');
    resettingTab = tabId;
    try {
        const host = await getResetHost();
        if (typeof host.saveSettings !== 'function') throw new Error('설정을 저장하는 기능을 확인할 수 없습니다.');
        assertResetIdle(host);
        if (tabId === 'note-board') await resetAllNoteBoardChats(host, progress);
        assertResetIdle(host);
        const settings = getSettings();
        for (const key of definition.settings) {
            delete settings[key];
            if (Object.hasOwn(defaultSettings, key)) settings[key] = structuredClone(defaultSettings[key]);
        }
        definition.clear?.(settings);
        const keys = [...definition.settings, ...(tabId === 'note-board' ? ['noteBoardResetId'] : [])];
        const expected = JSON.stringify(keys.map(key => [key, Object.hasOwn(settings, key), settings[key]]));
        // saveSettings catches its own errors, so awaiting it alone is not a
        // success signal. Read the persisted settings back before completion.
        await host.saveSettings();
        const result = await resetRequest('/api/settings/get', {});
        const stored = JSON.parse(result.settings).extension_settings?.[MODULE_NAME];
        if (!isRecord(stored) || JSON.stringify(keys.map(key => [key, Object.hasOwn(stored, key), stored[key]])) !== expected) {
            throw new Error('초기화한 설정이 저장됐는지 확인하지 못했습니다.');
        }
    } finally {
        resettingTab = null;
    }
}

async function confirmTabReset(tabId) {
    const definition = tabResetDefinitions[tabId];
    if (!definition || resettingTab || resetConfirmationOpen) return;
    if (qrRun) { toastr.info('QR 실행이 끝난 뒤 초기화해 주세요.'); return; }
    resetConfirmationOpen = true;
    let progressDialog;
    let started = false;
    try {
        const confirmed = await showPopup(`${definition.label} 초기화`,
            `<p>${escHtml(definition.description)}</p>`,
            () => {}, { saveLabel: '초기화', cancelLabel: '취소' });
        if (!confirmed) return;
        started = true;
        document.querySelectorAll('.pr-popup-overlay').forEach(dialog => {
            dialog.dispatchEvent(new Event('cancel', { cancelable: true }));
            if (dialog.isConnected) { dialog.close(); dialog.remove(); }
        });
        progressDialog = createPopupOverlay();
        const body = document.createElement('div');
        body.className = 'pr-popup-dialog';
        body.setAttribute('role', 'status');
        const title = document.createElement('h3');
        title.className = 'pr-popup-title';
        title.textContent = `${definition.label} 초기화`;
        const progress = document.createElement('div');
        progress.className = 'pr-popup-body';
        progress.textContent = '초기화 중…';
        body.append(title, progress);
        progressDialog.appendChild(body);
        progressDialog.addEventListener('cancel', event => event.preventDefault());
        document.body.appendChild(progressDialog);
        if (getSettings().theme !== 'light') progressDialog.classList.add('pr-theme-' + getSettings().theme);
        progressDialog.showModal();
        await resetTabData(tabId, (done, total) => { progress.textContent = `초기화 중… (${done}/${total})`; });
        toastr.success(`${definition.label} 초기화 완료`);
    } catch (error) {
        console.error(`[${MODULE_NAME}] Reset failed`, error);
        toastr.error(`${error.message} 일부 값은 이미 초기화됐을 수 있습니다.`, '초기화 미완료');
    } finally {
        progressDialog?.close();
        progressDialog?.remove();
        resetConfirmationOpen = false;
        if (started) {
            createExtSettings();
            if (panelVisible) {
                renderCurrentTab();
            }
        }
    }
}

function forgetPresetSettings(name) {
    if (typeof name !== 'string' || !name) return;
    const settings = getSettings();
    for (const key of ['promptSwitchTargets', 'promptSwitchStates', 'promptSwitchDisplayNames', 'prefillData']) {
        delete settings[key]?.[name];
    }
    for (const profile of Object.keys(settings.profilePresetMap)) {
        if (Array.isArray(settings.profilePresetMap[profile])) {
            settings.profilePresetMap[profile] = settings.profilePresetMap[profile].filter(value => value !== name);
        }
    }
    if (_pendingPresetName === name) _pendingPresetName = null;
    pendingPresetImports.delete(name);
    if (_scheduledPresetName === name) cancelPendingSwitchApply();
    save();
    if (panelVisible && currentTab === 'quick-settings') renderQuickSettings();
}

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
let _switchApplyTimer = null;
let _scheduledPresetName = null;
const pendingPresetImports = new Map();

function completePresetImport(name, storedPreset, importedData) {
    if (pendingPresetImports.get(name) !== importedData) return;
    pendingPresetImports.delete(name);
    // Successful ST imports assign the parsed prompt arrays into the saved
    // preset before selecting it. Reference identity distinguishes that from
    // a failed import followed by an ordinary selection of the old preset.
    if (['prompts', 'prompt_order'].some(key =>
        Array.isArray(importedData?.[key]) && storedPreset?.[key] === importedData[key])) {
        forgetPresetSettings(name);
    }
}

function cancelPendingSwitchApply() {
    clearTimeout(_switchApplyTimer);
    _switchApplyTimer = null;
    _scheduledPresetName = null;
}

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
function createPopupOverlay() {
    const overlay = document.createElement('dialog');
    overlay.className = 'pr-popup-overlay';
    // ST closes unpinned navbar drawers on a bubbling mousedown/touchstart.
    // Our modal lives under body, outside that drawer. Keep modal interactions
    // local without changing ST's drawer behavior for actual outside clicks.
    for (const type of ['mousedown', 'touchstart']) {
        overlay.addEventListener(type, event => event.stopPropagation());
    }
    return overlay;
}

async function showPopup(title, contentHtml, onSave, options = {}) {
    return new Promise((resolve) => {
        const overlay = createPopupOverlay();
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
        overlay.addEventListener('cancel', event => { event.preventDefault(); close(0); });
        if (onSave) {
            const saveBtn = document.createElement('button');
            saveBtn.className = 'pr-popup-btn pr-popup-btn-save';
            saveBtn.textContent = options.saveLabel || '저장';
            saveBtn.addEventListener('click', () => { onSave(body); close(1); });
            footer.appendChild(saveBtn);
            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'pr-popup-btn pr-popup-btn-cancel';
            cancelBtn.textContent = options.cancelLabel || '닫기';
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
        const overlay = createPopupOverlay();
        const dialog = document.createElement('div');
        dialog.className = 'pr-popup-dialog';
        const header = document.createElement('h3');
        header.className = 'pr-popup-title';
        header.textContent = title;
        dialog.appendChild(header);
        const body = document.createElement('div');
        body.className = 'pr-popup-body';
        const lbl = document.createElement('label');
        lbl.className = 'pr-popup-field';
        lbl.textContent = label;
        body.appendChild(lbl);
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'pr-input';
        input.value = defaultVal || '';
        lbl.appendChild(input);
        dialog.appendChild(body);
        const footer = document.createElement('div');
        footer.className = 'pr-popup-footer';
        function close(val) { overlay.close(); overlay.remove(); resolve(val); }
        overlay.addEventListener('cancel', event => { event.preventDefault(); close(null); });
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
                <button class="pr-tab-btn" data-tab="qr-organizer">QR 런처</button>
            </div>
            <button class="pr-close-btn">${svgX}</button>
        </div>
        <div class="pr-tab-content active" id="pr-tab-quick-settings"></div>
        <div class="pr-tab-content" id="pr-tab-note-board"></div>
        <div class="pr-tab-content" id="pr-tab-qr-organizer"></div>`;

    inner.querySelectorAll('.pr-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.hidden) return;
            currentTab = btn.dataset.tab;
            renderCurrentTab();
        });
    });

    inner.querySelector('.pr-close-btn')?.addEventListener('click', () => togglePanel());

    panel.appendChild(inner);
    syncPanelTabs(panel);
    return panel;
}

function syncPanelTabs(panel = document.getElementById('prompt-remote-panel')) {
    if (!panel) return;
    const s = getSettings();
    const enabled = {
        'quick-settings': s.moduleApiSelect || s.modulePresetSelect || s.modulePromptSwitch || s.modulePrefill,
        'note-board': s.moduleNoteBoard,
        'qr-organizer': s.moduleQrOrganizer,
    };
    if (!enabled[currentTab]) currentTab = Object.keys(enabled).find(tab => enabled[tab]) || null;
    panel.querySelectorAll('.pr-tab-btn').forEach(button => {
        button.hidden = !enabled[button.dataset.tab];
        button.classList.toggle('active', button.dataset.tab === currentTab);
    });
    panel.querySelectorAll('.pr-tab-content').forEach(content => {
        content.classList.toggle('active', content.id === 'pr-tab-' + currentTab);
    });
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
        renderCurrentTab();
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
    else if(k==='qr-options') getQrModules().then(openQrOptions).catch(error=>toastr.error(error.message));
    else if(k==='qr-list') openQrEditor();
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
    let html = '<p style="opacity:0.7;">표시할 연결 프로필을 선택하세요.</p><div class="pr-popup-checklist">';
    for (const p of all) {
        const checked = settings.selectedProfiles.includes(p);
        html += `<label class="pr-popup-check"><input type="checkbox" value="${escHtml(p)}" ${checked?'checked':''}>${escHtml(p)}</label>`;
    }
    html += '</div>';
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
    let html = '<p style="opacity:0.7;">선택한 프로필에 배정할 프리셋을 선택하세요.</p><div class="pr-popup-checklist">';
    for (const p of all) {
        html += `<label class="pr-popup-check"><input type="checkbox" value="${escHtml(p)}" ${mapped.includes(p)?'checked':''}>${escHtml(p)}</label>`;
    }
    html += '</div>';
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

    let html = '<p style="opacity:0.7;">선택한 프리셋에 ON/OFF 바로가기할 프롬프트를 선택하세요.</p><div class="pr-popup-checklist">';
    for (const p of prompts) {
        html += `<label class="pr-popup-check">
            <input type="checkbox" data-id="${escHtml(p.identifier)}" ${currentTargets.includes(p.identifier)?'checked':''}>
            ${escHtml(p.name)}</label>`;
    }
    html += '</div>';
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
        <p style="opacity:0.7;">선택한 프리셋에 사용할 프리필을 작성하세요.</p>
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
    let html=`<label class="pr-popup-field">이름<input type="text" id="pr-note-title" class="pr-input" value="${escHtml(note.title||'')}"></label>`;
    if(others.length>0){
        html+=`<label class="pr-popup-field">그룹 이동<div class="pr-dropdown-wrap"><select id="pr-move-tgt"><option value="">현재 그룹 유지</option>`;
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
    await showPopup('그룹 설정',`<div class="pr-popup-form">
        <label class="pr-popup-field">이름<input type="text" id="pr-ge-name" class="pr-input" value="${escHtml(group.name||'')}"></label>
        <label class="pr-popup-field">깊이<input type="number" id="pr-ge-depth" class="pr-input" value="${group.depth??0}" min="0"></label>
        <label class="pr-popup-field">역할<div class="pr-dropdown-wrap"><select id="pr-ge-role"><option value="system" ${group.role==='system'?'selected':''}>system</option><option value="user" ${group.role==='user'?'selected':''}>user</option><option value="assistant" ${group.role==='assistant'?'selected':''}>assistant</option></select></div></label>
        <label class="pr-popup-field">그룹 지침<div class="pr-dropdown-wrap"><select id="pr-ge-dir">${dirOpts}</select></div></label></div>`,(dlg)=>{
        group.name=dlg.querySelector('#pr-ge-name').value||'새 그룹';group.depth=parseInt(dlg.querySelector('#pr-ge-depth').value)||0;
        group.role=dlg.querySelector('#pr-ge-role').value;group.directiveId=dlg.querySelector('#pr-ge-dir').value||null;saveMeta();renderNoteBoard();
    });
}

async function openLoadProfile(){
    const s=getSettings();if(s.noteBoardProfiles.length===0){toastr.warning('저장된 프로필이 없습니다.');return;}
    let html='';for(let i=0;i<s.noteBoardProfiles.length;i++){
        html+=`<div class="pr-popup-card pr-popup-inline" data-pidx="${i}">
            <span style="flex:1;cursor:pointer;">${escHtml(s.noteBoardProfiles[i].name)}</span>
            <div class="pr-group-actions">
                ${i>0?`<button data-pmove="${i}" data-dir="-1">${svgUp}</button>`:`<button class="pr-btn-disabled">${svgUp}</button>`}
                ${i<s.noteBoardProfiles.length-1?`<button data-pmove="${i}" data-dir="1">${svgDown}</button>`:`<button class="pr-btn-disabled">${svgDown}</button>`}
                <button data-prename="${i}">${svgEdit}</button>
                <button data-pdel="${i}">${svgTrash}</button>
            </div></div>`;
    }
    return new Promise((resolve)=>{
        const overlay=createPopupOverlay();
        const dialog=document.createElement('div');dialog.className='pr-popup-dialog';
        const header=document.createElement('h3');header.className='pr-popup-title';header.textContent='불러오기';
        dialog.appendChild(header);
        const body=document.createElement('div');body.className='pr-popup-body pr-popup-card-list';body.innerHTML=html;
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
    function buildList(){return draft.map((d,i)=>`<div class="pr-popup-card pr-popup-form">
        <div class="pr-popup-inline">
            <input type="text" placeholder="이름" value="${escHtml(d.name)}" data-field="name" data-idx="${i}" class="pr-input" style="flex:1;">
            <input type="text" placeholder="태그" value="${escHtml(d.tagName)}" data-field="tagName" data-idx="${i}" class="pr-input" style="width:100px;">
            <button class="pr-popup-icon-btn" data-ddel="${i}">${svgTrash}</button></div>
        <textarea placeholder="지시어 (선택)" data-field="directive" data-idx="${i}" class="pr-input" style="width:100%;min-height:36px;resize:vertical;">${escHtml(d.directive||'')}</textarea></div>`).join('');}
    return new Promise((resolve)=>{
        const overlay=createPopupOverlay();
        const dialog=document.createElement('div');dialog.className='pr-popup-dialog';
        const header=document.createElement('h3');header.className='pr-popup-title';header.textContent='그룹 지침';
        dialog.appendChild(header);
        const body=document.createElement('div');body.className='pr-popup-body';
        body.innerHTML=`<div id="pr-dir-list" class="pr-popup-card-list">${buildList()}</div>`;
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
// TAB 3: QR ORGANIZER
// =============================================
let qrModulesPromise;
let qrCatalog = new Map();
let qrSourceObjects = new Map();
let qrRun = null;
let qrRenderVersion = 0;
const qrLanguages = { ko: ['한국어', 'Korean'], en: ['영어', 'English'], ja: ['일본어', 'Japanese'], zh: ['중국어', 'Chinese'] };
// [paragraph range, scenes, paragraphs per scene]. Counted in paragraphs and
// sentences so the same instruction works in any output language.
const qrLengths = {
    1: [[3, 4]], 2: [[4, 5]], 3: [[6, 7]], 4: [[8, 10]], 5: [[12, 13]],
    6: [[17, 18]], 7: [[24, 25]], 8: [[33, 35], 5, '7'], 9: [[47, 49], 6, '8'], 10: [[65, 68], 7, '9–10'],
};

function renderCurrentTab() {
    syncPanelTabs();
    if (currentTab === 'quick-settings') renderQuickSettings();
    else if (currentTab === 'note-board') renderNoteBoard();
    else if (currentTab === 'qr-organizer') renderQrOrganizer();
}

async function getQrModules() {
    if (!globalThis.quickReplyApi) throw new Error('실리태번의 Quick Reply 기능을 불러온 뒤 다시 열어 주세요.');
    if (!qrModulesPromise) qrModulesPromise = Promise.all([
        import('../../quick-reply/src/QuickReplySet.js'),
        import('../../quick-reply/src/QuickReply.js'),
        import('../../../slash-commands/SlashCommandScope.js'),
        import('../../../slash-commands/SlashCommandParser.js'),
        import('../../../../script.js'),
        import('../../../preset-manager.js'),
        import('../../../openai.js'),
        import('../../../custom-request.js'),
        import('../../../instruct-mode.js'),
        import('../../../power-user.js'),
        import('../../../PromptManager.js'),
        import('../../../tokenizers.js'),
        import('../../../utils.js'),
        import('../../../group-chats.js'),
        import('../../../constants.js'),
        import('../../../tool-calling.js'),
        import('../../../textgen-settings.js'),
        import('../../../kai-settings.js'),
        import('../../../nai-settings.js'),
        import('../../../logit-bias.js'),
        import('../../../textgen-models.js'),
        import('../../../world-info.js'),
        import('../../regex/engine.js'),
        import('../../shared.js'),
        import('../../../sse-stream.js'),
        import('../../../reasoning.js'),
        import('../../../secrets.js'),
    ]).then(([sets, replies, scopes, parser, host, presets, openai, services, instruct, powerUser, prompts, tokenizers, utils, groups, constants, toolCalling, textgen, kobold, novel, logitBias, textgenModels, worldInfo, regex, shared, sse, reasoning, secrets]) => {
        const modules = { ...sets, ...replies, ...scopes, ...parser, host, ...presets, openai, ...services, ...instruct, power_user: powerUser.power_user,
            powerUser, prompts, tokenizers, utils, groups, constants, toolCalling, textgen, kobold, novel, logitBias, textgenModels, worldInfo, regex,
            ConnectionManagerRequestService: shared.ConnectionManagerRequestService, EventSourceStream: sse.default, reasoning, secrets };
        installQrSourceHooks(modules);
        return modules;
    }).catch(error => { qrModulesPromise = null; throw error; });
    return qrModulesPromise;
}

function qrKey(set, id) { return JSON.stringify([set, id]); }
function walkQrFolders(folders, visit) {
    for (const folder of folders) { visit(folder); walkQrFolders(folder.folders, visit); }
}
function findQrFolder(id) {
    let result;
    walkQrFolders(getSettings().qrFolders, folder => { if (folder.id === id) result = folder; });
    return result;
}
function qrAssignments() {
    const assigned = new Map();
    walkQrFolders(getSettings().qrFolders, folder => folder.items.forEach(key => assigned.set(key, folder)));
    return assigned;
}

// Persist references and presentation metadata only. Source code is never stored here.
function reconcileQrCatalog(sets) {
    const settings = getSettings();
    const next = new Map();
    const objects = new Map();
    const renamed = new Map();
    for (const set of sets) {
        if (set.isDeleted) continue;
        for (const qr of set.qrList) {
            const key = qrKey(set.name, qr.id);
            next.set(key, { set, qr });
            objects.set(qr, key);
            const oldKey = qrSourceObjects.get(qr);
            if (oldKey && oldKey !== key) renamed.set(oldKey, key);
        }
    }
    let changed = false;
    settings.qrEntries = settings.qrEntries.filter(entry => {
        const replacement = renamed.get(entry.key);
        if (replacement) { entry.key = replacement; changed = true; }
        if (!next.has(entry.key)) { changed = true; return false; }
        return true;
    });
    const assigned = new Set();
    walkQrFolders(settings.qrFolders, folder => {
        folder.items = folder.items.map(key => {
            if (renamed.has(key)) { changed = true; return renamed.get(key); }
            return key;
        }).filter(key => {
            if (!next.has(key) || assigned.has(key)) { changed = true; return false; }
            assigned.add(key);
            return true;
        });
    });
    qrCatalog = next;
    qrSourceObjects = objects;
    if (changed) save();
    return next;
}

function installQrSourceHooks(modules) {
    // QR has no change/delete event. Observe its existing lifecycle methods;
    // call the original method unchanged and reconcile after it completes.
    const refresh = () => {
        reconcileQrCatalog(modules.QuickReplySet.list);
        if (panelVisible && currentTab === 'qr-organizer') renderQrOrganizer();
    };
    for (const name of ['performSave', 'delete']) {
        const original = modules.QuickReplySet.prototype[name];
        modules.QuickReplySet.prototype[name] = async function(...args) {
            try { return await original.apply(this, args); }
            finally { refresh(); }
        };
    }
    const remove = modules.QuickReply.prototype.delete;
    modules.QuickReply.prototype.delete = function(...args) {
        const result = remove.apply(this, args);
        refresh();
        return result;
    };
    reconcileQrCatalog(modules.QuickReplySet.list);
}

// The main list only shows and runs QRs. Folders, QR membership, order and
// display names/memos are edited in the QR list popup on a draft.
let qrOpenMemo = null;

function closeQrMemo() {
    if (!qrOpenMemo) return;
    const { bubble, button, onOutside } = qrOpenMemo;
    bubble.hidden = true;
    button.setAttribute('aria-expanded', 'false');
    document.removeEventListener('click', onOutside, true);
    qrOpenMemo = null;
}

function toggleQrMemo(button, bubble, key) {
    const wasOpen = qrOpenMemo?.bubble === bubble;
    closeQrMemo();
    if (wasOpen) return;
    // Resolve names when opened, so persona and character changes that do not
    // rebuild the list are reflected. The saved memo stays literal.
    bubble.textContent = qrMemoText(getSettings().qrEntries.find(item => item.key === key)?.memo);
    bubble.hidden = false;
    button.setAttribute('aria-expanded', 'true');
    const onOutside = event => {
        if (!bubble.contains(event.target) && !button.contains(event.target)) closeQrMemo();
    };
    document.addEventListener('click', onOutside, true);
    qrOpenMemo = { bubble, button, onOutside };
}

function qrMemoText(memo) {
    const { name1 = '', name2 = '' } = SillyTavern.getContext();
    const { charName, userName = '', swap } = getSettings().qrOptions;
    const char = charName.trim() || name2;
    const user = userName.trim() || name1;
    const names = swap ? { char: user, user: char } : { char, user };
    return String(memo || '').replace(/\{\{(char|user)\}\}/gi,
        (_, name) => names[name.toLowerCase()]);
}

function buildQrFolder(folder, depth = 0) {
    const element = document.createElement('div'); element.className = 'pr-group pr-qr-folder';
    element.style.setProperty('--qr-depth', Math.min(depth, 4));
    const header = document.createElement('div'); header.className = 'pr-group-header';
    header.innerHTML = `<span class="pr-collapse-icon">${folder.collapsed ? svgCaretRight : svgCaretDown}</span><span class="pr-group-name">${escHtml(folder.name)}</span>`;
    element.appendChild(header);
    header.addEventListener('click', () => { folder.collapsed = !folder.collapsed; save(); renderQrOrganizer(); });
    const body = document.createElement('div'); body.className = 'pr-group-body' + (folder.collapsed ? ' collapsed' : '');
    folder.folders.forEach(child => body.appendChild(buildQrFolder(child, depth + 1)));
    folder.items.forEach(key => {
        const source = qrCatalog.get(key);
        if (!source) return;
        const entry = getSettings().qrEntries.find(item => item.key === key);
        const row = document.createElement('div'); row.className = 'pr-note pr-qr-item';
        const rowHeader = document.createElement('div'); rowHeader.className = 'pr-note-header';
        const name = document.createElement('span'); name.className = 'pr-note-title';
        name.textContent = entry?.alias || source.qr.label || '(이름 없음)';
        const actions = document.createElement('div'); actions.className = 'pr-qr-actions';
        const memo = document.createElement('button'); memo.innerHTML = svgFileText;
        memo.setAttribute('aria-label', '메모');
        const bubble = document.createElement('div'); bubble.className = 'pr-qr-memo'; bubble.hidden = true;
        if (entry?.memo?.trim()) {
            memo.setAttribute('aria-expanded', 'false');
            memo.addEventListener('click', () => toggleQrMemo(memo, bubble, key));
        } else {
            memo.disabled = true; memo.classList.add('pr-btn-disabled');
        }
        const run = document.createElement('button'); run.innerHTML = svgPlay;
        run.setAttribute('aria-label', '실행');
        if (qrRun) { run.disabled = true; run.classList.add('pr-btn-disabled'); }
        run.addEventListener('click', () => executeOrganizedQr(key));
        actions.append(memo, run);
        rowHeader.append(name, actions);
        row.append(rowHeader, bubble);
        body.appendChild(row);
    });
    element.appendChild(body);
    return element;
}

async function openQrEditor() {
    let modules;
    try { modules = await getQrModules(); } catch (error) { toastr.error(error.message); return; }
    reconcileQrCatalog(modules.QuickReplySet.list);
    const settings = getSettings();
    const copyEntry = entry => ({ alias: entry.alias || '', memo: entry.memo || '' });
    const original = new Map(settings.qrEntries.map(entry => [entry.key, copyEntry(entry)]));
    const draft = { folders: structuredClone(settings.qrFolders), entries: new Map([...original].map(([key, entry]) => [key, { ...entry }])) };
    const rows = [...qrCatalog].map(([key, value]) => ({ key, ...value }));
    const sets = modules.QuickReplySet.list.filter(set => rows.some(row => row.set === set));
    const state = { folderId: draft.folders[0]?.id || null, key: null, tab: 'folders', collapsed: new Set() };

    const walk = (folders, visit, depth = 0) => folders.forEach((folder, index) => {
        visit(folder, folders, index, depth);
        walk(folder.folders, visit, depth + 1);
    });
    const findFolder = id => { let found; walk(draft.folders, folder => { if (folder.id === id) found = folder; }); return found; };
    const folderPath = (id, folders = draft.folders, path = []) => {
        for (const folder of folders) {
            if (folder.id === id) return [...path, folder.name];
            const found = folderPath(id, folder.folders, [...path, folder.name]);
            if (found) return found;
        }
        return null;
    };
    const ownerOf = key => { let owner; walk(draft.folders, folder => { if (folder.items.includes(key)) owner = folder; }); return owner; };
    const entryOf = key => {
        if (!draft.entries.has(key)) draft.entries.set(key, { alias: '', memo: '' });
        return draft.entries.get(key);
    };
    walk(draft.folders, folder => { if (folder.collapsed) state.collapsed.add(folder.id); });
    const isDirty = key => {
        const now = draft.entries.get(key) || { alias: '', memo: '' };
        const before = original.get(key) || { alias: '', memo: '' };
        return now.alias !== before.alias || now.memo !== before.memo;
    };
    const labelOf = key => draft.entries.get(key)?.alias?.trim() || qrCatalog.get(key)?.qr.label || '(이름 없음)';
    const move = (list, index, direction) => {
        const target = index + direction;
        if (target < 0 || target >= list.length) return;
        [list[index], list[target]] = [list[target], list[index]];
    };

    const overlay = createPopupOverlay();
    const dialog = document.createElement('div'); dialog.className = 'pr-popup-dialog';
    const title = document.createElement('h3'); title.className = 'pr-popup-title'; title.textContent = 'QR 목록';
    const body = document.createElement('div'); body.className = 'pr-popup-body';
    body.innerHTML = `<p style="opacity:0.7;">선택한 폴더에 추가할 QR을 선택하세요.</p>
    <div class="pr-qr-editor" data-tab="folders">
        <div class="pr-qr-editor-tabs">
            <button data-editor-tab="folders">폴더</button>
            <button data-editor-tab="picker">QR</button>
        </div>
        <div class="pr-qr-editor-columns">
            <div class="pr-qr-editor-folders pr-popup-field">
                <span class="pr-qr-editor-heading">폴더</span>
                <div class="pr-qr-editor-tree pr-popup-card-list"></div>
            </div>
            <div class="pr-qr-editor-picker pr-popup-field">
                <span class="pr-qr-editor-heading">QR</span>
                <div class="pr-popup-card pr-qr-editor-target"></div>
                <div class="pr-dropdown-wrap"><select aria-label="QR 세트"></select></div>
                <div class="pr-qr-picker-list pr-popup-checklist"></div>
            </div>
        </div>
        <div class="pr-qr-editor-detail pr-popup-form"></div>
    </div>`;
    const editor = body.querySelector('.pr-qr-editor');
    const tree = body.querySelector('.pr-qr-editor-tree');
    const target = body.querySelector('.pr-qr-editor-target');
    const select = body.querySelector('select');
    const picker = body.querySelector('.pr-qr-picker-list');
    const detail = body.querySelector('.pr-qr-editor-detail');
    sets.forEach((set, index) => select.add(new Option(set.name, String(index))));
    select.disabled = !sets.length;

    const askFolderName = async (heading, value) => {
        const name = await showInputPopup(heading, '이름', value);
        return name?.trim() || null;
    };
    const actionButton = (parent, svg, label, callback) => {
        addBtn(parent, svg, label, callback);
        const button = parent.lastElementChild;
        button.setAttribute('aria-label', label);
    };

    function renderTabs() {
        editor.dataset.tab = state.tab;
        body.querySelectorAll('[data-editor-tab]').forEach(button => button.classList.toggle('selected', button.dataset.editorTab === state.tab));
    }

    function renderTree() {
        tree.replaceChildren();
        // Same order as the main list: a folder, its subfolders, then its QRs.
        const renderFolder = (folder, siblings, index, depth) => {
            const row = document.createElement('div');
            row.className = 'pr-popup-card pr-popup-inline pr-qr-editor-folder' + (folder.id === state.folderId ? ' selected' : '');
            row.style.setProperty('--qr-depth', Math.min(depth, 4));
            const collapsed = state.collapsed.has(folder.id);
            const caret = document.createElement('span'); caret.className = 'pr-collapse-icon';
            caret.innerHTML = collapsed ? svgCaretRight : svgCaretDown;
            const name = document.createElement('span'); name.className = 'pr-qr-editor-name'; name.textContent = folder.name;
            const actions = document.createElement('div'); actions.className = 'pr-group-actions';
            actionButton(actions, svgUp, '폴더 위로', index > 0 ? () => { move(siblings, index, -1); renderAll(); } : null);
            actionButton(actions, svgDown, '폴더 아래로', index < siblings.length - 1 ? () => { move(siblings, index, 1); renderAll(); } : null);
            actionButton(actions, svgLoad, '하위 폴더 추가', async () => {
                const childName = await askFolderName('하위 폴더 추가', '새 폴더');
                if (!childName) return;
                const child = { id: uid(), name: childName, collapsed: false, items: [], folders: [] };
                folder.folders.push(child);
                state.folderId = child.id;
                renderAll();
            });
            actionButton(actions, svgEdit, '폴더 이름 변경', async () => {
                const newName = await askFolderName('이름 변경', folder.name);
                if (!newName) return;
                folder.name = newName;
                renderAll();
            });
            actionButton(actions, svgTrash, '폴더 삭제', () => {
                siblings.splice(index, 1);
                if (!findFolder(state.folderId)) state.folderId = null;
                renderAll();
            });
            row.append(caret, name, actions);
            row.addEventListener('click', event => {
                if (event.target.closest('.pr-group-actions')) return;
                if (state.folderId === folder.id) {
                    if (collapsed) state.collapsed.delete(folder.id); else state.collapsed.add(folder.id);
                } else state.folderId = folder.id;
                renderAll();
            });
            tree.appendChild(row);
            if (collapsed) return;
            folder.folders.forEach((child, childIndex) => renderFolder(child, folder.folders, childIndex, depth + 1));
            folder.items.forEach((key, itemIndex) => {
                if (!qrCatalog.has(key)) return;
                const item = document.createElement('div');
                item.className = 'pr-popup-list-item pr-qr-editor-item' + (key === state.key ? ' pr-qr-assigned' : '');
                item.style.setProperty('--qr-depth', Math.min(depth, 4));
                const label = document.createElement('span'); label.className = 'pr-popup-list-name'; label.textContent = labelOf(key);
                if (isDirty(key)) {
                    const dot = document.createElement('span'); dot.className = 'pr-qr-dirty'; dot.textContent = ' •';
                    label.appendChild(dot);
                }
                const itemActions = document.createElement('div'); itemActions.className = 'pr-group-actions';
                actionButton(itemActions, svgUp, 'QR 위로', itemIndex > 0 ? () => { move(folder.items, itemIndex, -1); renderAll(); } : null);
                actionButton(itemActions, svgDown, 'QR 아래로', itemIndex < folder.items.length - 1 ? () => { move(folder.items, itemIndex, 1); renderAll(); } : null);
                actionButton(itemActions, svgX, '폴더에서 빼기', () => {
                    folder.items.splice(itemIndex, 1);
                    renderAll();
                });
                item.append(label, itemActions);
                item.addEventListener('click', event => {
                    if (event.target.closest('.pr-group-actions')) return;
                    state.key = state.key === key ? null : key;
                    state.folderId = folder.id;
                    renderAll();
                });
                tree.appendChild(item);
            });
        };
        draft.folders.forEach((folder, index) => renderFolder(folder, draft.folders, index, 0));
        if (!draft.folders.length) {
            const empty = document.createElement('p'); empty.style.opacity = '0.5'; empty.textContent = '폴더 없음';
            tree.appendChild(empty);
        }
    }

    function renderPicker() {
        const folder = findFolder(state.folderId);
        target.textContent = folder ? folderPath(folder.id).join(' / ') : '선택한 폴더 없음';
        picker.replaceChildren();
        for (const row of rows.filter(row => row.set === sets[Number(select.value)])) {
            const owner = ownerOf(row.key);
            const elsewhere = owner && owner !== folder;
            const label = document.createElement('label');
            label.className = 'pr-qr-choice pr-popup-check' + (owner === folder && folder ? ' pr-qr-assigned' : '');
            const input = document.createElement('input'); input.type = 'checkbox';
            input.checked = !!owner && owner === folder;
            input.disabled = !folder || !!elsewhere;
            const name = document.createElement('span'); name.textContent = row.qr.label || '(이름 없음)';
            label.append(input, name);
            if (elsewhere) { const status = document.createElement('small'); status.textContent = owner.name + '에 있음'; label.appendChild(status); }
            input.addEventListener('change', () => {
                if (input.checked) { folder.items.push(row.key); entryOf(row.key); }
                else folder.items.splice(folder.items.indexOf(row.key), 1);
                renderAll();
            });
            picker.appendChild(label);
        }
    }

    function renderDetail() {
        detail.replaceChildren();
        if (!state.key || !qrCatalog.has(state.key) || !ownerOf(state.key)) {
            state.key = null;
            return;
        }
        const key = state.key;
        const entry = entryOf(key);
        detail.innerHTML = '<label class="pr-popup-field">표시 이름<input class="pr-input" data-detail="alias"></label><label class="pr-popup-field">메모<textarea class="pr-input" data-detail="memo"></textarea></label>';
        const alias = detail.querySelector('[data-detail="alias"]');
        alias.value = entry.alias; alias.placeholder = qrCatalog.get(key).qr.label;
        const memo = detail.querySelector('[data-detail="memo"]');
        memo.value = entry.memo;
        for (const field of [alias, memo]) field.addEventListener('input', () => {
            entry[field.dataset.detail] = field.value;
            renderTree();
        });
    }

    function renderAll() { renderTabs(); renderTree(); renderPicker(); renderDetail(); }

    body.querySelectorAll('[data-editor-tab]').forEach(button => button.addEventListener('click', () => {
        state.tab = button.dataset.editorTab;
        renderTabs();
    }));
    select.addEventListener('change', renderPicker);

    return new Promise(resolve => {
        function close(saved) { overlay.close(); overlay.remove(); resolve(saved); }
        const footer = document.createElement('div'); footer.className = 'pr-popup-footer';
        const add = document.createElement('button'); add.className = 'pr-popup-btn pr-popup-btn-save'; add.innerHTML = `${svgPlus} 폴더 추가`; add.style.marginRight = 'auto';
        add.addEventListener('click', async () => {
            const name = await askFolderName('폴더 추가', '새 폴더');
            if (!name) return;
            const folder = { id: uid(), name, collapsed: false, items: [], folders: [] };
            draft.folders.push(folder);
            state.folderId = folder.id;
            renderAll();
        });
        const saveButton = document.createElement('button'); saveButton.className = 'pr-popup-btn pr-popup-btn-save'; saveButton.textContent = '저장';
        saveButton.addEventListener('click', () => {
            // QR sources can change while the popup is open. Keep only existing,
            // single-folder references, as reconcileQrCatalog does.
            reconcileQrCatalog(modules.QuickReplySet.list);
            const seen = new Set();
            const clean = folders => folders.map(folder => ({
                ...folder,
                items: folder.items.filter(key => qrCatalog.has(key) && !seen.has(key) && seen.add(key)),
                folders: clean(folder.folders),
            }));
            const current = getSettings();
            current.qrFolders = clean(draft.folders);
            const entries = current.qrEntries.filter(entry => qrCatalog.has(entry.key));
            for (const [key, value] of draft.entries) {
                if (!qrCatalog.has(key)) continue;
                const next = { alias: value.alias.trim(), memo: value.memo };
                const existing = entries.find(entry => entry.key === key);
                if (existing) Object.assign(existing, next);
                else if (seen.has(key) || next.alias || next.memo) entries.push({ key, ...next });
            }
            for (const key of seen) if (!entries.some(entry => entry.key === key)) entries.push({ key, alias: '', memo: '' });
            current.qrEntries = entries;
            save(); renderQrOrganizer();
            close(true);
        });
        const cancel = document.createElement('button'); cancel.className = 'pr-popup-btn pr-popup-btn-cancel'; cancel.textContent = '닫기';
        cancel.addEventListener('click', () => close(false));
        overlay.addEventListener('cancel', event => { event.preventDefault(); close(false); });
        footer.append(add, saveButton, cancel);
        dialog.append(title, body, footer);
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
        const _t=getSettings().theme;if(_t!=='light')overlay.classList.add('pr-theme-'+_t);overlay.showModal();document.activeElement?.blur();
        renderAll();
    });
}

function getQrOptions(modules) {
    const options = getSettings().qrOptions;
    if (Object.hasOwn(options, 'presets')) {
        // Retain the previously displayed selection once; never keep an API-keyed map.
        if (!Object.hasOwn(options, 'preset')) options.preset = options.presets?.[modules.host.main_api] || '';
        delete options.presets;
        save();
    }
    options.preset ??= '';
    options.api ??= '';
    if (options.language && !Object.hasOwn(qrLanguages, options.language)) { options.language = ''; save(); }
    options.length ??= '';
    if (options.length && !Object.hasOwn(qrLengths, options.length)) { options.length = ''; save(); }
    return options;
}

function getQrApiProfiles() {
    return SillyTavern.getContext().extensionSettings.connectionManager?.profiles || [];
}

async function openQrOptions(modules) {
    const options = structuredClone(getQrOptions(modules));
    const html = `<div class="pr-qr-options pr-popup-form">
        <div class="pr-toggle-row"><label for="pr-qr-swap">{{char}} ↔ {{user}}</label><label class="pr-toggle-switch"><input id="pr-qr-swap" type="checkbox"><span class="pr-toggle-slider"></span></label></div>
        <label class="pr-popup-field">{{char}} 이름<input class="pr-input" id="pr-qr-char" placeholder="현재 캐릭터 이름"></label>
        <label class="pr-popup-field">{{user}} 이름<input class="pr-input" id="pr-qr-user" placeholder="현재 유저 이름"></label>
        <label class="pr-popup-field">출력 언어<div class="pr-dropdown-wrap"><select id="pr-qr-language"></select></div></label>
        <label class="pr-popup-field">분량<div class="pr-dropdown-wrap"><select id="pr-qr-length"></select></div></label>
        <label class="pr-popup-field">API<div class="pr-dropdown-wrap"><select id="pr-qr-api"></select></div></label>
        <label class="pr-popup-field">프리셋<div class="pr-dropdown-wrap"><select id="pr-qr-preset"></select></div></label></div>`;
    const popup = showPopup('QR 설정', html, body => {
        Object.assign(getSettings().qrOptions, {
            swap: body.querySelector('#pr-qr-swap').checked,
            charName: body.querySelector('#pr-qr-char').value,
            userName: body.querySelector('#pr-qr-user').value,
            language: body.querySelector('#pr-qr-language').value,
            length: body.querySelector('#pr-qr-length').value,
            api: body.querySelector('#pr-qr-api').value,
            preset: body.querySelector('#pr-qr-preset').value,
        });
        save(); renderQrOrganizer();
    });
    document.getElementById('pr-qr-swap').checked = options.swap;
    const charInput = document.getElementById('pr-qr-char');
    const userInput = document.getElementById('pr-qr-user');
    charInput.value = options.charName;
    userInput.value = options.userName || '';
    // Empty fields use the live names; show those names, not a generic hint.
    charInput.placeholder = modules.host.name2 || charInput.placeholder;
    userInput.placeholder = modules.host.name1 || userInput.placeholder;
    const language = document.getElementById('pr-qr-language');
    language.add(new Option('지시 없음', ''));
    for (const [value, [label]] of Object.entries(qrLanguages)) language.add(new Option(label, value));
    language.value = options.language;
    const length = document.getElementById('pr-qr-length');
    length.add(new Option('지시 없음', ''));
    for (const level of Object.keys(qrLengths)) length.add(new Option(qrLengthLabel(level), level));
    length.value = options.length;
    const api = document.getElementById('pr-qr-api');
    api.add(new Option('현재 선택한 API', ''));
    for (const profile of getQrApiProfiles()) api.add(new Option(profile.name, profile.id));
    if (options.api && ![...api.options].some(option => option.value === options.api)) api.add(new Option('삭제된 API', options.api));
    api.value = options.api;
    const preset = document.getElementById('pr-qr-preset');
    preset.add(new Option('현재 선택한 프리셋', ''));
    const manager = modules.getPresetManager();
    for (const name of manager?.getAllPresets() || []) {
        if (manager.findPreset?.(name) !== 'gui') preset.add(new Option(name, name));
    }
    const selected = options.preset;
    if (selected && ![...preset.options].some(option => option.value === selected)) {
        preset.add(new Option(selected, selected));
    }
    preset.value = selected;
    await popup;
}

function installQrStatusEvents({ eventSource, event_types }) {
    const refresh = async () => {
        if (!panelVisible || currentTab !== 'qr-organizer') return;
        try {
            const modules = await getQrModules();
            if (!panelVisible || currentTab !== 'qr-organizer') return;
            document.querySelector('#pr-tab-qr-organizer .pr-qr-status')?.replaceWith(buildQrStatus(modules));
        } catch (error) {
            console.warn(`[${MODULE_NAME}] Could not refresh QR status`, error);
        }
    };
    // Chat-bound personas load asynchronously after CHAT_CHANGED. Read the
    // live name when the persona has actually changed, not only at chat switch.
    // Renaming or editing the current character changes {{char}} the same way.
    for (const type of [event_types.PERSONA_CHANGED, event_types.PERSONA_RENAMED, event_types.CHARACTER_RENAMED, event_types.CHARACTER_EDITED]) {
        if (type) eventSource.on(type, refresh);
    }
}

function buildQrStatus(modules) {
    const options = getQrOptions(modules);
    const char = options.charName.trim() || modules.host.name2 || '';
    const user = options.userName?.trim() || modules.host.name1 || '';
    const profile = getQrApiProfiles().find(profile => profile.id === options.api);
    const currentId = SillyTavern.getContext().extensionSettings.connectionManager?.selectedProfile;
    const currentProfile = getQrApiProfiles().find(profile => profile.id === currentId);
    const currentApi = currentProfile?.name || (getCurrentProfile() !== '<None>' ? getCurrentProfile() : '')
        || (modules.host.main_api === 'openai' ? modules.openai?.oai_settings?.chat_completion_source : modules.textgen?.textgenerationwebui_settings?.type) || modules.host.main_api;
    const currentPreset = modules.getPresetManager()?.getSelectedPresetName?.() || getCurrentPresetName();
    const status = document.createElement('div'); status.className = 'pr-qr-status-body';
    const field = (label, value) => {
        const item = document.createElement('span'); item.className = 'pr-qr-status-field';
        item.title = `${label}: ${value}`;
        const caption = document.createElement('span'); caption.className = 'pr-qr-status-label'; caption.textContent = label;
        const text = document.createElement('span'); text.className = 'pr-qr-status-value'; text.textContent = value;
        item.append(caption, text);
        return item;
    };
    const people = document.createElement('div'); people.className = 'pr-qr-status-people';
    people.append(field('{{char}}', options.swap ? user : char), field('{{user}}', options.swap ? char : user));
    const language = document.createElement('span'); language.className = 'pr-qr-status-language';
    const languageName = qrLanguages[options.language]?.[0];
    const lengthName = qrLengths[options.length] ? `${options.length}단계` : '';
    language.textContent = [languageName, lengthName].filter(Boolean).join(' · ') || '지시 없음';
    language.title = `언어: ${languageName || '지시 없음'} / 분량: ${qrLengths[options.length] ? qrLengthLabel(options.length) : '지시 없음'}`;
    people.appendChild(language);
    const transmission = document.createElement('div'); transmission.className = 'pr-qr-status-transmission';
    transmission.append(
        field('API', options.api ? profile?.name || '삭제된 API' : currentApi || '현재 API'),
        field('프리셋', options.preset || currentPreset || '현재 프리셋'),
    );
    status.append(people, transmission);
    const card = buildSection('QR 설정', 'qr-options', status);
    card.classList.add('pr-qr-status');
    return card;
}

async function renderQrOrganizer() {
    const version = ++qrRenderVersion;
    const container = document.getElementById('pr-tab-qr-organizer');
    if (!container) return;
    container.replaceChildren();
    if (!getSettings().moduleQrOrganizer) return;
    try {
        const modules = await getQrModules();
        if (version !== qrRenderVersion) return;
        reconcileQrCatalog(modules.QuickReplySet.list);
        closeQrMemo();
        container.appendChild(buildQrStatus(modules));
        const folders = getSettings().qrFolders;
        const tree = document.createElement('div'); tree.className = 'pr-qr-tree';
        if (folders.length) folders.forEach(folder => tree.appendChild(buildQrFolder(folder)));
        else tree.appendChild(emptyMsg('미설정 (⚙에서 설정)'));
        const list = buildSection('QR 목록', 'qr-list', tree);
        if (folders.length) {
            // All open or mixed: the pending action is folding all. All closed: opening all.
            let open = 0, closed = 0;
            walkQrFolders(folders, folder => folder.collapsed ? closed++ : open++);
            const collapse = !!open || !closed;
            const fold = document.createElement('button');
            fold.className = 'pr-gear-btn';
            fold.innerHTML = collapse ? svgFoldUp : svgFoldDown;
            fold.setAttribute('aria-label', collapse ? '전부 접기' : '전부 펼치기');
            fold.addEventListener('click', event => {
                event.stopPropagation();
                walkQrFolders(getSettings().qrFolders, folder => { folder.collapsed = collapse; });
                save(); renderQrOrganizer();
            });
            const gear = list.querySelector('.pr-section-header > .pr-gear-btn');
            const actions = document.createElement('div');
            actions.style.cssText = 'display:flex;align-items:center;gap:0;';
            gear.replaceWith(actions);
            actions.append(fold, gear);
        }
        container.appendChild(list);
    } catch (error) {
        if (version === qrRenderVersion) container.appendChild(emptyMsg(error.message));
    }
}

function qrLanguageInstruction(options) {
    const language = qrLanguages[options.language]?.[1];
    return [language ? `Write the response in ${language}, regardless of earlier output-language instructions.` : '',
        qrLengthInstruction(options)].filter(Boolean).join(' ');
}

function qrLengthLabel(level) {
    const [[min, max]] = qrLengths[level];
    return `${level}단계 · ${min}~${max}문단`;
}

function qrLengthInstruction(options) {
    const length = qrLengths[options.length];
    if (!length) return '';
    const [[min, max], scenes, perScene] = length;
    const paragraphs = `${min}–${max}`;
    const level = Number(options.length);
    if (scenes) {
        return `Length requirement: write about ${paragraphs} paragraphs in total, organized as ${scenes} scenes of about ${perScene} paragraphs each (4–6 sentences per paragraph). `
            + 'Give every scene its own full development; do not summarize events or skip ahead to finish sooner, and do not conclude before the final scene. '
            + 'Write the entire length in this single response without stopping to ask whether to continue. '
            + 'Do not label the scenes unless the request asks for it. Do not pad with repetition or filler. '
            + 'This overrides any earlier length instructions.';
    }
    return `Length requirement: write ${paragraphs} paragraphs, each about 4–6 sentences. `
        + 'Keep developing the content until you reach this length; do not end early, and do not pad it with repetition or filler. '
        + (level >= 5 ? 'Pace the content across the whole length: do not wrap up or conclude before the final paragraphs. ' : '')
        + 'This overrides any earlier length instructions.';
}

function addQrLanguageToMessages(messages, instruction) {
    if (!instruction) return messages;
    // An instruction already attached to this QR's input must stay with that
    // input, even when a preset places other messages after it.
    if (messages.some(message => typeof message.content === 'string' && qrLanguageWasPlaced(message.content))) return messages;
    let index = messages.length;
    while (index > 0 && messages[index - 1].role === 'assistant') index--;
    const message = messages[index - 1];
    if (message && typeof message.content === 'string') {
        message.content = appendQrLanguage(message.content, instruction);
    } else if (message && Array.isArray(message.content)) {
        // Keep images/audio and the original role. Put the directive in the
        // same message as the QR, not a separately reordered system message.
        const last = message.content.at(-1);
        if (last?.type === 'text') last.text = appendQrLanguage(last.text, instruction);
        else message.content.push({ type: 'text', text: instruction });
    } else {
        messages.splice(index, 0, { role: 'system', content: instruction });
    }
    return messages;
}

function appendQrLanguage(text, instruction) {
    if (!instruction || text.trimEnd().endsWith(instruction)) return text;
    return text + '\n\n' + instruction;
}

function qrLanguageWasPlaced(text) {
    if (!qrRun) return false;
    if (qrRun.languageTexts?.has(text)) return true;
    return [qrRun.commandLanguageInput, qrRun.generationLanguageInput]
        .some(input => input && text.includes(input));
}

function rememberQrLanguageText(text) {
    if (qrRun) (qrRun.languageTexts ||= new Set()).add(text);
    return text;
}

function readQrApi(modules, options) {
    if (!options.api) return null;
    const profile = getQrApiProfiles().find(profile => profile.id === options.api);
    if (!profile) throw new Error('선택한 QR API를 찾을 수 없습니다.');
    const map = modules.ConnectionManagerRequestService.validateProfile(profile);
    const connection = { profile: structuredClone(profile), map: { ...map } };
    if (map.source === 'vertexai') qrApiConnection(modules, connection);
    return connection;
}

// The same connection fields used by ST's ConnectionManagerRequestService.
// Only a request-local payload receives them; no profile is selected/applied.
function qrApiConnection(modules, connection) {
    const { profile, map } = connection;
    if (map.selected === 'openai') {
        const proxy = modules.openai.proxies?.find(proxy => proxy.name === profile.proxy);
        const vertex = {};
        if (map.source === 'vertexai') {
            const settings = modules.openai.oai_settings;
            const { SECRET_KEYS = {}, secret_state = {} } = modules.secrets || {};
            const id = profile['secret-id'];
            // Profiles store a credential ID but no Vertex authentication mode.
            // Use ST's loaded ID/type metadata; never read credential contents.
            const records = [
                ['full', secret_state[SECRET_KEYS.VERTEXAI_SERVICE_ACCOUNT]],
                ['express', secret_state[SECRET_KEYS.VERTEXAI]],
            ].flatMap(([mode, list]) => Array.isArray(list) ? list.map(secret => ({ mode, secret })) : []);
            const selected = id && (records.find(record => record.secret.id === id)
                || records.find(record => record.secret.label === id));
            if (!selected?.secret.id) throw new Error('선택한 API 프로필의 키가 실리태번에 없습니다. 실리태번 연결 프로필에서 이 프로필을 고르고 저장 버튼을 눌러 주세요.');
            vertex.vertexai_auth_mode = selected.mode;
            vertex.secret_id = selected.secret.id;
            vertex.vertexai_region = profile['api-url'] || settings.vertexai_region;
            vertex.vertexai_express_project_id = settings.vertexai_express_project_id;
        }
        return {
            model: profile.model, chat_completion_source: map.source,
            secret_id: profile['secret-id'], custom_url: profile['api-url'],
            ...vertex, zai_endpoint: profile['api-url'],
            siliconflow_endpoint: profile['api-url'], minimax_endpoint: profile['api-url'],
            pollinations_endpoint: profile['api-url'],
            reverse_proxy: proxy?.url || '', proxy_password: proxy?.password || '',
            custom_prompt_post_processing: profile['prompt-post-processing'],
        };
    }
    return { model: profile.model, api_type: map.type, api_server: profile['api-url'], secret_id: profile['secret-id'] };
}

function applyQrApiConnection(modules, payload, connection) {
    const next = { ...payload };
    for (const key of ['model', 'chat_completion_source', 'api_type', 'api_server', 'secret_id',
        'custom_url', 'custom_include_body', 'custom_exclude_body', 'custom_include_headers',
        'reverse_proxy', 'proxy_password', 'custom_prompt_post_processing', 'vertexai_region',
        'vertexai_auth_mode', 'vertexai_express_project_id',
        'zai_endpoint', 'siliconflow_endpoint', 'minimax_endpoint', 'pollinations_endpoint',
        'azure_base_url', 'azure_deployment_name', 'azure_api_version', 'workers_ai_account_id']) delete next[key];
    return Object.assign(next, qrApiConnection(modules, connection));
}

function buildQrApiPayload(modules, payload, callerApi, connection) {
    const api = connection.map.selected;
    let next = applyQrApiConnection(modules, payload, connection);
    if (api === callerApi) return next;
    const content = payload.messages ?? payload.prompt ?? payload.input;
    const length = payload.max_tokens ?? payload.max_completion_tokens ?? payload.max_new_tokens ?? payload.max_length ?? payload.parameters?.max_length ?? payload.params?.max_length;
    const sampling = payload.parameters || payload.params;
    if (sampling) next = { ...sampling, ...next };
    delete next.messages; delete next.prompt; delete next.input; delete next.params; delete next.parameters;
    delete next.streaming;
    next.stream = !!(payload.stream || payload.streaming);
    next.max_tokens = length;
    if (api === 'openai') {
        next.messages = Array.isArray(content) ? structuredClone(content) : [{ role: 'user', content: String(content ?? '') }];
        next.stop = payload.stop ?? payload.stopping_strings;
    } else {
        if (Array.isArray(content)) {
            const instruct = connection.profile['instruct-state'] === 'false' ? null
                : connection.profile.instruct || (modules.power_user.instruct?.enabled ? modules.power_user.instruct : null);
            next.prompt = instruct ? modules.TextCompletionService.constructPrompt(structuredClone(content), instruct)
                : content.map(message => typeof message.content === 'string' ? message.content : message.content?.filter(part => part.type === 'text').map(part => part.text).join('\n') || '').join('\n\n');
        } else next.prompt = String(content ?? '');
        next.max_new_tokens = length;
        next.stopping_strings = payload.stopping_strings ?? payload.stop ?? [];
    }
    return next;
}

function qrReplyChunk(text, reasoning, caller, index = 0, images = []) {
    if (caller.api === 'openai') {
        if (caller.source === 'claude') return { type: 'content_block_delta', index, delta: { type: 'text_delta', text, thinking: reasoning } };
        if (['makersuite', 'vertexai'].includes(caller.source)) return { candidates: [{ content: { parts: [
            ...(reasoning ? [{ text: reasoning, thought: true }] : []), { text },
            ...images.map(url => { const match = /^data:([^;]+);base64,(.*)$/s.exec(url); return match ? { inlineData: { mimeType: match[1], data: match[2] } } : null; }).filter(Boolean),
        ] } }] };
        if (caller.source === 'cohere') return { delta: { message: { content: { text } } } };
        return { choices: [{ index, delta: { content: text, reasoning, reasoning_content: reasoning,
            ...(images.length ? { images: images.map(url => ({ type: 'image_url', image_url: { url } })) } : {}) } }] };
    }
    if (['kobold', 'novel'].includes(caller.api)) return { token: text };
    return { choices: [{ index, text, reasoning }], content: text };
}

async function adaptQrApiResponse(response, modules, connection, caller) {
    const api = connection.map.selected;
    if (!response.ok || (api === caller.api && (api !== 'openai' || connection.map.source === caller.source))) return response;
    if (!caller.stream) {
        const data = await response.json();
        if (data.error) return new Response(JSON.stringify(data), { status: response.status, headers: { 'Content-Type': 'application/json' } });
        const text = modules.host.extractMessageFromData(data, api);
        const reasoning = modules.reasoning.extractReasoningFromData(data, { mainApi: api, chatCompletionSource: connection.map.source, textGenType: connection.map.type, ignoreShowThoughts: true });
        const result = { ...data, choices: [{ ...data.choices?.[0], message: { ...data.choices?.[0]?.message, content: text, reasoning, reasoning_content: reasoning }, text }],
            text, output: text, results: [{ text }] };
        // Remove a source-specific content field that would take precedence
        // over choices in the caller's native response reader.
        delete result.content;
        const toolBlocks = Array.isArray(data.content) ? data.content.filter(part => part.type === 'tool_use') : [];
        if (caller.source === 'claude' || toolBlocks.length) result.content = [{ type: 'text', text }, { type: 'thinking', thinking: reasoning }, ...toolBlocks];
        if (['makersuite', 'vertexai'].includes(caller.source)) result.responseContent = { parts: [{ thought: true, text: reasoning }] };
        return new Response(JSON.stringify(result), { status: response.status, headers: { 'Content-Type': 'application/json' } });
    }
    const reader = response.body.pipeThrough(new modules.EventSourceStream()).getReader();
    const encoder = new TextEncoder();
    const state = { reasoning: '', images: [], signature: '', toolSignatures: {} };
    const body = new ReadableStream({
        async pull(controller) {
            try {
                while (true) {
                    const { value, done } = await reader.read();
                    if (done || value.data === '[DONE]') {
                        controller.enqueue(encoder.encode('data: [DONE]\n\n')); controller.close();
                        await reader.cancel(); return;
                    }
                    if (!value.data) continue;
                    const data = JSON.parse(value.data);
                    if (data.error) { controller.enqueue(encoder.encode(`data: ${value.data}\n\n`)); continue; }
                    const beforeReasoning = state.reasoning.length, beforeImages = state.images.length;
                    const text = api === 'openai'
                        ? modules.openai.getStreamingReply(data, state, { chatCompletionSource: connection.map.source, overrideShowThoughts: true })
                        : data.choices?.[0]?.text ?? data.content ?? '';
                    const reasoning = api === 'openai' ? state.reasoning.slice(beforeReasoning) : data.choices?.[0]?.reasoning ?? data.choices?.[0]?.thinking ?? '';
                    const chunk = qrReplyChunk(text, reasoning, caller, data.choices?.[0]?.index ?? data.index ?? 0, state.images.slice(beforeImages));
                    // Native ToolManager recognizes these fields independently
                    // of provider. Preserve them while adapting the text stream.
                    if (data.choices?.[0]?.delta?.tool_calls) {
                        chunk.choices ??= [{ index: data.choices[0].index ?? 0, delta: {} }];
                        chunk.choices[0].delta ??= {};
                        chunk.choices[0].delta.tool_calls = data.choices[0].delta.tool_calls;
                    }
                    if (data.content_block?.type === 'tool_use') chunk.content_block = data.content_block;
                    if (data.delta?.type === 'input_json_delta') chunk.delta = { ...chunk.delta, ...data.delta };
                    if (data.type === 'content_block_stop') chunk.type = data.type;
                    if (['tool-call-start', 'tool-call-delta', 'tool-call-end'].includes(data.type)) { chunk.type = data.type; chunk.delta = { ...chunk.delta, ...data.delta }; }
                    const toolParts = data.candidates?.[0]?.content?.parts?.filter(part => part.functionCall) || [];
                    if (toolParts.length) {
                        if (chunk.candidates) chunk.candidates[0].content.parts.push(...toolParts);
                        else chunk.candidates = [{ content: { parts: toolParts } }];
                    }
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify(chunk)}\n\n`)); return;
                }
            } catch (error) { controller.error(error); await reader.cancel(error).catch(() => {}); }
        },
        cancel(reason) { return reader.cancel(reason); },
    });
    return new Response(body, { status: response.status, headers: { 'Content-Type': 'text/event-stream' } });
}

function addQrLanguageToText(text, instruction, modules, { api = modules.host.main_api, instruct = modules.power_user?.instruct } = {}) {
    if (!instruction || qrLanguageWasPlaced(text)) return text;
    let boundary = text.length;
    // Native raw callers can arrive already formatted. Derive the closing
    // delimiters and answer opening from ST's formatter, never template names.
    // Insert inside the final instruction, before its closing delimiter.
    if (instruct?.enabled !== false && instruct && modules.formatInstructModePrompt) {
        const { name1, name2 } = modules.host;
        const openings = [];
        for (const [quiet, loud] of [[true, false], [true, true], [false, false]]) {
            const opening = modules.formatInstructModePrompt(name2, false, '', name1, name2, quiet, loud, instruct).trimEnd();
            if (opening.trim()) openings.push(opening);
        }
        let openingIndex = -1;
        for (const opening of openings) openingIndex = Math.max(openingIndex, text.lastIndexOf(opening));
        if (openingIndex >= 0) boundary = openingIndex;
        if (modules.formatInstructModeChat) {
            const marker = '\uE000prompt-remote-language\uE001';
            const suffixes = [[true, false, name1], [false, true, ''], [false, false, name2]]
                .map(([user, narrator, name]) => {
                    const formatted = modules.formatInstructModeChat(name, marker, user, narrator, '', name1, name2, false, instruct);
                    return formatted.slice(formatted.indexOf(marker) + marker.length).trimEnd();
                }).filter(Boolean).sort((a, b) => b.length - a.length);
            const prefix = text.slice(0, boundary).trimEnd();
            const suffix = suffixes.find(suffix => prefix.endsWith(suffix));
            if (suffix) boundary = prefix.length - suffix.length;
        }
    }
    const prefix = text.slice(0, boundary).trimEnd();
    if (prefix.endsWith(instruction)) return rememberQrLanguageText(text);
    const directive = api === 'novel' ? '{ ' + instruction + ' }' : instruction;
    if (prefix.endsWith(directive)) return rememberQrLanguageText(text);
    return rememberQrLanguageText(prefix + '\n\n' + directive + text.slice(prefix.length));
}

function installQrRequestGuard(modules, run, instruction, cleanups) {
    if ((!instruction && !run.preset && !run.connection) || typeof globalThis.fetch !== 'function') return;
    const base = document.baseURI;
    const origin = new URL(base).origin;
    const routes = new Map([
        ['/api/backends/chat-completions/generate', 'openai'],
        ['/api/horde/generate-text', 'koboldhorde'],
    ]);
    for (const api of ['kobold', 'koboldhorde', 'textgenerationwebui', 'novel']) routes.set(modules.host.getGenerateUrl(api), api);
    routes.set('/api/backends/kobold/generate/stream', 'kobold');
    const original = globalThis.fetch;
    const wrapped = async function(input, init) {
        if (qrRun !== run) return original.call(this, input, init);
        const request = typeof Request !== 'undefined' && input instanceof Request;
        const url = new URL(request ? input.url : String(input), base);
        const api = url.origin === origin ? routes.get(url.pathname) : null;
        const method = String(init?.method || (request ? input.method : 'GET')).toUpperCase();
        if (!api || method !== 'POST') return original.call(this, input, init);
        const body = init?.body ?? (request ? await input.clone().text() : null);
        if (typeof body !== 'string') return original.call(this, input, init);
        let payload;
        try { payload = JSON.parse(body); } catch { return original.call(this, input, init); }
        if (!isRecord(payload)) return original.call(this, input, init);
        const caller = { api, source: payload.chat_completion_source, stream: !!(payload.stream || payload.streaming || url.pathname.endsWith('/stream')) };
        if (run.connection?.map.selected === api) payload = applyQrApiConnection(modules, payload, run.connection);
        let changed = false;
        if (run.preset && !run.serviceDepth) {
            payload = await buildQrPresetRequest(modules, run, payload, api);
            changed = true;
        }
        for (const field of ['messages', 'prompt', 'input']) {
            if (Array.isArray(payload[field]) && payload[field].every(message => isRecord(message) && typeof message.role === 'string')) {
                const before = JSON.stringify(payload[field]);
                addQrLanguageToMessages(payload[field], instruction);
                changed ||= before !== JSON.stringify(payload[field]);
            } else if (typeof payload[field] === 'string') {
                const text = addQrLanguageToText(payload[field], instruction, modules, { api });
                changed ||= text !== payload[field];
                payload[field] = text;
            }
        }
        if (run.connection) {
            payload = buildQrApiPayload(modules, payload, api, run.connection);
            payload.stream = caller.stream;
            const destination = run.connection.map.selected === 'openai' ? '/api/backends/chat-completions/generate'
                : modules.host.getGenerateUrl(run.connection.map.selected);
            const response = await original.call(this, destination, {
                ...(request ? { headers: input.headers, credentials: input.credentials, cache: input.cache, signal: input.signal } : {}),
                ...init, method: 'POST', body: JSON.stringify(payload),
            });
            return adaptQrApiResponse(response, modules, run.connection, caller);
        }
        if (!changed) return original.call(this, input, init);
        return original.call(this, input, { ...init, body: JSON.stringify(payload) });
    };
    globalThis.fetch = wrapped;
    cleanups.push(() => { if (globalThis.fetch === wrapped) globalThis.fetch = original; });
}

// BEGIN QR PRIVATE CHAT BUILDER
// Adapted from SillyTavern public/scripts/openai.js (GPL-3.0),
// commit 06bde939fb1e9c4c8d8641d810f0a916b5bce127.
// Native ordering, injection, token budgeting and payload conversion, with
// request-local settings, prompt manager and token counters. No UI initialization.
function createQrChatBuilder(modules, oai_settings) {
    const { Prompt, INJECTION_POSITION } = modules.prompts;
    const { IGNORE_SYMBOL, MEDIA_DISPLAY, MEDIA_TYPE } = modules.constants;
    const { chat_completion_sources, tool_reasoning_modes, reasoning_effort_types, verbosity_levels,
        ZAI_ENDPOINT, POLLINATIONS_ENDPOINT, SILICONFLOW_ENDPOINT, MINIMAX_ENDPOINT, model_list } = modules.openai;
    const { extension_prompt_roles, extension_prompt_types, name1, name2, system_message_types,
        getMediaDisplay, getMediaIndex, getExtensionPrompt, getRequestHeaders, getCurrentChatId,
        substituteParams, substituteParamsExtended } = modules.host;
    const { selected_group, getGroupNames } = modules.groups;
    const { stringFormat, createThumbnail, getAudioDurationFromDataURL, getBase64Async,
        getImageSizeFromDataURL, getVideoDurationFromDataURL, isDataURL, clamp } = modules.utils;
    const { power_user, persona_description_positions, getCustomStoppingStrings } = modules.powerUser;
    const { getTokenizerModel, countTokensOpenAIAsync } = modules.tokenizers;
    const main_api = 'openai';
    const default_settings = { inline_image_quality: 'auto' };
    const openai_max_stop_strings = 4;
    let biasCache = null;
    const getChatCompletionModel = (settings = oai_settings) => modules.openai.getChatCompletionModel(settings);
    const getExtensionPromptMaxDepth = () => modules.host.getExtensionPromptMaxDepth();
    const validateReverseProxy = async () => {
        if (!['http:', 'https:'].includes(new URL(oai_settings.reverse_proxy).protocol)) throw new Error('잘못된 연결 주소입니다.');
    };
    const ToolManager = {
        isToolCallingSupported: () => modules.toolCalling.ToolManager.isToolCallingSupported(oai_settings, getChatCompletionModel()),
        canPerformToolCalls: type => modules.toolCalling.ToolManager.canPerformToolCalls(type, oai_settings, getChatCompletionModel()),
        registerFunctionToolsOpenAI: data => modules.toolCalling.ToolManager.registerFunctionToolsOpenAI(data),
    };
    const tokenHandler = new modules.openai.TokenHandler(countTokensOpenAIAsync);
    const promptManager = new modules.prompts.PromptManager();
    promptManager.serviceSettings = oai_settings;
    promptManager.tokenHandler = tokenHandler;
    promptManager.configuration.promptOrder.dummyId = 100001;
    promptManager.activeCharacter = { id: 100001, group: modules.groups.groups?.find(group => group.id === selected_group) };
    promptManager.sanitizeServiceSettings();

    function setOpenAIMessages(chat) {
        let j = 0;
    
        const messages = [];
    
        const currentApi = oai_settings.chat_completion_source;
        const currentModel = getChatCompletionModel();
    
        for (let i = chat.length - 1; i >= 0; i--) {
            let role = chat[j].is_user ? 'user' : 'assistant';
            let content = chat[j].mes;
    
            if (chat[j].extra?.[IGNORE_SYMBOL]) {
                j++;
                continue;
            }
    
            if (chat[j].extra?.type === system_message_types.NARRATOR) {
                role = 'system';
            }
    
            switch (oai_settings.names_behavior) {
                case character_names_behavior.NONE:
                    break;
                case character_names_behavior.DEFAULT:
                    if ((selected_group && chat[j].name !== name1) || (chat[j].force_avatar && chat[j].name !== name1 && chat[j].extra?.type !== system_message_types.NARRATOR)) {
                        content = `${chat[j].name}: ${content}`;
                    }
                    break;
                case character_names_behavior.CONTENT:
                    if (chat[j].extra?.type !== system_message_types.NARRATOR) {
                        content = `${chat[j].name}: ${content}`;
                    }
                    break;
                case character_names_behavior.COMPLETION:
                    break;
                default:
                    break;
            }
    
            content = content.replace(/\r/gm, '');
    
            const name = chat[j].name;
            const media = chat[j]?.extra?.media;
            const mediaDisplay = getMediaDisplay(chat[j]);
            const mediaIndex = getMediaIndex(chat[j]);
            const invocations = chat[j]?.extra?.tool_invocations?.slice();
    
            const originApi = chat[j]?.extra?.api;
            const originModel = chat[j]?.extra?.model;
            const isSameModel = originApi === currentApi && originModel === currentModel;
    
            const isOtherGroupMember = selected_group && chat[j].name !== name2;
            const signature = isSameModel && !isOtherGroupMember ? chat[j]?.extra?.reasoning_signature : null;
            const reasoning = isSameModel && !isOtherGroupMember ? String(chat[j]?.extra?.reasoning ?? '') : '';
    
            if (Array.isArray(invocations) && invocations.length > 0) {
                invocations.forEach((invocation, index) => {
                    if (!isSameModel && (invocation.signature || invocation.reasoning)) {
                        const cloneInvocation = structuredClone(invocation);
                        delete cloneInvocation.signature;
                        delete cloneInvocation.reasoning;
                        invocations[index] = cloneInvocation;
                    }
                });
            }
    
            messages[i] = { 'role': role, 'content': content, name: name, 'media': media, 'mediaDisplay': mediaDisplay, 'mediaIndex': mediaIndex, 'invocations': invocations, 'signature': signature, 'reasoning': reasoning };
            j++;
        }
    
        return messages;
    }
    
    function setOpenAIMessageExamples(mesExamplesArray) {
    
        const examples = [];
        for (let item of mesExamplesArray) {
    
            let replaced = item.replace(/<START>/i, '{Example Dialogue:}').replace(/\r/gm, '');
            let parsed = parseExampleIntoIndividual(replaced, true);
    
            examples.push(parsed);
        }
        return examples;
    }
    
    function parseExampleIntoIndividual(messageExampleString, appendNamesForGroup = true) {
        const groupBotNames = getGroupNames().map(name => `${name}:`);
    
        let result = [];
        let tmp = messageExampleString.split('\n');
        let cur_msg_lines = [];
        let in_user = false;
        let in_bot = false;
        let botName = name2;
    
        function add_msg(name, role, system_name) {
    
            let parsed_msg = cur_msg_lines.join('\n').replace(name + ':', '').trim();
    
            if (appendNamesForGroup && selected_group && ['example_user', 'example_assistant'].includes(system_name)) {
                parsed_msg = `${name}: ${parsed_msg}`;
            }
    
            result.push({ 'role': role, 'content': parsed_msg, 'name': system_name });
            cur_msg_lines = [];
        }
    
        for (let i = 1; i < tmp.length; i++) {
            let cur_str = tmp[i];
    
            if (cur_str.startsWith(name1 + ':')) {
                in_user = true;
    
                if (in_bot) {
                    add_msg(botName, 'system', 'example_assistant');
                }
                in_bot = false;
            } else if (cur_str.startsWith(name2 + ':') || groupBotNames.some(n => cur_str.startsWith(n))) {
                if (!cur_str.startsWith(name2 + ':') && groupBotNames.length) {
                    botName = cur_str.split(':')[0];
                }
    
                in_bot = true;
    
                if (in_user) {
                    add_msg(name1, 'system', 'example_user');
                }
                in_user = false;
            }
    
            cur_msg_lines.push(cur_str);
        }
    
        if (in_user) {
            add_msg(name1, 'system', 'example_user');
        } else if (in_bot) {
            add_msg(botName, 'system', 'example_assistant');
        }
        return result;
    }
    
    function formatWorldInfo(value, { wiFormat = null } = {}) {
        if (!value) {
            return '';
        }
    
        const format = wiFormat ?? oai_settings.wi_format;
    
        if (!format.trim()) {
            return value;
        }
    
        return stringFormat(format, value);
    }
    
    async function populationInjectionPrompts(prompts, messages) {
        let totalInsertedMessages = 0;
    
        const roleTypes = {
            'system': extension_prompt_roles.SYSTEM,
            'user': extension_prompt_roles.USER,
            'assistant': extension_prompt_roles.ASSISTANT,
        };
    
        const maxDepth = Math.max(getExtensionPromptMaxDepth(), ...prompts.map(p => Number(p.injection_depth) || 0));
        for (let i = 0; i <= maxDepth; i++) {
    
            const depthPrompts = prompts.filter(prompt => prompt.injection_depth === i && prompt.content);
    
            const roleMessages = [];
            const separator = '\n';
            const wrap = false;
    
            const extensionPromptsOrder = '100';
            const orderGroups = {
                [extensionPromptsOrder]: [],
            };
            for (const prompt of depthPrompts) {
                const order = prompt.injection_order ?? 100;
                if (!orderGroups[order]) {
                    orderGroups[order] = [];
                }
                orderGroups[order].push(prompt);
            }
    
            const orders = Object.keys(orderGroups).sort((a, b) => +b - +a);
            for (const order of orders) {
                const orderPrompts = orderGroups[order];
    
                const roles = ['system', 'user', 'assistant'];
                for (const role of roles) {
                    const rolePrompts = orderPrompts
                        .filter(prompt => prompt.role === role)
                        .map(x => x.content)
                        .join(separator);
    
                    const extensionPrompt = order === extensionPromptsOrder
                        ? await getExtensionPrompt(extension_prompt_types.IN_CHAT, i, separator, roleTypes[role], wrap)
                        : '';
                    const jointPrompt = [rolePrompts, extensionPrompt].filter(x => x).map(x => x.trim()).join(separator);
    
                    if (jointPrompt && jointPrompt.length) {
                        roleMessages.push({ 'role': role, 'content': jointPrompt, injected: true });
                    }
                }
            }
    
            if (roleMessages.length) {
                const injectIdx = i + totalInsertedMessages;
                messages.splice(injectIdx, 0, ...roleMessages);
                totalInsertedMessages += roleMessages.length;
            }
        }
    
        messages = messages.reverse();
        return messages;
    }
    
    async function populateChatHistory(messages, prompts, chatCompletion, type = null, cyclePrompt = null) {
        if (!prompts.has('chatHistory')) {
            return;
        }
    
        chatCompletion.add(new MessageCollection('chatHistory'), prompts.index('chatHistory'));
    
        const newChat = selected_group ? oai_settings.new_group_chat_prompt : oai_settings.new_chat_prompt;
        const newChatMessage = await Message.createAsync('system', substituteParams(newChat), 'newMainChat');
        chatCompletion.reserveBudget(newChatMessage);
    
        let groupNudgeMessage = null;
        const noGroupNudgeTypes = ['impersonate'];
        if (selected_group && prompts.has('groupNudge') && !noGroupNudgeTypes.includes(type)) {
            groupNudgeMessage = await Message.fromPromptAsync(prompts.get('groupNudge'));
            chatCompletion.reserveBudget(groupNudgeMessage);
        }
    
        let continueMessageCollection = null;
        if (type === 'continue' && cyclePrompt && !oai_settings.continue_prefill) {
            const promptObject = {
                identifier: 'continueNudge',
                role: 'system',
                content: substituteParamsExtended(oai_settings.continue_nudge_prompt, { lastChatMessage: String(cyclePrompt).trim() }),
                system_prompt: true,
            };
            continueMessageCollection = new MessageCollection('continueNudge');
            const continueMessageIndex = messages.findLastIndex(x => !x.injected);
            if (continueMessageIndex >= 0) {
                const continueMessage = messages.splice(continueMessageIndex, 1)[0];
                const prompt = new Prompt(continueMessage);
                const chatMessage = await Message.fromPromptAsync(promptManager.preparePrompt(prompt));
                continueMessageCollection.add(chatMessage);
            }
            const continueNudgePrompt = new Prompt(promptObject);
            const preparedNudgePrompt = promptManager.preparePrompt(continueNudgePrompt);
            const continueNudgeMessage = await Message.fromPromptAsync(preparedNudgePrompt);
            continueMessageCollection.add(continueNudgeMessage);
            chatCompletion.reserveBudget(continueMessageCollection);
        }
    
        const lastChatPrompt = messages[messages.length - 1];
        const message = await Message.createAsync('user', oai_settings.send_if_empty, 'emptyUserMessageReplacement');
        if (lastChatPrompt && lastChatPrompt.role === 'assistant' && oai_settings.send_if_empty && chatCompletion.canAfford(message)) {
            chatCompletion.insert(message, 'chatHistory');
        }
    
        const imageInlining = isImageInliningSupported();
        const videoInlining = isVideoInliningSupported();
        const audioInlining = isAudioInliningSupported();
        const canUseTools = ToolManager.isToolCallingSupported();
        const includeSignature = isReasoningSignatureSupported();
        const isToolReasoningProvider = interleaved_reasoning_providers.includes(oai_settings.chat_completion_source);
        const toolReasoningMode = isToolReasoningProvider
            ? getEffectiveToolReasoningMode()
            : tool_reasoning_modes.DISABLED;
        const includeToolReasoning = toolReasoningMode !== tool_reasoning_modes.DISABLED;
        const lastUserIdx = messages.findLastIndex(x => x.role === 'user');
    
        const chatPool = [...messages].reverse();
        for (let index = 0; index < chatPool.length; index++) {
            const chatPrompt = chatPool[index];
    
            const prompt = new Prompt(chatPrompt);
            prompt.identifier = `chatHistory-${messages.length - index}`;
            const chatMessage = await Message.fromPromptAsync(promptManager.preparePrompt(prompt));
    
            if (promptManager.serviceSettings.names_behavior === character_names_behavior.COMPLETION && prompt.name) {
                const messageName = promptManager.isValidName(prompt.name) ? prompt.name : promptManager.sanitizeName(prompt.name);
                await chatMessage.setName(messageName);
            }
    
            async function inlineMediaAttachment(media) {
                if (!media || !media.url) {
                    return;
                }
                if (!media.type) {
                    media.type = MEDIA_TYPE.IMAGE;
                }
                if (imageInlining && media.type === MEDIA_TYPE.IMAGE) {
                    await chatMessage.addImage(media.url);
                }
                if (videoInlining && media.type === MEDIA_TYPE.VIDEO) {
                    await chatMessage.addVideo(media.url);
                }
                if (audioInlining && media.type === MEDIA_TYPE.AUDIO) {
                    await chatMessage.addAudio(media.url);
                }
            }
    
            if (Array.isArray(chatPrompt.media) && chatPrompt.media.length) {
                if (chatPrompt.mediaDisplay === MEDIA_DISPLAY.LIST) {
                    for (const media of chatPrompt.media) {
                        await inlineMediaAttachment(media);
                    }
                }
                if (chatPrompt.mediaDisplay === MEDIA_DISPLAY.GALLERY) {
                    const media = chatPrompt.media[chatPrompt.mediaIndex];
                    await inlineMediaAttachment(media);
                }
            }
    
            if (canUseTools && Array.isArray(chatPrompt.invocations)) {
                const promptIdx = messages.indexOf(chatPrompt);
                const reasoningIsEligible = toolReasoningMode !== tool_reasoning_modes.DISABLED
                    && promptIdx > lastUserIdx;
                let previousAssistantReasoning = '';
                if (reasoningIsEligible) {
                    if (toolReasoningMode === tool_reasoning_modes.ACTIVE_CHAIN) {
    
                        for (let idx = promptIdx - 1; idx > lastUserIdx; idx--) {
                            const candidate = messages[idx];
                            if (candidate?.role === 'tool') {
                                continue;
                            }
                            if (candidate?.role === 'assistant' && Array.isArray(candidate.invocations)) {
                                continue;
                            }
                            const hasAssistantText = candidate?.role === 'assistant'
                                && !Array.isArray(candidate.invocations)
                                && typeof candidate.content === 'string'
                                && candidate.content.trim().length > 0;
                            if (hasAssistantText) {
                                previousAssistantReasoning = String(candidate.reasoning ?? '');
                            }
                            break;
                        }
                    } else if (toolReasoningMode === tool_reasoning_modes.SINCE_LAST_USER) {
    
                        for (let idx = promptIdx - 1; idx > lastUserIdx; idx--) {
                            const candidate = messages[idx];
                            const hasAssistantText = candidate?.role === 'assistant'
                                && !Array.isArray(candidate.invocations)
                                && typeof candidate.content === 'string'
                                && candidate.content.trim().length > 0;
                            if (!hasAssistantText) {
                                continue;
                            }
                            const candidateReasoning = String(candidate.reasoning ?? '');
                            if (candidateReasoning) {
                                previousAssistantReasoning = candidateReasoning;
                                break;
                            }
                        }
                    }
                }
    
                const invocations = chatPrompt.invocations.map(invocation => {
                    const clone = structuredClone(invocation);
                    if (!reasoningIsEligible) {
                        delete clone.reasoning;
                    } else if (previousAssistantReasoning && !clone.reasoning) {
    
                        clone.reasoning = previousAssistantReasoning;
                    }
                    return clone;
                });
                const toolCallMessage = await Message.createAsync(chatMessage.role, undefined, 'toolCall-' + chatMessage.identifier);
                const toolResultMessages = await Promise.all(invocations.slice().reverse().map((invocation) => Message.createAsync('tool', invocation.result || '[No content]', invocation.id)));
                await toolCallMessage.setToolCalls(invocations, includeSignature, includeToolReasoning);
                if (chatCompletion.canAffordAll([toolCallMessage, ...toolResultMessages])) {
                    for (const resultMessage of toolResultMessages) {
                        chatCompletion.insertAtStart(resultMessage, 'chatHistory');
                    }
                    chatCompletion.insertAtStart(toolCallMessage, 'chatHistory');
                } else {
                    break;
                }
    
                continue;
            }
    
            if (includeSignature && chatPrompt.signature) {
                chatMessage.signature = chatPrompt.signature;
            }
    
            if (chatCompletion.canAfford(chatMessage)) {
                chatCompletion.insertAtStart(chatMessage, 'chatHistory');
            } else {
                break;
            }
        }
    
        chatCompletion.freeBudget(newChatMessage);
        chatCompletion.insertAtStart(newChatMessage, 'chatHistory');
    
        if (selected_group && groupNudgeMessage) {
            chatCompletion.freeBudget(groupNudgeMessage);
            chatCompletion.insertAtEnd(groupNudgeMessage, 'chatHistory');
        }
    
        if (type === 'continue' && continueMessageCollection) {
            chatCompletion.freeBudget(continueMessageCollection);
            chatCompletion.add(continueMessageCollection, -1);
        }
    }
    
    async function populateDialogueExamples(prompts, chatCompletion, messageExamples) {
        if (!prompts.has('dialogueExamples')) {
            return;
        }
    
        chatCompletion.add(new MessageCollection('dialogueExamples'), prompts.index('dialogueExamples'));
        if (Array.isArray(messageExamples) && messageExamples.length) {
            const newExampleChat = await Message.createAsync('system', substituteParams(oai_settings.new_example_chat_prompt), 'newChat');
            for (const dialogue of [...messageExamples]) {
                const dialogueIndex = messageExamples.indexOf(dialogue);
                const chatMessages = [];
    
                for (let promptIndex = 0; promptIndex < dialogue.length; promptIndex++) {
                    const prompt = dialogue[promptIndex];
                    const role = 'system';
                    const content = prompt.content || '';
                    const identifier = `dialogueExamples ${dialogueIndex}-${promptIndex}`;
    
                    const chatMessage = await Message.createAsync(role, content, identifier);
                    await chatMessage.setName(prompt.name);
                    chatMessages.push(chatMessage);
                }
    
                if (!chatCompletion.canAffordAll([newExampleChat, ...chatMessages])) {
                    break;
                }
    
                chatCompletion.insert(newExampleChat, 'dialogueExamples');
                for (const chatMessage of chatMessages) {
                    chatCompletion.insert(chatMessage, 'dialogueExamples');
                }
            }
        }
    }
    
    function getPromptPosition(position) {
        if (position == extension_prompt_types.BEFORE_PROMPT) {
            return 'start';
        }
    
        if (position == extension_prompt_types.IN_PROMPT) {
            return 'end';
        }
    
        return false;
    }
    
    function getPromptRole(role) {
        switch (role) {
            case extension_prompt_roles.SYSTEM:
                return 'system';
            case extension_prompt_roles.USER:
                return 'user';
            case extension_prompt_roles.ASSISTANT:
                return 'assistant';
            default:
                return 'system';
        }
    }
    
    async function populateChatCompletion(prompts, chatCompletion, { bias, quietPrompt, quietImage, type, cyclePrompt, messages, messageExamples }) {
    
        const addToChatCompletion = async (source, target = null) => {
    
            if (false === prompts.has(source)) return;
    
            if (promptManager.isPromptDisabledForActiveCharacter(source) && source !== 'main') {
                promptManager.log(`Skipping prompt ${source} because it is disabled`);
                return;
            }
    
            const prompt = prompts.get(source);
    
            if (prompt.injection_position === INJECTION_POSITION.ABSOLUTE) {
                promptManager.log(`Skipping prompt ${source} because it is an absolute prompt`);
                return;
            }
    
            const index = target ? prompts.index(target) : prompts.index(source);
            const collection = new MessageCollection(source);
            const message = await Message.fromPromptAsync(prompt);
            collection.add(message);
            chatCompletion.add(collection, index);
        };
    
        chatCompletion.reserveBudget(3);
    
        await addToChatCompletion('worldInfoBefore');
        await addToChatCompletion('main');
        await addToChatCompletion('worldInfoAfter');
        await addToChatCompletion('charDescription');
        await addToChatCompletion('charPersonality');
        await addToChatCompletion('scenario');
        await addToChatCompletion('personaDescription');
    
        chatCompletion.setOverriddenPrompts(prompts.overriddenPrompts);
        const controlPrompts = new MessageCollection('controlPrompts');
    
        const impersonateMessage = await Message.fromPromptAsync(prompts.get('impersonate')) ?? null;
        if (type === 'impersonate') controlPrompts.add(impersonateMessage);
    
        const quietPromptMessage = await Message.fromPromptAsync(prompts.get('quietPrompt')) ?? null;
        if (quietPromptMessage && quietPromptMessage.content) {
            if (isImageInliningSupported() && quietImage) {
                await quietPromptMessage.addImage(quietImage);
            }
    
            controlPrompts.add(quietPromptMessage);
        }
    
        chatCompletion.reserveBudget(controlPrompts);
    
        const systemPrompts = ['nsfw', 'jailbreak'];
        const userRelativePrompts = prompts.collection
            .filter((prompt) => false === prompt.system_prompt && prompt.injection_position !== INJECTION_POSITION.ABSOLUTE)
            .reduce((acc, prompt) => {
                acc.push(prompt.identifier);
                return acc;
            }, []);
        const absolutePrompts = prompts.collection
            .filter((prompt) => prompt.injection_position === INJECTION_POSITION.ABSOLUTE)
            .reduce((acc, prompt) => {
                acc.push(prompt);
                return acc;
            }, []);
    
        for (const identifier of [...systemPrompts, ...userRelativePrompts]) {
            await addToChatCompletion(identifier);
        }
    
        if (prompts.has('enhanceDefinitions')) await addToChatCompletion('enhanceDefinitions');
    
        if (bias && bias.trim().length) await addToChatCompletion('bias');
    
        const injectToMain = async ( prompt,  position) => {
            if (chatCompletion.has('main')) {
                const message = await Message.fromPromptAsync(prompt);
                chatCompletion.insert(message, 'main', position);
            } else {
    
                const indexOfMain = absolutePrompts.findIndex(p => p.identifier === 'main');
                if (indexOfMain >= 0) {
                    const main = absolutePrompts[indexOfMain];
                    const promptCopy = new Prompt(prompt);
                    promptCopy.role = main.role;
                    promptCopy.injection_position = main.injection_position;
                    promptCopy.injection_depth = main.injection_depth;
                    promptCopy.injection_order = main.injection_order;
                    const newIndex = position === 'end' ? indexOfMain + 1 : indexOfMain;
                    absolutePrompts.splice(newIndex, 0, promptCopy);
                }
            }
        };
    
        const knownPrompts = [
            'summary',
            'authorsNote',
            'vectorsMemory',
            'vectorsDataBank',
            'smartContext',
        ];
    
        for (const key of knownPrompts) {
            if (prompts.has(key)) {
                const prompt = prompts.get(key);
                if (prompt.position) {
                    await injectToMain(prompt, prompt.position);
                }
            }
        }
    
        for (const prompt of prompts.collection.filter(p => p.extension && p.position)) {
            await injectToMain(prompt, prompt.position);
        }
    
        if (ToolManager.canPerformToolCalls(type)) {
            const toolData = {};
            await ToolManager.registerFunctionToolsOpenAI(toolData);
            const toolMessage = [{ role: 'user', content: JSON.stringify(toolData) }];
            const toolTokens = await tokenHandler.countAsync(toolMessage);
            chatCompletion.reserveBudget(toolTokens);
        }
    
        if (type === 'continue' && oai_settings.continue_prefill && messages.length) {
            const chatMessage = messages.shift();
            const isAssistantRole = chatMessage.role === 'assistant';
            const supportsAssistantPrefill = oai_settings.chat_completion_source === chat_completion_sources.CLAUDE;
            const namesInCompletion = oai_settings.names_behavior === character_names_behavior.COMPLETION;
            const assistantPrefill = isAssistantRole && supportsAssistantPrefill ? substituteParams(oai_settings.assistant_prefill) : '';
            const messageContent = [assistantPrefill, chatMessage.content].filter(x => x).join('\n\n');
            const continueMessage = await Message.createAsync(chatMessage.role, messageContent, 'continuePrefill');
            chatMessage.name && namesInCompletion && await continueMessage.setName(promptManager.sanitizeName(chatMessage.name));
            controlPrompts.add(continueMessage);
            chatCompletion.reserveBudget(continueMessage);
        }
    
        messages = await populationInjectionPrompts(absolutePrompts, messages);
    
        if (power_user.pin_examples) {
            await populateDialogueExamples(prompts, chatCompletion, messageExamples);
            await populateChatHistory(messages, prompts, chatCompletion, type, cyclePrompt);
        } else {
            await populateChatHistory(messages, prompts, chatCompletion, type, cyclePrompt);
            await populateDialogueExamples(prompts, chatCompletion, messageExamples);
        }
    
        chatCompletion.freeBudget(controlPrompts);
        if (controlPrompts.collection.length) chatCompletion.add(controlPrompts);
    }
    
    async function preparePromptsForChatCompletion({ scenario, charPersonality, name2, worldInfoBefore, worldInfoAfter, charDescription, quietPrompt, bias, extensionPrompts, systemPromptOverride, jailbreakPromptOverride, type }) {
        const scenarioText = scenario && oai_settings.scenario_format ? substituteParams(oai_settings.scenario_format) : (scenario || '');
        const charPersonalityText = charPersonality && oai_settings.personality_format ? substituteParams(oai_settings.personality_format) : (charPersonality || '');
        const groupNudge = substituteParams(oai_settings.group_nudge_prompt);
        const impersonationPrompt = oai_settings.impersonation_prompt ? substituteParams(oai_settings.impersonation_prompt) : '';
    
        const systemPrompts = [
    
            { role: 'system', content: formatWorldInfo(worldInfoBefore), identifier: 'worldInfoBefore' },
            { role: 'system', content: formatWorldInfo(worldInfoAfter), identifier: 'worldInfoAfter' },
            { role: 'system', content: charDescription, identifier: 'charDescription' },
            { role: 'system', content: charPersonalityText, identifier: 'charPersonality' },
            { role: 'system', content: scenarioText, identifier: 'scenario' },
    
            { role: 'system', content: impersonationPrompt, identifier: 'impersonate' },
            { role: 'system', content: quietPrompt, identifier: 'quietPrompt' },
            { role: 'system', content: groupNudge, identifier: 'groupNudge' },
            { role: 'assistant', content: bias, identifier: 'bias' },
        ];
    
        const summary = extensionPrompts['1_memory'];
        if (summary && summary.value) systemPrompts.push({
            role: getPromptRole(summary.role),
            content: summary.value,
            identifier: 'summary',
            position: getPromptPosition(summary.position),
        });
    
        const authorsNote = extensionPrompts['2_floating_prompt'];
        if (authorsNote && authorsNote.value) systemPrompts.push({
            role: getPromptRole(authorsNote.role),
            content: authorsNote.value,
            identifier: 'authorsNote',
            position: getPromptPosition(authorsNote.position),
        });
    
        const vectorsMemory = extensionPrompts['3_vectors'];
        if (vectorsMemory && vectorsMemory.value) systemPrompts.push({
            role: 'system',
            content: vectorsMemory.value,
            identifier: 'vectorsMemory',
            position: getPromptPosition(vectorsMemory.position),
        });
    
        const vectorsDataBank = extensionPrompts['4_vectors_data_bank'];
        if (vectorsDataBank && vectorsDataBank.value) systemPrompts.push({
            role: getPromptRole(vectorsDataBank.role),
            content: vectorsDataBank.value,
            identifier: 'vectorsDataBank',
            position: getPromptPosition(vectorsDataBank.position),
        });
    
        const smartContext = extensionPrompts.chromadb;
        if (smartContext && smartContext.value) systemPrompts.push({
            role: 'system',
            content: smartContext.value,
            identifier: 'smartContext',
            position: getPromptPosition(smartContext.position),
        });
    
        if (power_user.persona_description && power_user.persona_description_position === persona_description_positions.IN_PROMPT) {
            systemPrompts.push({ role: 'system', content: power_user.persona_description, identifier: 'personaDescription' });
        }
    
        const knownExtensionPrompts = [
            '1_memory',
            '2_floating_prompt',
            '3_vectors',
            '4_vectors_data_bank',
            'chromadb',
            'PERSONA_DESCRIPTION',
            'QUIET_PROMPT',
            'DEPTH_PROMPT',
        ];
    
        for (const key in extensionPrompts) {
            if (Object.hasOwn(extensionPrompts, key)) {
                const prompt = extensionPrompts[key];
                if (knownExtensionPrompts.includes(key)) continue;
                if (!extensionPrompts[key].value) continue;
                if (![extension_prompt_types.BEFORE_PROMPT, extension_prompt_types.IN_PROMPT].includes(prompt.position)) continue;
    
                const hasFilter = typeof prompt.filter === 'function';
                if (hasFilter && !await prompt.filter()) continue;
    
                systemPrompts.push({
                    identifier: key.replace(/\W/g, '_'),
                    position: getPromptPosition(prompt.position),
                    role: getPromptRole(prompt.role),
                    content: prompt.value,
                    extension: true,
                });
            }
        }
    
        const prompts = promptManager.getPromptCollection(type);
    
        systemPrompts.forEach(prompt => {
            const collectionPrompt = prompts.get(prompt.identifier);
    
            if (collectionPrompt) {
    
                prompt.injection_position = collectionPrompt.injection_position ?? prompt.injection_position;
    
                prompt.injection_depth = collectionPrompt.injection_depth ?? prompt.injection_depth;
    
                prompt.injection_order = collectionPrompt.injection_order ?? prompt.injection_order;
    
                prompt.role = collectionPrompt.role ?? prompt.role;
            }
    
            const newPrompt = promptManager.preparePrompt(prompt);
            const markerIndex = prompts.index(prompt.identifier);
    
            if (-1 !== markerIndex) prompts.collection[markerIndex] = newPrompt;
            else prompts.add(newPrompt);
        });
    
        const systemPrompt = prompts.get('main') ?? null;
        const isSystemPromptDisabled = promptManager.isPromptDisabledForActiveCharacter('main');
        if (systemPromptOverride && systemPrompt && systemPrompt.forbid_overrides !== true && !isSystemPromptDisabled) {
            const mainOriginalContent = systemPrompt.content;
            systemPrompt.content = systemPromptOverride;
            const mainReplacement = promptManager.preparePrompt(systemPrompt, mainOriginalContent);
            prompts.override(mainReplacement, prompts.index('main'));
        }
    
        const jailbreakPrompt = prompts.get('jailbreak') ?? null;
        const isJailbreakPromptDisabled = promptManager.isPromptDisabledForActiveCharacter('jailbreak');
        if (jailbreakPromptOverride && jailbreakPrompt && jailbreakPrompt.forbid_overrides !== true && !isJailbreakPromptDisabled) {
            const jbOriginalContent = jailbreakPrompt.content;
            jailbreakPrompt.content = jailbreakPromptOverride;
            const jbReplacement = promptManager.preparePrompt(jailbreakPrompt, jbOriginalContent);
            prompts.override(jbReplacement, prompts.index('jailbreak'));
        }
    
        return prompts;
    }
    
    class Message {
        static tokensPerImage = 85;
    
        tokens;
    
        identifier;
    
        role;
    
        content;
    
        name;
    
        tool_call = null;
    
        signature = null;
    
        reasoning = null;
    
        constructor(role, content, identifier) {
            this.identifier = identifier;
            this.role = role;
            this.content = content;
    
            if (!this.role) {
                console.log(`Message role not set, defaulting to 'system' for identifier '${this.identifier}'`);
                this.role = 'system';
            }
    
            this.tokens = 0;
        }
    
        static async createAsync(role, content, identifier) {
            const message = new Message(role, content, identifier);
    
            if (typeof message.content === 'string' && message.content.length > 0) {
                message.tokens = await tokenHandler.countAsync({ role: message.role, content: message.content });
            }
    
            return message;
        }
    
        async setToolCalls(invocations, includeSignature, includeReasoning = false) {
            this.tool_calls = invocations.map(i => ({
                id: i.id,
                type: 'function',
                function: {
                    arguments: i.parameters,
                    name: i.name,
                },
                ...(includeSignature && i.signature ? { signature: i.signature } : {}),
            }));
            const fallbackReasoning = invocations.find(i => typeof i.reasoning === 'string' && i.reasoning.length > 0)?.reasoning || null;
            this.reasoning = includeReasoning ? fallbackReasoning : null;
            this.tokens = await tokenHandler.countAsync({
                role: this.role,
                tool_calls: JSON.stringify(this.tool_calls),
                ...(this.reasoning ? { reasoning: this.reasoning } : {}),
            });
        }
    
        async setName(name) {
            this.name = name;
            this.tokens = await tokenHandler.countAsync({ role: this.role, content: this.content, name: this.name });
        }
    
        ensureContentIsArray() {
            const textContent = this.content;
            if (!Array.isArray(this.content)) {
                this.content = [];
                if (typeof textContent === 'string') {
                    this.content.push({ type: 'text', text: textContent });
                }
            }
            return this.content;
        }
    
        async addImage(image) {
            this.content = this.ensureContentIsArray();
            const isDataUrl = isDataURL(image);
            if (!isDataUrl) {
                try {
                    const response = await fetch(image, { method: 'GET', cache: 'force-cache' });
                    if (!response.ok) throw new Error('Failed to fetch image');
                    const blob = await response.blob();
                    image = await getBase64Async(blob);
                } catch (error) {
                    console.error('Image adding skipped', error);
                    return;
                }
            }
    
            image = await this.compressImage(image);
    
            const quality = oai_settings.inline_image_quality || default_settings.inline_image_quality;
            this.content.push({ type: 'image_url', image_url: { 'url': image, 'detail': quality } });
    
            try {
                const tokens = await this.getImageTokenCost(image, quality);
                this.tokens += tokens;
            } catch (error) {
                this.tokens += Message.tokensPerImage;
                console.error('Failed to get image token cost', error);
            }
        }
    
        async addVideo(video) {
            this.content = this.ensureContentIsArray();
            const isDataUrl = isDataURL(video);
            if (!isDataUrl) {
                try {
                    const response = await fetch(video, { method: 'GET', cache: 'force-cache' });
                    if (!response.ok) throw new Error('Failed to fetch video');
                    const blob = await response.blob();
                    video = await getBase64Async(blob);
                } catch (error) {
                    console.error('Video adding skipped', error);
                    return;
                }
            }
    
            const quality = oai_settings.inline_image_quality || default_settings.inline_image_quality;
            this.content.push({ type: 'video_url', video_url: { 'url': video, 'detail': quality } });
    
            try {
    
                const duration = await getVideoDurationFromDataURL(video);
                this.tokens += 263 * Math.ceil(duration);
            } catch (error) {
    
                this.tokens += 263 * 40;
                console.error('Failed to get video token cost', error);
            }
        }
    
        async addAudio(audio) {
            this.content = this.ensureContentIsArray();
            const isDataUrl = isDataURL(audio);
            if (!isDataUrl) {
                try {
                    const response = await fetch(audio, { method: 'GET', cache: 'force-cache' });
                    if (!response.ok) throw new Error('Failed to fetch audio');
                    const blob = await response.blob();
                    audio = await getBase64Async(blob);
                } catch (error) {
                    console.error('Audio adding skipped', error);
                    return;
                }
            }
    
            this.content.push({ type: 'audio_url', audio_url: { 'url': audio } });
    
            try {
    
                const duration = await getAudioDurationFromDataURL(audio);
                this.tokens += 32 * Math.ceil(duration);
            } catch (error) {
    
                const tokens = 32 * 300;
                this.tokens += tokens;
                console.error('Failed to get audio token cost', error);
            }
        }
    
        async compressImage(image) {
            const compressImageSources = [
                chat_completion_sources.OPENROUTER,
                chat_completion_sources.MAKERSUITE,
                chat_completion_sources.MISTRALAI,
                chat_completion_sources.VERTEXAI,
            ];
            const sizeThreshold = 2 * 1024 * 1024;
            const dataSize = image.length * 0.75;
            const safeMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];
            const mimeType = image?.split(';')?.[0]?.split(':')?.[1];
            if (compressImageSources.includes(oai_settings.chat_completion_source) && dataSize > sizeThreshold) {
                const maxSide = 2048;
                image = await createThumbnail(image, maxSide, maxSide);
            } else if (!safeMimeTypes.includes(mimeType)) {
                image = await createThumbnail(image, null, null);
            }
            return image;
        }
    
        async getImageTokenCost(dataUrl, quality) {
            if (quality === 'low') {
                return Message.tokensPerImage;
            }
    
            const size = await getImageSizeFromDataURL(dataUrl);
    
            if (quality === 'auto' && size.width <= 512 && size.height <= 512) {
                return Message.tokensPerImage;
            }
    
            const scale = 2048 / Math.min(size.width, size.height);
            const scaledWidth = Math.round(size.width * scale);
            const scaledHeight = Math.round(size.height * scale);
    
            const finalScale = 768 / Math.min(scaledWidth, scaledHeight);
            const finalWidth = Math.round(scaledWidth * finalScale);
            const finalHeight = Math.round(scaledHeight * finalScale);
    
            const squares = Math.ceil(finalWidth / 512) * Math.ceil(finalHeight / 512);
            const tokens = squares * 170 + 85;
            return tokens;
        }
    
        static fromPromptAsync(prompt) {
            return Message.createAsync(prompt.role, prompt.content, prompt.identifier);
        }
    
        getTokens() { return this.tokens; }
    }
    
    class MessageCollection {
        collection = [];
        identifier;
    
        constructor(identifier, ...items) {
            for (let item of items) {
                if (!(item instanceof Message || item instanceof MessageCollection)) {
                    throw new Error('Only Message and MessageCollection instances can be added to MessageCollection');
                }
            }
    
            this.collection.push(...items);
            this.identifier = identifier;
        }
    
        getChat() {
            return this.collection.reduce((acc, message) => {
                if (message.content || message.tool_calls) {
                    acc.push({
                        role: message.role,
                        content: message.content,
                        ...(message.name && { name: message.name }),
                        ...(message.tool_calls && { tool_calls: message.tool_calls }),
                        ...(message.role === 'tool' && { tool_call_id: message.identifier }),
                        ...(message.signature && { signature: message.signature }),
                        ...(message.reasoning && { reasoning: message.reasoning }),
                    });
                }
                return acc;
            }, []);
        }
    
        getCollection() {
            return this.collection;
        }
    
        add(item) {
            this.collection.push(item);
        }
    
        getItemByIdentifier(identifier) {
            return this.collection.find(item => item?.identifier === identifier);
        }
    
        hasItemWithIdentifier(identifier) {
            return this.collection.some(message => message.identifier === identifier);
        }
    
        getTokens() {
            return this.collection.reduce((tokens, message) => tokens + message.getTokens(), 0);
        }
    
        flatten() {
            return this.collection.reduce((acc, message) => {
                if (message instanceof MessageCollection) {
                    acc.push(...message.flatten());
                } else {
                    acc.push(message);
                }
                return acc;
            }, []);
        }
    }
    
    class ChatCompletion {
    
        async squashSystemMessages() {
            const excludeList = ['newMainChat', 'newChat', 'groupNudge'];
            this.messages.collection = this.messages.flatten();
    
            let lastMessage = null;
            let squashedMessages = [];
    
            for (let message of this.messages.collection) {
    
                if (message.role === 'system' && !message.content) {
                    continue;
                }
    
                const shouldSquash = (message) => {
                    return !excludeList.includes(message.identifier) && message.role === 'system' && !message.name;
                };
    
                if (shouldSquash(message)) {
                    if (lastMessage && shouldSquash(lastMessage)) {
                        lastMessage.content += '\n' + message.content;
                        lastMessage.tokens = await tokenHandler.countAsync({ role: lastMessage.role, content: lastMessage.content });
                    } else {
                        squashedMessages.push(message);
                        lastMessage = message;
                    }
                } else {
                    squashedMessages.push(message);
                    lastMessage = message;
                }
            }
    
            this.messages.collection = squashedMessages;
        }
    
        constructor() {
            this.tokenBudget = 0;
            this.messages = new MessageCollection('root');
            this.loggingEnabled = false;
            this.overriddenPrompts = [];
        }
    
        getMessages() {
            return this.messages;
        }
    
        setTokenBudget(context, response) {
            this.log(`Prompt tokens: ${context}`);
            this.log(`Completion tokens: ${response}`);
    
            this.tokenBudget = context - response;
    
            this.log(`Token budget: ${this.tokenBudget}`);
        }
    
        add(collection, position = null) {
            this.validateMessageCollection(collection);
            this.checkTokenBudget(collection, collection.identifier);
    
            if (null !== position && -1 !== position) {
                this.messages.collection[position] = collection;
            } else {
                this.messages.collection.push(collection);
            }
    
            this.decreaseTokenBudgetBy(collection.getTokens());
    
            this.log(`Added ${collection.identifier}. Remaining tokens: ${this.tokenBudget}`);
    
            return this;
        }
    
        insertAtStart(message, identifier) {
            this.insert(message, identifier, 'start');
        }
    
        insertAtEnd(message, identifier) {
            this.insert(message, identifier, 'end');
        }
    
        insert(message, identifier, position = 'end') {
            this.validateMessage(message);
            this.checkTokenBudget(message, message.identifier);
    
            const index = this.findMessageIndex(identifier);
            if (message.content || message.tool_calls) {
                if ('start' === position) this.messages.collection[index].collection.unshift(message);
                else if ('end' === position) this.messages.collection[index].collection.push(message);
                else if (typeof position === 'number') this.messages.collection[index].collection.splice(position, 0, message);
    
                this.decreaseTokenBudgetBy(message.getTokens());
    
                this.log(`Inserted ${message.identifier} into ${identifier}. Remaining tokens: ${this.tokenBudget}`);
            }
        }
    
        removeLastFrom(identifier) {
            const index = this.findMessageIndex(identifier);
            const message = this.messages.collection[index].collection.pop();
    
            if (!message) {
                this.log(`No message to remove from ${identifier}`);
                return;
            }
    
            this.increaseTokenBudgetBy(message.getTokens());
    
            this.log(`Removed ${message.identifier} from ${identifier}. Remaining tokens: ${this.tokenBudget}`);
        }
    
        canAfford(message) {
            return 0 <= this.tokenBudget - message.getTokens();
        }
    
        canAffordAll(messages) {
            return 0 <= this.tokenBudget - messages.reduce((total, message) => total + message.getTokens(), 0);
        }
    
        has(identifier) {
            return this.messages.hasItemWithIdentifier(identifier);
        }
    
        getTotalTokenCount() {
            return this.messages.getTokens();
        }
    
        getChat() {
            const chat = [];
            for (let item of this.messages.collection) {
                if (item instanceof MessageCollection) {
                    chat.push(...item.getChat());
                } else if (item instanceof Message && (item.content || item.tool_calls)) {
                    const message = {
                        role: item.role,
                        content: item.content,
                        ...(item.name ? { name: item.name } : {}),
                        ...(item.tool_calls ? { tool_calls: item.tool_calls } : {}),
                        ...(item.role === 'tool' ? { tool_call_id: item.identifier } : {}),
                        ...(item.signature ? { signature: item.signature } : {}),
                        ...(item.reasoning ? { reasoning: item.reasoning } : {}),
                    };
                    chat.push(message);
                } else {
                    this.log(`Skipping invalid or empty message in collection: ${JSON.stringify(item)}`);
                }
            }
            return chat;
        }
    
        log(output) {
            if (this.loggingEnabled) console.log('[ChatCompletion] ' + output);
        }
    
        enableLogging() {
            this.loggingEnabled = true;
        }
    
        disableLogging() {
            this.loggingEnabled = false;
        }
    
        validateMessageCollection(collection) {
            if (!(collection instanceof MessageCollection)) {
                console.log(collection);
                throw new Error('Argument must be an instance of MessageCollection');
            }
        }
    
        validateMessage(message) {
            if (!(message instanceof Message)) {
                console.log(message);
                throw new Error('Argument must be an instance of Message');
            }
        }
    
        checkTokenBudget(message, identifier) {
            if (!this.canAfford(message)) {
                throw new TokenBudgetExceededError(identifier);
            }
        }
    
        reserveBudget(message) {
            const tokens = typeof message === 'number' ? message : message.getTokens();
            this.decreaseTokenBudgetBy(tokens);
        }
    
        freeBudget(message) { this.increaseTokenBudgetBy(message.getTokens()); }
    
        increaseTokenBudgetBy(tokens) {
            this.tokenBudget += tokens;
        }
    
        decreaseTokenBudgetBy(tokens) {
            this.tokenBudget -= tokens;
        }
    
        findMessageIndex(identifier) {
            const index = this.messages.collection.findIndex(item => item?.identifier === identifier);
            if (index < 0) {
                throw new IdentifierNotFoundError(identifier);
            }
            return index;
        }
    
        setOverriddenPrompts(list) {
            this.overriddenPrompts = list;
        }
    
        getOverriddenPrompts() {
            return this.overriddenPrompts ?? [];
        }
    }
    
    class IdentifierNotFoundError extends Error {
        constructor(identifier) {
            super(`Identifier ${identifier} not found.`);
            this.name = 'IdentifierNotFoundError';
        }
    }
    
    class TokenBudgetExceededError extends Error {
        constructor(identifier = '') {
            super(`Token budged exceeded. Message: ${identifier}`);
            this.name = 'TokenBudgetExceeded';
        }
    }
    
    class InvalidCharacterNameError extends Error {
        constructor(identifier = '') {
            super(`Invalid character name. Message: ${identifier}`);
            this.name = 'InvalidCharacterName';
        }
    }
    
    const character_names_behavior = {
        NONE: -1,
        DEFAULT: 0,
        COMPLETION: 1,
        CONTENT: 2,
    };
    
    function isImageInliningSupported() {
        if (main_api !== 'openai') {
            return false;
        }
    
        if (!oai_settings.media_inlining) {
            return false;
        }
    
        const visionSupportedModels = [
    
            'chatgpt-4o-latest',
            'gpt-4-turbo',
            'gpt-4-vision',
            'gpt-4.1',
            'gpt-4.5-preview',
            'gpt-4o',
            'gpt-6-astra',
            'gpt-5',
            'o1',
            'o3',
            'o4-mini',
    
            'claude-3',
            'claude-fable',
            'claude-opus-4',
            'claude-opus-5',
            'claude-sonnet-4',
            'claude-sonnet-5',
            'claude-haiku-4',
    
            'c4ai-aya-vision',
            'command-a-vision',
    
            'gemini-2.0',
            'gemini-2.5',
            'gemini-3',
            'gemini-exp-1206',
            'learnlm',
            'gemini-robotics',
            'gemma-3-27b',
            'gemma-3-12b',
            'gemma-3-4b',
            'gemma-4',
    
            'mistral-small-2503',
            'mistral-small-2506',
            'mistral-small-latest',
            'mistral-medium-latest',
            'mistral-medium-2505',
            'mistral-medium-2508',
            'pixtral',
    
            'grok-4',
            'grok-2-vision',
    
            'moonshot-v1-8k-vision-preview',
            'moonshot-v1-32k-vision-preview',
            'moonshot-v1-128k-vision-preview',
            'kimi-k2.5',
            'kimi-latest',
    
            'deepseek-v4-flash-vision-exp',
    
            'glm-4.5v',
            'glm-4.6v',
            'glm-5v-turbo',
            'autoglm-phone',
    
            'Qwen/Qwen3-VL-32B-Instruct',
            'Qwen/Qwen3-VL-8B-Instruct',
            'Qwen/Qwen3-VL-235B-A22B-Instruct',
            'Qwen/Qwen3-VL-30B-A3B-Instruct',
            'zai-org/GLM-4.5V',
        ];
    
        switch (oai_settings.chat_completion_source) {
            case chat_completion_sources.OPENAI:
            case chat_completion_sources.AZURE_OPENAI: {
                const modelToCheck = oai_settings.chat_completion_source === chat_completion_sources.AZURE_OPENAI
                    ? oai_settings.azure_openai_model
                    : oai_settings.openai_model;
                return visionSupportedModels.some(model =>
                    modelToCheck.includes(model)
                    && ['gpt-4-turbo-preview', 'o1-mini', 'o3-mini'].some(x => !modelToCheck.includes(x)),
                );
            }
            case chat_completion_sources.MAKERSUITE:
                return visionSupportedModels.some(model => oai_settings.google_model.includes(model));
            case chat_completion_sources.VERTEXAI:
                return visionSupportedModels.some(model => oai_settings.vertexai_model.includes(model));
            case chat_completion_sources.CLAUDE:
                return visionSupportedModels.some(model => oai_settings.claude_model.includes(model));
            case chat_completion_sources.OPENROUTER:
                return (Array.isArray(model_list) && model_list.find(m => m.id === oai_settings.openrouter_model)?.architecture?.input_modalities?.includes('image'));
            case chat_completion_sources.CUSTOM:
                return true;
            case chat_completion_sources.MISTRALAI:
                return (Array.isArray(model_list) && model_list.find(m => m.id === oai_settings.mistralai_model)?.capabilities?.vision);
            case chat_completion_sources.COHERE:
                return visionSupportedModels.some(model => oai_settings.cohere_model.includes(model));
            case chat_completion_sources.XAI:
    
                return visionSupportedModels.some(model => oai_settings.xai_model.includes(model));
            case chat_completion_sources.AIMLAPI:
                return (Array.isArray(model_list) && model_list.find(m => m.id === oai_settings.aimlapi_model)?.features?.includes('openai/chat-completion.vision'));
            case chat_completion_sources.CHUTES:
                return (Array.isArray(model_list) && model_list.find(m => m.id === oai_settings.chutes_model)?.input_modalities?.includes('image'));
            case chat_completion_sources.ELECTRONHUB:
                return (Array.isArray(model_list) && model_list.find(m => m.id === oai_settings.electronhub_model)?.metadata?.vision);
            case chat_completion_sources.POLLINATIONS:
                return (Array.isArray(model_list) && model_list.find(m => m.id === oai_settings.pollinations_model)?.input_modalities?.includes('image'));
            case chat_completion_sources.COMETAPI:
                return true;
            case chat_completion_sources.MOONSHOT:
                return (Array.isArray(model_list) && model_list.find(m => m.id === oai_settings.moonshot_model)?.supports_image_in);
            case chat_completion_sources.NANOGPT:
                return (Array.isArray(model_list) && model_list.find(m => m.id === oai_settings.nanogpt_model)?.capabilities?.vision);
            case chat_completion_sources.ZAI:
                return visionSupportedModels.some(model => oai_settings.zai_model.includes(model));
            case chat_completion_sources.SILICONFLOW:
                return visionSupportedModels.some(model => oai_settings.siliconflow_model.includes(model));
            case chat_completion_sources.DEEPSEEK:
                return visionSupportedModels.some(model => oai_settings.deepseek_model.includes(model));
            case chat_completion_sources.WORKERS_AI: {
                const waiModel = Array.isArray(model_list) && model_list.find(m => m.id === oai_settings.workers_ai_model);
                return Boolean(waiModel && Array.isArray(waiModel.properties) && waiModel.properties.some(p => p.property_id === 'vision' && p.value === 'true'));
            }
            case chat_completion_sources.FIREWORKS:
                return (Array.isArray(model_list) && model_list.find(m => m.id === oai_settings.fireworks_model)?.supports_image_input);
            default:
                return false;
        }
    }
    
    function isVideoInliningSupported() {
        if (main_api !== 'openai') {
            return false;
        }
    
        if (!oai_settings.media_inlining) {
            return false;
        }
    
        const videoSupportedModels = [
    
            'gemini-2.0',
            'gemini-2.5',
            'gemini-exp-1206',
            'gemini-3',
            'gemma-4',
    
            'glm-4.5v',
            'glm-4.6v',
            'glm-5v-turbo',
        ];
    
        switch (oai_settings.chat_completion_source) {
            case chat_completion_sources.MAKERSUITE:
                return videoSupportedModels.some(model => oai_settings.google_model.includes(model));
            case chat_completion_sources.VERTEXAI:
                return videoSupportedModels.some(model => oai_settings.vertexai_model.includes(model));
            case chat_completion_sources.OPENROUTER:
                return (Array.isArray(model_list) && model_list.find(m => m.id === oai_settings.openrouter_model)?.architecture?.input_modalities?.includes('video'));
            case chat_completion_sources.ZAI:
                return videoSupportedModels.some(model => oai_settings.zai_model.includes(model));
            default:
                return false;
        }
    }
    
    function isAudioInliningSupported() {
        if (main_api !== 'openai') {
            return false;
        }
    
        if (!oai_settings.media_inlining) {
            return false;
        }
    
        const audioSupportedModels = [
            'gemini-2.0',
            'gemini-2.5',
            'gemini-3',
            'gemini-exp-1206',
            'gpt-4o-audio',
            'gpt-4o-realtime',
            'gpt-4o-mini-audio',
            'gpt-4o-mini-realtime',
            'gpt-audio',
            'gpt-realtime',
        ];
    
        switch (oai_settings.chat_completion_source) {
            case chat_completion_sources.OPENAI:
                return audioSupportedModels.some(model => oai_settings.openai_model.includes(model));
            case chat_completion_sources.MAKERSUITE:
                return audioSupportedModels.some(model => oai_settings.google_model.includes(model));
            case chat_completion_sources.VERTEXAI:
                return audioSupportedModels.some(model => oai_settings.vertexai_model.includes(model));
            case chat_completion_sources.OPENROUTER:
                return (Array.isArray(model_list) && model_list.find(m => m.id === oai_settings.openrouter_model)?.architecture?.input_modalities?.includes('audio'));
            case chat_completion_sources.CUSTOM:
                return true;
            default:
                return false;
        }
    }
    
    function isReasoningSignatureSupported(settings = oai_settings) {
    
        const isGoogle = [chat_completion_sources.VERTEXAI, chat_completion_sources.MAKERSUITE].includes(settings.chat_completion_source);
    
        const isOpenRouterGemini = settings.chat_completion_source === chat_completion_sources.OPENROUTER && /google\/gemini/i.test(settings.openrouter_model);
        return isGoogle || isOpenRouterGemini;
    }
    
    function getEffectiveToolReasoningMode(settings = oai_settings) {
        if (!settings.show_thoughts) {
            return tool_reasoning_modes.DISABLED;
        }
    
        return getToolReasoningMode(settings);
    }
    
    function getToolReasoningMode(settings = oai_settings) {
        const mode = String(settings.tool_reasoning_mode ?? '');
        if (Object.values(tool_reasoning_modes).includes(mode)) {
            return mode;
        }
        return tool_reasoning_modes.DISABLED;
    }
    
    const interleaved_reasoning_providers = [
        chat_completion_sources.OPENROUTER,
        chat_completion_sources.CUSTOM,
    ];
    
    async function createGenerationParameters(settings, model, type, messages, { jsonSchema = null } = {}) {
    
        if (!Array.isArray(messages)) {
            throw new Error('messages must be an array');
        }
        messages = messages.filter(msg => msg && typeof msg === 'object');
    
        const isDeepSeekVisionModel = typeof model === 'string' && model.toLowerCase().includes('deepseek-v4-flash-vision-exp');
        if (isDeepSeekVisionModel) {
            messages = messages.flatMap((message) => {
                if (!['system', 'assistant'].includes(message.role) || !Array.isArray(message.content)) {
                    return [message];
                }
    
                const content = message.content.filter(block => block?.type !== 'image_url');
                return content.length > 0 ? [{ ...message, content }] : [];
            });
        }
    
        const gptSources = [
            chat_completion_sources.OPENAI,
            chat_completion_sources.AZURE_OPENAI,
            chat_completion_sources.OPENROUTER,
        ];
    
        const seedSupportedSources = [
            chat_completion_sources.OPENAI,
            chat_completion_sources.AZURE_OPENAI,
            chat_completion_sources.OPENROUTER,
            chat_completion_sources.MISTRALAI,
            chat_completion_sources.CUSTOM,
            chat_completion_sources.COHERE,
            chat_completion_sources.GROQ,
            chat_completion_sources.ELECTRONHUB,
            chat_completion_sources.NANOGPT,
            chat_completion_sources.XAI,
            chat_completion_sources.POLLINATIONS,
            chat_completion_sources.AIMLAPI,
            chat_completion_sources.VERTEXAI,
            chat_completion_sources.MAKERSUITE,
            chat_completion_sources.CHUTES,
        ];
    
        const proxySupportedSources = [
            chat_completion_sources.CLAUDE,
            chat_completion_sources.OPENAI,
            chat_completion_sources.MISTRALAI,
            chat_completion_sources.MAKERSUITE,
            chat_completion_sources.VERTEXAI,
            chat_completion_sources.DEEPSEEK,
            chat_completion_sources.XAI,
            chat_completion_sources.ZAI,
            chat_completion_sources.MOONSHOT,
        ];
    
        const logprobsSupportedSources = [
            chat_completion_sources.OPENAI,
            chat_completion_sources.AZURE_OPENAI,
            chat_completion_sources.OPENROUTER,
            chat_completion_sources.CUSTOM,
            chat_completion_sources.DEEPSEEK,
            chat_completion_sources.XAI,
            chat_completion_sources.AIMLAPI,
            chat_completion_sources.CHUTES,
        ];
    
        const logitBiasSources = [
            chat_completion_sources.OPENAI,
            chat_completion_sources.AZURE_OPENAI,
            chat_completion_sources.OPENROUTER,
            chat_completion_sources.ELECTRONHUB,
            chat_completion_sources.CHUTES,
            chat_completion_sources.CUSTOM,
        ];
    
        const multiswipeSources = [
            chat_completion_sources.OPENAI,
            chat_completion_sources.AZURE_OPENAI,
            chat_completion_sources.CUSTOM,
            chat_completion_sources.XAI,
            chat_completion_sources.AIMLAPI,
            chat_completion_sources.MOONSHOT,
        ];
    
        const isO1 = gptSources.includes(settings.chat_completion_source) && ['o1-2024-12-17', 'o1'].includes(model);
        const isWorkersAIJsonMode = settings.chat_completion_source === chat_completion_sources.WORKERS_AI && jsonSchema;
        const stream = settings.stream_openai && type !== 'quiet' && !isO1 && !isWorkersAIJsonMode;
    
        const noMultiSwipeTypes = ['quiet', 'impersonate', 'continue'];
        const canMultiSwipe = settings.n > 1 && !noMultiSwipeTypes.includes(type) && multiswipeSources.includes(settings.chat_completion_source);
    
        let logit_bias = {};
        if (settings.bias_preset_selected
            && logitBiasSources.includes(settings.chat_completion_source)
            && Array.isArray(settings.bias_presets[settings.bias_preset_selected])
            && settings.bias_presets[settings.bias_preset_selected].length) {
            logit_bias = biasCache || await calculateLogitBias();
            biasCache = logit_bias;
        }
    
        if (Object.keys(logit_bias).length === 0) {
            logit_bias = undefined;
        }
    
        const generate_data = {
            'type': type,
            'messages': messages,
            'model': model,
            'temperature': Number(settings.temp_openai),
            'frequency_penalty': Number(settings.freq_pen_openai),
            'presence_penalty': Number(settings.pres_pen_openai),
            'top_p': Number(settings.top_p_openai),
            'max_tokens': settings.openai_max_tokens,
            'stream': stream,
            'logit_bias': logit_bias,
            'stop': getCustomStoppingStrings(openai_max_stop_strings),
            'chat_completion_source': settings.chat_completion_source,
            'n': canMultiSwipe ? settings.n : undefined,
            'user_name': name1,
            'char_name': name2,
            'group_names': getGroupNames(),
            'include_reasoning': Boolean(settings.show_thoughts),
            'reasoning_effort': getReasoningEffort(settings, model),
            'enable_web_search': Boolean(settings.enable_web_search),
            'request_images': Boolean(settings.request_images),
            'request_image_resolution': String(settings.request_image_resolution),
            'request_image_aspect_ratio': String(settings.request_image_aspect_ratio),
            'custom_prompt_post_processing': settings.custom_prompt_post_processing,
            'verbosity': getVerbosity(settings),
        };
    
        if (settings.chat_completion_source === chat_completion_sources.AZURE_OPENAI) {
            generate_data.azure_base_url = settings.azure_base_url;
            generate_data.azure_deployment_name = settings.azure_deployment_name;
            generate_data.azure_api_version = settings.azure_api_version;
    
            if (/^gpt-[34]/.test(model)) {
                delete generate_data.reasoning_effort;
            }
        }
    
        if (!canMultiSwipe && ToolManager.canPerformToolCalls(type, settings, model)) {
            await ToolManager.registerFunctionToolsOpenAI(generate_data);
        }
    
        if (!Array.isArray(generate_data.stop) || !generate_data.stop.length) {
            delete generate_data.stop;
        }
    
        if (settings.reverse_proxy && proxySupportedSources.includes(settings.chat_completion_source)) {
            await validateReverseProxy();
            generate_data.reverse_proxy = settings.reverse_proxy;
            generate_data.proxy_password = settings.proxy_password;
        }
    
        const useLogprobs = !!power_user.request_token_probabilities;
        if (useLogprobs && logprobsSupportedSources.includes(settings.chat_completion_source)) {
            generate_data.logprobs = 5;
        }
    
        const isVision = (m) => ['gpt', 'vision'].every(x => typeof m === 'string' && m.includes(x));
        if (gptSources.includes(settings.chat_completion_source) && isVision(model)) {
            delete generate_data.logit_bias;
            delete generate_data.stop;
            delete generate_data.logprobs;
        }
        if (gptSources.includes(settings.chat_completion_source) && /gpt-4.5/.test(model)) {
            delete generate_data.logprobs;
        }
    
        if (settings.chat_completion_source === chat_completion_sources.CLAUDE) {
            generate_data.top_k = Number(settings.top_k_openai);
            generate_data.use_sysprompt = settings.use_sysprompt;
            generate_data.stop = getCustomStoppingStrings();
    
            if (type !== 'quiet' && !(type === 'continue' && settings.continue_prefill)) {
                generate_data.assistant_prefill = type === 'impersonate'
                    ? substituteParams(settings.assistant_impersonation)
                    : substituteParams(settings.assistant_prefill);
            }
        }
    
        if (settings.chat_completion_source === chat_completion_sources.OPENROUTER) {
            generate_data.top_k = Number(settings.top_k_openai);
            generate_data.min_p = Number(settings.min_p_openai);
            generate_data.repetition_penalty = Number(settings.repetition_penalty_openai);
            generate_data.top_a = Number(settings.top_a_openai);
            generate_data.use_fallback = settings.openrouter_use_fallback;
            generate_data.provider = settings.openrouter_providers;
            generate_data.quantizations = settings.openrouter_quantizations;
            generate_data.allow_fallbacks = settings.openrouter_allow_fallbacks;
            generate_data.middleout = settings.openrouter_middleout;
        }
    
        if (settings.chat_completion_source === chat_completion_sources.NANOGPT) {
            generate_data.nanogpt_provider = settings.nanogpt_provider;
            generate_data.nanogpt_payg_override = settings.nanogpt_payg_override;
        }
    
        if (settings.chat_completion_source === chat_completion_sources.FIREWORKS && type !== 'quiet') {
            generate_data.chat_id = getCurrentChatId();
        }
    
        if ([chat_completion_sources.MAKERSUITE, chat_completion_sources.VERTEXAI].includes(settings.chat_completion_source)) {
            const stopStringsLimit = 5;
            generate_data.top_k = Number(settings.top_k_openai);
            generate_data.stop = getCustomStoppingStrings(stopStringsLimit).slice(0, stopStringsLimit).filter(x => x.length >= 1 && x.length <= 16);
            generate_data.use_sysprompt = settings.use_sysprompt;
            if (settings.chat_completion_source === chat_completion_sources.VERTEXAI) {
                generate_data.vertexai_auth_mode = settings.vertexai_auth_mode;
                generate_data.vertexai_region = settings.vertexai_region;
                generate_data.vertexai_express_project_id = settings.vertexai_express_project_id;
            }
        }
    
        if (settings.chat_completion_source === chat_completion_sources.MISTRALAI) {
            generate_data.safe_prompt = false;
            generate_data.stop = getCustomStoppingStrings();
        }
    
        if (settings.chat_completion_source === chat_completion_sources.CUSTOM) {
            generate_data.custom_url = settings.custom_url;
            generate_data.custom_include_body = substituteParams(settings.custom_include_body);
            generate_data.custom_exclude_body = substituteParams(settings.custom_exclude_body);
            generate_data.custom_include_headers = substituteParams(settings.custom_include_headers);
        }
    
        if (settings.chat_completion_source === chat_completion_sources.COHERE) {
    
            generate_data.top_p = Math.min(Math.max(Number(settings.top_p_openai), 0.01), 0.99);
            generate_data.top_k = Number(settings.top_k_openai);
    
            generate_data.frequency_penalty = Math.min(Math.max(Number(settings.freq_pen_openai), 0), 1);
            generate_data.presence_penalty = Math.min(Math.max(Number(settings.pres_pen_openai), 0), 1);
            generate_data.stop = getCustomStoppingStrings(5);
        }
    
        if (settings.chat_completion_source === chat_completion_sources.PERPLEXITY) {
            generate_data.top_k = Number(settings.top_k_openai);
            generate_data.frequency_penalty = Number(settings.freq_pen_openai);
            generate_data.presence_penalty = Number(settings.pres_pen_openai);
            delete generate_data.stop;
        }
    
        if (settings.chat_completion_source === chat_completion_sources.GROQ) {
            delete generate_data.logprobs;
            delete generate_data.logit_bias;
            delete generate_data.top_logprobs;
            delete generate_data.n;
        }
    
        if (settings.chat_completion_source === chat_completion_sources.DEEPSEEK) {
            generate_data.top_p = generate_data.top_p || Number.EPSILON;
        }
    
        if (settings.chat_completion_source === chat_completion_sources.XAI) {
            if (model.includes('grok-3-mini')) {
                delete generate_data.presence_penalty;
                delete generate_data.frequency_penalty;
                delete generate_data.stop;
            } else {
    
                delete generate_data.reasoning_effort;
            }
    
            if (model.includes('grok-4') || model.includes('grok-code')) {
                delete generate_data.presence_penalty;
                delete generate_data.frequency_penalty;
    
                if (!model.includes('grok-4-fast-non-reasoning')) {
                    delete generate_data.stop;
                }
            }
        }
    
        if (settings.chat_completion_source === chat_completion_sources.ELECTRONHUB) {
            generate_data.top_k = Number(settings.top_k_openai);
        }
    
        if (settings.chat_completion_source === chat_completion_sources.CHUTES) {
            generate_data.min_p = Number(settings.min_p_openai);
            generate_data.top_k = settings.top_k_openai > 0 ? Number(settings.top_k_openai) : undefined;
            generate_data.repetition_penalty = Number(settings.repetition_penalty_openai);
            generate_data.stop = getCustomStoppingStrings();
        }
    
        if (settings.chat_completion_source === chat_completion_sources.ZAI) {
            generate_data.top_p = generate_data.top_p || 0.01;
            generate_data.stop = getCustomStoppingStrings(1);
            generate_data.zai_endpoint = settings.zai_endpoint || ZAI_ENDPOINT.COMMON;
            delete generate_data.presence_penalty;
            delete generate_data.frequency_penalty;
        }
    
        if (settings.chat_completion_source === chat_completion_sources.POLLINATIONS) {
            generate_data.pollinations_endpoint = settings.pollinations_endpoint || POLLINATIONS_ENDPOINT.AUTHENTICATED;
        }
    
        if (settings.chat_completion_source === chat_completion_sources.SILICONFLOW) {
            generate_data.siliconflow_endpoint = settings.siliconflow_endpoint || SILICONFLOW_ENDPOINT.GLOBAL;
        }
    
        if (settings.chat_completion_source === chat_completion_sources.MINIMAX) {
            generate_data.minimax_endpoint = settings.minimax_endpoint || MINIMAX_ENDPOINT.GLOBAL;
    
            if (Number.isFinite(generate_data.temperature)) {
                generate_data.temperature = clamp(generate_data.temperature, Number.EPSILON, 1.0);
            }
        }
    
        if (settings.chat_completion_source === chat_completion_sources.WORKERS_AI) {
            generate_data.workers_ai_account_id = settings.workers_ai_account_id;
            generate_data.top_k = settings.top_k_openai > 0 ? Math.min(Number(settings.top_k_openai), 50) : undefined;
            generate_data.repetition_penalty = Number(settings.repetition_penalty_openai);
            generate_data.seed = settings.seed >= 1 ? Number(settings.seed) : undefined;
            generate_data.top_p = Math.max(Number(settings.top_p_openai), 0.001);
            delete generate_data.n;
            delete generate_data.logit_bias;
        }
    
        if (settings.chat_completion_source === chat_completion_sources.NANOGPT) {
            generate_data.top_k = Number(settings.top_k_openai);
            generate_data.min_p = Number(settings.min_p_openai);
            generate_data.repetition_penalty = Number(settings.repetition_penalty_openai);
            generate_data.top_a = Number(settings.top_a_openai);
        }
    
        if (settings.chat_completion_source === chat_completion_sources.MOONSHOT) {
    
            if (/kimi-k2.5/.test(model)) {
                delete generate_data.temperature;
                delete generate_data.top_p;
                delete generate_data.frequency_penalty;
                delete generate_data.presence_penalty;
            }
        }
    
        if (seedSupportedSources.includes(settings.chat_completion_source) && settings.seed >= 0) {
            generate_data.seed = settings.seed;
        }
    
        if ([chat_completion_sources.OPENAI, chat_completion_sources.AZURE_OPENAI].includes(settings.chat_completion_source) && /^(o1|o3|o4)/.test(model) ||
            (chat_completion_sources.OPENROUTER === settings.chat_completion_source && /^openai\/(o1|o3|o4)/.test(model))) {
            generate_data.max_completion_tokens = generate_data.max_tokens;
            delete generate_data.max_tokens;
            delete generate_data.logprobs;
            delete generate_data.top_logprobs;
            delete generate_data.stop;
            delete generate_data.logit_bias;
            delete generate_data.temperature;
            delete generate_data.top_p;
            delete generate_data.frequency_penalty;
            delete generate_data.presence_penalty;
            if (/^(openai\/)?(o1)/.test(model)) {
                generate_data.messages.forEach((msg) => {
                    if (msg.role === 'system') {
                        msg.role = 'user';
                    }
                });
                delete generate_data.n;
                delete generate_data.tools;
                delete generate_data.tool_choice;
            }
        }
    
        if (gptSources.includes(settings.chat_completion_source) && /gpt-5/.test(model)) {
            generate_data.max_completion_tokens = generate_data.max_tokens;
            delete generate_data.max_tokens;
            delete generate_data.logprobs;
            delete generate_data.top_logprobs;
            if (/gpt-5-chat-latest/.test(model)) {
                delete generate_data.tools;
                delete generate_data.tool_choice;
            } else if (/gpt-5\.(1|2|3|4)/.test(model) && !/chat-latest/.test(model) && !generate_data.reasoning_effort) {
                delete generate_data.frequency_penalty;
                delete generate_data.presence_penalty;
                delete generate_data.logit_bias;
                delete generate_data.stop;
            } else {
                delete generate_data.temperature;
                delete generate_data.top_p;
                delete generate_data.frequency_penalty;
                delete generate_data.presence_penalty;
                delete generate_data.logit_bias;
                delete generate_data.stop;
            }
        }
    
        if (gptSources.includes(settings.chat_completion_source) && /gpt-6-astra/.test(model)) {
            generate_data.max_completion_tokens = generate_data.max_tokens;
            delete generate_data.max_tokens;
            delete generate_data.temperature;
            delete generate_data.top_p;
            delete generate_data.logprobs;
            delete generate_data.top_logprobs;
        }
    
        if (/claude-(fable|opus-5|sonnet-5)/.test(model)) {
            delete generate_data.temperature;
            delete generate_data.top_p;
            delete generate_data.top_k;
            delete generate_data.frequency_penalty;
            delete generate_data.presence_penalty;
    
            if (settings.chat_completion_source !== chat_completion_sources.CLAUDE) {
                delete generate_data.reasoning_effort;
            }
        }
    
        if (jsonSchema) {
            generate_data.json_schema = jsonSchema;
        }
    
        return { generate_data, stream, canMultiSwipe };
    }
    
    function getReasoningEffort(settings = null, model = null) {
        settings = settings ?? oai_settings;
        model = model ?? getChatCompletionModel(settings);
    
        const reasoningEffortSources = [
            chat_completion_sources.OPENAI,
            chat_completion_sources.AZURE_OPENAI,
            chat_completion_sources.CUSTOM,
            chat_completion_sources.XAI,
            chat_completion_sources.AIMLAPI,
            chat_completion_sources.OPENROUTER,
            chat_completion_sources.POLLINATIONS,
            chat_completion_sources.PERPLEXITY,
            chat_completion_sources.COMETAPI,
            chat_completion_sources.ELECTRONHUB,
            chat_completion_sources.CHUTES,
            chat_completion_sources.DEEPSEEK,
            chat_completion_sources.FIREWORKS,
        ];
    
        if (!reasoningEffortSources.includes(settings.chat_completion_source)) {
            return settings.reasoning_effort;
        }
    
        function resolveReasoningEffort() {
            if (settings.chat_completion_source === chat_completion_sources.DEEPSEEK) {
                switch (settings.reasoning_effort) {
                    case reasoning_effort_types.auto:
                        return undefined;
                    case reasoning_effort_types.min:
                    case reasoning_effort_types.low:
                        return reasoning_effort_types.low;
                    case reasoning_effort_types.max:
                        return reasoning_effort_types.max;
                    default:
                        return reasoning_effort_types.high;
                }
            }
    
            if (settings.chat_completion_source === chat_completion_sources.FIREWORKS) {
                switch (settings.reasoning_effort) {
                    case reasoning_effort_types.auto:
                        return undefined;
                    case reasoning_effort_types.min:
                        return reasoning_effort_types.low;
                    default:
                        return settings.reasoning_effort;
                }
            }
    
            if (settings.chat_completion_source === chat_completion_sources.CUSTOM && /^koboldcpp\/(.+)$/.test(model)) {
                switch (settings.reasoning_effort) {
                    case reasoning_effort_types.auto:
                        return undefined;
                    case reasoning_effort_types.min:
                        return 'minimal';
                    case reasoning_effort_types.low:
                        return 'low';
                    case reasoning_effort_types.medium:
                        return 'medium';
                    case reasoning_effort_types.high:
                        return 'high';
                    case reasoning_effort_types.max:
                        return 'xhigh';
                    default:
                        return settings.reasoning_effort;
                }
            }
    
            switch (settings.reasoning_effort) {
                case reasoning_effort_types.auto:
                    return undefined;
                case reasoning_effort_types.min:
                    if (chat_completion_sources.OPENROUTER === settings.chat_completion_source && !settings.show_thoughts) {
                        return 'none';
                    }
    
                    if ([chat_completion_sources.OPENAI, chat_completion_sources.AZURE_OPENAI].includes(settings.chat_completion_source)) {
                        if (/^gpt-5\.(4|5|6)/.test(model)) {
                            return 'none';
                        }
                        if (/^gpt-5/.test(model)) {
                            return reasoning_effort_types.min;
                        }
                    }
    
                    return reasoning_effort_types.low;
                case reasoning_effort_types.max:
                    if ([chat_completion_sources.OPENAI, chat_completion_sources.AZURE_OPENAI].includes(settings.chat_completion_source)
                        && /^gpt-6-astra/.test(model)) {
                        return reasoning_effort_types.max;
                    }
                    if ([chat_completion_sources.OPENAI, chat_completion_sources.AZURE_OPENAI].includes(settings.chat_completion_source)
                        && /^gpt-5\.6/.test(model)) {
    
                        return 'xhigh';
                    }
                    return reasoning_effort_types.high;
                default:
                    return settings.reasoning_effort;
            }
        }
    
        const reasoningEffort = resolveReasoningEffort();
    
        if (settings.chat_completion_source === chat_completion_sources.ELECTRONHUB) {
            if (Array.isArray(model_list) && reasoningEffort) {
                const currentModel = model_list.find(m => m.id === model);
                const supportedEfforts = currentModel?.metadata?.supported_reasoning_efforts;
                if (Array.isArray(supportedEfforts) && supportedEfforts.includes(reasoningEffort)) {
                    return reasoningEffort;
                }
                return undefined;
            }
        }
    
        return reasoningEffort;
    }
    
    function getVerbosity(settings = null) {
        settings = settings ?? oai_settings;
    
        if (settings.verbosity === verbosity_levels.auto) {
            return undefined;
        }
    
        return settings.verbosity;
    }
    
    async function calculateLogitBias() {
        const body = JSON.stringify(oai_settings.bias_presets[oai_settings.bias_preset_selected]);
        let result = {};
    
        try {
            const reply = await fetch(`/api/backends/chat-completions/bias?model=${getTokenizerModel()}`, {
                method: 'POST',
                headers: getRequestHeaders(),
                body,
            });
    
            result = await reply.json();
        } catch (err) {
            result = {};
            console.error(err);
        }
        return result;
    }

    return {
        async messages(run, rawMessages = null) {
            const type = rawMessages ? 'quiet' : (run.generation?.type || 'normal');
            const fields = rawMessages ? {} : (run.promptContext || {});
            const chatCompletion = new ChatCompletion();
            chatCompletion.setTokenBudget(Number(oai_settings.openai_max_context), Number(oai_settings.openai_max_tokens));
            const explicit = rawMessages ? structuredClone(rawMessages) : null;
            const rawPrefills = [];
            while (explicit?.at(-1)?.role === 'assistant') rawPrefills.unshift(explicit.pop());
            const prefillMessages = new MessageCollection('qrExplicitPrefill');
            for (const prefill of rawPrefills) {
                const message = await Message.createAsync('assistant', prefill.content, 'qrExplicitPrefill');
                if (prefill.name) await message.setName(prefill.name);
                prefillMessages.add(message);
            }
            chatCompletion.reserveBudget(prefillMessages);
            const messages = rawMessages
                ? explicit.reverse()
                : setOpenAIMessages(structuredClone(run.coreChat || []));
            const card = rawMessages ? {} : modules.host.getCharacterCardFields();
            const exampleBlocks = rawMessages ? [] : modules.host.parseMesExamples(card.mesExamples || '', false);
            for (const entry of fields.worldInfoExamples || []) {
                const blocks = modules.host.parseMesExamples(substituteParams(entry.content), false);
                if (entry.before) exampleBlocks.unshift(...blocks); else exampleBlocks.push(...blocks);
            }
            const options = {
                type, name2: modules.host.name2,
                scenario: fields.scenario || '', charPersonality: fields.personality || '',
                charDescription: fields.description || '', worldInfoBefore: fields.worldInfoBefore || '',
                worldInfoAfter: fields.worldInfoAfter || '', bias: '',
                quietPrompt: rawMessages ? '' : run.generation?.quiet_prompt || '',
                quietImage: run.generation?.quietImage,
                cyclePrompt: type === 'continue' ? messages[0]?.content : '',
                extensionPrompts: rawMessages ? {} : modules.host.extension_prompts,
                systemPromptOverride: fields.main || '', jailbreakPromptOverride: fields.jailbreak || '',
                messages,
                messageExamples: setOpenAIMessageExamples(exampleBlocks),
            };
            const prompts = await preparePromptsForChatCompletion(options);
            await populateChatCompletion(prompts, chatCompletion, options);
            chatCompletion.freeBudget(prefillMessages);
            if (prefillMessages.collection.length) chatCompletion.add(prefillMessages);
            if (oai_settings.squash_system_messages) await chatCompletion.squashSystemMessages();
            return chatCompletion.getChat();
        },
        async payload(messages, original) {
            const type = original.type || 'quiet';
            const model = original.model || getChatCompletionModel();
            const result = await createGenerationParameters(oai_settings, model, type, messages, { jsonSchema: original.json_schema });
            // Streaming is the caller's response transport, not a sampler. Keep
            // its decoder and wire format paired without touching host settings.
            result.generate_data.stream = original.stream ?? false;
            return result.generate_data;
        },
    };
}
// END QR PRIVATE CHAT BUILDER








// BEGIN QR PRIVATE TEXT BUILDERS
// Request-local adaptations of SillyTavern's textgen/kai/nai request builders.
// Same upstream commit/license as createQrChatBuilder. Caches and settings below
// belong only to this request; native saved settings are never assigned.
function createQrTextPayload(modules, preset, original) {
    const { textgen_types, getTextGenModel, getTextGenServer, getLogprobsNumber } = modules.textgen;
    const { APHRODITE, DREAMGEN, HUGGINGFACE, INFERMATICAI, KOBOLDCPP, LLAMACPP, MANCER, OLLAMA, OOBA, OPENROUTER, TABBY, VLLM } = textgen_types;
    const { getCurrentOpenRouterModelTokenizer, getCurrentDreamGenModelTokenizer } = modules.textgenModels;
    const { arraysEqual, isObject, onlyUnique } = modules.utils;
    const { getLogitBiasListResult } = modules.logitBias;
    const { getTextTokens, getTokenizerBestMatch, tokenizers, TEXTGEN_TOKENIZERS, ENCODE_TOKENIZERS } = modules.tokenizers;
    const { power_user } = modules;
    const { getStoppingStrings, substituteParams } = modules.host;
    const textgenerationwebui_banned_in_macros = [...modules.textgen.textgenerationwebui_banned_in_macros];
    const DYNATEMP_BLOCK = document.getElementById('dynatemp_block_ooba');
    const BIAS_CACHE = new Map();
    const BIAS_KEY = 'qr';
    const limits = qrPresetLengths(preset, 'textgenerationwebui');
    const max_context = limits.context || 2048;
    const LLAMACPP_DEFAULT_ORDER = [
        'penalties',
        'dry',
        'top_n_sigma',
        'top_k',
        'typ_p',
        'top_p',
        'min_p',
        'xtc',
        'temperature',
        'adaptive_p',
    ];
    
    const OOBA_DEFAULT_ORDER = [
        'repetition_penalty',
        'presence_penalty',
        'frequency_penalty',
        'dry',
        'temperature',
        'dynamic_temperature',
        'quadratic_sampling',
        'top_n_sigma',
        'top_k',
        'top_p',
        'typical_p',
        'epsilon_cutoff',
        'eta_cutoff',
        'tfs',
        'top_a',
        'min_p',
        'adaptive_p',
        'mirostat',
        'xtc',
        'encoder_repetition_penalty',
        'no_repeat_ngram',
    ];
    
    const APHRODITE_DEFAULT_ORDER = [
        'dry',
        'penalties',
        'no_repeat_ngram',
        'temperature',
        'top_nsigma',
        'top_p_top_k',
        'top_a',
        'min_p',
        'tfs',
        'eta_cutoff',
        'epsilon_cutoff',
        'typical_p',
        'quadratic',
        'xtc',
    ];
    
    const KOBOLDCPP_ORDER = [6, 0, 1, 3, 4, 2, 5];
    
    const textgenerationwebui_settings = {
        temp: 0.7,
        temperature_last: true,
        top_p: 0.5,
        top_k: 40,
        top_a: 0,
        tfs: 1,
        epsilon_cutoff: 0,
        eta_cutoff: 0,
        typical_p: 1,
        min_p: 0,
        rep_pen: 1.2,
        rep_pen_range: 0,
        rep_pen_decay: 0,
        rep_pen_slope: 1,
        no_repeat_ngram_size: 0,
        penalty_alpha: 0,
        num_beams: 1,
        length_penalty: 1,
        min_length: 0,
        encoder_rep_pen: 1,
        freq_pen: 0,
        presence_pen: 0,
        skew: 0,
        do_sample: true,
        early_stopping: false,
        dynatemp: false,
        min_temp: 0,
        max_temp: 2.0,
        dynatemp_exponent: 1.0,
        smoothing_factor: 0.0,
        smoothing_curve: 1.0,
        dry_allowed_length: 2,
        dry_multiplier: 0.0,
        dry_base: 1.75,
        dry_sequence_breakers: '["\\n", ":", "\\"", "*"]',
        dry_penalty_last_n: 0,
        max_tokens_second: 0,
        seed: -1,
        preset: 'Default',
        add_bos_token: true,
        stopping_strings: [],
    
        ban_eos_token: false,
        skip_special_tokens: true,
        include_reasoning: true,
        streaming: false,
        mirostat_mode: 0,
        mirostat_tau: 5,
        mirostat_eta: 0.1,
        guidance_scale: 1,
        negative_prompt: '',
        grammar_string: '',
        json_schema: null,
        json_schema_allow_empty: false,
        banned_tokens: '',
        global_banned_tokens: '',
        send_banned_tokens: true,
        sampler_priority: OOBA_DEFAULT_ORDER,
        samplers: LLAMACPP_DEFAULT_ORDER,
        samplers_priorities: APHRODITE_DEFAULT_ORDER,
        ignore_eos_token: false,
        spaces_between_special_tokens: true,
        speculative_ngram: false,
        type: textgen_types.OOBA,
        mancer_model: 'mytholite',
        togetherai_model: 'Gryphe/MythoMax-L2-13b',
        infermaticai_model: '',
        ollama_model: '',
        openrouter_model: 'openrouter/auto',
        openrouter_providers: [],
        openrouter_quantizations: [],
        vllm_model: '',
        aphrodite_model: '',
        dreamgen_model: 'lucid-v1-extra-large/text',
        tabby_model: '',
        llamacpp_model: '',
        sampler_order: KOBOLDCPP_ORDER,
        logit_bias: [],
        n: 1,
        server_urls: {},
        custom_model: '',
        bypass_status_check: false,
        openrouter_allow_fallbacks: true,
        xtc_threshold: 0.1,
        xtc_probability: 0,
        nsigma: 0.0,
        min_keep: 0,
        featherless_model: '',
        generic_model: '',
        extensions: {},
        adaptive_target: -0.01,
        adaptive_decay: 0.9,
    };
    
    function getTokenizerForTokenIds() {
        const bestMatchTokenizer = getTokenizerBestMatch('textgenerationwebui');
        if (bestMatchTokenizer === tokenizers.API_TEXTGENERATIONWEBUI) {
            return tokenizers.API_CURRENT;
        }
    
        if (power_user.tokenizer === tokenizers.API_CURRENT && TEXTGEN_TOKENIZERS.includes(textgenerationwebui_settings.type)) {
            return tokenizers.API_CURRENT;
        }
    
        if (ENCODE_TOKENIZERS.includes(power_user.tokenizer)) {
            return power_user.tokenizer;
        }
    
        if (textgenerationwebui_settings.type === OPENROUTER) {
            return getCurrentOpenRouterModelTokenizer();
        }
    
        if (textgenerationwebui_settings.type === DREAMGEN) {
            return getCurrentDreamGenModelTokenizer();
        }
    
        return tokenizers.LLAMA;
    }
    
    function getCustomTokenBans(settings = null) {
        settings = settings ?? textgenerationwebui_settings;
        if (!settings.send_banned_tokens || (!settings.banned_tokens && !settings.global_banned_tokens && !textgenerationwebui_banned_in_macros.length)) {
            return {
                banned_tokens: '',
                banned_strings: [],
            };
        }
    
        const tokenizer = getTokenizerForTokenIds();
        const banned_tokens = [];
        const banned_strings = [];
        const sequences = []
            .concat(settings.banned_tokens.split('\n'))
            .concat(settings.global_banned_tokens.split('\n'))
            .concat(textgenerationwebui_banned_in_macros)
            .filter(x => x.length > 0)
            .filter(onlyUnique)
            .map(x => substituteParams(x));
    
        if (textgenerationwebui_banned_in_macros.length) {
            console.log('=== Found banned word sequences in the macros:', textgenerationwebui_banned_in_macros, 'Resulting array of banned sequences (will be used this generation turn):', sequences);
        }
    
        textgenerationwebui_banned_in_macros = [];
    
        for (const line of sequences) {
    
            if (line.startsWith('[') && line.endsWith(']')) {
                try {
                    const tokens = JSON.parse(line);
    
                    if (Array.isArray(tokens) && tokens.every(t => Number.isInteger(t))) {
                        banned_tokens.push(...tokens);
                    } else {
                        throw new Error('Not an array of integers');
                    }
                } catch (err) {
                    console.log(`Failed to parse bad word token list: ${line}`, err);
                }
            } else if (line.startsWith('"') && line.endsWith('"')) {
    
                banned_strings.push(line.slice(1, -1));
            } else {
                try {
                    const tokens = getTextTokens(tokenizer, line);
                    banned_tokens.push(...tokens);
                } catch {
                    console.log(`Could not tokenize raw text: ${line}`);
                }
            }
        }
    
        return {
            banned_tokens: banned_tokens.filter(onlyUnique).map(x => String(x)).join(','),
            banned_strings: banned_strings,
        };
    }
    
    function calculateLogitBias(settings = null) {
        settings = settings ?? textgenerationwebui_settings;
    
        if (!Array.isArray(settings.logit_bias) || settings.logit_bias.length === 0) {
            return {};
        }
    
        const tokenizer = getTokenizerForTokenIds();
        const result = {};
    
        function addBias(bias, sequence) {
            if (sequence.length === 0) {
                return;
            }
    
            for (const logit of sequence) {
                const key = String(logit);
                result[key] = bias;
            }
    
            return result;
        }
    
        getLogitBiasListResult(settings.logit_bias, tokenizer, addBias);
    
        return result;
    }
    
    function toIntArray(string) {
        if (!string) {
            return [];
        }
    
        return string.split(',').map(x => parseInt(x)).filter(x => !isNaN(x));
    }
    
    function isDynamicTemperatureSupported(settings = null) {
        settings = settings ?? textgenerationwebui_settings;
        return settings.dynatemp && DYNATEMP_BLOCK?.dataset?.tgType?.includes(settings.type);
    }
    
    function replaceMacrosInList(str) {
        if (!str || typeof str !== 'string') {
            return str;
        }
    
        try {
            const array = JSON.parse(str);
            if (!Array.isArray(array)) {
                throw new Error('Not an array');
            }
            for (let i = 0; i < array.length; i++) {
                array[i] = substituteParams(array[i]);
            }
            return JSON.stringify(array);
        } catch {
            const array = str.split(',');
            for (let i = 0; i < array.length; i++) {
                array[i] = substituteParams(array[i]);
            }
            return array.join(',');
        }
    }
    
    function createTextGenGenerationData(settings, model, finalPrompt = null, maxTokens = null, isImpersonate = false, isContinue = false, cfgValues = null, type = 'quiet') {
        settings = settings ?? textgenerationwebui_settings;
        model = model ?? getTextGenModel(settings);
    
        const canMultiSwipe = !isContinue && !isImpersonate && type !== 'quiet';
        const dynatemp = isDynamicTemperatureSupported(settings);
        const { banned_tokens, banned_strings } = getCustomTokenBans(settings);
        const jsonSchema = isObject(settings.json_schema)
            ? settings.json_schema_allow_empty
                ? settings.json_schema
                : Object.keys(settings.json_schema).length > 0 ? settings.json_schema : undefined
            : undefined;
    
        let params = {
            'prompt': finalPrompt,
            'model': model,
            'max_new_tokens': maxTokens,
            'max_tokens': maxTokens,
            'logprobs': power_user.request_token_probabilities ? getLogprobsNumber(settings.type) : undefined,
            'temperature': dynatemp ? (settings.min_temp + settings.max_temp) / 2 : settings.temp,
            'top_p': settings.top_p,
            'typical_p': settings.typical_p,
            'typical': settings.typical_p,
            'sampler_seed': settings.seed >= 0 ? settings.seed : undefined,
            'min_p': settings.min_p,
            'repetition_penalty': settings.rep_pen,
            'frequency_penalty': settings.freq_pen,
            'presence_penalty': settings.presence_pen,
            'top_k': settings.top_k,
            'skew': settings.skew,
            'min_length': settings.type === OOBA ? settings.min_length : undefined,
            'minimum_message_content_tokens': settings.type === DREAMGEN ? settings.min_length : undefined,
            'min_tokens': settings.min_length,
            'num_beams': settings.type === OOBA ? settings.num_beams : undefined,
            'length_penalty': settings.type === OOBA ? settings.length_penalty : undefined,
            'early_stopping': settings.type === OOBA ? settings.early_stopping : undefined,
            'add_bos_token': settings.add_bos_token,
            'dynamic_temperature': dynatemp ? true : undefined,
            'dynatemp_low': dynatemp ? settings.min_temp : undefined,
            'dynatemp_high': dynatemp ? settings.max_temp : undefined,
            'dynatemp_range': dynatemp ? (settings.max_temp - settings.min_temp) / 2 : undefined,
            'dynatemp_exponent': dynatemp ? settings.dynatemp_exponent : undefined,
            'smoothing_factor': settings.smoothing_factor,
            'smoothing_curve': settings.smoothing_curve,
            'dry_allowed_length': settings.dry_allowed_length,
            'dry_multiplier': settings.dry_multiplier,
            'dry_base': settings.dry_base,
            'dry_sequence_breakers': replaceMacrosInList(settings.dry_sequence_breakers),
            'dry_penalty_last_n': settings.dry_penalty_last_n,
            'max_tokens_second': settings.max_tokens_second,
            'sampler_priority': settings.type === OOBA ? settings.sampler_priority : undefined,
            'samplers': settings.type === LLAMACPP ? settings.samplers : undefined,
            'stopping_strings': getStoppingStrings(isImpersonate, isContinue),
            'stop': getStoppingStrings(isImpersonate, isContinue),
            'truncation_length': max_context,
            'ban_eos_token': settings.ban_eos_token,
            'skip_special_tokens': settings.skip_special_tokens,
            'include_reasoning': settings.include_reasoning,
            'top_a': settings.top_a,
            'tfs': settings.tfs,
            'epsilon_cutoff': [OOBA, MANCER].includes(settings.type) ? settings.epsilon_cutoff : undefined,
            'eta_cutoff': [OOBA, MANCER].includes(settings.type) ? settings.eta_cutoff : undefined,
            'mirostat_mode': settings.mirostat_mode,
            'mirostat_tau': settings.mirostat_tau,
            'mirostat_eta': settings.mirostat_eta,
            'custom_token_bans': [APHRODITE, MANCER].includes(settings.type) ?
                toIntArray(banned_tokens) :
                banned_tokens,
            'banned_strings': banned_strings,
            'api_type': settings.type,
            'api_server': getTextGenServer(settings.type),
            'sampler_order': settings.type === textgen_types.KOBOLDCPP ? settings.sampler_order : undefined,
            'xtc_threshold': settings.xtc_threshold,
            'xtc_probability': settings.xtc_probability,
            'nsigma': settings.nsigma,
            'top_n_sigma': settings.nsigma,
            'min_keep': settings.min_keep,
            'adaptive_target': settings.adaptive_target,
            'adaptive_decay': settings.adaptive_decay,
            parseSequenceBreakers: function () {
                try {
                    return JSON.parse(this.dry_sequence_breakers);
                } catch {
                    if (typeof this.dry_sequence_breakers === 'string') {
                        return this.dry_sequence_breakers.split(',');
                    }
                    return undefined;
                }
            },
        };
        const nonAphroditeParams = {
            'rep_pen': settings.rep_pen,
            'rep_pen_range': settings.rep_pen_range,
            'repetition_decay': settings.type === TABBY ? settings.rep_pen_decay : undefined,
            'repetition_penalty_range': settings.rep_pen_range,
            'encoder_repetition_penalty': settings.type === OOBA ? settings.encoder_rep_pen : undefined,
            'no_repeat_ngram_size': settings.type === OOBA ? settings.no_repeat_ngram_size : undefined,
            'penalty_alpha': settings.type === OOBA ? settings.penalty_alpha : undefined,
            'temperature_last': (settings.type === OOBA || settings.type === APHRODITE || settings.type == TABBY) ? settings.temperature_last : undefined,
            'speculative_ngram': settings.type === TABBY ? settings.speculative_ngram : undefined,
            'do_sample': settings.type === OOBA ? settings.do_sample : undefined,
            'seed': settings.seed >= 0 ? settings.seed : undefined,
            'guidance_scale': cfgValues?.guidanceScale?.value ?? settings.guidance_scale ?? 1,
            'negative_prompt': cfgValues?.negativePrompt ?? substituteParams(settings.negative_prompt) ?? '',
            'grammar_string': settings.grammar_string || undefined,
            'json_schema': [TABBY, LLAMACPP].includes(settings.type) ? jsonSchema : undefined,
    
            'repeat_penalty': settings.rep_pen,
            'repeat_last_n': settings.rep_pen_range,
            'n_predict': maxTokens,
            'num_predict': maxTokens,
            'num_ctx': max_context,
            'mirostat': settings.mirostat_mode,
            'ignore_eos': settings.ban_eos_token,
            'n_probs': power_user.request_token_probabilities ? 10 : undefined,
            'rep_pen_slope': settings.rep_pen_slope,
        };
        const vllmParams = {
            'n': canMultiSwipe ? settings.n : 1,
            'ignore_eos': settings.ignore_eos_token,
            'spaces_between_special_tokens': settings.spaces_between_special_tokens,
            'seed': settings.seed >= 0 ? settings.seed : undefined,
        };
        const aphroditeParams = {
            'n': canMultiSwipe ? settings.n : 1,
            'frequency_penalty': settings.freq_pen,
            'presence_penalty': settings.presence_pen,
            'repetition_penalty': settings.rep_pen,
            'seed': settings.seed >= 0 ? settings.seed : undefined,
            'stop': getStoppingStrings(isImpersonate, isContinue),
            'temperature': dynatemp ? (settings.min_temp + settings.max_temp) / 2 : settings.temp,
            'temperature_last': settings.temperature_last,
            'top_p': settings.top_p,
            'top_k': settings.top_k,
            'top_a': settings.top_a,
            'min_p': settings.min_p,
            'tfs': settings.tfs,
            'eta_cutoff': settings.eta_cutoff,
            'epsilon_cutoff': settings.epsilon_cutoff,
            'typical_p': settings.typical_p,
            'smoothing_factor': settings.smoothing_factor,
            'smoothing_curve': settings.smoothing_curve,
            'ignore_eos': settings.ignore_eos_token,
            'min_tokens': settings.min_length,
            'skip_special_tokens': settings.skip_special_tokens,
            'spaces_between_special_tokens': settings.spaces_between_special_tokens,
            'guided_grammar': settings.grammar_string || undefined,
            'guided_json': jsonSchema || undefined,
            'early_stopping': false,
            'include_stop_str_in_output': false,
            'dynatemp_min': dynatemp ? settings.min_temp : undefined,
            'dynatemp_max': dynatemp ? settings.max_temp : undefined,
            'dynatemp_exponent': dynatemp ? settings.dynatemp_exponent : undefined,
            'xtc_threshold': settings.xtc_threshold,
            'xtc_probability': settings.xtc_probability,
            'nsigma': settings.nsigma,
            'custom_token_bans': toIntArray(banned_tokens),
            'no_repeat_ngram_size': settings.no_repeat_ngram_size,
            'sampler_priority': settings.type === APHRODITE && !arraysEqual(
                settings.samplers_priorities,
                APHRODITE_DEFAULT_ORDER)
                ? settings.samplers_priorities
                : undefined,
        };
    
        if (settings.type === OPENROUTER) {
            params.provider = settings.openrouter_providers;
            params.quantizations = settings.openrouter_quantizations;
            params.allow_fallbacks = settings.openrouter_allow_fallbacks;
        }
    
        if (settings.type === KOBOLDCPP) {
            params.grammar = settings.grammar_string || undefined;
            params.grammar_retain_state = (settings.grammar_string && !!isContinue) ? true : undefined;
            params.trim_stop = true;
            params.dry_sequence_breakers = params.parseSequenceBreakers();
        }
    
        if (settings.type === HUGGINGFACE) {
            params.top_p = Math.min(Math.max(Number(params.top_p), 0.0), 0.999);
            params.stop = Array.isArray(params.stop) ? params.stop.slice(0, 4) : [];
            nonAphroditeParams.seed = settings.seed >= 0 ? settings.seed : Math.floor(Math.random() * Math.pow(2, 32));
        }
    
        if (settings.type === MANCER) {
            params.n = canMultiSwipe ? settings.n : 1;
            params.epsilon_cutoff /= 1000;
            params.eta_cutoff /= 1000;
            params.dynatemp_mode = params.dynamic_temperature ? 1 : 0;
            params.dynatemp_min = params.dynatemp_low;
            params.dynatemp_max = params.dynatemp_high;
            delete params.dynatemp_low;
            delete params.dynatemp_high;
            params.dry_sequence_breakers = params.parseSequenceBreakers();
        }
    
        if (settings.type === TABBY || settings.type === LLAMACPP) {
            params.n = canMultiSwipe ? settings.n : 1;
        }
    
        switch (settings.type) {
            case VLLM:
            case INFERMATICAI:
                params = Object.assign(params, vllmParams);
                break;
    
            case APHRODITE:
    
                params = Object.assign(params, aphroditeParams);
                break;
    
            default:
                params = Object.assign(params, nonAphroditeParams);
                break;
        }
    
        if (Array.isArray(settings.logit_bias) && settings.logit_bias.length) {
            const logitBias = BIAS_CACHE.get(BIAS_KEY) || calculateLogitBias(settings);
            BIAS_CACHE.set(BIAS_KEY, logitBias);
            params.logit_bias = logitBias;
        }
    
        if (settings.type === LLAMACPP || settings.type === OLLAMA) {
    
            const logitBiasArray = (params.logit_bias && typeof params.logit_bias === 'object' && Object.keys(params.logit_bias).length > 0)
                ? Object.entries(params.logit_bias).map(([key, value]) => [Number(key), value])
                : [];
            const tokenBans = toIntArray(banned_tokens);
            logitBiasArray.push(...tokenBans.map(x => [Number(x), false]));
            const sequenceBreakers = params.parseSequenceBreakers();
            const llamaCppParams = {
                'logit_bias': logitBiasArray,
    
                'grammar': settings.grammar_string,
                'cache_prompt': true,
                'dry_sequence_breakers': sequenceBreakers,
            };
            params = Object.assign(params, llamaCppParams);
            if (!Array.isArray(sequenceBreakers) || sequenceBreakers.length === 0) {
                delete params.dry_sequence_breakers;
            }
        }
    
        if ([LLAMACPP, APHRODITE].includes(settings.type)) {
            if (jsonSchema) {
                delete params.grammar_string;
                delete params.grammar;
                delete params.guided_grammar;
            } else {
                delete params.json_schema;
                delete params.guided_json;
            }
        }
        return params;
    }
    Object.assign(textgenerationwebui_settings, structuredClone(preset), { type: original.api_type || modules.textgen.textgenerationwebui_settings.type });
    const type = original.type || 'quiet';
    const payload = createTextGenGenerationData(textgenerationwebui_settings, original.model, original.prompt,
        limits.response || 80, type === 'impersonate', type === 'continue', null, type);
    payload.api_server = original.api_server;
    if (Object.hasOwn(original, 'stream')) payload.stream = original.stream;
    return payload;
}

function createQrKoboldPayload(modules, preset, original, api) {
    const { getStoppingStrings, substituteParams } = modules.host;
    const { kai_flags } = modules.kobold;
    const kai_settings = {
        temp: 1,
        rep_pen: 1,
        rep_pen_range: 0,
        top_p: 1,
        min_p: 0,
        top_a: 1,
        top_k: 0,
        typical: 1,
        tfs: 1,
        rep_pen_slope: 0.9,
        streaming_kobold: false,
        sampler_order: [0, 1, 2, 3, 4, 5, 6],
        mirostat: 0,
        mirostat_tau: 5.0,
        mirostat_eta: 0.1,
        use_default_badwordsids: false,
        grammar: '',
        seed: -1,
        api_server: '',
        preset_settings: 'gui',
        extensions: {},
    };
    
    function getKoboldGenerationData(finalPrompt, settings, maxLength, maxContextLength, isHorde, type) {
        const isImpersonate = type === 'impersonate';
        const isContinue = type === 'continue';
        const sampler_order = kai_settings.sampler_order || settings.sampler_order;
    
        let generate_data = {
            prompt: finalPrompt,
            gui_settings: false,
            sampler_order: sampler_order,
            max_context_length: Number(maxContextLength),
            max_length: maxLength,
            rep_pen: Number(kai_settings.rep_pen),
            rep_pen_range: Number(kai_settings.rep_pen_range),
            rep_pen_slope: kai_settings.rep_pen_slope,
            temperature: Number(kai_settings.temp),
            tfs: kai_settings.tfs,
            top_a: kai_settings.top_a,
            top_k: kai_settings.top_k,
            top_p: kai_settings.top_p,
            min_p: (kai_flags.can_use_min_p || isHorde) ? kai_settings.min_p : undefined,
            typical: kai_settings.typical,
            use_world_info: false,
            singleline: false,
            stop_sequence: (kai_flags.can_use_stop_sequence || isHorde) ? getStoppingStrings(isImpersonate, isContinue) : undefined,
            streaming: kai_settings.streaming_kobold && kai_flags.can_use_streaming && type !== 'quiet',
            can_abort: kai_flags.can_use_streaming,
            mirostat: (kai_flags.can_use_mirostat || isHorde) ? kai_settings.mirostat : undefined,
            mirostat_tau: (kai_flags.can_use_mirostat || isHorde) ? kai_settings.mirostat_tau : undefined,
            mirostat_eta: (kai_flags.can_use_mirostat || isHorde) ? kai_settings.mirostat_eta : undefined,
            use_default_badwordsids: (kai_flags.can_use_default_badwordsids || isHorde) ? kai_settings.use_default_badwordsids : undefined,
            grammar: (kai_flags.can_use_grammar || isHorde) ? substituteParams(kai_settings.grammar) : undefined,
            grammar_retain_state: (kai_flags.can_use_grammar && !!isContinue) ? true : undefined,
            sampler_seed: kai_settings.seed >= 0 ? kai_settings.seed : undefined,
            api_server: kai_settings.api_server,
        };
        return generate_data;
    }
    Object.assign(kai_settings, structuredClone(preset), { api_server: original.api_server, streaming_kobold: original.streaming });
    const limits = qrPresetLengths(preset, api);
    const payload = getKoboldGenerationData(original.prompt, kai_settings, limits.response || 80, limits.context || 2048, api === 'koboldhorde', original.type || 'quiet');
    if (api === 'koboldhorde') {
        delete payload.prompt;
        Object.assign(payload, { n: 1, frmtadsnsp: false, frmtrmblln: false, frmtrmspch: false, frmttriminc: false });
        return { prompt: original.prompt, params: payload, trusted_workers: original.trusted_workers, models: original.models };
    }
    return payload;
}

function createQrNovelPayload(modules, preset, original) {
    const { getStoppingStrings } = modules.host;
    const { getLogitBiasListResult } = modules.logitBias;
    const { getTextTokens, tokenizers } = modules.tokenizers;
    const { getStringHash, onlyUnique } = modules.utils;
    const { getNovelMaxResponseTokens } = modules.novel;
    const { power_user } = modules;
    const BIAS_CACHE = new Map();
    const BIAS_KEY = 'qr';
    const badWordsCache = {};
    const default_preamble = '[ Style: chat, complex, sensory, visceral ]';
    
    const default_order = [1, 5, 0, 2, 3, 4];
    
    const maximum_output_length = 150;
    
    const nai_settings = {
        temperature: 1.5,
        repetition_penalty: 2.25,
        repetition_penalty_range: 2048,
        repetition_penalty_slope: 0.09,
        repetition_penalty_frequency: 0,
        repetition_penalty_presence: 0.005,
        tail_free_sampling: 0.975,
        top_k: 10,
        top_p: 0.75,
        top_a: 0.08,
        typical_p: 0.975,
        min_p: 0,
        math1_temp: 1,
        math1_quad: 0,
        math1_quad_entropy_scale: 0,
        min_length: 1,
        model_novel: 'clio-v1',
        preset_settings_novel: 'Talker-Chat-Clio',
        streaming_novel: false,
        preamble: default_preamble,
        prefix: '',
        banned_tokens: '',
        order: default_order,
        logit_bias: [],
        extensions: {},
    };
    
    function getBadWordIds(banned_tokens, tokenizerType) {
        if (tokenizerType === tokenizers.NONE) {
            return [];
        }
    
        const cacheKey = `${getStringHash(banned_tokens)}-${tokenizerType}`;
    
        if (cacheKey in badWordsCache && Array.isArray(badWordsCache[cacheKey])) {
            console.debug(`Bad words ids cache hit for "${banned_tokens}"`, badWordsCache[cacheKey]);
            return badWordsCache[cacheKey];
        }
    
        const result = [];
        const sequence = banned_tokens.split('\n');
    
        for (let token of sequence) {
            const trimmed = token.trim();
    
            if (trimmed.length === 0) {
                continue;
            }
    
            if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
                const tokens = getTextTokens(tokenizerType, trimmed.slice(1, -1));
                result.push(tokens);
            } else if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    
                try {
                    const tokens = JSON.parse(trimmed);
    
                    if (Array.isArray(tokens) && tokens.every(t => Number.isInteger(t))) {
                        result.push(tokens);
                    } else {
                        throw new Error('Not an array of integers');
                    }
                } catch (err) {
                    console.log(`Failed to parse bad word token list: ${trimmed}`, err);
                }
            } else {
    
                const permutations = getBadWordPermutations(trimmed).map(t => getTextTokens(tokenizerType, t));
                result.push(...permutations);
            }
        }
    
        console.debug(`Bad words ids for "${banned_tokens}"`, result);
        badWordsCache[cacheKey] = result;
    
        return result;
    }
    
    function getBadWordPermutations(text) {
        const result = [];
    
        result.push(text);
    
        result.push(` ${text}`);
    
        result.push(text[0].toUpperCase() + text.slice(1));
    
        result.push(` ${text[0].toUpperCase() + text.slice(1)}`);
    
        result.push(text[0].toLowerCase() + text.slice(1));
    
        result.push(` ${text[0].toLowerCase() + text.slice(1)}`);
    
        result.push(text.toUpperCase());
    
        result.push(` ${text.toUpperCase()}`);
    
        result.push(text.toLowerCase());
    
        result.push(` ${text.toLowerCase()}`);
    
        return result.filter(onlyUnique);
    }
    
    function getNovelGenerationData(finalPrompt, settings, maxLength, isImpersonate, isContinue, _cfgValues, type) {
        console.debug('NovelAI generation data for', type);
        const isKayra = nai_settings.model_novel.includes('kayra');
        const isErato = nai_settings.model_novel.includes('erato');
    
        const tokenizerType = getTokenizerTypeForModel(nai_settings.model_novel);
        const stoppingStrings = getStoppingStrings(isImpersonate, isContinue);
    
        if (isErato) {
            const additionalStopStrings = [];
            for (const stoppingString of stoppingStrings) {
                if (stoppingString.startsWith('\n')) {
                    additionalStopStrings.push('.' + stoppingString);
                    additionalStopStrings.push('!' + stoppingString);
                    additionalStopStrings.push('?' + stoppingString);
                    additionalStopStrings.push('*' + stoppingString);
                    additionalStopStrings.push('"' + stoppingString);
                    additionalStopStrings.push('_' + stoppingString);
                    additionalStopStrings.push('...' + stoppingString);
                    additionalStopStrings.push('."' + stoppingString);
                    additionalStopStrings.push('?"' + stoppingString);
                    additionalStopStrings.push('!"' + stoppingString);
                    additionalStopStrings.push('.*' + stoppingString);
                    additionalStopStrings.push(')' + stoppingString);
                }
            }
            stoppingStrings.push(...additionalStopStrings);
        }
    
        const MAX_STOP_SEQUENCES = 1024;
        const stopSequences = (tokenizerType !== tokenizers.NONE)
            ? stoppingStrings.slice(0, MAX_STOP_SEQUENCES).map(t => getTextTokens(tokenizerType, t))
            : undefined;
    
        const badWordIds = (tokenizerType !== tokenizers.NONE)
            ? getBadWordIds(nai_settings.banned_tokens, tokenizerType)
            : undefined;
    
        const prefix = selectPrefix(nai_settings.prefix, finalPrompt);
    
        let logitBias = [];
        if (tokenizerType !== tokenizers.NONE && Array.isArray(nai_settings.logit_bias) && nai_settings.logit_bias.length) {
            logitBias = BIAS_CACHE.get(BIAS_KEY) || calculateLogitBias();
            BIAS_CACHE.set(BIAS_KEY, logitBias);
        }
    
        if (power_user.console_log_prompts) {
            console.log(finalPrompt);
        }
    
        if (isErato) {
            finalPrompt = '<|startoftext|><|reserved_special_token81|>' + finalPrompt;
        }
    
        const adjustedMaxLength = (isKayra || isErato) ? getNovelMaxResponseTokens() : maximum_output_length;
    
        return {
            'input': finalPrompt,
            'model': nai_settings.model_novel,
            'use_string': true,
            'temperature': Number(nai_settings.temperature),
            'max_length': maxLength < adjustedMaxLength ? maxLength : adjustedMaxLength,
            'min_length': Number(nai_settings.min_length),
            'tail_free_sampling': Number(nai_settings.tail_free_sampling),
            'repetition_penalty': Number(nai_settings.repetition_penalty),
            'repetition_penalty_range': Number(nai_settings.repetition_penalty_range),
            'repetition_penalty_slope': Number(nai_settings.repetition_penalty_slope),
            'repetition_penalty_frequency': Number(nai_settings.repetition_penalty_frequency),
            'repetition_penalty_presence': Number(nai_settings.repetition_penalty_presence),
            'top_a': Number(nai_settings.top_a),
            'top_p': Number(nai_settings.top_p),
            'top_k': Number(nai_settings.top_k),
            'min_p': Number(nai_settings.min_p),
            'math1_temp': Number(nai_settings.math1_temp),
            'math1_quad': Number(nai_settings.math1_quad),
            'math1_quad_entropy_scale': Number(nai_settings.math1_quad_entropy_scale),
            'typical_p': Number(nai_settings.typical_p),
            'mirostat_lr': Number(nai_settings.mirostat_lr),
            'mirostat_tau': Number(nai_settings.mirostat_tau),
            'phrase_rep_pen': nai_settings.phrase_rep_pen,
            'stop_sequences': stopSequences,
            'bad_words_ids': badWordIds,
            'logit_bias_exp': logitBias,
            'generate_until_sentence': true,
            'use_cache': false,
            'return_full_text': false,
            'prefix': prefix,
            'order': nai_settings.order || settings.order || default_order,
            'num_logprobs': power_user.request_token_probabilities ? 10 : undefined,
        };
    }
    
    function selectPrefix(selected_prefix, finalPrompt) {
        let useInstruct = false;
        const clio = nai_settings.model_novel.includes('clio');
        const kayra = nai_settings.model_novel.includes('kayra');
        const erato = nai_settings.model_novel.includes('erato');
        const isNewModel = clio || kayra || erato;
    
        if (isNewModel) {
    
            const tail = finalPrompt.slice(-1500);
            useInstruct = tail.includes('}');
            return useInstruct ? 'special_instruct' : selected_prefix;
        }
    
        return 'vanilla';
    }
    
    function getTokenizerTypeForModel(model) {
        if (model.includes('clio')) {
            return tokenizers.NERD;
        }
        if (model.includes('kayra')) {
            return tokenizers.NERD2;
        }
        if (model.includes('erato')) {
            return tokenizers.LLAMA3;
        }
        return tokenizers.NONE;
    }
    
    function calculateLogitBias() {
        const biasPreset = nai_settings.logit_bias;
    
        if (!Array.isArray(biasPreset) || biasPreset.length === 0) {
            return [];
        }
    
        const tokenizerType = getTokenizerTypeForModel(nai_settings.model_novel);
    
        function getBiasObject(bias, sequence) {
            return {
                bias: bias,
                ensure_sequence_finish: false,
                generate_once: false,
                sequence: sequence,
            };
        }
    
        const result = getLogitBiasListResult(biasPreset, tokenizerType, getBiasObject);
        return result;
    }
    Object.assign(nai_settings, structuredClone(preset), { model_novel: original.model });
    const limits = qrPresetLengths(preset, 'novel');
    const type = original.type || 'quiet';
    const input = original.input.replace(/^<\|startoftext\|><\|reserved_special_token81\|>/, '');
    const payload = getNovelGenerationData(input, nai_settings, limits.response || 80, type === 'impersonate', type === 'continue', null, type);
    if (Object.hasOwn(original, 'streaming')) payload.streaming = original.streaming;
    return payload;
}
// END QR PRIVATE TEXT BUILDERS








function qrPresetLengths(preset, api) {
    const legacyNovel = api === 'novel' && preset.genamt === undefined;
    const response = Number(legacyNovel ? preset.max_length : preset.genamt);
    const context = Number(legacyNovel ? preset.max_context : preset.max_length);
    return {
        response: Number.isFinite(response) && response > 0 ? response : null,
        context: Number.isFinite(context) && context > 0 ? context : null,
    };
}


function qrExecutionText(message, options, scope) {
    // Scope macros are resolved after the script is parsed, so a name containing
    // quotes or a pipe cannot turn into an extra slash command.
    let text = message;
    if (options.swap) text = text.replace(/\{\{(char|user)\}\}/gi, (_, name) => name.toLowerCase() === 'char' ? '{{user}}' : '{{char}}');
    if (options.charName.trim()) {
        scope.setMacro('pr_qr_char', options.charName.trim());
        text = text.replace(/\{\{char\}\}/gi, '{{pr_qr_char}}');
    }
    if (options.userName?.trim()) {
        scope.setMacro('pr_qr_user', options.userName.trim());
        text = text.replace(/\{\{user\}\}/gi, '{{pr_qr_user}}');
    }
    return text;
}



function readQrPreset(modules, options) {
    if (!options.preset) return null;
    const api = modules.host.main_api;
    const preset = modules.getPresetManager(api)?.getCompletionPresetByName(options.preset);
    if (!preset) throw new Error('선택한 QR 프리셋을 찾을 수 없습니다. 프리셋 목록에서 다시 선택해 주세요.');
    return { api, name: options.preset, preset: structuredClone(preset) };
}

function qrChatSettings(modules, preset, request) {
    // Defaults for fields omitted from a saved preset are ST's initial values,
    // never values from the currently active preset.
    const settings = {
        temp_openai: 1, freq_pen_openai: 0, pres_pen_openai: 0, top_p_openai: 1,
        top_k_openai: 0, min_p_openai: 0, top_a_openai: 0, repetition_penalty_openai: 1,
        openai_max_context: 4095, openai_max_tokens: 300, stream_openai: false,
        ...structuredClone(modules.prompts.chatCompletionDefaultPrompts),
        ...structuredClone(modules.prompts.promptManagerDefaultPromptOrders),
        send_if_empty: '', new_chat_prompt: '[Start a new Chat]',
        new_group_chat_prompt: '[Start a new group chat. Group members: {{group}}]',
        new_example_chat_prompt: '[Example Chat]',
        continue_nudge_prompt: '[Continue your last message without repeating its original content.]',
        impersonation_prompt: "[Write your next reply from the point of view of {{user}}, using the chat history so far as a guideline for the writing style of {{user}}. Don't write as {{char}} or system. Don't describe actions of {{char}}.]",
        group_nudge_prompt: '[Write the next reply only as {{char}}.]',
        wi_format: '{0}', scenario_format: '{{scenario}}', personality_format: '{{personality}}',
        bias_preset_selected: '', bias_presets: {}, assistant_prefill: '', assistant_impersonation: '',
        use_sysprompt: false, squash_system_messages: false, media_inlining: true, inline_image_quality: 'auto',
        continue_prefill: false, continue_postfix: ' ', function_calling: false, tool_call_recurse_limit: 5,
        names_behavior: 0, show_thoughts: true, reasoning_effort: 'auto', verbosity: 'auto',
        tool_reasoning_mode: 'disabled', enable_web_search: false, request_images: false,
        request_image_resolution: '', request_image_aspect_ratio: '', seed: -1, n: 1, extensions: {},
    };
    for (const [key, [, settingKey, , connection]] of Object.entries(modules.openai.settingsToUpdate)) {
        const value = connection ? modules.openai.oai_settings[settingKey] : preset[key];
        if (value !== undefined) settings[settingKey] = structuredClone(value);
    }
    // A service request may explicitly choose a connection. These fields route
    // the request; none of the incoming sampler or prompt settings are copied.
    for (const key of ['chat_completion_source', 'custom_url', 'reverse_proxy', 'proxy_password',
        'custom_include_body', 'custom_exclude_body', 'custom_include_headers', 'custom_prompt_post_processing',
        'azure_base_url', 'azure_deployment_name', 'azure_api_version', 'vertexai_auth_mode',
        'vertexai_region', 'vertexai_express_project_id', 'workers_ai_account_id']) {
        if (request[key] !== undefined) settings[key] = structuredClone(request[key]);
    }
    if (settings.bias_preset_selected) {
        const biases = modules.openai.oai_settings.bias_presets?.[settings.bias_preset_selected];
        settings.bias_presets[settings.bias_preset_selected] = structuredClone(biases || []);
    }
    const defaults = modules.prompts.chatCompletionDefaultPrompts.prompts;
    settings.prompts = structuredClone(settings.prompts || defaults);
    for (const prompt of defaults) if (!settings.prompts.some(p => p.identifier === prompt.identifier)) settings.prompts.push(structuredClone(prompt));
    // Older saved presets predate Prompt Manager; migrate this private copy only.
    for (const [key, id] of [['main_prompt', 'main'], ['nsfw_prompt', 'nsfw'], ['jailbreak_prompt', 'jailbreak']]) {
        if (preset[key]) settings.prompts.find(p => p.identifier === id).content = preset[key];
    }
    if (!settings.prompt_order?.some(order => String(order.character_id) === '100001')) {
        settings.prompt_order = structuredClone(modules.prompts.promptManagerDefaultPromptOrders.prompt_order);
    }
    return settings;
}

async function buildQrPresetRequest(modules, run, original, api, raw = false) {
    if (!run.preset) return original;
    const preset = run.preset.preset;
    if (api !== run.preset.api && !(['kobold', 'koboldhorde'].includes(api) && ['kobold', 'koboldhorde'].includes(run.preset.api))) {
        throw new Error('선택한 프리셋 형식과 QR의 전송 형식이 다릅니다.');
    }
    if (api === 'openai') {
        const builder = createQrChatBuilder(modules, qrChatSettings(modules, preset, original));
        const prepared = !raw && run.preparedChats?.some(chat => JSON.stringify(chat) === JSON.stringify(original.messages));
        const messages = prepared ? original.messages : await builder.messages(run, raw || !run.promptContext ? original.messages : null);
        addQrLanguageToMessages(messages, qrLanguageInstruction(run.options));
        return builder.payload(messages, original);
    }
    if (api === 'textgenerationwebui') return createQrTextPayload(modules, preset, original);
    if (api === 'novel') return createQrNovelPayload(modules, preset, original);
    if (api === 'kobold' || api === 'koboldhorde') return createQrKoboldPayload(modules, preset, original, api);
    throw new Error('QR 프리셋을 적용할 전송 형식을 찾을 수 없습니다.');
}


async function buildQrTextPrompt(modules, run, data) {
    const { host, power_user } = modules;
    const preset = run.preset.preset;
    const type = run.generation?.type || 'normal';
    const instruct = !!power_user.instruct?.enabled;
    const continuing = type === 'continue';
    const impersonating = type === 'impersonate';
    const limits = qrPresetLengths(preset, run.preset.api);
    const budget = (limits.context || 2048) - (limits.response || 80);
    const chat = run.coreChat || [];
    const lastUser = chat.findLastIndex(item => item.is_user);
    const rows = chat.map((item, index) => {
        const narrator = item.extra?.type === host.system_message_types.NARRATOR;
        const name = item.name || (item.is_user ? host.name1 : host.name2);
        let sequence = index === 0 ? modules.force_output_sequence.FIRST : false;
        if (index === lastUser && !impersonating) sequence = modules.force_output_sequence.LAST;
        const text = item.extra?.[modules.constants.IGNORE_SYMBOL] ? '' : instruct
            ? modules.formatInstructModeChat(name, item.mes, item.is_user, narrator, item.force_avatar, host.name1, host.name2, sequence)
            : `${item.name && !narrator ? item.name + ': ' : ''}${item.mes}\n`;
        return { text, mandatory: !run.originalChatItems?.has(item) };
    });
    if (continuing && data.generatedPromptCache) rows.pop();
    if (data.finalMesSend?.length) {
        // The native final row contains the QR quiet prompt, assistant opening
        // and explicit command prefill. Preserve them exactly.
        const tail = data.finalMesSend.at(-1);
        const text = (tail.extensionPrompts || []).join('') + tail.message;
        if (rows.length) Object.assign(rows.at(-1), { text, mandatory: true });
        else rows.push({ text, mandatory: true });
    }
    const card = host.getCharacterCardFields();
    let examples = power_user.strip_examples ? [] : host.parseMesExamples(card.mesExamples || '', instruct);
    for (const entry of data.worldInfoExamples || []) {
        if (power_user.strip_examples) break;
        const blocks = host.parseMesExamples(host.substituteParams(entry.content), instruct);
        if (entry.before) examples.unshift(...blocks); else examples.push(...blocks);
    }
    if (instruct) examples = modules.formatInstructModeExamples(examples, host.name1, host.name2);
    const context = power_user.context || {};
    const story = context.story_string_position === host.extension_prompt_types.IN_CHAT ? ''
        : instruct ? modules.formatInstructModeStoryString(data.storyString || '') : data.storyString || '';
    const separator = context.chat_start ? host.substituteParams(context.chat_start + '\n') : '';
    const preamble = run.preset.api === 'novel'
        ? host.substituteParams(preset.preamble ?? '[ Style: chat, complex, sensory, visceral ]') + '\n' : '';
    const assemble = () => {
        let text = story + examples.join('') + preamble + separator + rows.map(row => row.text).join('') + (data.generatedPromptCache || '');
        text = text.replace(/\r/g, '');
        if (power_user.collapse_newlines) text = modules.powerUser.collapseNewlines(text);
        return text;
    };
    let prompt = assemble();
    while (await modules.tokenizers.getTokenCountAsync(prompt, power_user.token_padding) > budget) {
        const oldest = rows.findIndex(row => !row.mandatory);
        if (!power_user.pin_examples && examples.length) examples.pop();
        else if (oldest >= 0) rows.splice(oldest, 1);
        else if (examples.length) examples.pop();
        else throw new Error('QR 프리셋의 문맥 길이보다 필수 지시문이 깁니다.');
        prompt = assemble();
    }
    return prompt;
}

function installQrExecutionHooks(modules, run, cleanups) {
    const { eventSource, event_types } = SillyTavern.getContext();
    const listen = (type, callback) => {
        if (!type) return;
        eventSource.on(type, callback);
        cleanups.push(() => eventSource.removeListener(type, callback));
    };
    const instruction = qrLanguageInstruction(run.options);
    installQrRequestGuard(modules, run, instruction, cleanups);
    if (run.preset || instruction) {
        listen(event_types.GENERATION_STARTED, (type, options, dryRun) => {
            if (dryRun) return;
            run.generation = { ...options, type };
            run.promptContext = null;
            run.coreChat = null;
            run.generationLanguageInput = null;
        });
    }
    if (run.preset) {
        listen(event_types.GENERATE_BEFORE_COMBINE_PROMPTS, data => {
            run.promptContext = { ...run.promptContext, ...data };
        });
        listen(event_types.GENERATE_AFTER_COMBINE_PROMPTS, async event => {
            if (event.dryRun || run.preset.api === 'openai' || !run.promptContext || !run.coreChat) return;
            event.prompt = await buildQrTextPrompt(modules, run, run.promptContext);
        });
        listen(event_types.WORLD_INFO_ACTIVATED, entries => {
            if (!run.promptContext) return;
            const before = [], after = [], examples = [];
            const positions = modules.worldInfo.world_info_position;
            for (const entry of [...entries].sort((a, b) => b.order - a.order)) {
                const content = modules.regex.getRegexedString(entry.content, modules.regex.regex_placement.WORLD_INFO,
                    { depth: null, isMarkdown: false, isPrompt: true });
                if (!content) continue;
                if (entry.position === positions.before) before.unshift(content);
                else if (entry.position === positions.after) after.unshift(content);
                else if ([positions.EMTop, positions.EMBottom].includes(entry.position)) examples.unshift({ content, before: entry.position === positions.EMTop });
            }
            Object.assign(run.promptContext, { worldInfoBefore: before.join('\n'), worldInfoAfter: after.join('\n'), worldInfoExamples: examples });
        });
        listen(event_types.CHAT_COMPLETION_PROMPT_READY, async event => {
            if (event.dryRun || run.preset.api !== 'openai') return;
            const builder = createQrChatBuilder(modules, qrChatSettings(modules, run.preset.preset, {}));
            const messages = await builder.messages(run, run.promptContext ? null : event.chat);
            event.chat.splice(0, event.chat.length, ...messages);
            (run.preparedChats ||= []).push(event.chat);
            run.promptContext = null;
            run.coreChat = null;
        });
    }
    if (instruction) {
        // Attach to the request's QR content; do not inject an independent
        // depth-zero system prompt (which can precede the QR quiet prompt).
        listen(event_types.CHAT_COMPLETION_PROMPT_READY, event => {
            if (!event.dryRun) addQrLanguageToMessages(event.chat, instruction);
        });
        listen(event_types.GENERATE_AFTER_COMBINE_PROMPTS, event => {
            if (!event.dryRun && typeof event.prompt === 'string') event.prompt = addQrLanguageToText(event.prompt, instruction, modules);
        });
    }
    const commands = modules.SlashCommandParser.commands;
    for (const name of ['gen', 'genraw', 'trigger']) {
        const command = commands[name];
        if (!command) continue;
        const original = command.callback;
        const wrapped = async function(args, value) {
            if (qrRun !== run) return original.call(this, args, value);
            if (name === 'genraw') {
                run.promptContext = null;
                run.coreChat = null;
            }
            const nextArgs = { ...args };
            if (name === 'trigger') {
                const pending = original.call(this, { ...args, await: 'true' }, value);
                run.pending.push(pending);
                // Preserve /trigger's default non-blocking pipeline behavior,
                // but keep this run's options until its generation completes.
                if (['true', '1', 'yes', 'on'].includes(String(args?.await).toLowerCase())) return await pending;
                pending.catch(error => console.error(`[${MODULE_NAME}] QR trigger failed`, error));
                return '';
            }
            // This is the parsed generation argument, not the QR script.
            // /echo, /run and any following pipeline commands stay untouched.
            // Both normal and raw generation format this content afterwards.
            const previousInput = run.commandLanguageInput;
            if (instruction && typeof value === 'string' && (value || name === 'gen')) {
                value = appendQrLanguage(value, instruction);
                run.commandLanguageInput = value;
            }
            try { return await original.call(this, nextArgs, value); }
            finally { run.commandLanguageInput = previousInput; }
        };
        command.callback = wrapped;
        cleanups.push(() => { if (command.callback === wrapped) command.callback = original; });
    }
    for (const [Service, field] of [[modules.ChatCompletionService, 'messages'], [modules.TextCompletionService, 'prompt']]) {
        const original = Service.processRequest;
        const wrapped = async function(request, options = {}, ...args) {
            if (qrRun !== run) return original.call(this, request, options, ...args);
            const next = { ...request };
            const previousInput = run.commandLanguageInput;
            try {
                if (instruction) {
                    const input = next[field];
                    if (Array.isArray(input)) {
                        next[field] = addQrLanguageToMessages(structuredClone(input), instruction);
                        const task = next[field].findLast(message => message.role !== 'assistant');
                        if (typeof task?.content === 'string' && task.content.trimEnd().endsWith(instruction)) run.commandLanguageInput = task.content;
                    } else if (typeof input === 'string') {
                        const selected = options.instructName ? modules.getPresetManager('instruct')?.getCompletionPresetByName(options.instructName) : modules.power_user?.instruct;
                        const instruct = selected ? { ...selected, ...options.instructSettings } : selected;
                        next[field] = addQrLanguageToText(input, instruction, modules, { api: Service.TYPE, instruct });
                    }
                }
                if (run.preset) {
                    // Preserve native formatting and cleanup without loading
                    // another generation preset or changing shared settings.
                    const arrayPrompt = field === 'prompt' && Array.isArray(next.prompt);
                    const requestData = Service.createRequestData(arrayPrompt ? { ...next, prompt: '' } : next);
                    const payload = await buildQrPresetRequest(modules, run, requestData, Service.TYPE, true);
                    if (arrayPrompt) payload.prompt = next.prompt;
                    run.serviceDepth = (run.serviceDepth || 0) + 1;
                    try { return await original.call(this, payload, { ...options, presetName: undefined }, ...args); }
                    finally { run.serviceDepth--; }
                }
                return await original.call(this, next, options, ...args);
            } finally { run.commandLanguageInput = previousInput; }
        };
        Service.processRequest = wrapped;
        cleanups.push(() => { if (Service.processRequest === wrapped) Service.processRequest = original; });
    }
    if (instruction && typeof modules.TextCompletionService.constructPrompt === 'function') {
        const Service = modules.TextCompletionService;
        const original = Service.constructPrompt;
        const wrapped = function(messages, ...args) {
            if (qrRun !== run) return original.call(this, messages, ...args);
            // ConnectionManager can format a message array before passing its
            // resulting string to processRequest. Insert before that formatting.
            return rememberQrLanguageText(original.call(this, addQrLanguageToMessages(structuredClone(messages), instruction), ...args));
        };
        Service.constructPrompt = wrapped;
        cleanups.push(() => { if (Service.constructPrompt === wrapped) Service.constructPrompt = original; });
    }
}

async function executeOrganizedQr(key) {
    if (qrRun || resettingTab) return;
    const run = { options: structuredClone(getSettings().qrOptions), preset: null, pending: [] };
    qrRun = run;
    const cleanups = [];
    let modules;
    try {
        modules = await getQrModules();
        if (typeof modules.host.isGenerating === 'function' ? modules.host.isGenerating() : modules.host.is_send_press) throw new Error('현재 응답 생성이 끝난 뒤 QR을 실행해 주세요.');
        reconcileQrCatalog(modules.QuickReplySet.list);
        const source = qrCatalog.get(key);
        if (!source) throw new Error('원본 QR이 삭제되었습니다.');
        run.options = structuredClone(getQrOptions(modules));
        run.connection = readQrApi(modules, run.options);
        run.preset = readQrPreset(modules, run.options);
        installQrExecutionHooks(modules, run, cleanups);
        renderQrOrganizer();
        const scope = new modules.SlashCommandScope();
        scope.setMacro('arg::*', '');
        const message = qrExecutionText(source.qr.message, run.options, scope);
        const input = document.querySelector('#send_textarea');
        const combined = source.set.injectInput && input.value.length
            ? (source.set.placeBeforeInput ? `${message} ${input.value}` : `${input.value} ${message}`)
            : `${message} `;
        if (combined[0] === '/' && !source.set.disableSend) {
            await source.set.executeWithOptions(source.qr, { message, scope });
        } else {
            // The native QR text branch clicks Send without returning Generate's
            // promise. Await Generate directly so the options survive streaming.
            input.value = modules.host.substituteParams(combined).replace(/\{\{pr_qr_(char|user)\}\}/g,
                (_, name) => (run.options[`${name}Name`] || '').trim());
            input.focus();
            if (!source.set.disableSend) await modules.host.Generate('normal');
        }
    } catch (error) {
        console.error(`[${MODULE_NAME}] QR execution failed`, error);
        toastr.error(error.message || 'QR 실행에 실패했습니다.');
    } finally {
        for (const pending of run.pending) {
            try { await pending; } catch (error) { console.error(`[${MODULE_NAME}] QR generation failed`, error); }
        }
        for (const cleanup of cleanups.reverse()) {
            try { cleanup(); } catch (error) { console.error(`[${MODULE_NAME}] QR cleanup failed`, error); }
        }
        qrRun = null;
        if (panelVisible && currentTab === 'qr-organizer') renderQrOrganizer();
    }
}

// =============================================
// GENERATE INTERCEPTOR
// =============================================
globalThis.PromptRemote_interceptGeneration = async function(chat,contextSize,abort,type){
    const instruction = qrRun && qrLanguageInstruction(qrRun.options);
    if (instruction && !qrRun.generation?.quiet_prompt) {
        // ST supplies a per-request working chat, not the saved chat. Replace
        // only its final user/narrator item before ST formats/tokenizes it.
        const index = chat.findLastIndex(item => item.is_user || item.extra?.type === 'narrator');
        if (index >= 0 && typeof chat[index].mes === 'string') {
            const mes = appendQrLanguage(chat[index].mes, instruction);
            chat[index] = { ...chat[index], mes };
            qrRun.generationLanguageInput = mes;
        }
    }
    if (qrRun?.preset) {
        // Keep the native working array so later depth injections are included.
        // Request builders clone/read it; they never edit its items.
        qrRun.coreChat = chat;
        qrRun.originalChatItems = new Set(chat);
        qrRun.generation = { ...qrRun.generation, type };
        const modules = await getQrModules();
        const fields = modules.host.getCharacterCardFields();
        qrRun.promptContext = { ...fields, main: fields.system, worldInfoBefore: '', worldInfoAfter: '' };
    }
};

// =============================================
// EXTENSION SETTINGS
// =============================================
function createExtSettings(){
    const previousSettings = document.getElementById('prompt-remote-ext-settings');
    const drawerStyle = previousSettings?.querySelector('.inline-drawer-content')?.getAttribute('style');
    const drawerIconClass = previousSettings?.querySelector('.inline-drawer-icon')?.className;
    previousSettings?.remove();
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
                <div class="pr-ext-row"><label>QR 런처</label><label class="pr-toggle-switch"><input type="checkbox" id="pr-ext-moduleQrOrganizer"><span class="pr-toggle-slider"></span></label></div>
            </div>
            <div class="pr-ext-group-title" style="margin-top:8px;">표시 방법</div>
            <div class="pr-ext-row"><label>API 선택</label><div class="pr-ext-btn-group" id="pr-ext-apiDisplayMode"><button data-val="dropdown" class="pr-ext-btn">드롭다운</button><button data-val="buttons" class="pr-ext-btn">버튼</button><button data-val="gallery" class="pr-ext-btn">갤러리</button></div></div>
            <div class="pr-ext-row"><label>프리셋 선택</label><div class="pr-ext-btn-group" id="pr-ext-presetDisplayMode"><button data-val="dropdown" class="pr-ext-btn">드롭다운</button><button data-val="buttons" class="pr-ext-btn">버튼</button><button data-val="gallery" class="pr-ext-btn">갤러리</button></div></div>
        </div>

        <div class="pr-ext-group">
            <div class="pr-ext-group-title">초기화</div>
            <p class="pr-ext-reset-description">선택한 탭의 저장값을 초기화합니다.</p>
            <div class="pr-ext-btn-group">${Object.entries(tabResetDefinitions).map(([id, definition]) => `<button type="button" class="pr-ext-btn" data-reset-tab="${id}">${escHtml(definition.label)}</button>`).join('')}</div>
        </div>

    </div></div></div>`;
    document.getElementById('extensions_settings2')?.insertAdjacentHTML('beforeend',html);
    const settingsRoot = document.getElementById('prompt-remote-ext-settings');
    if (drawerStyle) settingsRoot?.querySelector('.inline-drawer-content')?.setAttribute('style', drawerStyle);
    if (drawerIconClass && settingsRoot) settingsRoot.querySelector('.inline-drawer-icon').className = drawerIconClass;
    settingsRoot?.querySelectorAll('[data-reset-tab]').forEach(button => {
        button.addEventListener('click', () => confirmTabReset(button.dataset.resetTab));
    });
    const settings=getSettings();

    // 활성화 토글
    const enabledEl=document.getElementById('pr-ext-enabled');
    if(enabledEl){enabledEl.checked=settings.enabled;enabledEl.addEventListener('change',()=>{settings.enabled=enabledEl.checked;save();createToggleButton();});}

    // 기능 토글
    const deps={modulePromptSwitch:'modulePresetSelect',modulePresetSelect:'moduleApiSelect'};
    for(const f of ['moduleApiSelect','modulePresetSelect','modulePromptSwitch','modulePrefill','moduleNoteBoard','moduleQrOrganizer']){
        const el=document.getElementById('pr-ext-'+f);if(!el)continue;el.checked=settings[f];
        if(deps[f]&&!settings[deps[f]])el.disabled=true;
        el.addEventListener('change',()=>{
            settings[f]=el.checked;
            if(f==='moduleApiSelect'&&!el.checked){settings.modulePresetSelect=false;settings.modulePromptSwitch=false;const ps=document.getElementById('pr-ext-modulePresetSelect'),sw=document.getElementById('pr-ext-modulePromptSwitch');if(ps){ps.checked=false;ps.disabled=true;}if(sw){sw.checked=false;sw.disabled=true;}}
            if(f==='modulePresetSelect'&&!el.checked){settings.modulePromptSwitch=false;const sw=document.getElementById('pr-ext-modulePromptSwitch');if(sw){sw.checked=false;sw.disabled=true;}}
            if(f==='moduleApiSelect'&&el.checked){const ps=document.getElementById('pr-ext-modulePresetSelect');if(ps)ps.disabled=false;}
            if(f==='modulePresetSelect'&&el.checked){const sw=document.getElementById('pr-ext-modulePromptSwitch');if(sw)sw.disabled=false;}
            save();if(panelVisible)renderCurrentTab();else syncPanelTabs();
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
    eventSource.on(event_types.CHAT_CHANGED,()=>{if(hasChatOpen())getNBData();if(panelVisible)renderCurrentTab();});
    installQrStatusEvents({ eventSource, event_types });
    if (event_types.APP_READY) eventSource.on(event_types.APP_READY, () => {
        if (globalThis.quickReplyApi) getQrModules().catch(error => console.warn(`[${MODULE_NAME}] QR not available`, error));
    });
    for (const type of [event_types.MAIN_API_CHANGED, event_types.PRESET_CHANGED]) {
        if (type) eventSource.on(type, () => { if (panelVisible && currentTab === 'qr-organizer') renderQrOrganizer(); });
    }
    if (hasChatOpen()) getNBData();
    if (event_types.PRESET_DELETED) eventSource.on(event_types.PRESET_DELETED, ({ apiId, name }) => {
        if (apiId === 'openai') forgetPresetSettings(name);
    });
    if (event_types.OAI_PRESET_IMPORT_READY) eventSource.on(event_types.OAI_PRESET_IMPORT_READY, ({ presetName, data }) => {
        pendingPresetImports.set(presetName, data);
    });
    if (event_types.OAI_PRESET_CHANGED_BEFORE) eventSource.on(event_types.OAI_PRESET_CHANGED_BEFORE, async ({ presetName }) => {
        const importedData = pendingPresetImports.get(presetName);
        if (!importedData) return;
        try {
            const { getPresetManager } = await import('../../../preset-manager.js');
            const storedPreset = getPresetManager('openai')?.getCompletionPresetByName(presetName);
            completePresetImport(presetName, storedPreset, importedData);
        } catch (error) {
            pendingPresetImports.delete(presetName);
            console.warn(`[${MODULE_NAME}] Could not check imported preset`, error);
        }
    });
    if(event_types.PRESET_CHANGED)eventSource.on(event_types.PRESET_CHANGED,()=>{if(panelVisible&&currentTab==='quick-settings')renderQuickSettings();});
    eventSource.on(event_types.OAI_PRESET_CHANGED_AFTER,()=>{
        const pn=_pendingPresetName;
        _pendingPresetName=null;
        cancelPendingSwitchApply();
        _scheduledPresetName=pn;
        _switchApplyTimer=setTimeout(()=>{
            _switchApplyTimer=null;
            _scheduledPresetName=null;
            if(pn&&pn===getCurrentPresetName()&&getSettings().modulePromptSwitch)applyPromptSwitchStates(pn);
            if(panelVisible&&currentTab==='quick-settings')renderQuickSettings();
        },3000);
    });
    if(event_types.CONNECTION_PROFILE_LOADED)eventSource.on(event_types.CONNECTION_PROFILE_LOADED,()=>{if(panelVisible&&currentTab==='quick-settings')renderQuickSettings();});
    console.log(`[${MODULE_NAME}] Prompt Remote loaded.`);
})();
