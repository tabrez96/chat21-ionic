//TIMES
// BUILD
export const CURR_VER_DEV = '49';
export const CURR_VER_PROD = '0.102';

//export const SERVICE_WORKER_DEV = '/chat/';
//export const SERVICE_WORKER_PROD = './chat/';


// MESSAGES STATUS
export const MSG_STATUS_FAILED = -100;
export const MSG_STATUS_SENDING = 0;
export const MSG_STATUS_SENT = 100;
export const MSG_STATUS_SENT_SERVER = 150;
export const MSG_STATUS_RECEIVED = 200;
export const MSG_STATUS_RETURN_RECEIPT = 250; 
export const MSG_STATUS_SEEN = 300;

// constans messages detail 
export const MIN_HEIGHT_TEXTAREA: number = 24;
export const MAX_HEIGHT_TEXTAREA: number = 180;

// pagine
export const PARENT_PAGE_USERS: string = "users";
export const PARENT_PAGE_DETAIL_CONVERSATION: string = "conversation-detail";

// css
export const BCK_COLOR_CONVERSATION_SELECTED: string = "#EEEEEE";
export const BCK_COLOR_CONVERSATION_UNSELECTED: string = "#FFFFFF";

// LABELS
// export const LABEL_IMAGE = "immagine";
// export const LABEL_TU = "tu: ";
// export const LABEL_MSG_PUSH_START_CHAT = "Premi qui per chattare con qualcuno";
// export const LABEL_MSG_START_CHAT = "inizia a chattare";
// export const LABEL_ACTIVE_NOW = "attivo/a ora";
// export const LABEL_NO_MSG_HERE = "Ancora nessun messaggio qui...";
// export const LABEL_TODAY = "Oggi";
// export const LABEL_TOMORROW = "Ieri";
// export const LABEL_LAST_ACCESS = "ultimo accesso";
// export const LABEL_TO = "alle";
// export const ARRAY_DAYS = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
// export const LABEL_ANNULLA = "ANNULLA";
// export const LABEL_OK = "OK";

export const TYPE_SUPPORT_GROUP: string = 'support-group';


// TYPES MESSAGES
export const TYPE_MSG_TEXT: string = 'text';
export const TYPE_MSG_IMAGE: string = 'image';
export const MAX_WIDTH_IMAGES: number = 300;
export const TYPE_DIRECT: string = 'direct';
export const TYPE_GROUP: string = 'group';
export const SYSTEM: string = 'system';
export const URL_NO_IMAGE: string = '';//assets/img/no_image.png';
export const LABEL_NOICON: string = 'NOICON';
export const CLIENT_BROWSER: string = 'browser';
export const TYPE_POPUP_LIST_CONVERSATIONS: string = 'LIST_CONVERSATIONS';
export const TYPE_POPUP_DETAIL_MESSAGE: string = 'DETAIL_MESSAGE';

// URLS
export const URL_SEND_BY_EMAIL: string = "mailto:?subject=Transcript Chat Conversation&body=Salve,%0D%0A%0D%0Adi seguito potrà scaricare il transcript della conversazione intercorsa con il nostro servizio di Supporto:%0D%0A%0D%0Ahttps://api.tiledesk.com/v1/public/requests/";
export const URL_VIDEO_CHAT: string = 'https://videochat.tiledesk.com/add-user-group.html';
export const URL_TICKET_CHAT: string = 'https://chat21sdk.atlassian.net/secure/CreateIssue!default.jspa';
//'https://videochat.tiledesk.com/videochat/videochat.html';
//'https://www.chat21.org/videochat/'; 
//'https://support.chat21.org/videochat/videochat.php';
