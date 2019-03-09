import {EDIT_PERK} from '../constants/action-types';

export function editPerk(payload) {
    return { type: EDIT_PERK, payload };
}