export const SAVE_NOTICE = 'SAVE_NOTICE';

export function saveNotice(message) {
    return {
        type: SAVE_NOTICE,
        message
    }
}