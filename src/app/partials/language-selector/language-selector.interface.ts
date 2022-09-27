import { LANGUAGE } from "src/app/classes/basicPage/basic-page.interface"

export interface LanguageSelectorInt{}

export interface Lang{
    id : LANGUAGE,
    title : string,
    iconUrl? : string
}

export type HOW_SHOW_SELECTED_LANGUAGE = 'name-icon' | 'icon' | 'name' | 'icon-name';
export type LIST_ICON_POSITION = 'start' | 'end' | 'not-show';