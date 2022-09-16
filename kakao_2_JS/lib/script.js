import { omok,Tab_change,Screen_change,Screen_back_change, box_btn, box_back_btn} from "./module.js";

Tab_change("nav__list-link",'items');

Screen_change("profile__link", "id");
Screen_change("chat__link", "id");

Screen_back_change("header__x-btn");
Screen_back_change("header__back-btn");
Screen_back_change("profile__content-chat");

box_btn("smallbox_btn");
box_back_btn("smallbox_back-btn");
