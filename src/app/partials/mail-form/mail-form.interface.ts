import { InputField } from "src/app/shared/sharedInterfaces";
import { SGButtonIn } from "../sg-button/sg-button.interface";

export interface mailFormI{
    title : string,
    name : InputField,
    mail : InputField,
    message : InputField,
    send : SGButtonIn,
    mailSendOk : string;
    mailSendKo : string;
}