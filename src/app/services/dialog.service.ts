import {Injectable} from '@angular/core';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public loading
  constructor(private alertCtrl: AlertController, private loadingCtrl: LoadingController, private toastCtrl: ToastController) {
  }
  async presentToast(mensaje: string, duracionSeg: number, botonCerrar: boolean){
    let toast;
    if (botonCerrar){
      toast = await this.toastCtrl.create({
        message: mensaje, mode: 'ios', duration: duracionSeg * 1000,
        buttons: [{ side: 'end', text: 'Cerrar', handler: () => toast.remove()}]
      });
    } else {
      toast = await this.toastCtrl.create({
        message: mensaje, mode: 'ios', duration: duracionSeg * 1000, cssClass: 'ion-text-center'
      });
    }
    await toast.present();
  }

  async loaderPresent(mensaje: string){
    this.loading = await this.loadingCtrl.create({message: mensaje, mode: 'ios'});
    await this.loading.present();
  }

  async removeLoader() {
    await this.loading.dismiss();
  }
}
