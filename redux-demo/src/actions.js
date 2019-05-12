import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        id: uuid.v4(),
        text: text
    }
}

addComment();

export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

export function thumbUpComment(commentId) {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId
    }
}

thumbUpComment();

export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export function thumbDownComment(commentId) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: commentId
    }
}

thumbDownComment();


