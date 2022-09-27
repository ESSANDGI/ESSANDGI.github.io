
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class SnackBarService{

    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';
    durationInSeconds = 10;

    constructor(
        private _snackBar: MatSnackBar, 
    ) {
    }

    openSnackBar(message : string, closeMessage : string,isError : boolean = false) {
        this._snackBar.open(message, closeMessage, {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            panelClass: isError?'snack-error':'snack-success',
            duration: this.durationInSeconds * 1000
        });
    }

}
