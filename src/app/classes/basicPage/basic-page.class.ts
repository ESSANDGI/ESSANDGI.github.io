import { Directive, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LanguageService } from "src/services/language/language.service";
import { SnackBarService } from "src/services/snackBar/snackBar.service";
import { BasicPageInt, SNACK_BAR_CLOSE } from "./basic-page.interface";

@Directive( { selector: '[BasicPage]' } )
export abstract class BasicPage<TComponentInterface> implements OnInit{
    
    protected abstract languageService : LanguageService;
    protected abstract router : Router;
    protected abstract snackBarService : SnackBarService;
    
    private _all_languages_content? : BasicPageInt<TComponentInterface>;
    private _content! : TComponentInterface;
    private _closeSnackMessage : string = '';

    ngOnInit(): void {
        this.languageService.languageId.subscribe({
            next: (id) => {
                if(this._all_languages_content)
                    this._content = this._all_languages_content![id];
                this._closeSnackMessage = SNACK_BAR_CLOSE[id];
            },
            error : (err) => console.error(err) 
        })
    }

    set all_languages_content(c : BasicPageInt<TComponentInterface>){
        this._all_languages_content = c;
    }

    get content() : TComponentInterface{
        return this._content!;
    }

    navigateTo(url? : string){
        this.router.navigateByUrl(url?'/'+url:'');
    }

    openSnackBar(message : string,isError : boolean = false) {
        this.snackBarService?.openSnackBar(message, this._closeSnackMessage, isError);
    }

}